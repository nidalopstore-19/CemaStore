// api/generate.js
export default async function handler(req, res) {
  // 1. Set Header CORS agar bisa dipanggil dari domain mana saja
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 2. Tangani Preflight Request (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 3. Hanya izinkan method POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id, amount, useUniqueCode } = req.body;

    // Pastikan API Key Cashify aman (Gunakan Env Variable di Vercel jika perlu)
    const apiKey = "8aa46a5a-ac64-44b4-b20d-2d1e1bbe1ec1"; 

    const response = await fetch("https://api.cashify.id/v1/qris/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        id: id,
        amount: amount,
        useUniqueCode: useUniqueCode || true,
        packageIds: ["id.dana"],
        expiredInMinutes: 15
      })
    });

    const data = await response.json();
    
    // Kirim balik data ke frontend
    return res.status(200).json(data);

  } catch (error) {
    console.error("Error API:", error);
    return res.status(500).json({ error: "Gagal generate QRIS", message: error.message });
  }
}
