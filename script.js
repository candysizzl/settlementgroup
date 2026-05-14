// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu-close');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => mobileMenu.classList.add('open'));
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  }
  // Close mobile menu on link click
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => mobileMenu && mobileMenu.classList.remove('open'));
  });

  // Newsletter form: prevent submission and show inline feedback
  document.querySelectorAll('.newsletter-form, .contact-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"], button:last-child');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = '✓ Thanks!';
        setTimeout(() => { btn.textContent = original; form.reset && form.reset(); }, 2200);
      }
    });
  });

  // Qualifier (multi-step form on home page)
  const qual = document.querySelector('.qual-card');
  if (qual) {
    const steps = qual.querySelectorAll('.qual-step');
    const progress = qual.querySelectorAll('.qual-progress span');
    let current = 0;
    const show = (i) => {
      steps.forEach((s, idx) => s.classList.toggle('active', idx === i));
      progress.forEach((p, idx) => p.classList.toggle('active', idx <= i));
      current = i;
    };
    qual.querySelectorAll('[data-next]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (current < steps.length - 1) show(current + 1);
      });
    });
    qual.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (current > 0) show(current - 1);
      });
    });
    // Option selection
    qual.querySelectorAll('.qual-options').forEach(group => {
      group.querySelectorAll('.qual-option').forEach(opt => {
        opt.addEventListener('click', () => {
          group.querySelectorAll('.qual-option').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
        });
      });
    });
  }
});
