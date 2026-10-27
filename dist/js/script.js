// ==========================================
// PORTFOLIO BASTIAN YUDISTIRA MOVIC
// Interactive Scripts & Enhancements
// ==========================================

// Global portfolio project data
// CATATAN: Setiap projek mendukung multi-screenshot dengan menambahkan array "images"
// Contoh format:
// images: [
//     { src: 'dist/img/nama-foto-1.png', caption: 'Keterangan Tampilan Utama' },
//     { src: 'dist/img/nama-foto-2.png', caption: 'Keterangan Fitur Kedua' }
// ]
const projectData = {
    'perpustakaan': {
        title: 'Sistem Informasi Perpustakaan',
        badge: 'Web Application (CRUD)',
        // Mendukung multi-image: saat ini 1 foto, kamu bisa menambah foto baru ke dalam array ini
        images: [
            { src: 'dist/img/crud.png', caption: 'Tampilan Utama Katalog Perpustakaan' }
            // Tambahkan screenshot berikutnya di sini jika sudah ada
        ],
        image: 'dist/img/crud.png',
        desc: 'Aplikasi web manajemen perpustakaan yang dibuat untuk memudahkan pengelolaan data buku dan katalog. Sistem ini dirancang dengan pembagian hak akses (role) yang jelas antara Pengunjung biasa dan Administrator.',
        features: [
            'Manajemen data buku lengkap (Create, Read, Update, Delete)',
            'Katalog buku interaktif yang dapat diakses pengunjung umum',
            'Antarmuka bersih dan mudah digunakan',
            'Integrasi database MySQL yang terstruktur'
        ],
        tech: ['PHP Native', 'MySQL', 'Bootstrap', 'HTML5 & CSS3'],
        github: 'https://github.com/MyYuvii/Perpustakaan',
        demo: null
    },
    'number-guesser': {
        title: 'Number Guesser Game',
        badge: 'Python CLI / Logic Game',
        images: [
            { src: 'dist/img/pythongame.png', caption: 'Gameplay CLI Tebak Angka' }
        ],
        image: 'dist/img/pythongame.png',
        desc: 'Game tebak angka interaktif berbasis Python. Program akan mengacak angka dari rentang 1 sampai 1.000, dan pemain ditantang untuk menebak angka tersebut dengan jumlah percobaan sesedikit mungkin berdasarkan petunjuk "terlalu tinggi" atau "terlalu rendah".',
        features: [
            'Logika perbandingan angka dengan algoritma binary search friendly',
            'Penghitung jumlah tebakan dan skor pemain',
            'Validasi input pemain untuk menghindari error runtime',
            'Loop permainan dengan opsi bermain kembali'
        ],
        tech: ['Python 3', 'Algorithm & Logic', 'CLI Application'],
        github: 'https://github.com/MyYuvii/Game-Tebak-Angka',
        demo: null
    },
    'jam-digital': {
        title: 'Jam Digital Modern',
        badge: 'Interactive Mini Tool',
        images: [
            { src: 'dist/img/Jam.png', caption: 'Antarmuka Jam Digital Real-Time' }
        ],
        image: 'dist/img/Jam.png',
        desc: 'Aplikasi jam digital berbasis web yang menampilkan waktu secara real-time dengan antarmuka yang bersih dan responsif. Cocok digunakan sebagai widget produktivitas.',
        features: [
            'Pembaruan waktu setiap detik secara real-time dengan objek Date JS',
            'Format waktu rapi dan mudah dibaca (Jam : Menit : Detik)',
            'Tampilan responsif di semua ukuran layar (Mobile & Desktop)',
            'Live demo langsung dapat dicoba di browser'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript ES6'],
        github: 'https://github.com/MyYuvii/Jam-Digital',
        demo: 'https://myyuvii.github.io/Jam-Digital/'
    },
    'kalkulator': {
        title: 'Kalkulator Aritmatika Sederhana',
        badge: 'Web Utility / Calculator',
        images: [
            { src: 'dist/img/Kalkulator.png', caption: 'Tampilan Tombol & Input Kalkulator' }
        ],
        image: 'dist/img/Kalkulator.png',
        desc: 'Aplikasi kalkulator berbasis web yang mampu memproses berbagai operasi aritmatika dasar seperti pertambahan, pengurangan, perkalian, dan pembagian secara cepat dan akurat.',
        features: [
            'Operasi dasar penjumlahan, pengurangan, perkalian, dan pembagian',
            'Logika pemrosesan yang stabil',
            'Antarmuka tombol yang nyaman dan responsif',
            'Penanganan kasus error perhitungan seperti pembagian dengan nol'
        ],
        tech: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
        github: 'https://github.com/MyYuvii/Kalkulator',
        demo: null
    },
    'toko-buku': {
        title: 'Toko Buku Online (E-Commerce)',
        badge: 'Full-Stack Web App',
        // Contoh struktur multi-image untuk projek Toko Buku:
        images: [
            { src: 'dist/img/etoko.png', caption: 'Halaman Utama & Katalog Buku' }
            // Nanti kamu bisa menambahkan foto screenshot berikutnya di sini:
            // { src: 'dist/img/toko-cart.png', caption: 'Halaman Keranjang & Checkout' },
            // { src: 'dist/img/toko-stripe.png', caption: 'Integrasi Pembayaran Stripe Gateway' },
            // { src: 'dist/img/toko-admin.png', caption: 'Dashboard Admin & Kelola Pesanan' }
        ],
        image: 'dist/img/etoko.png',
        desc: 'Platform e-commerce toko buku online dengan arsitektur modern menggunakan Laravel dan Laravel Jetstream. Memfasilitasi transaksi jual-beli buku lengkap dari sisi pelanggan hingga dashboard manajemen toko untuk admin.',
        features: [
            'Autentikasi aman dan profil pengguna dengan Laravel Jetstream',
            'Katalog buku, keranjang belanja (cart), dan integrasi pembayaran Stripe API',
            'Dashboard admin: Tambah, edit, dan hapus katalog produk buku',
            'Manajemen status pesanan pelanggan (Delivered / Pending)',
            'Statistik ringkasan penjualan dan metrik jumlah pelanggan'
        ],
        tech: ['Laravel', 'Laravel Jetstream', 'Stripe API', 'Bootstrap', 'MySQL'],
        github: 'https://github.com/MyYuvii/Online-Store---Book-Store',
        demo: null
    },
    'nuxix-travel': {
        title: 'Nuxix Travel (Sistem Keuangan Perjalanan)',
        badge: 'Team Collaboration Project',
        images: [
            { src: 'dist/img/ukk.png', caption: 'Dashboard Finansial Perjalanan Dinas' }
            // Tambahkan screenshot modul lainnya di sini jika ada
        ],
        image: 'dist/img/ukk.png',
        desc: 'Proyek kolaborasi tim yang dirancang untuk mempermudah alur administrasi dan pelaporan keuangan perjalanan dinas instansi/perusahaan secara transparan dan akuntabel. Di sini saya berperan sebagai Frontend Developer.',
        features: [
            'Alur pengajuan, verifikasi dokumen, hingga pencairan dana perjalanan dalam satu sistem',
            'Pelaporan dan monitoring pengeluaran keuangan dinas secara real-time',
            'Desain UI/UX modern dan responsif untuk berbagai tingkatan staf/manajer',
            'Kolaborasi tim lintas divisi (Project Manager, UI/UX Designer, Backend, dan Frontend Developer)'
        ],
        tech: ['Laravel', 'Blade & Tailwind/CSS', 'JavaScript', 'MySQL', 'Team Git Workflow'],
        github: 'https://github.com/Farhanrafiansyah/nuxix-travel',
        demo: null
    }
};

// Alias untuk menjaga kompatibilitas penamaan
projectData['nuvix-travel'] = projectData['nuxix-travel'];

// Global filter function for Skills
window.filterSkills = function(filter) {
    const hardContainer = document.getElementById('hard-skills-container');
    const softContainer = document.getElementById('soft-skills-container');
    const filterBtns = document.querySelectorAll('.skill-filter-btn');

    // Update active button classes
    filterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('bg-primary', 'text-white', 'shadow-md', 'shadow-teal-500/25');
            btn.classList.remove('bg-white', 'text-secondary', 'border', 'border-slate-200');
        } else {
            btn.classList.remove('bg-primary', 'text-white', 'shadow-md', 'shadow-teal-500/25');
            btn.classList.add('bg-white', 'text-secondary', 'border', 'border-slate-200');
        }
    });

    // Toggle container visibility
    if (filter === 'all') {
        if (hardContainer) hardContainer.classList.remove('hidden');
        if (softContainer) softContainer.classList.remove('hidden');
    } else if (filter === 'hard') {
        if (hardContainer) hardContainer.classList.remove('hidden');
        if (softContainer) softContainer.classList.add('hidden');
    } else if (filter === 'soft') {
        if (hardContainer) hardContainer.classList.add('hidden');
        if (softContainer) softContainer.classList.remove('hidden');
    }
};

