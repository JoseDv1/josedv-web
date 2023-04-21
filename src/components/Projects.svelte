<script>
	import ProjectItem from './ProjectItem.svelte';
</script>

<div class="projects">
	<h1>Projects</h1>
	<ProjectItem
		description="MelodiMatch es una aplicación, desarrollada en Svelte con la API de Spotify, de descubrimiento musical que te ayuda a encontrar nueva música basada en tus artistas y canciones favoritos, guarda las canciones que descubres y crea una lista de reproducción con ellas."
		title="Melodimatch"
		img={'/Melodimatch.webp'}
		live="https://melodimatch.vercel.app/"
		github="https://github.com/JoseDv1/Melodimatch"
	/>
	<ProjectItem
		description=" Una landing page hecha en react para mi bar favorito, Stone Drinks, donde puedes ver el menú y promociones"
		title="Stone Drinks"
		img={'/StoneDrinks.webp'}
		live="https://stone-drinks-web.vercel.app/"
		github="https://github.com/JoseDv1/StoneDrinks-Web"
	/>
	<ProjectItem
		title="NaturAle App"
		description="NaturAle es una aplicación de Nutricion y Salud desarrollada en Flutter con Dart y Firebase, donde puedes crear una cuenta, iniciar sesión, crear un perfil, agregar alimentos a tu diario y recibir asesorias de Ale"
		img={'/NaturAle.webp'}
		live=""
		github="https://github.com/JoseDv1/NaturAle"
	/>
</div>

<style>
	.projects {
		margin: 4rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 0 10%;
		gap: 1rem;
		text-align: center;
	}
</style>
