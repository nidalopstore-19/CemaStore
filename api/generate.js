export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
        const response = await fetch('https://cashify.my.id/api/generate/qris', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // DISINI SALAHNYA: Ganti kode di bawah dengan LISENSI asli dari Dashboard Cashify (bukan QRIS ID)
                'x-license-key': 'cashify_b655d2c0e1dcf9d13b08b50447cdeccde5033f449e39a092c0b76834ebb7358c' 
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (e) {
        return res.status(500).json({ error: 'Proxy error: ' + e.message });
    }
}
