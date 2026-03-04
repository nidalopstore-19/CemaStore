export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
        const { id, amount, useUniqueCode, expiredInMinutes } = req.body;

        // Validasi minimal: pastikan input ada
        if (!amount || amount < 100) {
            return res.status(400).json({ error: 'Jumlah tidak valid' });
        }

        const response = await fetch('https://cashify.my.id/api/generate/qris', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-license-key': process.env.CASHIFY_LICENSE
            },
            body: JSON.stringify({
                id: id,
                amount: amount,
                useUniqueCode: useUniqueCode,
                expiredInMinutes: expiredInMinutes
            })
        });

        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (e) {
        return res.status(500).json({ error: 'Proxy error: ' + e.message });
    }
}
