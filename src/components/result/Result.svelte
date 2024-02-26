<script>
	import { tip, bill, personNumber, tipAmount, total, resetBtnDisabled } from '../../store/store';
	import ResultLine from './ResultLine.svelte';

	const resetValues = () => {
		tip.set(null);
		bill.set(null);
		personNumber.set(null);
	};
</script>

<div class="result">
	<div class="lines">
		<ResultLine label="Tip Amount" value={$tipAmount} />
		<ResultLine label="Total" value={$total} />
	</div>
	<button
		class:disabled={$resetBtnDisabled}
		disabled={$resetBtnDisabled}
		on:click|preventDefault={resetValues}>Reset</button
	>
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
			&:enabled {
				background-color: $primary-active-cyan;
			}
			&:disabled {
				cursor: default;
			}
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
