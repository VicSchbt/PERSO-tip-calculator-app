import { writable, derived } from 'svelte/store';

export const bill = writable(null);
export const tip = writable(null);
export const personNumber = writable(null);

export const tipAmount = derived(
	[bill, tip, personNumber],
	([$bill, $tip, $personNumber]) => {
		return $personNumber === null ? 0 : Number(($bill * $tip) / 100 / $personNumber).toFixed(2);
	},
	0
);

export const total = derived(
	[bill, tip, personNumber],
	([$bill, $tip, $personNumber]) => {
		return $personNumber === null
			? 0
			: Number(($bill * (1 + $tip / 100)) / $personNumber).toFixed(2);
	},
	0
);

export const resetBtnDisabled = derived(
	[bill, tip, personNumber],
	([$tip, $bill, $personNumber]) => $tip === null || $bill === null || $personNumber === null,
	true
);
