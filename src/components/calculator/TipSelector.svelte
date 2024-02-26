<script>
	export let group;
	export let tipValue;
</script>

<div class="tip-selector">
	<input id={`tip-${tipValue}`} type="radio" bind:group value={tipValue} />
	<label for={`tip-${tipValue}`}>
		{`${tipValue}%`}
	</label>
</div>

<style lang="scss">
	@import '../../style/config';

	input[type='radio']:checked,
	input[type='radio']:not(:checked) {
		position: absolute;
		left: -9999px;
		width: 0;
		height: 0;
		visibility: hidden;
	}

	input[type='radio']:checked + label,
	input[type='radio']:not(checked) + label {
		position: relative;
		display: inline-block;
		padding: 4px 0;
		width: 100%;
		text-align: center;
		font-size: $form-input-font-size;
		cursor: pointer;
		border-radius: $input-border-radius;
	}
	input[type='radio']:not(checked) + label {
		background-color: $neutral-very-dark-cyan;
		color: $white;
	}
	input[type='radio']:not(checked) + label:hover {
		background-color: $primary-active-cyan;
		color: $neutral-very-dark-cyan;
	}
	input[type='radio']:checked + label {
		background-color: $primary-strong-cyan;
		color: $neutral-very-dark-cyan;
	}
</style>
