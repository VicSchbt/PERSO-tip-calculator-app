<script>
	import ResultLine from './ResultLine.svelte';

	export let tip = 4.27;
	export let total = 32.79;
	export let btnDisabled = true;
</script>

<div class="result">
	<div class="lines">
		<ResultLine label="Tip Amount" value={tip} />
		<ResultLine label="Total" value={total} />
	</div>
	<button class:disabled={btnDisabled}>Reset</button>
</div>

<style lang="scss">
	@import '../../style/config';

	.result,
	.lines {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.result {
		background-color: $neutral-very-dark-cyan;
		padding: 24px;
		border-radius: 16px;
		justify-content: space-between;
	}
	button {
		color: $neutral-very-dark-cyan;
		background-color: $primary-strong-cyan;
		text-transform: uppercase;
		font-size: 20px;
		border: none;
		border-radius: $input-border-radius;
		padding: 8px;
		cursor: pointer;
		&:hover {
			background-color: $primary-active-cyan;
		}
	}

	.disabled {
		background-color: #0d686d;
	}

	@media screen and (min-width: $gt-mobile) {
		.result {
			width: 50%;
			padding: 32px;
		}
	}
</style>
