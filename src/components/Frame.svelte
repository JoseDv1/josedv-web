<script>
	export let title;
	export let img;
</script>

<div class="frame">
	<img src={img} alt={title} />
	<span>{title}</span>
</div>

<style>
	.frame {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 0.5rem;

		height: 100%;
		width: 100%;

		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		background-color: rgba(255, 255, 255, 0.5);

		box-shadow: var(--default-shadow);
		border-radius: 50px;
	}

	.frame img {
		width: 80px;
		height: 80px;
	}

	.frame span {
		margin-top: 0.5rem;
		font-size: 1.2rem;
		font-weight: 700;
	}
</style>
