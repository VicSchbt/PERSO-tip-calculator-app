<script>
	import { bill, tip, personNumber } from '../../store/store';
	import TipSelector from './TipSelector.svelte';

	const tipValues = [5, 10, 15, 25, 50];
	let defaultTip = null;
	let customTip = null;

	$: invalidPeopleNumber = personNumber === 0;

	const handleTipSelection = () => {
		if (customTip !== null) defaultTip = null;
		if (defaultTip !== null) customTip = null;
		tip.set(customTip ? customTip : defaultTip);
	};

	$: if ($tip === null) {
		customTip = null;
		defaultTip = null;
	}
</script>

<form>
	<label class="label">
		Bill
		<input type="number" placeholder="0" bind:value={$bill} class="input input-bill" />
	</label>

	<fieldset>
		<legend>Select Tip %</legend>
		{#each tipValues as tipValue}
			<TipSelector bind:group={defaultTip} {tipValue} on:handleTipSelection={handleTipSelection} />
		{/each}
		<input type="text" placeholder="Custom" bind:value={customTip} on:change={handleTipSelection} />
	</fieldset>
	<label class="label">
		Number of People
		{#if invalidPeopleNumber}
			<span class="error-message">Can't be zero</span>
		{/if}
		<input
			type="number"
			placeholder="0"
			bind:value={$personNumber}
			class="input input-person"
			class:error={invalidPeopleNumber}
		/>
	</label>
</form>

<style lang="scss">
	@import 'Calculator.scss';
</style>
