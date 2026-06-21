
    (function () {
      const introOverlay = document.getElementById('intro-overlay');
      const logoBluePath = document.getElementById('logo-blue');
      const logoGreenPath = document.getElementById('logo-green');
      const section = document.querySelector('section.relative.h-screen');
      const navbar = document.getElementById('navbar');
      if (!section || !introOverlay) return;

      const animTimings = {
        blueDraw: 0,
        greenDraw: 120,
        blueFill: 2600,
        greenFill: 2720,
        overlayFade: 4100,
        heroReveal: 3920
      };

      window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          logoBluePath?.classList.add('logo-draw');
          logoGreenPath?.classList.add('logo-draw');
        }, animTimings.blueDraw);

        setTimeout(() => {
          logoBluePath?.classList.add('logo-fill');
          logoGreenPath?.classList.add('logo-fill');
        }, animTimings.blueFill);

        setTimeout(() => {
          introOverlay.classList.add('intro-fade');
        }, animTimings.overlayFade);

        setTimeout(() => {
          section.classList.add('is-visible');
          if (navbar) navbar.classList.add('is-visible');
        }, animTimings.heroReveal);
      });

      function smoothScrollTo(targetSelector) {
        const el = document.querySelector(targetSelector);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      const cta = document.getElementById('hero-cta');
      if (cta) {
        let raf = null;
        function onMove(e) {
          const rect = cta.getBoundingClientRect();
          const x = (e.clientX - rect.left) - rect.width / 2;
          const y = (e.clientY - rect.top) - rect.height / 2;
          const max = 10;
          const tx = Math.max(Math.min(x / 10, max), -max);
          const ty = Math.max(Math.min(y / 12, max), -max);
          if (raf) cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            cta.style.transform = `translate(${tx}px, ${ty}px)`;
          });
        }
        function onLeave() {
          if (raf) cancelAnimationFrame(raf);
          cta.style.transform = '';
        }
        cta.addEventListener('mousemove', onMove);
        cta.addEventListener('mouseleave', onLeave);
        cta.addEventListener('click', (e) => { e.preventDefault(); smoothScrollTo('#about'); });
      }

      const scrollBtn = document.getElementById('scroll-indicator');
      if (scrollBtn) {
        scrollBtn.addEventListener('click', (e) => { e.preventDefault(); smoothScrollTo('#about'); });
      }

      // Scroll-triggered fade-in reveal using Intersection Observer
      const revealElements = document.querySelectorAll('.scroll-reveal');
      if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });

        revealElements.forEach(el => revealObserver.observe(el));
      }

      // Dynamic Leaves — Realistic Breeze Particle System
      const leavesContainer = document.getElementById('leaves-container');
      
      // Highly detailed botanical leaf SVG templates (Shared for both animations)
      const leafTemplates = [
          // 1) Serrated broad leaf (like a birch/elm) with gradient & detailed veins
          `<svg width="80" height="120" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lg1-UID" x1="0" y1="0" x2="0.3" y2="1">
                <stop offset="0%" stop-color="LIGHT"/>
                <stop offset="100%" stop-color="FILL"/>
              </linearGradient>
            </defs>
            <path d="M40 4 C36 10,28 14,22 20 C26 22,24 26,18 30 C22 33,20 36,14 40 C18 44,16 48,12 54 C16 58,15 62,12 68 C18 72,22 78,28 84 C32 90,36 100,40 116 C44 100,48 90,52 84 C58 78,62 72,68 68 C65 62,64 58,68 54 C64 48,62 44,66 40 C60 36,58 33,62 30 C56 26,54 22,58 20 C52 14,44 10,40 4Z" fill="url(#lg1-UID)" opacity="0.88"/>
            <path d="M40 10 Q40 60,40 112" stroke="VEIN" stroke-width="1.2" fill="none" opacity="0.6"/>
            <path d="M40 22 Q32 18,22 20" stroke="VEIN" stroke-width="0.6" fill="none" opacity="0.4"/>
            <path d="M40 22 Q48 18,58 20" stroke="VEIN" stroke-width="0.6" fill="none" opacity="0.4"/>
            <path d="M40 36 Q30 30,14 40" stroke="VEIN" stroke-width="0.6" fill="none" opacity="0.4"/>
            <path d="M40 36 Q50 30,66 40" stroke="VEIN" stroke-width="0.6" fill="none" opacity="0.4"/>
            <path d="M40 52 Q28 46,12 54" stroke="VEIN" stroke-width="0.6" fill="none" opacity="0.4"/>
            <path d="M40 52 Q52 46,68 54" stroke="VEIN" stroke-width="0.6" fill="none" opacity="0.4"/>
            <path d="M40 68 Q30 62,12 68" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.35"/>
            <path d="M40 68 Q50 62,68 68" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.35"/>
            <path d="M40 84 Q34 78,28 84" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.3"/>
            <path d="M40 84 Q46 78,52 84" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.3"/>
          </svg>`,
          // 2) Smooth ovate leaf (like a magnolia) with subtle edge highlight
          `<svg width="70" height="110" viewBox="0 0 70 110" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lg2-UID" x1="0.2" y1="0" x2="0.8" y2="1">
                <stop offset="0%" stop-color="LIGHT"/>
                <stop offset="60%" stop-color="FILL"/>
                <stop offset="100%" stop-color="DARK"/>
              </linearGradient>
            </defs>
            <path d="M35 4 C16 20,4 44,8 68 C12 88,24 100,35 106 C46 100,58 88,62 68 C66 44,54 20,35 4Z" fill="url(#lg2-UID)" opacity="0.85"/>
            <path d="M35 4 C16 20,4 44,8 68 C12 88,24 100,35 106 C46 100,58 88,62 68 C66 44,54 20,35 4Z" fill="none" stroke="LIGHT" stroke-width="0.5" opacity="0.25"/>
            <path d="M35 10 Q35 55,35 102" stroke="VEIN" stroke-width="1.1" fill="none" opacity="0.55"/>
            <path d="M35 24 Q24 20,12 28" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.4"/>
            <path d="M35 24 Q46 20,58 28" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.4"/>
            <path d="M35 40 Q22 34,10 44" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.38"/>
            <path d="M35 40 Q48 34,60 44" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.38"/>
            <path d="M35 56 Q24 50,10 58" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.35"/>
            <path d="M35 56 Q46 50,60 58" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.35"/>
            <path d="M35 72 Q26 66,14 72" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.3"/>
            <path d="M35 72 Q44 66,56 72" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.3"/>
            <path d="M35 86 Q28 82,20 86" stroke="VEIN" stroke-width="0.35" fill="none" opacity="0.25"/>
            <path d="M35 86 Q42 82,50 86" stroke="VEIN" stroke-width="0.35" fill="none" opacity="0.25"/>
          </svg>`,
          // 3) Narrow willow-like leaf with fine venation
          `<svg width="36" height="120" viewBox="0 0 36 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lg3-UID" x1="0" y1="0" x2="1" y2="0.5">
                <stop offset="0%" stop-color="FILL"/>
                <stop offset="50%" stop-color="LIGHT"/>
                <stop offset="100%" stop-color="FILL"/>
              </linearGradient>
            </defs>
            <path d="M18 2 C8 20,2 44,4 68 C6 88,12 104,18 116 C24 104,30 88,32 68 C34 44,28 20,18 2Z" fill="url(#lg3-UID)" opacity="0.84"/>
            <path d="M18 6 Q18 60,18 112" stroke="VEIN" stroke-width="0.9" fill="none" opacity="0.55"/>
            <path d="M18 20 Q12 16,6 22" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.35"/>
            <path d="M18 20 Q24 16,30 22" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.35"/>
            <path d="M18 36 Q10 30,4 38" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.35"/>
            <path d="M18 36 Q26 30,32 38" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.35"/>
            <path d="M18 52 Q10 46,4 54" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.32"/>
            <path d="M18 52 Q26 46,32 54" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.32"/>
            <path d="M18 68 Q12 62,6 68" stroke="VEIN" stroke-width="0.35" fill="none" opacity="0.3"/>
            <path d="M18 68 Q24 62,30 68" stroke="VEIN" stroke-width="0.35" fill="none" opacity="0.3"/>
            <path d="M18 84 Q13 80,8 84" stroke="VEIN" stroke-width="0.3" fill="none" opacity="0.25"/>
            <path d="M18 84 Q23 80,28 84" stroke="VEIN" stroke-width="0.3" fill="none" opacity="0.25"/>
          </svg>`,
          // 4) Asymmetric tropical leaf with curved veins
          `<svg width="80" height="130" viewBox="0 0 80 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="rg4-UID" cx="0.4" cy="0.35" r="0.65">
                <stop offset="0%" stop-color="LIGHT"/>
                <stop offset="100%" stop-color="FILL"/>
              </radialGradient>
            </defs>
            <path d="M42 4 C30 12,14 28,8 52 C4 70,8 88,18 102 C26 112,34 120,42 126 C48 118,56 106,62 92 C70 74,74 54,70 38 C66 22,54 10,42 4Z" fill="url(#rg4-UID)" opacity="0.86"/>
            <path d="M42 8 Q40 65,42 122" stroke="VEIN" stroke-width="1.0" fill="none" opacity="0.55"/>
            <path d="M42 22 Q28 18,12 30" stroke="VEIN" stroke-width="0.6" fill="none" opacity="0.4"/>
            <path d="M42 22 Q54 16,68 28" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.35"/>
            <path d="M42 42 Q26 36,8 50" stroke="VEIN" stroke-width="0.6" fill="none" opacity="0.38"/>
            <path d="M42 42 Q56 36,72 46" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.35"/>
            <path d="M42 62 Q28 56,10 66" stroke="VEIN" stroke-width="0.5" fill="none" opacity="0.35"/>
            <path d="M42 62 Q54 56,68 64" stroke="VEIN" stroke-width="0.45" fill="none" opacity="0.3"/>
            <path d="M42 82 Q30 76,18 86" stroke="VEIN" stroke-width="0.45" fill="none" opacity="0.3"/>
            <path d="M42 82 Q52 76,62 84" stroke="VEIN" stroke-width="0.4" fill="none" opacity="0.28"/>
            <path d="M42 100 Q34 94,24 100" stroke="VEIN" stroke-width="0.35" fill="none" opacity="0.25"/>
            <path d="M42 100 Q48 94,56 98" stroke="VEIN" stroke-width="0.35" fill="none" opacity="0.25"/>
          </svg>`
        ];

        const leafFills = [
          { fill: '#10B981', vein: '#065F46', light: '#34D399', dark: '#047857' },  // emerald
          { fill: '#2F6F4E', vein: '#1B4332', light: '#4A9F6E', dark: '#14532D' },  // dark forest
          { fill: '#84CC16', vein: '#4D7C0F', light: '#A3E635', dark: '#3F6212' },  // lime
          { fill: '#22C55E', vein: '#166534', light: '#4ADE80', dark: '#15803D' },  // green
          { fill: '#6BBF59', vein: '#3D7A33', light: '#8ED87C', dark: '#2E5E22' },  // soft sage
        ];

      if (leavesContainer) {
        const activeLeaves = [];
        const MAX_LEAVES = 12;
        const LIFE_SPAN = 5000; // 5 seconds total life
        const FADE_IN = 600;
        const FADE_OUT = 800;

        let leafCounter = 0;

        function spawnLeaf() {
          if (activeLeaves.length >= MAX_LEAVES) return;

          const colorSet = leafFills[Math.floor(Math.random() * leafFills.length)];
          const template = leafTemplates[Math.floor(Math.random() * leafTemplates.length)];
          leafCounter++;
          const svgString = template
            .replace(/FILL/g, colorSet.fill)
            .replace(/VEIN/g, colorSet.vein)
            .replace(/LIGHT/g, colorSet.light)
            .replace(/DARK/g, colorSet.dark)
            .replace(/UID/g, 'leaf' + leafCounter);

          const wrapper = document.createElement('div');
          wrapper.className = 'dynamic-leaf';
          wrapper.innerHTML = svgString;

          const size = Math.random() * 30 + 20; // 20px to 50px
          wrapper.style.width = size + 'px';
          wrapper.style.opacity = '0';

          // Random spawn position
          const startX = Math.random() * leavesContainer.offsetWidth;
          const startY = Math.random() * leavesContainer.offsetHeight * 0.8;

          const leaf = {
            el: wrapper,
            x: startX,
            y: startY,
            born: performance.now(),
            // Breeze parameters — each leaf gets unique wave characteristics
            windSpeed: (Math.random() * 0.3 + 0.15) * (Math.random() < 0.5 ? 1 : -1), // horizontal drift px/frame
            sineAmp: Math.random() * 25 + 10,    // vertical bobbing amplitude
            sineFreq: Math.random() * 0.002 + 0.001, // bobbing frequency
            rotSpeed: (Math.random() - 0.5) * 0.4,   // gentle rotation speed
            rotation: Math.random() * 360,
            targetOpacity: Math.random() * 0.3 + 0.6, // 0.6 to 0.9
            phaseOffset: Math.random() * Math.PI * 2, // sine phase offset
          };

          leavesContainer.appendChild(wrapper);
          activeLeaves.push(leaf);
        }

        function animateLeaves(now) {
          for (let i = activeLeaves.length - 1; i >= 0; i--) {
            const leaf = activeLeaves[i];
            const age = now - leaf.born;

            // Remove expired leaves
            if (age > LIFE_SPAN) {
              leaf.el.remove();
              activeLeaves.splice(i, 1);
              continue;
            }

            // Calculate opacity with fade-in / fade-out
            let opacity;
            if (age < FADE_IN) {
              opacity = (age / FADE_IN) * leaf.targetOpacity;
            } else if (age > LIFE_SPAN - FADE_OUT) {
              opacity = ((LIFE_SPAN - age) / FADE_OUT) * leaf.targetOpacity;
            } else {
              opacity = leaf.targetOpacity;
            }

            // Sinusoidal breeze movement
            leaf.x += leaf.windSpeed;
            const sineY = Math.sin(now * leaf.sineFreq + leaf.phaseOffset) * leaf.sineAmp;
            leaf.rotation += leaf.rotSpeed;

            leaf.el.style.opacity = opacity;
            leaf.el.style.transform = `translate(${leaf.x}px, ${leaf.y + sineY}px) rotate(${leaf.rotation}deg)`;
          }

          requestAnimationFrame(animateLeaves);
        }

        // Spawn leaves at intervals
        setInterval(spawnLeaf, 800);

        // Initial gentle burst
        for (let i = 0; i < 6; i++) {
          setTimeout(spawnLeaf, i * 300);
        }

        requestAnimationFrame(animateLeaves);
      }

      // Mobile Menu Logic
      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburgerIcon = document.getElementById('hamburger-icon');
      const mobileLinks = document.querySelectorAll('.mobile-link');
      let isMenuOpen = false;

      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          isMenuOpen = !isMenuOpen;
          if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'scale-y-95');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'scale-y-100');
            hamburgerIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // X icon
            mobileBtn.classList.add('rotate-90');
          } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-y-95');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'scale-y-100');
            hamburgerIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger icon
            mobileBtn.classList.remove('rotate-90');
          }
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
            if (isMenuOpen) {
              mobileBtn.click();
            }
          });
        });
      }

      // Full Hero Particle Assembly
      async function initHeroParticleAssembly() {
        const textElements = document.querySelectorAll('.hero-text-element');
        
        function forceShowText() {
          textElements.forEach(el => {
            el.style.transition = 'opacity 1s ease-out';
            el.style.opacity = '1';
          });
        }

        try {
          const canvas = document.getElementById('hero-particle-canvas');
          const heroSection = document.getElementById('home');
          if (!canvas || !heroSection || textElements.length === 0) {
            forceShowText();
            return;
          }

          // Ensure fonts are loaded safely
          if (document && document.fonts) {
            try { await document.fonts.ready; } catch (e) { console.warn("Font loading wait failed", e); }
          }

          const ctx = canvas.getContext('2d', { willReadFrequently: true });
          let width, height;

          function resize() {
            width = heroSection.offsetWidth || window.innerWidth;
            height = heroSection.offsetHeight || window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
          }
          resize();
          window.addEventListener('resize', resize);

          // Pre-render leaf images for fast drawing
          const leafImages = [];
          const imagePromises = [];
          leafTemplates.forEach((template, idx) => {
            const colorSet = leafFills[idx % leafFills.length];
            const svgStr = template
              .replace(/FILL/g, colorSet.fill)
              .replace(/VEIN/g, colorSet.vein)
              .replace(/LIGHT/g, colorSet.light)
              .replace(/DARK/g, colorSet.dark)
              .replace(/UID/g, 'mini-leaf-' + idx);
            
            const img = new Image();
            imagePromises.push(new Promise(resolve => {
              img.onload = resolve;
              img.onerror = resolve; // Continue even on error
            }));
            img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgStr);
            leafImages.push(img);
          });
          
          await Promise.all(imagePromises);

          // Sample Text Pixels across entire Hero Section
          const offscreen = document.createElement('canvas');
          const oCtx = offscreen.getContext('2d', { willReadFrequently: true });
          offscreen.width = width;
          offscreen.height = height;

          if (width === 0 || height === 0) {
            forceShowText();
            return;
          }
        
        function wrapText(context, text, x, y, maxWidth, lineHeight) {
          var words = text.split(' ');
          var line = '';
          for(var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            if (metrics.width > maxWidth && n > 0) {
              context.fillText(line, x, y);
              line = words[n] + ' ';
              y += lineHeight;
            } else {
              line = testLine;
            }
          }
          context.fillText(line, x, y);
        }

        const heroRect = heroSection.getBoundingClientRect();
        oCtx.fillStyle = '#000';
        oCtx.textBaseline = 'top';

        textElements.forEach(el => {
           const rect = el.getBoundingClientRect();
           const style = window.getComputedStyle(el);
           // Use generic sans-serif to prevent Chrome's strict canvas tainting policy 
           // which throws SecurityError for getImageData when using web fonts on local file:/// URLs.
           oCtx.font = `${style.fontWeight} ${style.fontSize} sans-serif`;
           
           const x = rect.left - heroRect.left;
           // Slight vertical offset adjustment for baseline=top rendering
           let y = rect.top - heroRect.top;
           if (el.tagName.toLowerCase() === 'h2') {
             y += (rect.height - parseFloat(style.fontSize)) / 2; // Approximate vertical centering for h2
           }
           
           const text = el.textContent.trim().replace(/\s+/g, ' ');
           const lineHeight = parseFloat(style.lineHeight) || (parseFloat(style.fontSize) * 1.2);
           wrapText(oCtx, text, x, y, rect.width + 10, lineHeight);
        });

          let imgData;
          try {
            imgData = oCtx.getImageData(0, 0, width, height).data;
          } catch (e) {
            console.error("getImageData failed (likely SecurityError due to local file restrictions):", e);
            forceShowText();
            return;
          }

          const targetPoints = [];
          const step = 3; // High density to ensure we don't miss text

          for (let y = 0; y < height; y += step) {
            for (let x = 0; x < width; x += step) {
              const alpha = imgData[(y * width + x) * 4 + 3];
              if (alpha > 1) {
                targetPoints.push({ x, y });
              }
            }
          }

          // Fallback just in case text sampling failed
          if (targetPoints.length === 0) {
            console.warn("Text sampling failed (0 points found), immediately revealing text");
            forceShowText();
            return;
          }
        
        // Shuffle target points to randomize assembly
        for (let i = targetPoints.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [targetPoints[i], targetPoints[j]] = [targetPoints[j], targetPoints[i]];
        }

        // Limit maximum leaves to preserve framerate on massive text blocks
        const MAX_MINI_LEAVES = 800;
        const actualPoints = targetPoints.slice(0, MAX_MINI_LEAVES);

        const particles = [];
        actualPoints.forEach(point => {
          const startX = (Math.random() - 0.5) * window.innerWidth * 2 + width / 2;
          const startY = (Math.random() - 0.5) * window.innerHeight * 2 + height / 2;
          
          particles.push({
            x: startX,
            y: startY,
            tx: point.x,
            ty: point.y,
            vx: 0,
            vy: 0,
            size: Math.random() * 8 + 6,
            angle: Math.random() * Math.PI * 2,
            targetAngle: (Math.random() - 0.5) * 0.5,
            img: leafImages[Math.floor(Math.random() * leafImages.length)],
            delay: Math.random() * 1200, // Longer staggered start for massive swarm
            active: false
          });
        });

        // Animation Loop
        let startTime = null;
        let animationComplete = false;
        let rafId;

        function animate(timestamp) {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          
          ctx.clearRect(0, 0, width, height);
          let allSettled = true;

          particles.forEach(p => {
            if (elapsed > p.delay) p.active = true;
            if (!p.active) {
              allSettled = false;
              return;
            }

            const dx = p.tx - p.x;
            const dy = p.ty - p.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            const life = elapsed - p.delay;
            
            if (dist > 1.0 && life < 4000) {
              allSettled = false;
              const curlForce = Math.max(0, 1 - life / 2500);
              const curlX = Math.sin(life * 0.005 + p.delay) * 2 * curlForce;
              const curlY = Math.cos(life * 0.005 + p.delay) * 2 * curlForce;
              
              p.vx += (dx * 0.035) + curlX;
              p.vy += (dy * 0.035) + curlY;
              
              p.vx *= 0.83;
              p.vy *= 0.83;
              
              p.x += p.vx;
              p.y += p.vy;
              
              p.angle += (p.targetAngle - p.angle) * 0.1;
            } else {
              p.x = p.tx;
              p.y = p.ty;
              p.angle = p.targetAngle;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.drawImage(p.img, -p.size/2, -p.size/2, p.size, p.size);
            ctx.restore();
          });

          if (!allSettled) {
            rafId = requestAnimationFrame(animate);
          } else if (!animationComplete) {
            animationComplete = true;
            
            // Magical Glow Morph transition for ALL hero text elements
            setTimeout(() => {
              canvas.style.transition = 'opacity 1.2s ease-out, filter 1.2s ease-out, transform 1.2s ease-out';
              canvas.style.opacity = '0';
              canvas.style.filter = 'blur(8px) drop-shadow(0 0 20px #10B981) brightness(1.5)';
              canvas.style.transform = 'scale(1.02)';

              textElements.forEach(el => {
                el.style.transition = 'none';
                el.style.filter = 'blur(10px) brightness(2) drop-shadow(0 0 20px #10B981)';
                el.style.transform = 'scale(0.98)';
                el.style.opacity = '0';
              });

              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  textElements.forEach(el => {
                    el.style.transition = 'opacity 1.5s ease-out, filter 2.25s ease-out, transform 2.25s ease-out';
                    el.style.opacity = '1';
                    el.style.filter = 'blur(0px) brightness(1) drop-shadow(0 0 0px transparent)';
                    el.style.transform = 'scale(1)';
                  });
                });
              });
            }, 600);
          }
        }

          setTimeout(() => {
            rafId = requestAnimationFrame(animate);
          }, 100);

        } catch (e) {
          console.error("Hero particle assembly encountered an error:", e);
          forceShowText();
        }
      }

      initHeroParticleAssembly();

    })();
  