// Global filter function for Portfolio
window.filterPortfolio = function(filter) {
    const portCards = document.querySelectorAll('.portfolio-card');
    const filterBtns = document.querySelectorAll('.portfolio-filter-btn');

    filterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('bg-primary', 'text-white', 'shadow-md', 'shadow-teal-500/25');
            btn.classList.remove('bg-white', 'text-secondary', 'border', 'border-slate-200');
        } else {
            btn.classList.remove('bg-primary', 'text-white', 'shadow-md', 'shadow-teal-500/25');
            btn.classList.add('bg-white', 'text-secondary', 'border', 'border-slate-200');
        }
    });

    portCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
            card.classList.remove('hidden');
            card.classList.add('flex');
        } else {
            card.classList.add('hidden');
            card.classList.remove('flex');
        }
    });
};

// Global Modal Carousel state
let currentModalImages = [];
let currentModalSlide = 0;

window.renderModalSlide = function(index) {
    if (!currentModalImages || currentModalImages.length === 0) return;

    if (index < 0) {
        currentModalSlide = currentModalImages.length - 1;
    } else if (index >= currentModalImages.length) {
        currentModalSlide = 0;
    } else {
        currentModalSlide = index;
    }

    const item = currentModalImages[currentModalSlide];
    const imgSrc = typeof item === 'string' ? item : item.src;
    const imgCaption = typeof item === 'object' && item.caption ? item.caption : '';

    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-image-caption');
    const captionContainer = document.getElementById('modal-caption-container');
    const counterEl = document.getElementById('modal-carousel-counter');
    const dotsContainer = document.getElementById('modal-carousel-dots');

    if (modalImg) {
        modalImg.style.opacity = '0.3';
        setTimeout(() => {
            modalImg.src = imgSrc;
            modalImg.style.opacity = '1';
        }, 100);
    }

    if (counterEl) {
        counterEl.textContent = `${currentModalSlide + 1} / ${currentModalImages.length}`;
    }

    if (captionContainer && modalCaption) {
        if (imgCaption) {
            modalCaption.textContent = imgCaption;
            captionContainer.classList.remove('hidden');
        } else {
            captionContainer.classList.add('hidden');
        }
    }

    // Update dots indicator
    if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, idx) => {
            if (idx === currentModalSlide) {
                dot.className = 'carousel-dot w-6 h-2 rounded-full bg-primary transition-all duration-300';
            } else {
                dot.className = 'carousel-dot w-2 h-2 rounded-full bg-white/60 hover:bg-white transition-all duration-300 cursor-pointer';
            }
        });
    }
};

