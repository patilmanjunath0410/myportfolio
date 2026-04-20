
const cur = document.getElementById('cursor'), ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top = my + 'px';
});
(function animRing() {
    rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
})();
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('back-top').classList.toggle('show', window.scrollY > 400);
});
function openMobileNav() {
    document.getElementById('mobileNav').classList.add('open');
}
function closeMobileNav() {
    document.getElementById('mobileNav').classList.remove('open');
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
function sendMessage() {
    const name = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const msg = document.getElementById('f-msg').value.trim();
    const fb = document.getElementById('form-feedback');
    if (!name || !email || !msg) { fb.textContent = '⚠ Please fill in all fields.'; fb.style.color = 'var(--red)'; return; }
    window.location.href = `mailto:patilmanjunath0410@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + msg)}`;
    fb.textContent = '✓ Opening your email client...'; fb.style.color = 'var(--green)';
}
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = ''; sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    }); navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--amber)' : '';
    });
});
