<script>
	import { marked } from 'marked';
	import { WriteToCollection } from '@firebase_app/firestore.js';

	marked.use({
		breaks: true
	});

	let content = '';
	let title = '';
	let description = '';
	let tags = '';

	async function save(e) {
		e.preventDefault();
		const normalizedTags = tags.split(',').map((tag) => tag.trim());

		const data = {
			title,
			description,
			tags: normalizedTags,
			content
		};

		await WriteToCollection('blogs', data);
	}
</script>

<div class="container">
	<h1>Nuevo blog</h1>

	<input type="text" placeholder="Título" autocomplete="none" bind:value={title} />
	<input type="text" placeholder="Descripción" autocomplete="none" bind:value={description} />
	<input type="text" placeholder="Tags" autocomplete="none" bind:value={tags} />
	<div class="editor">
		<textarea placeholder="Contenido" autocomplete="none" bind:value={content} />
		<div class="preview">
			{@html marked.parse(content)}
		</div>
	</div>

	<button on:click={save}>Guardar</button>
</div>

<style>
	.container {
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
		gap: 1rem;
	}

	.container h1 {
		font-size: 2rem;
		font-weight: 600;
		margin: 0;
	}

	.container input {
		padding: 0.5rem;
		border-radius: 0.5rem;
		border: none;
		outline: none;
	}

	.container button {
		padding: 0.5rem;
		border-radius: 0.5rem;
		border: none;
		outline: none;
		background-color: #eaeaea;
		transition: all 0.3s ease-out;
	}

	.container button:hover {
		background-color: var(--primary);
		color: var(--white);
		cursor: pointer;
	}
	.container textarea {
		min-height: 50vh;
		padding: 0.5rem;
		border-radius: 0.5rem;
		border: none;
		outline: none;
		width: 40%;
		resize: none;
	}

	.container .editor {
		display: flex;
		gap: 1rem;
	}

	.container .preview {
		width: 60%;
		background-color: #eaeaea88;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(0.5rem);
		box-shadow: var(--default-shadow);
		border-radius: 0.5rem;
		padding: 1.5rem;
	}

	:global(.container .preview ol, .container .preview ul) {
		padding: 1rem;
	}

	.container .preview::-webkit-scrollbar {
		width: 0.5rem;
	}

	.container .preview::-webkit-scrollbar-track {
		background: transparent;
	}

	.container .preview::-webkit-scrollbar-thumb {
		background: #23232344;
		border-radius: 0.5rem;
	}
</style>
