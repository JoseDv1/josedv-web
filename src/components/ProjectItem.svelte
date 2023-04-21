<script>
	// Props
	export let img;
	export let title;
	export let description;
	export let live;
	export let github;
</script>

<div class="project-item">
	<div class="project-item__img">
		<img src={img} alt={title} />
	</div>
	<div class="project-item__content">
		<h3>{title}</h3>
		<p>
			{description}
		</p>
		<div class="project-item__content__links">
			{#if live}
				<a href={live} target="_blank">Live</a>
			{/if}
			<a href={github} target="_blank">Github</a>
		</div>
	</div>
</div>

<style>
	.project-item {
		padding: 1rem 2rem;

		width: 100%;
		display: flex;
		flex-wrap: wrap;

		justify-content: space-around;
		align-items: center;
		gap: 2rem;
		border: #fff solid 1px;
		border-radius: 50px;
		-wenkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: var(--default-shadow);
	}
	.project-item__img img {
		height: auto;
		width: 200px;
		object-fit: cover;
	}
	.project-item__content {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		text-align: left;
	}

	.project-item__content__links {
		width: 100%;
		margin-top: 0.5rem;
		display: flex;
		gap: 1rem;
		justify-content: flex-end;
	}
	.project-item__content__links a {
		color: #fff;
		background-color: var(--primary);
		box-shadow: var(--default-shadow);

		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
	}
	p {
		font-size: 1.2rem;
	}
</style>
