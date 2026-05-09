(() => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const els = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message'),
  };

  const err = {
    name: document.getElementById('err-name'),
    email: document.getElementById('err-email'),
    phone: document.getElementById('err-phone'),
    subject: document.getElementById('err-subject'),
    message: document.getElementById('err-message'),
  };

  const success = document.getElementById('formSuccess');

  const setError = (key, msg) => {
    if (err[key]) err[key].textContent = msg || '';
    if (els[key]) {
      if (msg) els[key].setAttribute('aria-invalid', 'true');
      else els[key].removeAttribute('aria-invalid');
    }
  };

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v);
  const phoneOk = (v) => {
    const digits = v.replace(/[^\d]/g, '');
    return digits.length >= 10 && digits.length <= 14;
  };

  const validate = () => {
    const name = (els.name?.value || '').trim();
    const email = (els.email?.value || '').trim();
    const phone = (els.phone?.value || '').trim();
    const subject = (els.subject?.value || '').trim();
    const message = (els.message?.value || '').trim();

    let ok = true;
    setError('name', '');
    setError('email', '');
    setError('phone', '');
    setError('subject', '');
    setError('message', '');
    if (success) success.textContent = '';

    if (!name || name.length < 2) {
      setError('name', 'Please enter your name (min 2 characters).');
      ok = false;
    }
    if (!email || !emailOk(email)) {
      setError('email', 'Please enter a valid email address.');
      ok = false;
    }
    if (!phone || !phoneOk(phone)) {
      setError('phone', 'Please enter a valid phone number (10–14 digits).');
      ok = false;
    }
    if (!subject || subject.length < 3) {
      setError('subject', 'Please enter a subject (min 3 characters).');
      ok = false;
    }
    if (!message || message.length < 10) {
      setError('message', 'Please enter a message (min 10 characters).');
      ok = false;
    }

    return ok;
  };

  // Live validation on blur (keeps UX clean)
  Object.entries(els).forEach(([k, el]) => {
    if (!el) return;
    el.addEventListener('blur', () => validate());
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = validate();
    if (!ok) {
      const first = form.querySelector('[aria-invalid="true"]');
      if (first && first instanceof HTMLElement) first.focus();
      return;
    }

    // Demo submit (no backend in assignment). Keep it realistic + professional.
    form.reset();
    Object.keys(err).forEach((k) => setError(k, ''));
    if (success) success.textContent = 'Thanks! Your message has been recorded. We’ll reach out within 24 hours.';
  });
})();

