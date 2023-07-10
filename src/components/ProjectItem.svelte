<script>
	// Props
	export let img;
	export let title;
	export let description;
	export let live;
	export let github;
</script>

<section>
	<img src={img} alt={title} />

	<article>
		<h3>{title}</h3>
		<p>
			{description}
		</p>
		<div>
			{#if live}
				<a href={live} target="_blank">Live</a>
			{/if}

			<a href={github} target="_blank">Github</a>
		</div>
	</article>
</section>

<style>
	section {
		padding: 1rem 2rem;

		width: 100%;
		display: flex;
		flex-wrap: wrap;

		justify-content: space-around;
		align-items: center;
		gap: 2rem;
		border-radius: 50px;

		-wenkit-backdrop-filter: blur(5px);
		-moz-backdrop-filter: blur(5px);
		-o-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);

		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: var(--default-shadow);
	}
	section img {
		height: auto;
		width: 200px;
		object-fit: cover;
	}
	article {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		text-align: left;
	}

	section article div {
		width: 100%;
		padding: 1rem;
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}
	section article div a {
		color: #fff;
		background-color: var(--primary);
		box-shadow: var(--default-shadow);

		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
	}
	p {
		font-size: 1.2rem;
	}

	@media (max-width: 600px) {
		section article div {
			justify-content: center;
		}
	}
</style>
