const root = document.body;

root.innerHTML = `
	<div class="page-shell">
		<div class="ambient ambient-one"></div>
		<div class="ambient ambient-two"></div>
		<div class="ambient ambient-three"></div>

		<main class="hero" id="hero">
			<nav class="topbar">
				<div class="brand-mark" aria-hidden="true">
					<span class="brand-ring"></span>
					<span class="brand-core"></span>
				</div>
				<div class="brand-copy">
					<p class="eyebrow">Sustainability Cell, IIT Bombay</p>
					<p class="subtle">Fluid, living, and future-ready campus action</p>
				</div>
				<a class="pill-link" href="#vision">Explore the motion</a>
			</nav>

			<section class="hero-grid">
				<div class="hero-copy reveal">
					<p class="section-tag">Green systems for a greener institute</p>
					<h1>
						A dynamic sustainability
						<span>hero that breathes with nature.</span>
					</h1>
					<p class="hero-text">
						Designed for the Sustainability Cell of IIT Bombay, this landing section blends light green,
						deep green, and white into a fluid visual language with motion that responds to hover, scroll,
						and time.
					</p>

					<div class="hero-actions">
						<a class="primary-btn" href="#actions">Join the movement</a>
						<a class="secondary-btn" href="#vision">See the vision</a>
					</div>

					<div class="stats">
						<div class="stat-card hover-lift">
							<span>01</span>
							<strong>Fluid gradients</strong>
							<p>Organic motion with layered green light.</p>
						</div>
						<div class="stat-card hover-lift">
							<span>02</span>
							<strong>Responsive motion</strong>
							<p>Scroll-based transitions keep the page alive.</p>
						</div>
					</div>
				</div>

				<div class="hero-visual reveal">
					<div class="logo-orbit" aria-hidden="true">
						<div class="orbit-ring orbit-ring-one"></div>
						<div class="orbit-ring orbit-ring-two"></div>
						<div class="sustain-logo">
							<span class="leaf leaf-left"></span>
							<span class="leaf leaf-right"></span>
							<span class="logo-letter">SC</span>
						</div>
					</div>

					<div class="globe-card hover-float">
						<div class="globe" aria-hidden="true">
							<span class="globe-glow"></span>
							<span class="globe-grid"></span>
							<span class="globe-arc globe-arc-a"></span>
							<span class="globe-arc globe-arc-b"></span>
						</div>
						<div class="globe-copy">
							<p>Animated globe</p>
							<span>Rotating energy field and drifting highlight.</span>
						</div>
					</div>
				</div>
			</section>
		</main>

		<section class="feature-band" id="vision">
			<article class="feature-card reveal hover-lift">
				<p class="section-tag">Scroll transition</p>
				<h2>Sections fade in and slide upward as the page moves.</h2>
				<p>Intersection-aware reveals keep the composition feeling guided instead of static.</p>
			</article>
			<article class="feature-card reveal hover-lift" id="actions">
				<p class="section-tag">Hover interaction</p>
				<h2>Cards, buttons, and the globe react with soft depth changes.</h2>
				<p>The interface rewards exploration while staying calm and readable.</p>
			</article>
		</section>
	</div>
`;

