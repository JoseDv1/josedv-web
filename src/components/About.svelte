<div class="about" id="about">
	<div class="presentation">
		<p>
			Hola, soy un <strong> Desarrollador web</strong> en busca de experiencia y oportunidades para
			crecer profesionalmente. <br />
			Soy una persona competitiva que busca siempre el mejor resultado posible en cada proyecto. Me adapto
			fácilmente a los cambios y a las nuevas ideas, y valoro la diversidad de opiniones y perspectivas.
			Me gustan los retos y me enfoco en lo que hago, siempre busco aprender y mejorar.
		</p>
		<img src="/Jose.webp" alt="JoseDv1" />
	</div>
</div>

<style>
	.about {
		margin-top: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
	}

	.presentation {
		max-width: 80%;
		max-height: 70%;
		padding: 40px;
		border-radius: 50px;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: var(--default-shadow);
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		align-items: center;
		z-index: -1;
	}

	.presentation p {
		font-size: 1.5rem;
	}

	.presentation img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		margin-right: 20px;
		box-shadow: var(--default-shadow);
		border: 1px solid var(--black);
	}

	@media (max-width: 769px) {
		.presentation {
			font-size: 1.2rem;
			display: flex;
			flex-direction: column-reverse;
			gap: 1.5rem;
		}

		.presentation img {
			width: 150px;
			height: 150px;
		}

		.presentation p {
			font-size: 1.2rem;
		}
	}
</style>
