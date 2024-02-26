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
		border-top-left-radius: 24px;
		border-top-right-radius: 24px;
		padding: 32px;
		flex-grow: 2;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	@media screen and (min-width: $gt-mobile) {
		.tip-calculator {
			width: 70%;
			max-width: 920px;
			flex-grow: 1;
			border-radius: 24px;
			-webkit-box-shadow: 0px 32px 43px 0px rgba(79, 166, 175, 0.2);
			box-shadow: 0px 32px 43px 0px rgba(79, 166, 175, 0.2);
			flex-direction: row;
		}
	}
</style>