window.nextModalSlide = function(e) {
    if (e) e.stopPropagation();
    window.renderModalSlide(currentModalSlide + 1);
};

window.prevModalSlide = function(e) {
    if (e) e.stopPropagation();
    window.renderModalSlide(currentModalSlide - 1);
};

window.goToModalSlide = function(index, e) {
    if (e) e.stopPropagation();
    window.renderModalSlide(index);
};

// Global Modal handlers
window.openProjectModal = function(projectId) {
    const data = projectData[projectId];
    const modal = document.getElementById('project-modal');
    if (!data || !modal) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-badge').textContent = data.badge;
    document.getElementById('modal-desc').textContent = data.desc;

    // Process images (array or single string fallback)
    let images = [];
    if (Array.isArray(data.images) && data.images.length > 0) {
        images = data.images.map(img => typeof img === 'string' ? { src: img, caption: data.title } : img);
    } else if (data.image) {
        images = [{ src: data.image, caption: data.title }];
    } else {
        images = [{ src: '', caption: '' }];
    }

    currentModalImages = images;
    currentModalSlide = 0;

    const prevBtn = document.getElementById('modal-prev-btn');
    const nextBtn = document.getElementById('modal-next-btn');
    const counterEl = document.getElementById('modal-carousel-counter');
    const dotsContainer = document.getElementById('modal-carousel-dots');

    if (images.length > 1) {
        if (prevBtn) prevBtn.classList.remove('hidden');
        if (nextBtn) nextBtn.classList.remove('hidden');
        if (counterEl) counterEl.classList.remove('hidden');
        if (dotsContainer) {
            dotsContainer.classList.remove('hidden');
            dotsContainer.innerHTML = '';
            images.forEach((_, idx) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.setAttribute('aria-label', `Lihat screenshot ${idx + 1}`);
                dot.className = idx === 0 
                    ? 'carousel-dot w-6 h-2 rounded-full bg-primary transition-all duration-300' 
                    : 'carousel-dot w-2 h-2 rounded-full bg-white/60 hover:bg-white transition-all duration-300 cursor-pointer';
                dot.onclick = (e) => window.goToModalSlide(idx, e);
                dotsContainer.appendChild(dot);
            });
        }
    } else {
        if (prevBtn) prevBtn.classList.add('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
        if (counterEl) counterEl.classList.add('hidden');
        if (dotsContainer) dotsContainer.classList.add('hidden');
    }

    // Render initial slide
    window.renderModalSlide(0);

    // Features
    const featList = document.getElementById('modal-features');
    featList.innerHTML = '';
    data.features.forEach(feat => {
        const li = document.createElement('li');
        li.className = 'flex items-start text-sm text-secondary gap-2';
        li.innerHTML = `<svg class="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> <span>${feat}</span>`;
        featList.appendChild(li);
    });

    // Tech badges
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-teal-50 text-primary border border-teal-200/80';
        span.textContent = t;
        techContainer.appendChild(span);
    });

    // Links
    const ghBtn = document.getElementById('modal-github');
    if (data.github) {
        ghBtn.href = data.github;
        ghBtn.classList.remove('hidden');
    } else {
        ghBtn.classList.add('hidden');
    }

    const demoBtn = document.getElementById('modal-demo');
    if (data.demo) {
        demoBtn.href = data.demo;
        demoBtn.classList.remove('hidden');
    } else {
        demoBtn.classList.add('hidden');
    }

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        const box = modal.querySelector('.modal-box');
        if (box) box.classList.remove('scale-95', 'opacity-0');
    }, 10);
    document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.add('opacity-0');
    const box = modal.querySelector('.modal-box');
    if (box) box.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 200);
};

