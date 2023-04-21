<script>
	import Frame from './Frame.svelte';
</script>

<div class="services">
	<h1>Frameworks</h1>
	<div class="frameworks">
		<Frame img="/svelte.svg" title="Svelte" />
		<Frame img="/react.svg" title="React" />
		<Frame img="/flutter.svg" title="Flutter" />
		<Frame img="/firebase.svg" title="Firebase" />
		<Frame img="/github.svg" title="Github" />
		<Frame img="/git.svg" title="Git" />
		<Frame img="/next.svg" title="Next.js" />
		<Frame img="/express.svg" title="Express" />
		<Frame img="/bootstrap.svg" title="Bootstrap" />
		<Frame img="/css.svg" title="Css" />
		<Frame img="/html.svg" title="Html" />
		<Frame img="/javascript.svg" title="JavaScript" />
	</div>
</div>

<style>
	.services {
		margin: 4rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80%;
		text-align: center;
		gap: 1rem;
	}
	.frameworks {
		padding: 1rem;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		grid-gap: 2rem;
	}
</style>
