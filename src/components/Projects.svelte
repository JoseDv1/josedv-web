<script>
	import ProjectItem from './ProjectItem.svelte';

	let items = [
		{
			title: 'Melodimatch',
			description:
				'MelodiMatch es una aplicación, desarrollada en Svelte con la API de Spotify, de descubrimiento musical que te ayuda a encontrar nueva música basada en tus artistas y canciones favoritos, guarda las canciones que descubres y crea una lista de reproducción con ellas.',
			img: '/Melodimatch.webp',
			live: 'https://melodimatch.vercel.app/',
			github: 'https://github.com/JoseDv1/Melodimatch'
		},
		{
			title: 'Stone Drinks',
			description:
				'Una landing page hecha en react para mi bar favorito, Stone Drinks, donde puedes ver el menú y promociones',
			img: '/StoneDrinks.webp',
			live: 'https://stone-drinks-web.vercel.app/',
			github: 'https://github.com/JoseDv1/StoneDrinks-Web'
		},
		{
			title: 'NaturAle App',
			description:
				'NaturAle es una aplicación de Nutricion y Salud desarrollada en Flutter con Dart y Firebase, donde puedes crear una cuenta, iniciar sesión, crear un perfil, agregar alimentos a tu diario y recibir asesorias de Ale',
			img: '/NaturAle.webp',
			live: '',
			github: 'https://github.com/JoseDv1/NaturAle'
		},
		{
			title: 'Portafolio',
			description:
				'Este portafolio fue desarrollado en Svelte y SvelteKit, y desplegado en github pages, donde puedes ver mis proyectos, habilidades y contactarme',
			live: 'http://josedv.com',
			github: 'https://github.com/JoseDv1/josedv-web'
		}
	];
</script>

<h1>Proyectos</h1>
<section>
	{#each items as item}
		<ProjectItem {...item} />
	{/each}
</section>

<style>
	section {
		font-size: 1.5rem;
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
		justify-content: center;
		text-align: center;
		gap: 1rem;
	}
</style>
