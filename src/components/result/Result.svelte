<script>
	import ResultLine from './ResultLine.svelte';

	export let tip = 4.27;
	export let total = 32.79;
</script>

<div class="result">
	<ResultLine label="Tip Amount" value={tip} />
	<ResultLine label="Total" value={total} />
	<button>Reset</button>
</div>

<style lang="scss">
	@import '../../style/config';
	.result {
		background-color: $neutral-very-dark-cyan;
		padding: 24px;
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	button {
		color: $neutral-very-dark-cyan;
		background-color: $primary-strong-cyan;
		text-transform: uppercase;
		font-size: 20px;
		border: none;
		border-radius: $input-border-radius;
		padding: 8px;
	}
</style>
