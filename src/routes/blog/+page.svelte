<script>
	import { onMount } from 'svelte';
	import { ReadFromCollection } from '@firebase_app/firestore.js';
</script>

<h1>Blogs</h1>
{#await ReadFromCollection('blogs')}
	<p>Loading...</p>
{:then blogs}
	{#each blogs as blog}
		<div class="blog-card">
			<a href={`/blog/${blog.id}`}>
				<h1>
					{blog.title}
				</h1>
			</a>
		</div>
	{/each}
{/await}

<style>
	.blog-card {
		background-color: #eaeaea88;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(0.5rem);
		box-shadow: var(--default-shadow);
		border-radius: 0.5rem;
		width: calc(100% - 2rem);
		padding: 1rem;
		margin: 1rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.blog-card a {
		color: var(--black);
		text-decoration: none;
	}

	.blog-card a:hover {
		text-decoration: underline;
	}
</style>
