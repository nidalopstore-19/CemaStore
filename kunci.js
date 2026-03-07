// ==========================================
// FILE PROTEKSI REMOTE (NO BUTTON) - NIDALOPSTORE
// ==========================================

(function() {
    // 1. Hancurkan total isi halaman asli
    document.documentElement.innerHTML = "";

    // 2. Buat tampilan kunci baru TANPA TOMBOL
    const lockHTML = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DURASI HABIS - NIDALOPSTORE</title>
        <style>
            :root { --red: #ff3131; --bg: #000000; --card: #0a0a0a; }
            * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
            
            body { 
                background: var(--bg); 
                color: #fff; 
                height: 100vh; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                overflow: hidden;
                background-image: radial-gradient(circle at center, #1a0505 0%, #000 100%);
            }

            .lock-card {
                text-align: center;
                padding: 60px 30px;
                width: 90%;
                max-width: 400px;
                background: var(--card);
                border: 1px solid rgba(255, 49, 49, 0.1);
                border-radius: 50px;
                box-shadow: 0 40px 100px rgba(0, 0, 0, 1);
                animation: zoomIn 0.5s ease;
            }

            @keyframes zoomIn {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
            }

            .icon-lock {
                font-size: 80px;
                margin-bottom: 30px;
                filter: drop-shadow(0 0 15px var(--red));
                user-select: none;
            }

            h1 {
                font-size: 22px;
                font-weight: 900;
                letter-spacing: 2px;
                color: var(--red);
                margin-bottom: 15px;
                text-transform: uppercase;
            }

            p {
                font-size: 14px;
                color: #555;
                line-height: 1.8;
                font-weight: 600;
            }

            .footer-text {
                margin-top: 45px;
                font-size: 9px;
                color: #222;
                text-transform: uppercase;
                letter-spacing: 3px;
                font-weight: 800;
                border-top: 1px solid #111;
                padding-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="lock-card">
            <div class="icon-lock">🔒</div>
            <h1>DURASI TELAH HABIS</h1>
            <p>HALAMAN STORE TELAH DI KUNCI<br>SILAKAN HUBUNGI OWNER / DEVELOPER.</p>
            <div class="footer-text">NIDALOPSTORE SECURITY SYSTEM</div>
        </div>
    </body>
    </html>
    `;

    // 3. Tulis ulang dokumen
    document.write(lockHTML);
    
    // 4. Paksa berhenti semua script lain agar member tidak bisa akal-akalan
    window.stop();
})();
