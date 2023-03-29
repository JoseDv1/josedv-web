<script>
	import { marked } from 'marked';

	import { ReadDoc } from '@firebase_app/firestore.js';
	export let data;

	marked.use({
		breaks: true
	});
</script>

{#await ReadDoc('blogs', data.id)}
	<p>Loading...</p>
{:then blog}
	<div class="blog">
		<div class="content">
			{@html marked.parse(blog.content)}
		</div>
	</div>
{/await}

<style>
	.blog {
		background-color: #eaeaea88;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(0.5rem);
		box-shadow: var(--default-shadow);
		border-radius: 0.5rem;
		width: calc(100% - 5rem);
		padding: 1rem;
		margin: 2rem 0;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.blog .content {
		margin: 1rem 2rem;
	}
</style>
