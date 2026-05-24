const Navbar = `
<nav class="fixed top-0 w-full z-50 transition-all duration-300 glass-nav" id="main-nav">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="index.html" class="flex items-center gap-2 group">
            <div class="w-8 h-8 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white transform group-hover:rotate-12 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <i data-lucide="layers" class="w-5 h-5"></i>
            </div>
            <span class="font-display font-bold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                Product Manager Pricilla S. Cruz
            </span>
        </a>
        
        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-8">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li class="group relative">
                <a href="#" class="nav-link flex items-center gap-1 cursor-pointer">
                    Explorar <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-hover:rotate-180"></i>
                </a>
                <!-- Dropdown -->
                <div class="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-surface border border-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden glass-panel pt-2 pb-2 z-50">
                    <a href="produto.html" class="px-4 py-2 hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="target" class="w-4 h-4 text-blue-500"></i> Produto</a>
                    <a href="dados.html" class="px-4 py-2 hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="bar-chart-2" class="w-4 h-4 text-emerald-500"></i> Dados</a>
                    <a href="arquiteturas.html" class="px-4 py-2 hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="layers" class="w-4 h-4 text-amber-500"></i> Arquiteturas</a>
                    <a href="engenharia.html" class="px-4 py-2 hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="code-2" class="w-4 h-4 text-gray-400"></i> Engenharia</a>
                    <a href="ia.html" class="px-4 py-2 hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-fuchsia-500"></i> IA</a>
                    <a href="ux.html" class="px-4 py-2 hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="pen-tool" class="w-4 h-4 text-pink-500"></i> UX Design</a>
                    <a href="certificacoes.html" class="px-4 py-2 hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="award" class="w-4 h-4 text-amber-500"></i> Certificações</a>
                    <div class="h-px bg-gray-800 mx-2 my-1"></div>
                    <a href="flashcards.html" class="px-4 py-2 hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="layers" class="w-4 h-4 text-emerald-400"></i> Flashcards PM</a>
                    <a href="quiz.html" class="px-4 py-2 hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i data-lucide="help-circle" class="w-4 h-4 text-primary"></i> Quiz PM</a>
                </div>
            </li>
            <li><a href="relaciona.html" class="nav-link text-accent">Como Tudo se Relaciona</a></li>
            <li><a href="sobre.html" class="nav-link">Quem Sou Eu</a></li>
        </ul>

        <!-- Mobile Menu Toggle -->
        <button class="md:hidden text-gray-300 hover:text-white" id="mobile-menu-btn">
            <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
    </div>
    
    <!-- Mobile Menu Dropdown -->
    <div id="mobile-menu" class="hidden md:hidden bg-surface border-b border-gray-800">
        <div class="px-6 py-4 flex flex-col gap-4">
            <a href="index.html" class="text-gray-300 hover:text-white">Home</a>
            <div class="text-sm text-gray-500 font-bold mt-2 uppercase tracking-wider">Trilhas</div>
            <a href="produto.html" class="text-gray-300 hover:text-white pl-4">Produto</a>
            <a href="dados.html" class="text-gray-300 hover:text-white pl-4">Dados</a>
            <a href="arquiteturas.html" class="text-gray-300 hover:text-white pl-4">Arquiteturas</a>
            <a href="engenharia.html" class="text-gray-300 hover:text-white pl-4">Engenharia</a>
            <a href="ia.html" class="text-gray-300 hover:text-white pl-4">IA</a>
            <a href="ux.html" class="text-gray-300 hover:text-white pl-4">UX Design</a>
            <a href="certificacoes.html" class="text-gray-300 hover:text-white pl-4">Certificações</a>
            <div class="text-sm text-gray-500 font-bold mt-2 uppercase tracking-wider">Praticar</div>
            <a href="flashcards.html" class="text-emerald-400 hover:text-emerald-300 pl-4">Flashcards PM</a>
            <a href="quiz.html" class="text-primary hover:text-blue-300 pl-4">Quiz PM</a>
            <div class="h-px bg-gray-800 w-full my-2"></div>
            <a href="relaciona.html" class="text-accent hover:text-accent">Como Tudo se Relaciona</a>
            <a href="sobre.html" class="text-gray-300 hover:text-white">Quem Sou Eu</a>
        </div>
    </div>
</nav>
`;

const Footer = `
<footer class="bg-background border-t border-gray-800 py-12 relative overflow-hidden">
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary/5 rounded-t-full blur-3xl pointer-events-none"></div>
    <div class="container mx-auto px-6 text-center relative z-10">
        <a href="index.html" class="inline-flex items-center gap-2 mb-6 opacity-50 hover:opacity-100 transition-opacity">
            <i data-lucide="layers" class="w-5 h-5 text-white"></i>
            <span class="font-display font-bold text-xl tracking-tight text-white">Product Manager Pricilla S. Cruz</span>
        </a>
        <p class="text-gray-500 text-sm max-w-md mx-auto">
            Transformando conceitos técnicos complexos em conhecimentos acessíveis, visuais e humanos.
        </p>
        <div class="flex items-center justify-center gap-6 mt-8">
            <a href="https://www.linkedin.com/in/pricilla-souza/" target="_blank" aria-label="LinkedIn" class="text-gray-600 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://github.com/pricillacruz" target="_blank" aria-label="GitHub" class="text-gray-600 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
        </div>
        <div class="mt-8 text-gray-700 text-xs">
            © ${new Date().getFullYear()} Product Manager Pricilla S. Cruz · Desenvolvido por
            <a href="https://www.linkedin.com/in/pricilla-souza/" target="_blank" class="text-gray-400 font-semibold hover:text-primary transition-colors">Pricilla Souza</a>
            ·
            <a href="https://github.com/pricillacruz" target="_blank" class="text-gray-400 hover:text-white transition-colors">GitHub</a>
        </div>
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Navbar
    const navContainer = document.getElementById("nav-container");
    if(navContainer) navContainer.innerHTML = Navbar;

    // 2. Inject Footer
    const footerContainer = document.getElementById("footer-container");
    if(footerContainer) footerContainer.innerHTML = Footer;

    // 3. Initialize Icons
    if(typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 4. Mobile Menu Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 5. Scroll effects on Navbar
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if(nav) {
            if(window.scrollY > 20) {
                nav.classList.add('shadow-[0_4px_30px_rgba(0,0,0,0.5)]');
                nav.classList.remove('py-4');
                nav.classList.add('py-2');
            } else {
                nav.classList.remove('shadow-[0_4px_30px_rgba(0,0,0,0.5)]');
                nav.classList.remove('py-2');
                nav.classList.add('py-4');
            }
        }
    });
});
