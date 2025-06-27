<!DOCTYPE html>
<html lang="id" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ALWAYSNTU STORE</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        :root { --bs-body-bg: #f8f9fa; --bs-body-color: #212529; --card-bg: #ffffff; --card-border-color: #dee2e6; --text-muted: #6c757d; }
        [data-bs-theme="dark"] { --bs-body-bg: #0a0c10; --bs-body-color: #dee2e6; --card-bg: #161a22; --card-border-color: #30363d; --text-muted: #848d97; }
        body { background-color: var(--bs-body-bg); font-family: 'Inter', sans-serif; color: var(--bs-body-color); transition: background-color 0.3s ease; }
        .navbar { background-color: var(--card-bg); border-bottom: 1px solid var(--card-border-color); box-shadow: 0 2px 4px rgba(0,0,0,.04); transition: all 0.3s ease; }
        .product-card {
            background-color: var(--card-bg);
            border: 1px solid var(--card-border-color);
            border-radius: 1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0,0,0,.04);
            overflow: hidden;
        }
        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.1);
            border-color: #0d6efd;
        }
        .product-icon {
            font-size: 3rem;
            color: #0d6efd;
        }
        .feature-list-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
        }
        .feature-list-item i {
            margin-top: 5px;
            color: #198754;
        }
        .footer { background-color: var(--card-bg); border-top: 1px solid var(--card-border-color); color: var(--text-muted); }
        .footer a { color: var(--text-muted); text-decoration: none; transition: color 0.2s; font-size: 1.5rem; }
        .footer a:hover { color: #0d6efd; }
    </style>
</head>
<body>

    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand fw-bold fs-4" href="index.html"><i class="fas fa-rocket text-primary me-2"></i>Alwaysntu</a>
                <div class="ms-auto d-flex align-items-center">
                    <div id="theme-switcher" class="nav-link" style="cursor: pointer;" data-bs-toggle="tooltip" title="Ganti Tema">
                        <i class="fas fa-sun"></i>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main class="py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h1 class="display-4 fw-bolder">Selamat Datang di Panel Alwaysntu</h1>
                <p class="lead text-muted">Pilih layanan yang Anda butuhkan untuk memulai.</p>
            </div>

            <div class="row g-4 justify-content-center">
                
                <div class="col-lg-5 col-md-6">
                    <div class="product-card h-100 d-flex flex-column p-4">
                        <div class="text-center mb-4">
                            <div class="product-icon mb-3"><i class="fas fa-server"></i></div>
                            <h2 class="fw-bold">Panel Hosting Otomatis</h2>
                            <p class="text-muted">Hosting panel Pterodactyl berperforma tinggi dengan aktivasi instan setelah pembayaran.</p>
                        </div>
                        
                        <ul class="list-unstyled">
                            <li class="feature-list-item">
                                <i class="fas fa-check-circle"></i>
                                <div><strong>Aktivasi Instan</strong><br><small class="text-muted">Server langsung aktif 24/7 tanpa menunggu.</small></div>
                            </li>
                            <li class="feature-list-item">
                                <i class="fas fa-check-circle"></i>
                                <div><strong>Pembayaran QRIS</strong><br><small class="text-muted">Tersedia pembayaran otomatis melalui QRIS.</small></div>
                            </li>
                            <li class="feature-list-item">
                                <i class="fas fa-check-circle"></i>
                                <div><strong>Akses Penuh</strong><br><small class="text-muted">Anda mendapatkan akses penuh ke panel server Anda.</small></div>
                            </li>
                        </ul>
                        
                        <a href="/order/panel" class="btn btn-primary btn-lg mt-auto"><i class="fas fa-shopping-cart me-2"></i>Pesan Panel</a>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6">
                    <div class="product-card h-100 d-flex flex-column p-4">
                        <div class="text-center mb-4">
                            <div class="product-icon mb-3"><i class="fas fa-code"></i></div>
                            <h2 class="fw-bold">Script Alwaysntu</h2>
                            <p class="text-muted">Dapatkan berbagai macam script premium By alwaysntu</p>
                        </div>
                        
                        <ul class="list-unstyled">
                             <li class="feature-list-item">
                                <i class="fas fa-check-circle"></i>
                                <div><strong>Source Code Lengkap</strong><br><small class="text-muted">Dapatkan akses penuh ke source code tanpa enkripsi.</small></div>
                            </li>
                             <li class="feature-list-item">
                                <i class="fas fa-check-circle"></i>
                                <div><strong>Update Gratis</strong><br><small class="text-muted">Nikmati pembaruan script secara gratis selamanya.</small></div>
                            </li>
                             <li class="feature-list-item">
                                <i class="fas fa-check-circle"></i>
                                <div><strong>Dukungan Instalasi</strong><br><small class="text-muted">Kami siap membantu jika Anda mengalami kesulitan instalasi.</small></div>
                            </li>
                        </ul>
                        
                        <a href="#" class="btn btn-outline-primary btn-lg mt-auto disabled" aria-disabled="true"><i class="fas fa-wrench me-2"></i>Segera Hadir</a>
                    </div>
                </div>

            </div>
        </div>
    </main>

    <footer class="footer mt-5 py-4">
        <div class="container text-center">
            <p class="mb-2">© 2010. Alwaysntu All Rights Reserved.</p>
            <div class="d-flex justify-content-center gap-4">
                <a href="https://wa.me/6281399608935" target="_blank" data-bs-toggle="tooltip" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                <a href="https://t.me/Alwasyntuudev" target="_blank" data-bs-toggle="tooltip" title="Telegram"><i class="fab fa-telegram"></i></a>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            function setTheme(theme) {
                document.documentElement.dataset.bsTheme = theme;
                document.getElementById('theme-switcher').querySelector('i').className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
                localStorage.setItem('theme', theme);
            }
            document.getElementById('theme-switcher').addEventListener('click', () => {
                const currentTheme = document.documentElement.dataset.bsTheme;
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
            });
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            });
        });
    </script>
</body>
</html>
