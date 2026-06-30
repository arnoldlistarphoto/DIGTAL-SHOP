// ── Category Filter ──────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.cat;
    cards.forEach(card => {
      const match = cat === 'all' || card.dataset.cat === cat;
      card.classList.toggle('hidden', !match);
    });
  });
});

// ── FAQ Accordion ──────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');

    // close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // toggle clicked
    if (!isOpen) item.classList.add('open');
  });
});

// ── Buy Buttons → Toast ─────────────────────────────────
const toast = document.getElementById('toast');
let toastTimer;

document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const name = card.querySelector('h3').innerText.replace('\n', ' ');
    toast.textContent = `✅ 已選擇「${name}」— 請聯絡客服完成訂購`;

    clearTimeout(toastTimer);
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
  });
});

// ── Chat Button ─────────────────────────────────────────
document.getElementById('chatBtn').addEventListener('click', () => {
  toast.textContent = '💬 客服時間 10:00–24:00，請透過 WhatsApp 聯絡我們';
  clearTimeout(toastTimer);
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
});

// ── Mobile Menu ─────────────────────────────────────────
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});

// ── Smooth close mobile nav on link click ───────────────
document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('mobileNav').classList.remove('open');
  });
});
