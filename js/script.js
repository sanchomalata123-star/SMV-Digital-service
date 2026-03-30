// js/script.js

// Navigation buttons
function goTo(page) {
    window.location.href = page;
}// SMV Digital Services - CRAZY JS ✨

// ============================
// Smooth Scroll for Navigation
// ============================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================
// Button hover animation
// ============================
document.querySelectorAll('button, .payment-button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.1)';
        btn.style.boxShadow = '0 8px 15px rgba(0,0,0,0.3)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = 'none';
    });
});

// ============================
// Dynamic Counter (e.g., on Home or Stats section)
// ============================
function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let stepTime = Math.abs(Math.floor(duration / (end - start)));
    let timer = setInterval(() => {
        current++;
        obj.innerText = current;
        if (current >= end) clearInterval(timer);
    }, stepTime);
}

// Example: attach counters if elements exist
if (document.getElementById('counter1')) {
    counter('counter1', 0, 120, 2000); // 0 → 120 in 2s
    counter('counter2', 0, 50, 2000);  // 0 → 50 in 2s
}

// ============================
// Card Hover 3D Effect
// ============================
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.transform = `rotateY(${(x - rect.width/2)/15}deg) rotateX(${-(y - rect.height/2)/15}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        card.style.transition = 'transform 0.5s ease';
        setTimeout(() => card.style.transition = '', 500);
    });
});

// ============================
// Modal Popup Example
// ============================
document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.getElementById('demoModal');
        modal.style.display = 'block';
    });
});
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.getElementById('demoModal');
        modal.style.display = 'none';
    });
});
window.addEventListener('click', e => {
    const modal = document.getElementById('demoModal');
    if (e.target === modal) modal.style.display = 'none';
});

// ============================
// Payment Button Demo (Alert + Animation)
// ============================
function payWith(method) {
    const btn = document.querySelector(`.payment-button[data-method="${method}"]`);
    if (btn) {
        btn.innerText = 'Processing...';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerText = `Paid with ${method}! ✅`;
            btn.style.backgroundColor = '#28a745';
            btn.disabled = false;
        }, 1500);
    } else {
        alert("You clicked " + method + ". Demo payment triggered!");
    }
}

// ============================
// Typing Text Effect
// ============================
function typeEffect(elementId, speed = 100) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const text = el.innerText;
    el.innerText = '';
    let i = 0;
    function typing() {
        if (i < text.length) {
            el.innerText += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Example: run typing on Home page heading
window.addEventListener('load', () => {
    typeEffect('typingTitle', 80);
});