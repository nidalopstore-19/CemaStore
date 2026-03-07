// ==========================================
// FILE PROTEKSI REMOTE (FIXED ANTI-BLANK)
// ==========================================

(function() {
    // 1. Ciptakan elemen penutup (Overlay)
    const overlay = document.createElement('div');
    overlay.id = 'nidalop-lock-system';
    
    // 2. Desain Overlay (Menutup 100% Layar)
    overlay.style = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: #000; color: #fff; z-index: 2147483647;
        display: flex; align-items: center; justify-content: center;
        flex-direction: column; font-family: 'Segoe UI', sans-serif;
        text-align: center; padding: 20px;
        background-image: radial-gradient(circle at center, #1a0505 0%, #000 100%);
    `;

    // 3. Isi Pesan Sesuai Permintaan Bos
    overlay.innerHTML = `
        <div style="padding: 60px 30px; width: 100%; max-width: 420px; background: #0a0a0a; border: 1px solid rgba(255, 49, 49, 0.15); border-radius: 50px; box-shadow: 0 40px 100px rgba(0, 0, 0, 1);">
            <div style="font-size: 80px; margin-bottom: 30px; filter: drop-shadow(0 0 20px #ff3131);">🔒</div>
            <h1 style="font-size: 22px; font-weight: 900; letter-spacing: 2px; color: #ff3131; margin-bottom: 15px; text-transform: uppercase;">DURASI TELAH HABIS</h1>
            <p style="font-size: 14px; color: #888; line-height: 1.8; font-weight: 600;">
                HALAMAN STORE TELAH DI KUNCI.<br>
                HARAP SEGERA HUBUNGI OWNER / DEVELOPER UNTUK MENAMBAH MASA DURASI SEWA.
            </p>
            <div style="margin-top: 45px; font-size: 9px; color: #333; text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-top: 1px solid #111; padding-top: 20px;">
                NIDALOPSTORE SECURITY SYSTEM
            </div>
        </div>
    `;

    // 4. Pasang Overlay ke Body
    document.body.appendChild(overlay);
    
    // 5. Matikan Scroll dan hentikan script lain
    document.body.style.overflow = 'hidden';
    window.stop();
})();