const style = document.createElement('style');
style.textContent = `
	:root {
		color-scheme: light;
		--bg: #f6fff7;
		--bg-deep: #e2f6e5;
		--mint: #c7f0ca;
		--green: #4ba86b;
		--deep-green: #0d5b2f;
		--forest: #09351d;
		--white: #ffffff;
		--shadow: 0 24px 60px rgba(9, 53, 29, 0.14);
		--border: rgba(13, 91, 47, 0.14);
	}

	* {
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
		background:
			radial-gradient(circle at top left, rgba(199, 240, 202, 0.95), transparent 34%),
			radial-gradient(circle at 85% 10%, rgba(75, 168, 107, 0.16), transparent 22%),
			linear-gradient(180deg, #ffffff 0%, var(--bg) 48%, #f0fbf2 100%);
		color: var(--forest);
		min-height: 100vh;
		overflow-x: hidden;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.page-shell {
		position: relative;
		isolation: isolate;
		min-height: 100vh;
	}

	.ambient {
		position: fixed;
		inset: auto;
		border-radius: 50%;
		filter: blur(18px);
		opacity: 0.7;
		pointer-events: none;
		z-index: -1;
		animation: drift 16s ease-in-out infinite;
	}

	.ambient-one {
		width: 26rem;
		height: 26rem;
		top: -10rem;
		left: -7rem;
		background: radial-gradient(circle, rgba(199, 240, 202, 0.9), rgba(199, 240, 202, 0));
	}

	.ambient-two {
		width: 22rem;
		height: 22rem;
		right: -8rem;
		top: 9rem;
		background: radial-gradient(circle, rgba(75, 168, 107, 0.42), rgba(75, 168, 107, 0));
		animation-delay: -4s;
	}

	.ambient-three {
		width: 20rem;
		height: 20rem;
		right: 10%;
		bottom: 6rem;
		background: radial-gradient(circle, rgba(13, 91, 47, 0.2), rgba(13, 91, 47, 0));
		animation-delay: -9s;
	}

	.hero {
		width: min(1200px, calc(100vw - 2rem));
		margin: 0 auto;
		padding: 1.4rem 0 3rem;
	}

	.topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.9rem 1.1rem;
		border: 1px solid rgba(13, 91, 47, 0.08);
		border-radius: 1.5rem;
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(18px);
		box-shadow: 0 12px 32px rgba(9, 53, 29, 0.06);
	}

	.brand-mark {
		position: relative;
		width: 3.4rem;
		height: 3.4rem;
		display: grid;
		place-items: center;
		flex: 0 0 auto;
	}

	.brand-ring,
	.brand-core {
		position: absolute;
		inset: 0;
		border-radius: 50%;
	}

	.brand-ring {
		border: 1px solid rgba(13, 91, 47, 0.2);
		background: conic-gradient(from 180deg, rgba(75, 168, 107, 0.95), rgba(13, 91, 47, 0.1), rgba(75, 168, 107, 0.95));
		animation: spin 12s linear infinite;
	}

	.brand-core {
		inset: 0.35rem;
		background: linear-gradient(145deg, #ffffff, #c7f0ca);
		box-shadow: inset 0 0 0 1px rgba(13, 91, 47, 0.12);
	}

	.brand-copy {
		flex: 1;
	}

	.eyebrow,
	.subtle,
	.section-tag,
	.globe-copy p,
	.feature-card p,
	.stat-card p {
		margin: 0;
	}

	.eyebrow {
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--deep-green);
		font-size: 0.82rem;
	}

	.subtle {
		margin-top: 0.2rem;
		color: rgba(9, 53, 29, 0.68);
		font-size: 0.92rem;
	}

	.pill-link,
	.primary-btn,
	.secondary-btn {
		border-radius: 999px;
		font-weight: 700;
		transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease, color 220ms ease, border-color 220ms ease;
	}

	.pill-link {
		padding: 0.9rem 1.15rem;
		border: 1px solid rgba(13, 91, 47, 0.12);
		background: rgba(255, 255, 255, 0.78);
	}

	.pill-link:hover,
	.primary-btn:hover,
	.secondary-btn:hover,
	.hover-lift:hover,
	.hover-float:hover {
		transform: translateY(-4px);
		box-shadow: 0 20px 45px rgba(9, 53, 29, 0.16);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1.06fr 0.94fr;
		gap: 2rem;
		align-items: center;
		padding: clamp(2rem, 5vw, 5rem) 0 1rem;
		min-height: calc(100vh - 6rem);
	}

	.hero-copy {
		padding: clamp(0.5rem, 2vw, 1.6rem) 0;
	}

	.section-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.55rem 0.85rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.75);
		border: 1px solid rgba(13, 91, 47, 0.12);
		color: var(--deep-green);
		font-size: 0.86rem;
		font-weight: 700;
		letter-spacing: 0.03em;
	}

	h1 {
		margin: 1.1rem 0 1rem;
		max-width: 12ch;
		font-size: clamp(3.3rem, 7vw, 6.6rem);
		line-height: 0.95;
		letter-spacing: -0.06em;
	}

	h1 span {
		display: block;
		color: var(--deep-green);
	}

	.hero-text {
		max-width: 58ch;
		font-size: clamp(1rem, 1.35vw, 1.18rem);
		line-height: 1.75;
		color: rgba(9, 53, 29, 0.76);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
		margin-top: 1.6rem;
	}

	.primary-btn,
	.secondary-btn {
		padding: 0.95rem 1.35rem;
		border: 1px solid transparent;
	}

	.primary-btn {
		background: linear-gradient(135deg, var(--green), var(--deep-green));
		color: var(--white);
		box-shadow: 0 16px 30px rgba(13, 91, 47, 0.2);
	}

	.secondary-btn {
		background: rgba(255, 255, 255, 0.78);
		border-color: rgba(13, 91, 47, 0.14);
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
		margin-top: 1.75rem;
	}

	.stat-card,
	.feature-card,
	.globe-card {
		border-radius: 1.65rem;
		background: rgba(255, 255, 255, 0.76);
		border: 1px solid rgba(13, 91, 47, 0.1);
		backdrop-filter: blur(14px);
		box-shadow: var(--shadow);
	}

	.stat-card {
		padding: 1.1rem;
		transition: transform 240ms ease, box-shadow 240ms ease;
	}

	.stat-card span {
		display: inline-flex;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		color: var(--white);
		background: linear-gradient(135deg, var(--green), var(--deep-green));
		font-size: 0.85rem;
		font-weight: 800;
		margin-bottom: 0.85rem;
	}

	.stat-card strong,
	.feature-card h2,
	.globe-copy p {
		display: block;
		font-size: 1.05rem;
		line-height: 1.35;
	}

	.stat-card p,
	.feature-card p,
	.globe-copy span {
		color: rgba(9, 53, 29, 0.72);
		line-height: 1.65;
	}

	.hero-visual {
		position: relative;
		min-height: 38rem;
		display: grid;
		place-items: center;
	}

	.logo-orbit {
		position: absolute;
		top: 0.25rem;
		left: 50%;
		transform: translateX(-50%);
		width: min(24rem, 86vw);
		aspect-ratio: 1;
	}

	.orbit-ring,
	.sustain-logo,
	.globe,
	.globe-glow,
	.globe-grid,
	.globe-arc {
		position: absolute;
	}

	.orbit-ring {
		inset: 0;
		border-radius: 50%;
		border: 1px solid rgba(13, 91, 47, 0.14);
		animation: spin 26s linear infinite;
	}

	.orbit-ring-one {
		inset: 1.1rem;
		border-style: dashed;
		animation-direction: reverse;
	}

	.orbit-ring-two {
		inset: 2.4rem;
		opacity: 0.65;
	}

	.sustain-logo {
		inset: 6.6rem;
		border-radius: 2rem;
		display: grid;
		place-items: center;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(199, 240, 202, 0.9));
		box-shadow: 0 24px 50px rgba(9, 53, 29, 0.16);
		border: 1px solid rgba(13, 91, 47, 0.12);
		animation: logoAppear 1200ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
	}

	.leaf {
		position: absolute;
		width: 4.4rem;
		height: 2.6rem;
		border-radius: 100% 0 100% 0;
		background: linear-gradient(145deg, #7ddf8d, var(--deep-green));
		opacity: 0.92;
	}

	.leaf-left {
		top: 1.3rem;
		left: 1.3rem;
		transform: rotate(-24deg);
	}

	.leaf-right {
		bottom: 1.3rem;
		right: 1.3rem;
		transform: rotate(156deg);
	}

	.logo-letter {
		position: relative;
		z-index: 1;
		font-size: clamp(2.4rem, 5vw, 4rem);
		font-weight: 900;
		letter-spacing: -0.08em;
		color: var(--forest);
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
	}

	.globe-card {
		position: absolute;
		right: 0;
		bottom: 0.6rem;
		width: min(24rem, 100%);
		padding: 1rem;
		display: grid;
		gap: 1rem;
		transform: rotate(-1deg);
	}

	.globe {
		position: relative;
		width: 100%;
		aspect-ratio: 1;
		border-radius: 50%;
		overflow: hidden;
		background:
			radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0) 16%),
			radial-gradient(circle at 50% 58%, rgba(75, 168, 107, 0.92), rgba(13, 91, 47, 0.95) 64%, rgba(9, 53, 29, 1) 100%);
		box-shadow: inset -18px -24px 34px rgba(0, 0, 0, 0.16), 0 18px 40px rgba(9, 53, 29, 0.22);
	}

	.globe-glow {
		inset: 12%;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(199, 240, 202, 0.28), rgba(199, 240, 202, 0));
		animation: pulse 6.5s ease-in-out infinite;
	}

	.globe-grid {
		inset: 0;
		background:
			linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.16) 1px, transparent 1px);
		background-size: 100% 18%, 18% 100%;
		mask-image: radial-gradient(circle at center, black 54%, transparent 73%);
		animation: driftGrid 14s linear infinite;
	}

	.globe-arc {
		inset: 0;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.28);
		clip-path: inset(8% 10% 42% 10% round 50%);
	}

	.globe-arc-a {
		transform: rotate(18deg);
		animation: spin 18s linear infinite;
	}

	.globe-arc-b {
		inset: 12%;
		border-color: rgba(255, 255, 255, 0.16);
		clip-path: inset(42% 10% 8% 10% round 50%);
		transform: rotate(-18deg);
		animation: spin 24s linear infinite reverse;
	}

	.feature-band {
		width: min(1200px, calc(100vw - 2rem));
		margin: 0 auto;
		padding: 0 0 3rem;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}

	.feature-card {
		padding: 1.5rem;
		min-height: 14rem;
		display: grid;
		align-content: start;
		gap: 0.9rem;
		transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
	}

	.feature-card h2 {
		margin: 0;
		font-size: clamp(1.4rem, 2vw, 2rem);
		line-height: 1.1;
	}

	.reveal {
		opacity: 0;
		transform: translateY(28px);
		transition: opacity 900ms ease, transform 900ms ease;
	}

	.reveal.in-view {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-copy.reveal.in-view {
		transition-delay: 120ms;
	}

	.hero-visual.reveal.in-view {
		transition-delay: 220ms;
	}

	.feature-card.reveal.in-view {
		transition-delay: 100ms;
	}

	.hover-float {
		animation: float 8s ease-in-out infinite;
	}

	.hero::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.46), rgba(255, 255, 255, 0));
		mask-image: radial-gradient(circle at 25% 25%, black 18%, transparent 70%);
		pointer-events: none;
		z-index: -1;
	}

	@keyframes drift {
		0%, 100% {
			transform: translate3d(0, 0, 0) scale(1);
		}
		50% {
			transform: translate3d(1.2rem, -1.1rem, 0) scale(1.05);
		}
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
			opacity: 0.55;
		}
		50% {
			transform: scale(1.08);
			opacity: 0.85;
		}
	}

	@keyframes float {
		0%, 100% {
			transform: translate3d(0, 0, 0);
		}
		50% {
			transform: translate3d(0, -10px, 0);
		}
	}

	@keyframes logoAppear {
		0% {
			opacity: 0;
			transform: scale(0.72) rotate(-10deg);
			filter: blur(8px);
		}
		60% {
			opacity: 1;
			transform: scale(1.03) rotate(2deg);
			filter: blur(0);
		}
		100% {
			opacity: 1;
			transform: scale(1) rotate(0);
			filter: blur(0);
		}
	}

	@keyframes driftGrid {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(14%);
		}
	}

	@media (max-width: 960px) {
		.hero-grid,
		.feature-band {
			grid-template-columns: 1fr;
		}

		.hero-grid {
			min-height: auto;
		}

		.hero-visual {
			min-height: 34rem;
		}

		.globe-card {
			position: relative;
			right: auto;
			bottom: auto;
			margin-top: 22rem;
			width: 100%;
		}
	}

	@media (max-width: 680px) {
		.topbar {
			align-items: flex-start;
			flex-direction: column;
		}

		.hero {
			width: min(1200px, calc(100vw - 1rem));
			padding-top: 0.5rem;
		}

		h1 {
			max-width: 100%;
			font-size: clamp(2.8rem, 15vw, 4.8rem);
		}

		.stats {
			grid-template-columns: 1fr;
		}

		.hero-visual {
			min-height: 29rem;
		}

		.logo-orbit {
			width: min(20rem, 90vw);
		}

		.sustain-logo {
			inset: 5.8rem;
		}

		.globe-card {
			margin-top: 18rem;
		}
	}
`;

document.head.appendChild(style);

const revealTargets = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
			}
		});
	},
	{ threshold: 0.2 }
);

revealTargets.forEach(target => observer.observe(target));

const hero = document.getElementById('hero');
let ticking = false;

function updateMotion() {
	const scrollY = window.scrollY || 0;
	const progress = Math.min(scrollY / window.innerHeight, 1);
	hero.style.setProperty('--scroll', progress.toFixed(3));
	hero.style.transform = `translateY(${scrollY * 0.02}px)`;
	hero.style.setProperty('filter', `saturate(${1 + progress * 0.08})`);
	ticking = false;
}

window.addEventListener('scroll', () => {
	if (!ticking) {
		window.requestAnimationFrame(updateMotion);
		ticking = true;
	}
}, { passive: true });

updateMotion();
