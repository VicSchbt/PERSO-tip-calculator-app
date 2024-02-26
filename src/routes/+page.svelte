<script>
	import Calculator from '../components/calculator/Calculator.svelte';
	import Result from '../components/result/Result.svelte';
</script>

<div class="tip-calculator">
	<Calculator />
	<Result />
</div>

<style lang="scss">
	@import '../style/config';

	:global(input) {
		font-size: $form-input-font-size;
		font-family: 'Space Mono', monospace;
		font-weight: 700;
		font-style: normal;
		cursor: pointer;
	}

	:global(input[type='text']),
	:global(input[type='number']) {
		background-color: $neutral-very-light-grayish-cyan;
		border: none;
		text-align: right;
		width: 100%;
		padding: 4px 20px;
		border-radius: $input-border-radius;
		color: $neutral-very-dark-cyan;
	}

	.tip-calculator {
		width: 100%;
		background-color: $white;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		padding: 32px;
		flex-grow: 2;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
</style>
