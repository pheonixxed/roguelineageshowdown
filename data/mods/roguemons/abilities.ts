export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	// Modified Abilities
	dragonize: {
		inherit: true,
		isNonstandard: null,
	},
	// New Abilities
	silverguard: {
		onSourceModifyDamage(damage, source, target, move) {
			let mod = 1;
			if (move.flags['contact']) mod /= 3;
			return this.chainModify(mod);
		},
		flags: { breakable: 1 },
		name: "Silverguard",
		isNonstandard: null,
		rating: 3.5,
		num: 10002,
	},
};
