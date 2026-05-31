param(
  [string]$ConfigPath = "config.js",
  [string]$ArtigosDir = "artigos",
  [int]$Limit = 20
)

$ErrorActionPreference = "Stop"

# --- helpers ---
function Slugify($s) {
  $s = $s.ToLower().Normalize("FormD")
  $s = [regex]::Replace($s, '\p{M}', '')
  $s = [regex]::Replace($s, '[^a-z0-9]+', '-')
  $s.Trim('-')
}

function MapIcon($cat) {
  switch -Wildcard ($cat) {
    "*Tutorial*" { "fa-book" }
    "*Plugin*"   { "fa-plug" }
    "*Otimiz*"   { "fa-tachometer-alt" }
    "*Bot*"      { "fa-robot" }
    "*Geopol*"   { "fa-earth-americas" }
    "*Map*"      { "fa-map" }
    "*Score*"    { "fa-table" }
    "*Config*"   { "fa-cog" }
    "*Server*"   { "fa-server" }
    "*Bedrock*"  { "fa-users" }
    default      { "fa-cube" }
  }
}

function CleanBody($html) {
  $html = [regex]::Replace($html, '<div class="image-link-expand">.*?</div>\s*</div>\s*</div>', '</div></div>', 'Singleline')
  $html = [regex]::Replace($html, '<button[^>]*>.*?</button>', '', 'Singleline')
  $html = [regex]::Replace($html, '<div class="captioned-image-container">\s*<figure>\s*<a class="image-link[^"]*"[^>]*>\s*</a>\s*</figure>\s*</div>', '', 'Singleline')
  $html
}

# --- 1. Read existing config ---
Write-Host "Lendo $ConfigPath ..."
$configContent = Get-Content -LiteralPath $ConfigPath -Raw -Encoding utf8

# Extract existing article URLs from config.js
$existingUrls = [System.Collections.Generic.HashSet[string]]::new()
[regex]::Matches($configContent, 'url: "([^"]+)"') | ForEach-Object { $existingUrls.Add($_.Groups[1].Value) | Out-Null }

Write-Host "Artigos existentes no config: $($existingUrls.Count)"

# --- 2. Fetch Substack API ---
Write-Host "Buscando artigos do Substack (limit=$Limit) ..."
$apiUrl = "https://bacanacat.substack.com/api/v1/posts?limit=$Limit"
try {
  $posts = Invoke-RestMethod -Uri $apiUrl -ErrorAction Stop
} catch {
  Write-Host "ERRO: Nao foi possivel acessar a API do Substack: $_"
  exit 1
}

Write-Host "Total de artigos no Substack: $($posts.Count)"
$novos = @()
foreach ($post in $posts) {
  $url = $post.canonical_url
  if ($existingUrls.Contains($url)) {
    Write-Host "  JA EXISTE: $($post.title)"
    continue
  }

  $id = Slugify $post.title
  $titulo = $post.title
  # Clean title emoji/weird chars
  $titulo = [regex]::Replace($titulo, '[^\x20-\x7E\xC0-\xFF\xE3\xE7\xF3\xED\xFA\xE1\xE0\xE2\xE9\xEA\xEC\xF2\xF5\xF4\xF8\xE8\xEC\xE2\xF4\xE2]', '').Trim()

  $desc = $post.description
  $data = ($post.post_date -or $post.published_date) ? ($post.post_date ?? $post.published_date).Substring(0, 10) : (Get-Date -Format "yyyy-MM-dd")

  # Extract tags/categories from postTags
  $cat = "Artigo"
  if ($post.postTags -and $post.postTags.Count -gt 0) {
    $cat = $post.postTags[0].name
  }

  $icon = MapIcon $cat
  if ($icon -eq $null -or $icon -eq "") { $icon = "fa-cube" }

  $bodyRaw = $post.body
  $bodyClean = CleanBody $bodyRaw

  # --- Save HTML file ---
  if (!(Test-Path $ArtigosDir)) { New-Item -ItemType Directory -Path $ArtigosDir -Force | Out-Null }
  $htmlPath = Join-Path $ArtigosDir "$id.html"
  Set-Content -LiteralPath $htmlPath -Value $bodyClean -Encoding utf8
  Write-Host "  SALVO: $htmlPath ($($bodyClean.Length) chars)"

  $novos += @{
    id = $id
    icon = $icon
    titulo = $titulo
    resumo = $desc
    categoria = $cat
    data = $data
    url = $url
    arquivo = $htmlPath
  }
}

if ($novos.Count -eq 0) {
  Write-Host "Nenhum artigo novo encontrado."
  exit 0
}

Write-Host "`n$($novos.Count) novo(s) artigo(s) encontrado(s). Atualizando config.js ..."

# --- 3. Update config.js ---
# Find the artigos array start and end
$artigosMatch = [regex]::Match($configContent, '(?s)(\s+artigos:\s*\[)(.*?)(\s+\])')
if (!$artigosMatch.Success) {
  Write-Host "ERRO: Nao foi possivel encontrar o array 'artigos:' em config.js"
  exit 1
}

$beforeArray = $configContent.Substring(0, $artigosMatch.Groups[1].Index)
$arrayStart = $artigosMatch.Groups[1].Value
$existingEntries = $artigosMatch.Groups[2].Value.Trim()
$arrayEnd = $artigosMatch.Groups[3].Value
$afterArray = $configContent.Substring($artigosMatch.Groups[3].Index + $artigosMatch.Groups[3].Length)

# Build new article entries (prepend them)
$newEntries = ""
foreach ($n in $novos) {
  $newEntries += @"

    {
      id: "$($n.id)",
      icon: "$($n.icon)",
      titulo: "$($n.titulo)",
      resumo: "$($n.resumo)",
      categoria: "$($n.categoria)",
      data: "$($n.data)",
      url: "$($n.url)",
      arquivo: "$($n.arquivo)"
    },
"@
}

$updatedArray = $arrayStart + $newEntries + "`n" + $existingEntries + "`n" + $arrayEnd
$newConfig = $beforeArray + $updatedArray + $afterArray

Set-Content -LiteralPath $ConfigPath -Value $newConfig -Encoding utf8

Write-Host "`nFeito! $($novos.Count) artigo(s) adicionado(s) ao config.js e posicionado(s) como destaque."
Write-Host "Nao esqueca de verificar se o icone e categoria estao corretos no config.js."
