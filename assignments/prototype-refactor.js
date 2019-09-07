/* 

Prototype Refactor
*/


// function GameObject(object) {
//   this.createdAt = object.createdAt;
//   this.name = object.name;
//   this.dimensions = object.dimensions;
//   this.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   };
// }
class GameObject {
    constructor(createdAt, name, dimensions) {
        this.createdAt = createdAt;
        this.name = name;
        this.dimensions = dimensions;
    };
    
    destroy() {
        return `${this.name} was removed from the game.`;
      }
    }


// function CharacterStats(characterAttributes) {
//     GameObject.call(this, characterAttributes);
//     this.healthPoints = characterAttributes.healthPoints;
//     this.takeDamage = function() {
//     return `${this.name} took damage`;
//   };
//   }

//   CharacterStats.prototype = Object.create(GameObject.prototype);

  class CharacterStats extends GameObject{
      constructor(createdAt, name, dimensions, healthPoints) {
        super(createdAt, name, dimensions);
        this.healthPoints = healthPoints;
      }
      takeDamage() {
        return `${this.name} took damage`; 
      }
  }


//   function Humanoid(humanAttributes) {
//     CharacterStats.call(this, humanAttributes);
//     this.team = humanAttributes.team;
//     this.weapons = humanAttributes.weapons;
//     this.language = humanAttributes.language;
//     this.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
//   };
//   }

  class Humanoid extends CharacterStats {
      constructor(createdAt, name, dimensions, healthPoints, team, weapons, language) {
          super(createdAt, name, dimensions, healthPoints);
          this.team = team;
          this.weapons = weapons;
          this.language = language;
      }
      greet() {
        return `${this.name} offers a greeting in ${this.language}`; 
      }
  }


//   const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 1,
//     },
//     healthPoints: 5,
//     name: 'Bruce',
//     team: 'Mage Guild',
//     weapons: [
//       'Staff of Shamalama',
//     ],
//     language: 'Common Tongue',
//   });
const mage = new Humanoid(new Date(),'Bruce',{length: 2, width: 1, height: 1,}, 5, 'Mage Guild', ['Staff of Shamalama'], 'Common Tongue');
//   const swordsman = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 2,
//       height: 2,
//     },
//     healthPoints: 15,
//     name: 'Sir Mustachio',
//     team: 'The Round Table',
//     weapons: [
//       'Giant Sword',
//       'Shield',
//     ],
//     language: 'Common Tongue',
//   });
const swordsman = new Humanoid(new Date(),'Sir Mustachio',{length: 2, width: 2, height: 2,}, 15, 'The Round Table', ['Giant Sword', 'Shield'], 'Common Tongue');
//   const archer = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 2,
//       height: 4,
//     },
//     healthPoints: 10,
//     name: 'Lilith',
//     team: 'Forest Kingdom',
//     weapons: [
//       'Bow',
//       'Dagger',
//     ],
//     language: 'Elvish',
//   });

const archer = new Humanoid(new Date(),'lilith',{length: 1, width: 2, height: 4,}, 10, 'Forest Kingdom', ['Bow', 'Dagger'], 'Elvish');



  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.