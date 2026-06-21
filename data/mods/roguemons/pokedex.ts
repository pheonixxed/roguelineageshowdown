export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	//[NOTE] not necessary for server sided validation, pokemons are validated based on the Ultra tag, and their ../format-data tier
	// Ultra Classes
	necromancer: {
		num: 9999,
		name: "Necromancer",
		types: ["Dark","Ghost"],
		baseStats: { hp: 70, atk: 74, def: 96, spa: 115, spd: 118, spe: 52 },
		tags: ["Ultra"],
		abilities: { 0: "Cursed Body", 1:"Prankster"},
		weightkg: 47, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	oni: {
		num: 10000,
		name: "Oni",
		types: ["Fighting"],
		baseStats: { hp: 95, atk: 120, def: 90, spa: 65, spd: 75, spe: 85 },
		tags: ["Ultra"],
		abilities: { 0: "Iron Fist"},
		weightkg: 97, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	dragonsage: {
		num: 10001,
		name: "Dragon Sage",
		types: ["Dragon","Electric"],
		baseStats: { hp: 70, atk: 115, def: 75, spa: 90, spd: 70, spe: 110 },
		tags: ["Ultra"],
		abilities: { 0: "Dragonize", 1: "Static"},
		weightkg: 53, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	ronin: {
		num: 10002,
		name: "Ronin",
		types: ["Water","Fairy"],
		baseStats: { hp: 70, atk: 101, def: 70, spa: 106, spd: 65, spe: 111 },
		tags: ["Ultra"],
		abilities: { 0: "Quick Draw", 1: "Adaptability"},
		weightkg: 45, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	abysswalker: {
		num: 10003,
		name: "Abysswalker",
		types: ["Dark"],
		baseStats: { hp: 110, atk: 140, def: 120, spa: 5, spd: 60, spe: 50 },
		tags: ["Ultra"],
		abilities: { 0: "Reckless"},
		weightkg: 445, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	sigilknight: {
		num: 10004,
		name: "Sigil Knight",
		types: ["Steel"],
		baseStats: { hp: 100, atk: 110, def: 84, spa: 79, spd: 82, spe: 80 },
		tags: ["Ultra"],
		abilities: { 0: "Sharpness"},
		weightkg: 302, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
		otherFormes: [
			"Sigil Knight-Fire", "Sigil Knight-Ice", "Sigil Knight-Thunder", "Sigil Knight-White Flame"
		],
		formeOrder: [
			"Sigil Knight", "Sigil Knight-Fire", "Sigil Knight-Ice", "Sigil Knight-Thunder", "Sigil Knight-White Flame"
		],
	}, 
	sigilknightflame: {
		num: 10005,
		name: "Sigil Knight-Flame",
		baseSpecies: "Sigil Knight",
		types: ["Steel","Fire"],
		baseStats: { hp: 100, atk: 110, def: 84, spa: 79, spd: 82, spe: 80 },
		tags: ["Ultra"],
		abilities: { 0: "Sharpness"},
		requiredItem: "Flame Charge",
		weightkg: 302, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
		changesFrom: "Sigil Knight",
	}, 
	sigilknightice: {
		num: 10006,
		name: "Sigil Knight-Ice",
		types: ["Steel","Ice"],
		baseStats: { hp: 100, atk: 110, def: 84, spa: 79, spd: 82, spe: 80 },
		tags: ["Ultra"],
		abilities: { 0: "Sharpness"},
		requiredItem: "Ice Charge",
		weightkg: 302, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
		changesFrom: "Sigil Knight",
	}, 
	sigilknightthunder: {
		num: 10007,
		name: "Sigil Knight-Thunder",
		types: ["Steel","Electric"],
		baseStats: { hp: 100, atk: 110, def: 84, spa: 79, spd: 82, spe: 80 },
		tags: ["Ultra"],
		abilities: { 0: "Sharpness"},
		requiredItem: "Thunder Charge",
		weightkg: 302, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
		changesFrom: "Sigil Knight",
	}, 
	sigilknightwhiteflame: {
		num: 10008,
		name: "Sigil Knight-White Flame",
		types: ["Steel","Fairy"],
		baseStats: { hp: 100, atk: 110, def: 84, spa: 79, spd: 82, spe: 80 },
		tags: ["Ultra"],
		abilities: { 0: "Sharpness"},
		requiredItem: "White Flame Charge",
		weightkg: 302, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
		changesFrom: "Sigil Knight",
	}, 
	wraithknight: {
		num: 10011,
		name: "Wraith Knight",
		types: ["Steel","Dark"],
		baseStats: { hp: 120, atk: 108, def: 100, spa: 97, spd: 60, spe: 50 },
		tags: ["Ultra"],
		abilities: { 0: "Sword of Ruin", 1: "Intimidate"},
		weightkg: 325, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	druid: {
		num: 10012,
		name: "Druid",
		types: ["Ground","Grass"],
		baseStats: { hp: 115, atk: 52, def: 118, spa: 74, spd: 96, spe: 70 },
		tags: ["Ultra"],
		abilities: { 0: "Regenerator", H: "Grassy Surge"},
		weightkg: 72, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	masterillusionist: {
		num: 10013,
		name: "Master Illusionist",
		types: ["Psychic","Fairy"],
		baseStats: { hp: 70, atk: 60, def: 75, spa: 130, spd: 110, spe: 80 },
		tags: ["Ultra"],
		abilities: { 0: "Psychic Surge"},
		weightkg: 44, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	whisperer: {
		num: 10014,
		name: "Whisperer",
		types: ["Normal","Ghost"],
		baseStats: { hp: 60, atk: 110, def: 70, spa: 105, spd: 70, spe: 136 },
		tags: ["Ultra"],
		abilities: { 0: "Technician", 1:"Silverguard"},
		weightkg: 5, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	cadence: {
		num: 10015,
		name: "Cadence",
		types: ["Normal"],
		baseStats: { hp: 106, atk: 60, def: 111, spa: 105, spd: 111, spe: 127 },
		tags: ["Ultra"],
		abilities: { 0: "Punk Rock", 1:"Silverguard", H:"Friend Guard"},
		weightkg: 70, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	facelessone: {
		num: 10016,
		name: "Faceless One",
		types: ["Ghost"],
		baseStats: { hp: 55, atk: 125, def: 50, spa: 80, spd: 50, spe: 125 },
		tags: ["Ultra"],
		abilities: { 0: "Technician", 1:"Speed Boost"},
		weightkg: 40, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	shinobi: {
		num: 10017,
		name: "Shinobi",
		types: ["Flying","Fighting"],
		baseStats: { hp: 75, atk: 120, def: 80, spa: 80, spd: 80, spe: 110 },
		tags: ["Ultra"],
		abilities: { 0: "Gale Wings"},
		weightkg: 84, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	deepknight: {
		num: 10018,
		name: "Deep Knight",
		types: ["Fairy","Poison"],
		baseStats: { hp: 60, atk: 97, def: 113, spa: 97, spd: 113, spe: 65},
		tags: ["Ultra"],
		abilities: { 0: "Intimidate", 1:"Sticky Hold"},
		weightkg: 291, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	dragonslayer: {
		num: 10019,
		name: "Dragon Slayer",
		types: ["Dragon","Steel"],
		baseStats: { hp: 100, atk: 119, def: 86, spa: 70, spd: 79, spe: 91},
		tags: ["Ultra"],
		abilities: { 0: "Full Metal Body"},
		weightkg: 156, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	vanguard: {
		num: 10020,
		name: "Vanguard",
		types: ["Fire","Fighting"],
		baseStats: { hp: 85, atk: 125, def: 76, spa: 80, spd: 99, spe: 80},
		tags: ["Ultra"],
		abilities: { 0: "Blaze", 1:"Flame Body"},
		weightkg: 187, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 

	// Races

	navaran: {
		num: 10010,
		name: "Navaran",
		types: ["Normal"],
		baseStats: { hp: 60, atk: 60, def: 60, spa: 60, spd: 60, spe: 60 },
		abilities: { 0: "Imposter"},
		weightkg: 1, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
		tags: ["Ultra"],
		otherFormes: [
			"Greater-Navaran"
		],
		formeOrder: [
			"Navaran", "Greater-Navaran"
		],
	}, 
	greaternavaran: {
		num: 10101,
		name: "Greater-Navaran",
		types: ["Bug"],
		baseStats: { hp: 110, atk: 110, def: 110, spa: 110, spd: 110, spe: 110 },
		abilities: { 0: "Trace"},
		requiredItem: "Jack of Spades",
		weightkg: 4, // placeholder
		tags: ["Ultra"],
		eggGroups: ["Undiscovered"], // placeholder
		changesFrom: "Navaran",
	}, 

	// Monsters

	sandserpent: {
		num: 10200,
		name: "Sand Serpent",
		types: ["Ground","Dragon"],
		baseStats: { hp: 92, atk: 123, def: 133, spa: 88, spd: 62, spe: 37},
		tags: ["Ultra"],
		abilities: { 0: "Sand Stream"},
		weightkg: 600, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
};
/* 	faerwork: {
		num: 2012,
		name: "Faerwork",
		types: ["Fire", "Fairy"],
		baseStats: { hp: 60, atk: 60, def: 80, spa: 105, spd: 80, spe: 105 },
		abilities: { 0: "Illuminate", 1: "Flash Fire", H: "Sheer Force" },
		weightkg: 50, // placeholder
		eggGroups: ["Undiscovered"], // placeholder
	}, 
	
	*/
/* 	alcremie: {
		inherit: true,
		baseStats: { hp: 90, atk: 60, def: 75, spa: 110, spd: 121, spe: 64 },
		abilities: { 0: "Aroma Veil" },
		otherFormes: [
			"Alcremie-Sweetened", "Alcremie-Sweetened-Ruby-Cream", "Alcremie-Sweetened-Matcha-Cream",
			"Alcremie-Sweetened-Mint-Cream", "Alcremie-Sweetened-Lemon-Cream", "Alcremie-Sweetened-Salted-Cream",
			"Alcremie-Sweetened-Ruby-Swirl", "Alcremie-Sweetened-Caramel-Swirl", "Alcremie-Sweetened-Rainbow-Swirl",
		],
		formeOrder: [
			"Alcremie", "Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream",
			"Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl", "Alcremie-Sweetened", "Alcremie-Sweetened-Ruby-Cream",
			"Alcremie-Sweetened-Matcha-Cream", "Alcremie-Sweetened-Mint-Cream", "Alcremie-Sweetened-Lemon-Cream", "Alcremie-Sweetened-Salted-Cream",
			"Alcremie-Sweetened-Ruby-Swirl", "Alcremie-Sweetened-Caramel-Swirl", "Alcremie-Sweetened-Rainbow-Swirl",
		],
	}, */
