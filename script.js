/* ============================================
   🌙 Mega Surprise Website — Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== 0. Scroll Progress Bar ===== */
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
  });

  /* ===== 1. Generate Stars ===== */
  const starsContainer = document.getElementById('stars');
  if (starsContainer) {
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 2 + 's';
      star.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
      starsContainer.appendChild(star);
    }
  }

  /* ===== 2. Particles ===== */
  const particles = document.getElementById('particles');
  if (particles) {
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (Math.random() * 10 + 8) + 's';
      p.style.animationDelay = Math.random() * 8 + 's';
      p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
      particles.appendChild(p);
    }
  }

  /* ===== 3. Petals ===== */
  const petalsContainer = document.getElementById('petals');
  const petalEmojis = ['🌸', '🌺', '🌷', '🌹'];
  function createPetal() {
    if (!petalsContainer) return;
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 14 + 12) + 'px';
    const duration = Math.random() * 8 + 10;
    petal.style.animationDuration = duration + 's';
    petalsContainer.appendChild(petal);
    setTimeout(() => petal.remove(), duration * 1000);
  }
  setInterval(createPetal, 2500);

  /* ===== 4. Floating Hearts ===== */
  const heartsBg = document.getElementById('heartsBg');
  const heartEmojis = ['💖', '💕', '💗', '🌸', '✨', '💘', '🌙'];
  function createHeart() {
    if (!heartsBg) return;
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 14) + 'px';
    const duration = Math.random() * 8 + 8;
    heart.style.animationDuration = duration + 's';
    heartsBg.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
  }
  setInterval(createHeart, 1200);

  /* ===== 5. Butterflies ===== */
  const butterfliesContainer = document.getElementById('butterflies');
  const butterflyEmojis = ['🦋', '🦋', '🦋'];
  function createButterfly() {
    if (!butterfliesContainer) return;
    const b = document.createElement('div');
    b.className = 'butterfly';
    b.textContent = butterflyEmojis[Math.floor(Math.random() * butterflyEmojis.length)];
    b.style.left = Math.random() * 90 + '%';
    b.style.top = Math.random() * 80 + 10 + '%';
    b.style.fontSize = (Math.random() * 12 + 18) + 'px';
    const duration = Math.random() * 6 + 6;
    b.style.animationDuration = duration + 's';
    b.style.animationDelay = Math.random() * 2 + 's';
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      b.classList.add('caught');
      setTimeout(() => b.remove(), 800);
    });
    butterfliesContainer.appendChild(b);
    setTimeout(() => b.remove(), (duration + 3) * 1000);
  }
  setInterval(createButterfly, 3500);
  for (let i = 0; i < 3; i++) setTimeout(createButterfly, i * 800);

  /* ===== 6. Cursor Trail ===== */
  const cursorTrail = document.getElementById('cursorTrail');
  const trailEmojis = ['💖', '✨', '💕', '⭐'];
  let lastTrailTime = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTrailTime < 80) return;
    lastTrailTime = now;
    if (!cursorTrail || window.innerWidth < 768) return;
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.textContent = trailEmojis[Math.floor(Math.random() * trailEmojis.length)];
    dot.style.left = (e.clientX - 8) + 'px';
    dot.style.top = (e.clientY - 8) + 'px';
    cursorTrail.appendChild(dot);
    setTimeout(() => dot.remove(), 1000);
  });

  /* ===== 7. Shooting Stars ===== */
  const shootingStarsContainer = document.getElementById('shootingStars');
  function createShootingStar() {
    if (!shootingStarsContainer) return;
    const s = document.createElement('div');
    s.className = 'shooting-star';
    s.style.left = Math.random() * 60 + '%';
    s.style.top = Math.random() * 40 + '%';
    s.style.animation = `shoot ${Math.random() * 1 + 1.5}s linear forwards`;
    shootingStarsContainer.appendChild(s);
    setTimeout(() => s.remove(), 3000);
  }
  setInterval(createShootingStar, 4000);

  /* ===== 8. Music Toggle ===== */
  const musicBtn = document.getElementById('musicBtn');
  const bgMusic = document.getElementById('bgMusic');
  let isPlaying = false;

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      musicBtn.classList.remove('playing');
      musicBtn.textContent = '🎵';
    } else {
      bgMusic.volume = 0.35;
      bgMusic.play().catch(() => {});
      musicBtn.classList.add('playing');
      musicBtn.textContent = '🔊';
    }
    isPlaying = !isPlaying;
  });

  /* ===== 9. Scroll Reveal ===== */
  const revealTargets = document.querySelectorAll(
    '.section-title, .section-sub, .card, .gift-box, .gift-text, .question-text, .btn-wrap, .envelope-wrap, .big-moon-wrap, .rings-choice, .map-container, .wish-text, .btn-love-100, .garden'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));

  /* ===== 10. Tilt Effect on Cards ===== */
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ===== 11. Envelope / Love Letter ===== */
  const envelope = document.getElementById('envelope');
  const envelopeHint = document.getElementById('envelopeHint');
  const letterLines = document.querySelectorAll('.letter-line');
  let envelopeOpened = false;

  if (envelope) {
    envelope.addEventListener('click', () => {
      if (envelopeOpened) return;
      envelopeOpened = true;
      envelope.classList.add('open');
      if (envelopeHint) envelopeHint.textContent = '💌 তোমার চিঠি...';
      // Reveal lines one by one
      letterLines.forEach((line, i) => {
        setTimeout(() => {
          line.classList.add('show');
        }, 800 + i * 500);
      });
    });
  }

  /* ===== 12. Promise Moon ===== */
  const bigMoon = document.getElementById('bigMoon');
  const promiseStars = document.querySelectorAll('.promise-star');
  const moonHint = document.getElementById('moonHint');
  let starsLit = 0;

  if (bigMoon) {
    bigMoon.addEventListener('click', () => {
      if (starsLit >= promiseStars.length) return;
      promiseStars[starsLit].classList.add('lit');
      starsLit++;
      if (moonHint) {
        if (starsLit >= promiseStars.length) {
          moonHint.textContent = '🌙 সব প্রতিজ্ঞা জ্বলে উঠেছে — চিরকালের জন্য 💖';
        } else {
          moonHint.textContent = `🌙 ${starsLit} / ${promiseStars.length} প্রতিজ্ঞা জ্বলেছে`;
        }
      }
    });
  }

  /* ===== 13. Ring Choice ===== */
  const ringChoices = document.querySelectorAll('.ring-choice');
  const ringMessage = document.getElementById('ringMessage');
  const ringMessages = {
    '1': 'তুমি বেছেছো সোনালি — যেমন তোমার হাসি, তেমন উজ্জ্বল ✨',
    '2': 'তুমি বেছেছো গোলাপি — যেমন তোমার মন, তেমন নরম 🌸',
    '3': 'তুমি বেছেছো রুপালি — যেমন তোমার চোখ, তেমন শান্ত 🌙'
  };
  let ringChosen = false;

  ringChoices.forEach(choice => {
    choice.addEventListener('click', () => {
      if (ringChosen) return;
      ringChosen = true;
      ringChoices.forEach(c => c.classList.remove('selected'));
      choice.classList.add('selected');
      const ringId = choice.dataset.ring;
      setTimeout(() => {
        ringMessage.textContent = ringMessages[ringId];
        ringMessage.classList.add('show');
        setTimeout(() => {
          ringMessage.textContent = 'তুমি যেটাই বেছো, আমার কাছে সবটাই তুমি 💍';
        }, 2500);
      }, 400);
    });
  });

  /* ===== 14. Journey Map Animation ===== */
  const launchMarker = document.getElementById('launchMarker');
  const journeyInfo = document.getElementById('journeyInfo');
  const journeyMessages = [
    { t: 0,    msg: '📍 যাত্রা শুরু — চাঁদের আলোয়' },
    { t: 0.25, msg: '🌊 নদীর বাঁকে — প্রথম ঢেউ' },
    { t: 0.5,  msg: '🌙 মাঝনদী — চাঁদ উঠেছে' },
    { t: 0.75, msg: '✨ তারার ছায়ায় — তোমার কথা' },
    { t: 1,    msg: '💖 গন্তব্য — তোমার হাত ধরা' }
  ];

  function animateJourney() {
    const rect = document.querySelector('.map-svg').getBoundingClientRect();
    let progress = 0;
    const path = document.getElementById('riverPath');
    const pathLength = path.getTotalLength();

    const interval = setInterval(() => {
      progress += 0.003;
      if (progress >= 1) {
        progress = 1;
        clearInterval(interval);
        setTimeout(() => { progress = 0; animateJourney(); }, 3000);
      }
      const point = path.getPointAtLength(pathLength * progress);
      const svgRect = path.ownerSVGElement.getBoundingClientRect();
      const scaleX = svgRect.width / 800;
      const scaleY = svgRect.height / 300;

      if (launchMarker) {
        launchMarker.style.left = (point.x * scaleX + svgRect.left - rect.left + 20) + 'px';
        launchMarker.style.top = (point.y * scaleY + svgRect.top - rect.top + 20) + 'px';
      }

      // Update message
      for (let i = journeyMessages.length - 1; i >= 0; i--) {
        if (progress >= journeyMessages[i].t) {
          if (journeyInfo) journeyInfo.innerHTML = `<p>${journeyMessages[i].msg}</p>`;
          break;
        }
      }
    }, 50);
  }

  if (document.getElementById('riverPath')) {
    setTimeout(animateJourney, 1000);
  }

  /* ===== 15. 100 Times Love ===== */
  const loveBtn100 = document.getElementById('loveBtn100');
  const loveCounter = document.getElementById('loveCounter');
  const loveBurst = document.getElementById('loveBurst');
  const loveSpecial = document.getElementById('loveSpecial');
  let loveCount = 0;

  const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  function toBn(num) {
    return num.toString().split('').map(d => bnDigits[d]).join('');
  }

  if (loveBtn100) {
    loveBtn100.addEventListener('click', () => {
      if (loveCount >= 100) return;
      loveCount++;
      loveCounter.textContent = `${toBn(loveCount)} / ১০০`;

      // Burst hearts
      const rect = loveBtn100.getBoundingClientRect();
      for (let i = 0; i < 4; i++) {
        const h = document.createElement('div');
        h.className = 'burst-heart';
        h.textContent = ['💖','💕','💗','💘'][Math.floor(Math.random() * 4)];
        h.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 100) + 'px';
        h.style.top = (rect.top + rect.height / 2) + 'px';
        h.style.fontSize = (Math.random() * 15 + 18) + 'px';
        loveBurst.appendChild(h);
        setTimeout(() => h.remove(), 2000);
      }

      if (loveCount === 100) {
        loveSpecial.textContent = '💖 তুমি ১০০ বার ভালোবাসি শুনেছো — আর আমি প্রতিটা বার নতুন করে ভালোবাসি তোমাকে 💖';
        loveSpecial.classList.add('show');
        loveBtn100.textContent = 'ভালোবাসি 💖 (১০০/১০০)';
      }
    });
  }

  /* ===== 16. Rose Garden ===== */
  const garden = document.getElementById('garden');
  const roseMessages = [
    'ভালোবাসি 💖', 'তুমি আমার 🌙', 'চিরকাল 💕', 'তোমার হাসি 🌸',
    'আমার সব ✨', 'তোমার চোখ 💫', 'আমার প্রাণ 💗', 'তুমিই সব 💘'
  ];

  if (garden) {
    garden.addEventListener('click', (e) => {
      const rect = garden.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rose = document.createElement('div');
      rose.className = 'rose';
      rose.textContent = '🌹';
      rose.style.left = (x - 20) + 'px';
      rose.style.top = (y - 20) + 'px';
      rose.style.animationDelay = '0s';
      garden.appendChild(rose);

      // Message
      const msg = document.createElement('div');
      msg.className = 'rose-msg';
      msg.textContent = roseMessages[Math.floor(Math.random() * roseMessages.length)];
      msg.style.left = (x - 40) + 'px';
      msg.style.top = (y - 50) + 'px';
      garden.appendChild(msg);

      setTimeout(() => { rose.remove(); msg.remove(); }, 4000);
    });
  }

  /* ===== 17. Gift Box ===== */
  const giftBox = document.getElementById('giftBox');
  if (giftBox) {
    giftBox.addEventListener('click', () => {
      giftBox.classList.toggle('open');
    });
  }

  /* ===== 18. "না" Button Run Away ===== */
  const noBtn = document.getElementById('noBtn');
  const btnWrap = document.getElementById('btnWrap');
  const noTexts = ['না', 'প্লিজ না 🥺', 'ভেবে দেখো', 'আবার ভাবো', 'পারবি না ধরা 😜', 'চেষ্টা করো', 'না মানে না', 'একটুও না?', 'নাহ 🥹', 'প্লিজ 🥺'];
  let noIndex = 0;

  function moveNoButton() {
    const btnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - btnRect.width - 20;
    const maxY = window.innerHeight - btnRect.height - 20;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * (maxY * 0.8) + 50;

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '999';
    noBtn.style.transition = 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)';

    const rot = (Math.random() - 0.5) * 40;
    const scale = Math.random() * 0.4 + 0.8;
    noBtn.style.transform = `rotate(${rot}deg) scale(${scale})`;

    noIndex = (noIndex + 1) % noTexts.length;
    noBtn.textContent = noTexts[noIndex];
  }

  noBtn.addEventListener('mouseenter', moveNoButton);
  noBtn.addEventListener('mouseover', moveNoButton);
  noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveNoButton(); });
  noBtn.addEventListener('click', (e) => { e.preventDefault(); moveNoButton(); });

  /* ===== 19. YES Button → Final Screen ===== */
  const yesBtn = document.getElementById('yesBtn');
  const finalScreen = document.getElementById('finalScreen');
  const confettiContainer = document.getElementById('confetti');

  yesBtn.addEventListener('click', () => {
    finalScreen.classList.add('show');
    document.body.style.overflow = 'hidden';
    startConfetti();
    startFireworks();
    if (!isPlaying) {
      bgMusic.volume = 0.4;
      bgMusic.play().catch(() => {});
      isPlaying = true;
      musicBtn.classList.add('playing');
      musicBtn.textContent = '🔊';
    }
  });

  /* ===== 20. Confetti ===== */
  function startConfetti() {
    const emojis = ['💖', '💕', '🌸', '✨', '💗', '🌙', '💘', '🎉', '💝'];
    let count = 0;
    const interval = setInterval(() => {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      piece.style.left = Math.random() * 100 + '%';
      piece.style.fontSize = (Math.random() * 20 + 16) + 'px';
      const duration = Math.random() * 3 + 3;
      piece.style.animationDuration = duration + 's';
      piece.style.animationDelay = Math.random() * 0.5 + 's';
      confettiContainer.appendChild(piece);
      setTimeout(() => piece.remove(), (duration + 1) * 1000);
      count++;
      if (count > 120) clearInterval(interval);
    }, 80);
  }

  /* ===== 21. Fireworks Canvas ===== */
  const canvas = document.getElementById('fireworksCanvas');
  let fireworkInterval;
  function startFireworks() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];

    function createFirework() {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.6;
      const hue = Math.random() * 360;
      const count = 40;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          hue: hue + Math.random() * 40 - 20,
          size: Math.random() * 3 + 1
        });
      }
    }

    function animate() {
      ctx.fillStyle = 'rgba(0,0,0,0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.life -= 0.015;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 65%, ${p.life})`;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }
    animate();

    fireworkInterval = setInterval(createFirework, 700);
    createFirework();
  }

  /* ===== 22. Love Button ===== */
  const loveBtn = document.getElementById('loveBtn');
  loveBtn.addEventListener('click', () => {
    startConfetti();
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.textContent = '💖';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.fontSize = (Math.random() * 25 + 20) + 'px';
        const duration = Math.random() * 2 + 2;
        piece.style.animationDuration = duration + 's';
        confettiContainer.appendChild(piece);
        setTimeout(() => piece.remove(), duration * 1000 + 500);
      }, i * 60);
    }
  });

  /* ===== 23. Parallax Hero ===== */
  const moon = document.querySelector('.moon');
  const launch = document.querySelector('.launch');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (moon) moon.style.transform = `translateY(${scrolled * 0.3}px)`;
    if (launch) launch.style.transform = `translateX(-50%) translateY(${scrolled * 0.15}px)`;
  });

  /* ===== 24. Typing Effect for Hero Title ===== */
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    heroTitle.style.opacity = '1';
    let i = 0;
    function typeChar() {
      if (i < text.length) {
        if (text[i] === '<') {
          const close = text.indexOf('>', i);
          heroTitle.innerHTML += text.substring(i, close + 1);
          i = close + 1;
        } else {
          heroTitle.innerHTML += text[i];
          i++;
        }
        setTimeout(typeChar, 60);
      }
    }
    setTimeout(typeChar, 500);
  }

});