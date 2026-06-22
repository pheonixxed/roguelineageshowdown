export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	// Changed Moves

	// New Moves
	furantur: {
        num: 2499,
        accuracy: 100,
        basePower: 60,
        category: "Special",
        isNonstandard: null,
        name: "Furantur",
        volatileStatus: 'furantur',
        pp: 10,
        priority: 0,
        flags: { protect: 1, mirror: 1, heal: 1,},
		secondary: {
			chance: 100,
			volatileStatus: 'healblock',
		},
        condition: {
            noCopy: true,

			onStart(target) {
				this.add('-start', target, 'furantur');
				this.add('-message', `${target.name} is being drained by Furantur!`);
			},
			onResidualOrder: 14,
			onResidual(pokemon) {
				const target = this.getAtSlot(pokemon.volatiles['furantur'].sourceSlot);
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				const damage = this.damage(pokemon.baseMaxhp / (pokemon.hasType(['Ghost', 'Psychic']) ? 8 : 16));
				if (damage) {
					this.heal(damage, target, pokemon);
				}
			},
			onEnd(pokemon) {
                this.add('-end', pokemon, 'furantur');
            },


        },

        target: "normal",
        type: "Ghost",
        desc: "Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the target is Steel or Water type), rounded down, at the end of each turn during effect. This effect ends when the target is no longer active. User recovers 50% of the damage dealt each turn.",
        shortDesc: "Deals 1/16 max HP and drains 50% of that damage each turn; 1/8 on Ghost, Psychic.",
    },

    risingdragon: {
        num: 2500,
        accuracy: 100,
        basePower: 25,
        basePowerCallback(pokemon, target, move) {
            if (move.hit === 3) {
                return 40
            }
			return 25
		},
        category: "Physical",
        isNonstandard: null,
        name: "Rising Dragon",
        pp: 5,
        priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
        multihit: 3,
        condition: {
        	onStart(pokemon) {
				let applies = false;
				if (pokemon.hasType('Flying') || pokemon.hasAbility('levitate')) applies = true;
				if (pokemon.hasItem('ironball') || pokemon.volatiles['ingrain'] ||
					this.field.getPseudoWeather('gravity')) applies = false;
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					applies = true;
					this.queue.cancelMove(pokemon);
					pokemon.removeVolatile('twoturnmove');
				}
				if (pokemon.volatiles['magnetrise']) {
					applies = true;
					delete pokemon.volatiles['magnetrise'];
				}
				if (pokemon.volatiles['telekinesis']) {
					applies = true;
					delete pokemon.volatiles['telekinesis'];
				}
				if (!applies) return false;
				this.add('-start', pokemon, 'Smack Down');
			},
        },

        target: "normal",
        type: "Fighting",
        desc: "Hits 3 times. Last hit does more damage and inflicts Smack Down.",
        shortDesc: "Hits 3 times. Last hit does more damage and inflicts Smack Down.",
    },
    lightningelbow: {
        num: 2501,
        accuracy: 100,
        basePower: 80,
        category: "Physical",
        isNonstandard: null,
        name: "Lightning Elbow",
        pp: 10,
        priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
        secondary: {
			chance: 10,
			status: 'par',
		},

        target: "normal",
        type: "Electric",
        desc: "10% chance to paralyze the target.",
        shortDesc: "10% chance to paralyze the target.",
    },
    lightningdrop: {
        num: 2505,
        accuracy: 85,
        basePower: 120,
        category: "Special",
        isNonstandard: null,
        name: "Lightning Drop",
        pp: 5,
        priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1},
        secondary: {
			chance: 20,
			status: 'par',
		},

        target: "normal",
        type: "Electric",
        desc: "20% chance to paralyze the target.",
        shortDesc: "20% chance to paralyze the target.",
    },

    chargedblow: {
		num: 2502,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Charged Blow",
		pp: 5,
		priority: 0,
		flags: { contact:1, protect: 1, mirror: 1, metronome: 1, slicing: 1},
/* 		onPrepareHit(target, source, move) {
			if (move.type !== "Steel") {
				this.attrLastMove('[anim] Ivy Cudgel ' + move.type);
			}
		}, */
		onModifyType(move, pokemon) {
			switch (pokemon.species.name) {
			case 'Sigil Knight - Fire':
				move.type = 'Fire';
                move.secondary = {
                    chance: 10,
			        status: 'brn',
                };
				break;
			case 'Sigil Knight - Ice':
				move.type = 'Ice';
                move.secondary = {
                    chance: 10,
			        status: 'frz',
                };
				break;
			case 'Sigil Knight - Thunder':
				move.type = 'Electric';
                move.secondary = {
                    chance: 10,
			        status: 'par',
                };
				break;
            case 'Sigil Knight - White Flame':
				move.type = 'Fairy';
                move.secondary = {
                    chance: 10,
                    boosts: {
                        atk: -1,
                    },
                };
				break;
			}
		},
		target: "normal",
		type: "Steel",
	},
    swallowreversal: {
        num: 2503,
        accuracy: 100,
        basePower: 40,
        category: "Physical",
        isNonstandard: null,
        name: "Swallow Reversal",
        pp: 10,
        priority: 1,
		flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },

		onBasePower(basePower, source) {
			if (source.statsLoweredThisTurn) {
				this.debug('swallow buff');
				return this.chainModify(1.5);
			}
		},

        target: "normal",
        type: "Fairy",
        desc: "Usually goes first. If a stat is lowered this turn, 1.5x Power.",
        shortDesc: "Usually goes first. If a stat is lowered, 1.5x Power.",
    },
    wrathfulleap: {
        num: 2504,
        accuracy: 85,
        basePower: 150,
        category: "Physical",
        isNonstandard: null,
        name: "Wrathful Leap",
        pp: 5,
        priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1},
		recoil: [1, 2],

        target: "normal",
        type: "Dark",
        desc: "Has 1/2 recoil.",
        shortDesc: "Has 1/2 recoil.",
    },
    darkchargedblow: {
        num: 2506,
        accuracy: 100,
        basePower: 85,
        category: "Physical",
        isNonstandard: null,
        name: "Dark Charged Blow",
        pp: 5,
        priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
        secondary: {
			chance: 20,
			status: 'brn',
		},

        target: "normal",
        type: "Dark",
        desc: "20% chance to burn the target.",
        shortDesc: "20% chance to burn the target.",
    },
    floresco: {
        num: 2507,
        accuracy: 100,
        basePower: 85,
        category: "Special",
        isNonstandard: null,
        name: "Floresco",
        pp: 5,
        priority: 0,
		flags: { protect: 1, mirror: 1, slicing: 1 },
        condition: {
			onTryHit(target, source, move) {
                if (!target.isGrounded) {
                    return null;
                }
            },
        },
        secondary: {
			chance: 40,
			status: 'psn',
		},

        target: "normal",
        type: "Grass",
        desc: "40% chance to poison the target. Can only hit grounded targets.",
        shortDesc: "40% chance to poison the target. Can only hit grounded targets.",
    },
    globus: {
		num: 2508,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Globus",
		pp: 10,
		priority: 4,
		flags: { metronome: 1, noassist: 1, failcopycat: 1 },
		stallingMove: true,
		volatileStatus: 'globus',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (this.checkMoveBypassesProtect(move, source, target, false)) return;
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
                    this.boost({ spd: -1 }, source, target, this.dex.getActiveMove("Globus"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
                    this.boost({ spd: -1 }, source, target, this.dex.getActiveMove("Globus"));
				}
			},
		},
		target: "self",
		type: "Psychic",
	},
    elegantslash: {
        num: 2508,
        accuracy: 90,
        basePower: 12,
        category: "Physical",
        isNonstandard: null,
        name: "Elegant Slash",
        pp: 5,
        priority: 0,
		flags: { protect: 1, mirror: 1, slicing: 1 },
        multihit: 8,
        multiaccuracy: true,

        target: "normal",
        type: "Normal",

        shortDesc: "Hits 8 Times.",
    }, 
    needleseye: {
        num: 2508,
        accuracy: 100,
        basePower: 40,
        category: "Physical",
        isNonstandard: null,
        name: "Needle's Eye",
        pp: 10,
        priority: 1,
		flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
        critRatio: 2,

        target: "normal",
        type: "Normal",

        shortDesc: "Usually goes first.  High critical hit ratio.",
    },
    sowhat: {
		num: 2509,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "So What",
		pp: 10,
		priority: 0,
		flags: {},
		priorityChargeCallback(source) {
			source.addVolatile('chillyreception');
		},
		
		selfSwitch: true,
		condition: {
			duration: 1,
			onBeforeMovePriority: 100,
			onBeforeMove(source, target, move) {
				if (move.id !== 'So What') return;
				this.add('-prepare', source, 'So What', '[premajor]');
                this.field.setTerrain('mistyterrain');
			},
		},
		target: "all",
		type: "Normal",
	},
    shadowfan: {
        num: 2510,
        accuracy: 100,
        basePower: 95,
        category: "Physical",
        isNonstandard: null,
        name: "Shadow Fan",
        pp: 10,
        priority: 0,
		flags: { protect: 1, mirror: 1},
        secondary: {
            chance: 30,
            status: "psn",
        },

        target: "normal",
        type: "Ghost",

        shortDesc: "30% Poison Chance.",
    }, 
    bane: {
		num: 2511,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Bane",
		pp: 15,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		boosts: {
			spe: 1,
			accuracy: 1,
		},
		target: "self",
		type: "Dark",
		zMove: { boost: { atk: 1 } },
	},
    serpentstrike: {
        num: 2512,
        accuracy: 100,
        basePower: 80,
        category: "Physical",
        isNonstandard: null,
        name: "Serpent Strike",
        pp: 5,
        priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },

        secondary: {
			chance: 20,
			status: 'psn',
		},

        target: "normal",
        type: "Poison",
        desc: "20% chance to poison the target.",
        shortDesc: "20% chance to poison the target.",
    },
	lightpiercer: {
		num: 2513,
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		name: "Light Piercer",
		pp: 10,
		priority: 0,
		flags: { mirror: 1, metronome: 1 },
		multihit: 3,
		multiaccuracy: true,
		target: "normal",
		type: "Fairy",
		zMove: { basePower: 120 },
		maxMove: { basePower: 140 },
	},
	owlslash: {
        num: 2514,
        accuracy: 100,
        basePower: 95,
        category: "Physical",
        isNonstandard: null,
        name: "Owl Slash",
        pp: 5,
        priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, slicing: 1},

		critRatio:2,

        target: "normal",
        type: "Flying",
        desc: "High critical hit ratio. Slicing move.",
        shortDesc: " High critical hit ratio.",
    },
};
/*     lightningelbow: {
        num: 2501,
        accuracy: 100,
        basePower: 80,
        category: "Physical",
        isNonstandard: null,
        name: "Lightning Elbow",
        pp: 16,
        priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
        secondary: {
			chance: 10,
			status: 'par',
		},

        target: "normal",
        type: "Electric",
        desc: "Teleport forward with the power of lightning.",
        shortDesc: "Teleport forward with the power of lightning.",
    }, */