// Global toggle for Mobile Navigation Menu
let lastNavToggleTime = 0;
window.toggleMobileNav = function(forceClose = false, e = null) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }

    const now = Date.now();
    // Debounce to prevent rapid double-clicks or dual-event triggers on mobile touch screens
    if (!forceClose && now - lastNavToggleTime < 250) {
        return;
    }
    lastNavToggleTime = now;

    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    const navBackdrop = document.querySelector('#nav-backdrop');
    if (!hamburger || !navMenu) return;

    const isOpen = !navMenu.classList.contains('hidden') && !navMenu.classList.contains('opacity-0');

    if (isOpen || forceClose === true) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('opacity-0', 'scale-95', '-translate-y-2');
        if (navBackdrop) {
            navBackdrop.classList.add('opacity-0');
        }
        setTimeout(() => {
            navMenu.classList.add('hidden');
            if (navBackdrop) {
                navBackdrop.classList.add('hidden');
            }
        }, 200);
    } else {
        hamburger.classList.add('hamburger-active');
        navMenu.classList.remove('hidden');
        if (navBackdrop) {
            navBackdrop.classList.remove('hidden');
            setTimeout(() => {
                navBackdrop.classList.remove('opacity-0');
            }, 10);
        }
        setTimeout(() => {
            navMenu.classList.remove('opacity-0', 'scale-95', '-translate-y-2');
        }, 10);
    }
};

