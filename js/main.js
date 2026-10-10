// ===== MOBILE MENU =====
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// ===== SHOW PROVIDERS MODAL =====
function showProviders(category) {
    const data = providers[category];
    if (!data) return;

    document.getElementById('modalTitle').textContent = data.title;

    const list = document.getElementById('providersList');
    list.innerHTML = '';

    data.list.forEach(provider => {
        const stars = '⭐'.repeat(Math.floor(provider.rating));
        const tags = provider.tags.map(t => `<span class="tag">${t}</span>`).join('');

        const card = `
            <div class="provider-card">
                <div class="provider-avatar">${provider.initial}</div>
                <div class="provider-info">
                    <h3>${provider.name}</h3>
                    <div class="provider-rating">${stars} ${provider.rating} (${provider.reviews} reviews)</div>
                    <div class="provider-exp">🕐 ${provider.experience} | ${provider.speciality}</div>
                    <div class="provider-tags">${tags}</div>
                </div>
                <div class="provider-actions">
                    <a href="tel:+91${provider.phone}" class="btn-call">
                        <i class="fas fa-phone"></i> Call
                    </a>
                    <a href="https://wa.me/91${provider.phone}" class="btn-wa" target="_blank">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
        `;
        list.innerHTML += card;
    });

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== CLOSE MODAL =====
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ===== CATEGORY CARD ANIMATION =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.category-card, .review-card, .step, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
