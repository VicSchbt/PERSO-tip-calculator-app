<svelte:head>
	<title>Frontend Mentor | Tip calculator app</title>
</svelte:head>
<main>
	<img class="logo" src="images/logo.svg" alt="logo" />

	<slot />
</main>

<div class="attribution">
	Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
		>Frontend Mentor</a
	>. Coded by <a href="#">Victoire Schubert</a>.
</div>

<style lang="scss">
	@import '../style/config';

	.attribution {
		display: none;
	}

	:global(*, ::after, ::before) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Space Mono', monospace;
		font-weight: 700;
		font-style: normal;
	}

	:global(body) {
		height: 100vh;
		background-color: $neutral-light-grayish-cyan;
	}

	.logo {
		padding: 50px 0;
	}

	main {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