// Global Toast function
window.showToast = function(message) {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;

    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
        toast.classList.remove('opacity-100', 'translate-y-0');
    }, 3000);
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements Declaration (Initialized first to prevent TDZ) ---
    const header = document.querySelector('header');
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // --- 1. ACTIVE NAVIGATION SCROLLSPY ---
    function updateActiveNav() {
        if (!sections.length || !navLinks.length) return;
        const scrollY = window.pageYOffset + 150;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop;
            const sectionId = current.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('text-primary', 'font-semibold', 'active');
                        link.classList.remove('text-dark');
                    } else {
                        link.classList.remove('text-primary', 'font-semibold', 'active');
                        link.classList.add('text-dark');
                    }
                });
            }
        });
    }

    // --- 2. SCROLL PROGRESS BAR & FIXED NAVBAR ---
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

        // Progress bar width
        if (progressBar) {
            progressBar.style.width = `${scrollPercent}%`;
        }

        // Fixed navbar with frosted glass effect
        if (header) {
            if (scrollTop > 20) {
                header.classList.add('navbar-fixed');
            } else {
                header.classList.remove('navbar-fixed');
            }
        }

        // Back to top button visibility
        if (backToTopBtn) {
            if (scrollTop > 350) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
            }
        }

        // Update active nav link
        updateActiveNav();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Scroll to Top action
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- 3. HAMBURGER MENU & MOBILE NAVIGATION ---
    if (hamburger && !hamburger.hasAttribute('onclick')) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            window.toggleMobileNav(false, e);
        });
    }

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1024) {
                window.toggleMobileNav(true);
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && !navMenu.contains(e.target) && hamburger && !hamburger.contains(e.target)) {
            if (!navMenu.classList.contains('hidden')) {
                window.toggleMobileNav(true);
            }
        }
    });

    // Close mobile menu on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.toggleMobileNav(true);
        }
    });

    // --- 4. DYNAMIC SUBTITLE TYPING EFFECT ---
    const typeWriterEl = document.getElementById('typewriter-text');
    if (typeWriterEl) {
        const words = [
            "Junior Web Developer",
            "Front-End Enthusiast",
            "Software Engineering Student"
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function typeLoop() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                charIndex--;
                typeSpeed = 45;
            } else {
                charIndex++;
                typeSpeed = 100;
            }

            typeWriterEl.textContent = currentWord.substring(0, charIndex);

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 1800; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400; // Pause before typing next word
            }

            setTimeout(typeLoop, typeSpeed);
        }

        setTimeout(typeLoop, 800);
    }

    // --- 5. SKILLS FILTER EVENT LISTENERS ---
    const skillFilters = document.querySelectorAll('.skill-filter-btn');
    skillFilters.forEach(btn => {
        if (!btn.hasAttribute('onclick')) {
            btn.addEventListener('click', () => {
                const filterVal = btn.getAttribute('data-filter');
                window.filterSkills(filterVal);
            });
        }
    });

    // --- 6. PORTFOLIO FILTER EVENT LISTENERS ---
    const portFilters = document.querySelectorAll('.portfolio-filter-btn');
    portFilters.forEach(btn => {
        if (!btn.hasAttribute('onclick')) {
            btn.addEventListener('click', () => {
                const filterVal = btn.getAttribute('data-filter');
                window.filterPortfolio(filterVal);
            });
        }
    });

    // --- 7. PORTFOLIO MODAL EVENT LISTENERS ---
    const detailButtons = document.querySelectorAll('.open-detail-btn');
    detailButtons.forEach(btn => {
        if (!btn.hasAttribute('onclick')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const id = btn.getAttribute('data-project');
                window.openProjectModal(id);
            });
        }
    });

    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = document.getElementById('modal-backdrop');
    if (modalClose) modalClose.addEventListener('click', window.closeProjectModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', window.closeProjectModal);

    // Modal Keyboard Shortcuts (ESC to close, Left/Right arrows for carousel)
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('project-modal');
        if (modal && !modal.classList.contains('hidden')) {
            if (e.key === 'Escape') {
                window.closeProjectModal();
            } else if (e.key === 'ArrowRight' && currentModalImages.length > 1) {
                window.nextModalSlide();
            } else if (e.key === 'ArrowLeft' && currentModalImages.length > 1) {
                window.prevModalSlide();
            }
        }
    });

    // Touch Swipe Gesture for Modal Carousel on Mobile
    const mediaContainer = document.getElementById('modal-media-container');
    if (mediaContainer) {
        let touchStartX = 0;
        mediaContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        mediaContainer.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            const diffX = touchStartX - touchEndX;
            if (Math.abs(diffX) > 40 && currentModalImages.length > 1) {
                if (diffX > 0) {
                    window.nextModalSlide();
                } else {
                    window.prevModalSlide();
                }
            }
        }, { passive: true });
    }

    // --- 8. COPY EMAIL TO CLIPBOARD ---
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'bastianmovic725@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                window.showToast('Email bastianmovic725@gmail.com berhasil disalin!');
            }).catch(() => {
                window.showToast('Email: bastianmovic725@gmail.com');
            });
        });
    }

    // --- 9. CONTACT FORM INTERACTIVE SUBMISSION ---
    const contactForm = document.getElementById('contact-form');
    const formSubmitBtn = document.getElementById('form-submit-btn');
    const formSuccessAlert = document.getElementById('form-success-alert');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!formSubmitBtn) return;

            const originalBtnText = formSubmitBtn.innerHTML;
            formSubmitBtn.disabled = true;
            formSubmitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Mengirim Pesan...
            `;

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    if (formSuccessAlert) {
                        formSuccessAlert.classList.remove('hidden');
                        formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                    contactForm.reset();
                    window.showToast('Pesan berhasil terkirim!');
                } else {
                    contactForm.submit();
                }
            } catch (err) {
                contactForm.submit();
            } finally {
                formSubmitBtn.disabled = false;
                formSubmitBtn.innerHTML = originalBtnText;
            }
        });
    }

    // --- 10. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER) ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });

        revealElements.forEach(el => {
            el.classList.add('reveal-init');
            revealObserver.observe(el);
        });
    }

});
