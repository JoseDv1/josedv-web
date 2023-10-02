<script>
	import About from '../components/About.svelte';
	import Services from '../components/Services.svelte';
	import Projects from '../components/Projects.svelte';
	import Formation from '../components/Formation.svelte';
	import Hobbies from '../components/Hobbies.svelte';
</script>

<div class="page">
	<About />
	<Formation />
	<Services />
	<Projects />
	<Hobbies />
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
