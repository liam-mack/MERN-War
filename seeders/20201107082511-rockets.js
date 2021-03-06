/* eslint-disable */
'use strict';
const db = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.Rockets.bulkCreate([
      {
        "name": "James Harden",
        "fieldgoal": 0.444,
        "rebounds": 6.6,
        "assists": 7.5,
        "turnovers": 4.5,
        "personalfouls": 3.3,
        "points": 34.3,
        "jersey": 13,
        "position": "SG",
        "height": "6'5",
        "weight": 220
      },
      {
        "name": "Russell Westbrook",
        "fieldgoal": 0.472,
        "rebounds": 7.9,
        "assists": 7,
        "turnovers": 4.5,
        "personalfouls": 3.5,
        "points": 27.2,
        "jersey": 0,
        "position": "PG",
        "height": "6'3",
        "weight": 200
      },
      {
        "name": "P.J. Tucker",
        "fieldgoal": 0.415,
        "rebounds": 6.6,
        "assists": 1.6,
        "turnovers": 1,
        "personalfouls": 3.2,
        "points": 6.9,
        "jersey": 17,
        "position": "PF",
        "height": "6'5",
        "weight": 245
      },
      {
        "name": "Robert Covington",
        "fieldgoal": 0.392,
        "rebounds": 8,
        "assists": 1.5,
        "turnovers": 1.4,
        "personalfouls": 3.3,
        "points": 11.6,
        "jersey": 33,
        "position": "C",
        "height": "6'7",
        "weight": 209
      },
      {
        "name": "Clint Capela",
        "fieldgoal": 0.629,
        "rebounds": 13.8,
        "assists": 1.2,
        "turnovers": 1.6,
        "personalfouls": 2.6,
        "points": 13.9,
        "jersey": 15,
        "position": "C",
        "height": "6'10",
        "weight": 240
      },
      {
        "name": "Danuel House",
        "fieldgoal": 0.427,
        "rebounds": 4.2,
        "assists": 1.3,
        "turnovers": 0.9,
        "personalfouls": 2.1,
        "points": 10.5,
        "jersey": 4,
        "position": "SF",
        "height": "6'6",
        "weight": 220
      },
      {
        "name": "Eric Gordon",
        "fieldgoal": 0.369,
        "rebounds": 2,
        "assists": 1.5,
        "turnovers": 1.2,
        "personalfouls": 1.9,
        "points": 14.4,
        "jersey": 10,
        "position": "SF",
        "height": "6'3",
        "weight": 215
      },
      {
        "name": "Austin Rivers",
        "fieldgoal": 0.421,
        "rebounds": 2.6,
        "assists": 1.7,
        "turnovers": 0.7,
        "personalfouls": 1.9,
        "points": 8.8,
        "jersey": 25,
        "position": "SG",
        "height": "6'3",
        "weight": 200
      },
      {
        "name": "Ben McLemore",
        "fieldgoal": 0.444,
        "rebounds": 2.2,
        "assists": 0.8,
        "turnovers": 0.7,
        "personalfouls": 2.2,
        "points": 10.1,
        "jersey": 16,
        "position": "SG",
        "height": "6'3",
        "weight": 195
      },
      {
        "name": "Jeff Green",
        "fieldgoal": 0.564,
        "rebounds": 2.9,
        "assists": 1.7,
        "turnovers": 0.8,
        "personalfouls": 2.4,
        "points": 12.2,
        "jersey": 32,
        "position": "C",
        "height": "6'8",
        "weight": 235
      },
      {
        "name": "DeMarre Carroll",
        "fieldgoal": 0.432,
        "rebounds": 2.7,
        "assists": 1.6,
        "turnovers": 0.8,
        "personalfouls": 1.3,
        "points": 6,
        "jersey": 9,
        "position": "PF",
        "height": "6'6",
        "weight": 215
      },
      {
        "name": "Gary Clark",
        "fieldgoal": 0.39,
        "rebounds": 2.2,
        "assists": 0.7,
        "turnovers": 0.1,
        "personalfouls": 1.2,
        "points": 3.9,
        "jersey": 12,
        "position": "PF",
        "height": "6'6",
        "weight": 225
      },
      {
        "name": "Isaiah Hartenstein",
        "fieldgoal": 0.657,
        "rebounds": 3.9,
        "assists": 0.8,
        "turnovers": 0.7,
        "personalfouls": 1.8,
        "points": 4.7,
        "jersey": 55,
        "position": "C",
        "height": "7'0",
        "weight": 249
      },
      {
        "name": "Michael Frazier",
        "fieldgoal": 0.241,
        "rebounds": 0.8,
        "assists": 0.2,
        "turnovers": 0.4,
        "personalfouls": 1.7,
        "points": 2.1,
        "jersey": 21,
        "position": "SG",
        "height": "6'3",
        "weight": 200
      },
      {
        "name": "Thabo Sefolosha",
        "fieldgoal": 0.407,
        "rebounds": 2.3,
        "assists": 0.6,
        "turnovers": 0.4,
        "personalfouls": 1,
        "points": 2.2,
        "jersey": 18,
        "position": "PF",
        "height": "6'6",
        "weight": 215
      },
      {
        "name": "Chris Clemons",
        "fieldgoal": 0.401,
        "rebounds": 0.9,
        "assists": 0.8,
        "turnovers": 0.6,
        "personalfouls": 0.8,
        "points": 4.9,
        "jersey": 3,
        "position": "SG",
        "height": "5'9",
        "weight": 180
      },
      {
        "name": "Tyson Chandler",
        "fieldgoal": 0.778,
        "rebounds": 2.5,
        "assists": 0.2,
        "turnovers": 0.3,
        "personalfouls": 1.2,
        "points": 1.3,
        "jersey": 19,
        "position": "C",
        "height": "7'0",
        "weight": 235
      },
      {
        "name": "Luc Mbah a Moute",
        "fieldgoal": 0.4,
        "rebounds": 0.7,
        "assists": 0,
        "turnovers": 0.3,
        "personalfouls": 0,
        "points": 1.7,
        "jersey": 12,
        "position": "PF",
        "height": "6'8",
        "weight": 230
      },
      {
        "name": "Ryan Anderson",
        "fieldgoal": 0.286,
        "rebounds": 3.5,
        "assists": 1,
        "turnovers": 0.5,
        "personalfouls": 0.5,
        "points": 2.5,
        "jersey": 33,
        "position": "PF",
        "height": "6'9",
        "weight": 240
      },
      {
        "name": "William Howard",
        "fieldgoal": 0,
        "rebounds": 1,
        "assists": 0.5,
        "turnovers": 0.5,
        "personalfouls": 0.5,
        "points": 0,
        "jersey": 52,
        "position": "PF",
        "height": "6'8",
        "weight": 207
      },
      {
        "name": "Bruno Caboclo",
        "fieldgoal": 0.5,
        "rebounds": 2,
        "assists": 0.3,
        "turnovers": 0.8,
        "personalfouls": 1,
        "points": 3.5,
        "jersey": 5,
        "position": "C",
        "height": "6'9",
        "weight": 218
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
