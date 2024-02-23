<script>
	import TipSelector from './TipSelector.svelte';

	const tipValues = [5, 10, 15, 25, 50];

	let bill;
	let personNumber;
	let tip;
</script>

<form>
	<label class="label">
		Bill
		<input type="number" placeholder="0" bind:value={bill} class="input input-bill" />
	</label>

	<fieldset>
		<legend>Select Tip %</legend>
		{#each tipValues as tipValue}
			<TipSelector bind:group={tip} {tipValue} />
		{/each}
		<input type="text" placeholder="Custom" />
	</fieldset>
	<label class="label">
		Number of People
		<input type="number" placeholder="0" bind:value={personNumber} class="input input-person" />
	</label>
</form>

<style lang="scss">
	@import 'Calculator.scss';
</style>
