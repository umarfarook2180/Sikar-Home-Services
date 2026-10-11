function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

function showProviders(category) {
    const data = providers[category];
    if (!data) return;

    document.getElementById('modalTitle').textContent = data.title;
    const list = document.getElementById('providersList');
    list.innerHTML = '';

    data.list.forEach(provider => {
        const stars = '⭐'.repeat(Math.floor(provider.rating));
        const tags = provider.tags.map(t => `<span class="tag">${t}</span>`).join('');

        list.innerHTML += `
        <div class="provider-card">
            <div class="provider-top">
                <div class="provider-avatar">${provider.initial}</div>
                <div class="provider-info">
                    <h3>${provider.name}</h3>
                    <div class="provider-rating">${stars} ${provider.rating} (${provider.reviews} reviews)</div>
                    <div class="provider-exp">🕐 ${provider.experience}</div>
                </div>
            </div>
            <div class="provider-tags">${tags}</div>
            <div class="provider-actions">
                <a href="tel:+91${provider.phone}" class="btn-call">
                    <i class="fas fa-phone"></i> Call Now
                </a>
                <a href="https://wa.me/91${provider.phone}" class="btn-wa" target="_blank">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
            </div>
        </div>`;
    });

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('mobileMenu').classList.remove('active');
    });
});
