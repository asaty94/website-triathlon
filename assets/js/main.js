// スムーズスクロール
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ページロード時のフェードイン演出
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1)';
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});

// セクションごとのアニメーション
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('pre-fade');
    observer.observe(section);
});