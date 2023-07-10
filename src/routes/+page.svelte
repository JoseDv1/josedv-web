<script>
	import About from '../components/About.svelte';
	import Services from '../components/Services.svelte';
	import Projects from '../components/Projects.svelte';
</script>

<div class="page">
	<About />
	<Services />
	<Projects />
	<!-- TODO: Add Formation and experience Component -->
	<!-- TODO: Add Courses and certification component -->
	<!-- TODO: Add Hobbies Component -->
	<!-- TODO: Add Contact component -->
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 2rem;
		align-items: center;
		justify-content: center;
	}
</style>
