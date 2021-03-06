/* eslint-disable */
'use strict';
const db = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.Heat.bulkCreate([
      {
        "name": "Jimmy Butler",
        "fieldgoal": 0.455,
        "rebounds": 6.7,
        "assists": 6,
        "turnovers": 2.2,
        "personalfouls": 1.4,
        "points": 19.9,
        "jersey": 22,
        "position": "SF",
        "height": "6'7",
        "weight": 230
      },
      {
        "name": "Bam Adebayo",
        "fieldgoal": 0.557,
        "rebounds": 10.2,
        "assists": 5.1,
        "turnovers": 2.8,
        "personalfouls": 2.5,
        "points": 15.9,
        "jersey": 13,
        "position": "PF",
        "height": "6'9",
        "weight": 255
      },
      {
        "name": "Justise Winslow",
        "fieldgoal": 0.388,
        "rebounds": 6.6,
        "assists": 4,
        "turnovers": 2.2,
        "personalfouls": 3.5,
        "points": 11.3,
        "jersey": 20,
        "position": "PF",
        "height": "6'6",
        "weight": 222
      },
      {
        "name": "Duncan Robinson",
        "fieldgoal": 0.47,
        "rebounds": 3.2,
        "assists": 1.4,
        "turnovers": 1,
        "personalfouls": 2.6,
        "points": 13.5,
        "jersey": 55,
        "position": "SG",
        "height": "6'7",
        "weight": 215
      },
      {
        "name": "Kendrick Nunn",
        "fieldgoal": 0.439,
        "rebounds": 2.7,
        "assists": 3.3,
        "turnovers": 1.7,
        "personalfouls": 2.3,
        "points": 15.3,
        "jersey": 25,
        "position": "SG",
        "height": "6'2",
        "weight": 190
      },
      {
        "name": "Goran Dragic",
        "fieldgoal": 0.441,
        "rebounds": 3.2,
        "assists": 5.1,
        "turnovers": 2.4,
        "personalfouls": 2.1,
        "points": 16.2,
        "jersey": 7,
        "position": "PG",
        "height": "6'3",
        "weight": 190
      },
      {
        "name": "Jae Crowder",
        "fieldgoal": 0.482,
        "rebounds": 5.4,
        "assists": 1.8,
        "turnovers": 0.8,
        "personalfouls": 2.9,
        "points": 11.9,
        "jersey": 99,
        "position": "SF",
        "height": "6'7",
        "weight": 235
      },
      {
        "name": "Tyler Herro",
        "fieldgoal": 0.428,
        "rebounds": 4.1,
        "assists": 2.2,
        "turnovers": 1.6,
        "personalfouls": 1.4,
        "points": 13.5,
        "jersey": 14,
        "position": "SG",
        "height": "6'5",
        "weight": 195
      },
      {
        "name": "Derrick Jones",
        "fieldgoal": 0.527,
        "rebounds": 3.9,
        "assists": 1.1,
        "turnovers": 0.5,
        "personalfouls": 2.2,
        "points": 8.5,
        "jersey": 5,
        "position": "SF",
        "height": "6'6",
        "weight": 210
      },
      {
        "name": "Meyers Leonard",
        "fieldgoal": 0.509,
        "rebounds": 5.1,
        "assists": 1.1,
        "turnovers": 0.8,
        "personalfouls": 2.1,
        "points": 6.1,
        "jersey": 0,
        "position": "C",
        "height": "7'0",
        "weight": 260
      },
      {
        "name": "Andre Iguodala",
        "fieldgoal": 0.432,
        "rebounds": 3.7,
        "assists": 2.4,
        "turnovers": 1.2,
        "personalfouls": 1.7,
        "points": 4.6,
        "jersey": 28,
        "position": "SG",
        "height": "6'7",
        "weight": 215
      },
      {
        "name": "Kelly Olynyk",
        "fieldgoal": 0.462,
        "rebounds": 4.6,
        "assists": 1.7,
        "turnovers": 1.1,
        "personalfouls": 2.6,
        "points": 8.2,
        "jersey": 9,
        "position": "C",
        "height": "6'11",
        "weight": 240
      },
      {
        "name": "Solomon Hill",
        "fieldgoal": 0.311,
        "rebounds": 1.9,
        "assists": 0.9,
        "turnovers": 1,
        "personalfouls": 1.1,
        "points": 4.5,
        "jersey": 44,
        "position": "SF",
        "height": "6'6",
        "weight": 226
      },
      {
        "name": "James Johnson",
        "fieldgoal": 0.448,
        "rebounds": 2.9,
        "assists": 1.2,
        "turnovers": 0.8,
        "personalfouls": 1.9,
        "points": 5.7,
        "jersey": 16,
        "position": "SF",
        "height": "6'7",
        "weight": 240
      },
      {
        "name": "Dion Waiters",
        "fieldgoal": 0.385,
        "rebounds": 3.7,
        "assists": 1,
        "turnovers": 1,
        "personalfouls": 1.7,
        "points": 9.3,
        "jersey": 11,
        "position": "SG",
        "height": "6'3",
        "weight": 210
      },
      {
        "name": "Udonis Haslem",
        "fieldgoal": 0.364,
        "rebounds": 4,
        "assists": 0.3,
        "turnovers": 0.3,
        "personalfouls": 1.5,
        "points": 3,
        "jersey": 40,
        "position": "PF",
        "height": "6'8",
        "weight": 235
      },
      {
        "name": "Gabe Vincent",
        "fieldgoal": 0.216,
        "rebounds": 0.6,
        "assists": 0.7,
        "turnovers": 0.1,
        "personalfouls": 0.7,
        "points": 2.4,
        "jersey": 2,
        "position": "PG",
        "height": "6'3",
        "weight": 200
      },
      {
        "name": "Chris Silva",
        "fieldgoal": 0.615,
        "rebounds": 2.9,
        "assists": 0.5,
        "turnovers": 0.7,
        "personalfouls": 1.9,
        "points": 3,
        "jersey": 30,
        "position": "PF",
        "height": "6'8",
        "weight": 234
      },
      {
        "name": "Kyle Alexander",
        "fieldgoal": 0.5,
        "rebounds": 1.5,
        "assists": 0,
        "turnovers": 0.5,
        "personalfouls": 0.5,
        "points": 1,
        "jersey": 17,
        "position": "PF",
        "height": "6'11",
        "weight": 220
      },
      {
        "name": "KZ Okpala",
        "fieldgoal": 0.6,
        "rebounds": 1,
        "assists": 0.2,
        "turnovers": 0.2,
        "personalfouls": 0.4,
        "points": 1.4,
        "jersey": 4,
        "position": "SF",
        "height": "6'8",
        "weight": 215
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
