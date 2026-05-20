const Navbar = `
<nav class="fixed top-0 w-full z-50 transition-all duration-300 glass-nav" id="main-nav">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="index.html" class="flex items-center gap-2 group">
            <div class="w-8 h-8 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white transform group-hover:rotate-12 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <i data-lucide="layers" class="w-5 h-5"></i>
            </div>
            <span class="font-display font-bold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                Journey PM
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
            <span class="font-display font-bold text-xl tracking-tight text-white">Journey PM</span>
        </a>
        <p class="text-gray-500 text-sm max-w-md mx-auto">
            Transformando conceitos técnicos complexos em conhecimentos acessíveis, visuais e humanos.
        </p>
        <div class="flex items-center justify-center gap-6 mt-8">
            <a href="https://www.linkedin.com/in/pricilla-souza/" target="_blank" class="text-gray-600 hover:text-primary transition-colors"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
            <a href="https://github.com/pricillacruz" target="_blank" class="text-gray-600 hover:text-white transition-colors"><i data-lucide="github" class="w-5 h-5"></i></a>
            <a href="#" class="text-gray-600 hover:text-pink-500 transition-colors"><i data-lucide="instagram" class="w-5 h-5"></i></a>
        </div>
        <div class="mt-8 text-gray-700 text-xs">
            © ${new Date().getFullYear()} Journey PM. Desenvolvido por <span class="text-gray-400 font-semibold">Pricilla Cruz</span>. Construído para pessoas que amam aprender.
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
