const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  if (!WEBHOOK_URL) {
    console.error('DISCORD_WEBHOOK_URL não configurada');
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }

  const { titulo, campos } = req.body;

  if (!titulo || !campos || !Array.isArray(campos) || campos.length === 0) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const MAX_CAMPOS = 10;
  const camposSanitized = campos.slice(0, MAX_CAMPOS).map(c => ({
    name: String(c.name || '').slice(0, 256),
    value: String(c.value || '').slice(0, 1024)
  }));

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: titulo,
          color: 0x6366f1,
          fields: camposSanitized,
          timestamp: new Date().toISOString()
        }]
      })
    });

    if (!response.ok) {
      console.error('Erro no webhook:', response.status);
      return res.status(502).json({ error: 'Falha ao enviar mensagem' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro na requisição:', err);
    return res.status(502).json({ error: 'Erro de conexão' });
  }
}
