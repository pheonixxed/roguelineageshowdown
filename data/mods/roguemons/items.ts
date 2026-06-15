export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	// Changed Items
	// Custom Items
	flamecharge: {
		name: "Flame Charge",
		spritenum: 759,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.types.includes(move.type)) {
				return this.chainModify(1.1);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (attacker.types.includes(move.type)) {
				return this.chainModify(1.1);
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Sigil Knight') return false;
			return true;
		},
		forcedForme: "Sigil Knight-Flame",
		itemUser: ["Sigil Knight-Flame"],
		shortDesc: "Sigil Knight-Flame: 1.1x fire & steel attack.",
		num: 1001,
		gen: 9,
	},
	icecharge: {
		name: "Ice Charge",
		spritenum: 760,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.types.includes(move.type)) {
				return this.chainModify(1.1);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (attacker.types.includes(move.type)) {
				return this.chainModify(1.1);
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Sigil Knight') return false;
			return true;
		},
		forcedForme: "Sigil Knight-Ice",
		itemUser: ["Sigil Knight-Ice"],
		shortDesc: "Sigil Knight-Ice: 1.1x ice & steel attack.",
		num: 1002,
		gen: 9,
	},
	thundercharge: {
		name: "Thunder Charge",
		spritenum: 761,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.types.includes(move.type)) {
				return this.chainModify(1.1);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (attacker.types.includes(move.type)) {
				return this.chainModify(1.1);
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Sigil Knight') return false;
			return true;
		},
		forcedForme: "Sigil Knight-Thunder",
		itemUser: ["Sigil Knight-Thunder"],
		shortDesc: "Sigil Knight-Thunder: 1.1x electric & steel attack.",
		num: 1003,
		gen: 9,
	},
	whiteflamecharge: {
		name: "White Flame Charge",
		spritenum: 762,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.types.includes(move.type)) {
				return this.chainModify(1.1);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (attacker.types.includes(move.type)) {
				return this.chainModify(1.1);
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Sigil Knight') return false;
			return true;
		},
		forcedForme: "Sigil Knight-White Flame",
		itemUser: ["Sigil Knight-White Flame"],
		shortDesc: "Sigil Knight-White Flame: 1.1x fairy & steel attack.",
		num: 1004,
		gen: 9,
	},
	jackofspades: {
		name: "Jack of Spades",
		spritenum: 388,

		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Navaran') return false;
			return true;
		},
		forcedForme: "Greater-Navaran",
		itemUser: ["Greater-Navaran"],
		shortDesc: "...",
		num: 1005,
		gen: 9,
	},
};
//[[picktreelite: {
//		name: "Picktreelite",
//		spritenum: 576,
//		megaStone: { "Picktreebel": "Picktreebel-Mega" },
//		itemUser: ["Picktreebel"],
//		onTakeItem(item, source) {
//			return !item.megaStone?.[source.baseSpecies.baseSpecies];
//		},
//		gen: 9,
//		shortDesc: "If held by a Picktreebel, this item allows it to Mega Evolve in battle.",
//		num: -1002,
//	},
//]]