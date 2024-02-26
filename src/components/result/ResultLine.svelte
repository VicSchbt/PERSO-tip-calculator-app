<script>
	export let label;
	export let value;
</script>

<div class="line">
	<div class="line__label">
		<p>{label}</p>
		<p>/ person</p>
	</div>

	<p class="line__value">
		${value}
	</p>
</div>

<style lang="scss">
	@import '../../style/config';

	.line {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&__label {
			p:first-of-type {
				color: $white;
				font-size: 16px;
			}
			p:last-of-type {
				color: $neutral-grayish-cyan;
				font-size: 12px;
			}
		}
		&__value {
			color: $primary-strong-cyan;
			font-size: 32px;
			letter-spacing: -0.67px;
		}
	}

	@media screen and (min-width: $gt-mobile) {
		.line__value {
			font-size: 48px;
		}
	}
</style>
