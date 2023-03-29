<script>
	const toggleMenu = () => {
		const navLinks = document.querySelector('.nav-links');
		const menu = document.querySelector('.menu');

		navLinks.classList.toggle('active');
		menu.classList.toggle('active');
	};
</script>

<nav>
	<a href="/" class="brand">
		<img
			src="https://pbs.twimg.com/profile_images/1628968724542676992/7nELWrFM_bigger.jpg"
			alt="Logo"
		/>
		<h1>JoseDv</h1>
	</a>

	<div class="nav-links ">
		<a href="#about">About</a>
		<a href="#contact">Contact</a>
		<a href="#projects">Projects</a>
		<a href="#blog">Blog</a>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="menu" on:click={toggleMenu}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-menu"
		>
			<line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="18" x2="21" y2="18" />
		</svg>
	</div>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		width: 100vw;
		height: 80px;

		background: linear-gradient(180deg, #eaeaea88 0%, rgba(0, 0, 0, 0) 50%);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.brand img {
		height: 50px;
		width: auto;
	}

	a {
		text-decoration: none;
		color: var(--black);
	}

	.nav-links {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1rem;
		flex: 1;
	}

	.nav-links a {
		font-size: 1.25rem;
	}

	.nav-links a:hover {
		color: var(--secondary);
	}

	.menu {
		position: absolute;
		right: 2rem;
		display: none;
	}

	@media (max-width: 768px) {
		.brand img {
			display: none;
		}

		.nav-links {
			display: none;
		}

		.menu {
			display: block;
			z-index: 1;
		}

		.nav-links a {
			text-align: center;
			flex: 1;
			margin: 1rem 0;
		}

		.nav-links a:hover {
			color: var(--secondary);
		}

		:global(.nav-links.active) {
			display: flex !important;
			gap: 0px !important;
			flex-direction: column;
			position: absolute;
			top: 80px;
			right: 5px;
			width: 33%;
			background: #eaeaeaee;
			z-index: 2;
			border-radius: 20px 20px;
		}
	}
</style>
