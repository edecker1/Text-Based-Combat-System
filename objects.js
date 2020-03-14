// ====================================================================
// Objects File
// 2/4/20
// All objects and functions related to players/enemies
//
// ====================================================================

var Player = {
  name: "Main Character",
  health: 100,
  maxHealth: 100,
  mana: 100,
  maxMana: 100,
  defense: 50,
  attack: 10,
  attackChance: 90,
  defeated: 0,
  rest: 3,
  level: 1,
  xp: 0,
  gold: 0,
  healthPotions: 2,
  manaPotions: 2,
}

// Normal enemy
function Enemy(name, health, attack, attackChance, xp, gold) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.attackChance = attackChance;
  this.xp = xp;
  this.gold = gold;
}

var spellcaster = 0; // spellcaster flag
// Spellcaster Enemy
function Spellcaster(name, health, mana, attack, attackChance, xp, spells, gold){
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.attackChance = attackChance;
  this.mana = mana;
  this.xp = xp;
  this.spells = spells;
  this.gold = gold;

}

var tier = 1;

function tieredEnemy() {
  if (Player.defeated >= 10) {
    tier = 2;
  }
  else if (Player.defeated >= 25) {
    tier = 3;
  }
  else if (Player.defeated >= 40) {
    tier = 4;
  }
  
  var chance = Math.floor(Math.random() * 10) + 1;
  console.log(chance, "is the chance of enemy");

  if (tier == 1) {
    switch (chance) {
      case 1:
        enemy = new Enemy ("Goblin Runt", 30, 5, 80, 15, 2);
        break;
      case 2:
        enemy = new Enemy ("Unarmed Thug", 40, 7, 95, 15, 5);
        break;
      case 3:
        enemy = new Enemy ("Squirrel", 15, 5, 95, 5, 0);
        break;
      case 4:
        enemy = new Enemy ("Peasant", 50, 8, 90, 20, 1);
        break;
      case 5:
        enemy = new Enemy ("Demonic Child", 45, 7, 80, 15, 3);
        break;
      case 6:
        enemy = new Enemy ("Rabid Dog", 60, 12, 80, 35, 3);
        break;
      case 7:
        enemy = new Enemy ("Goblin", 65, 10, 85, 25, 10);
        break;
      case 8:
        enemy = new Enemy ("Bandit", 50, 15, 75, 30, 20);
        break;
      case 9:
        enemy = new Enemy ("Wounded Wolf", 33, 18, 75, 30, 4);
        break;
      case 10:
        enemy = new Enemy ("Thief", 40, 12, 85, 25, 20);
        break;
      default:
        enemy = new Enemy ("Wraith", 200, 20, 70, 200, 30);
        break;
    }
  }

    if (tier == 2) {
    switch (chance) {
      case 1:
        enemy = new Enemy ("Orc", 65, 9, 85, 20, 20);
        break;
      case 2:
        enemy = new Enemy ("Troll", 110, 5, 90, 20, 35);
        break;
      case 3:
        enemy = new Enemy ("Orc Captain", 85, 13, 85, 25, 40);
        break;
      case 4:
        enemy = new Enemy ("Lizard-Man", 150, 7, 75, 20, 15);
        break;
      case 5:
        enemy = new Enemy ("Squire", 70, 9, 85, 20, 15);
        break;
      case 6:
        enemy = new Enemy ("Knight", 150, 15, 85, 50, 40);
        break;
      case 7:
        enemy = new Enemy ("Archer", 80, 12, 80, 30, 20);
        break;
      case 8:
        enemy = new Enemy ("Knight Captain", 200, 20, 70, 55, 75);
        break;
      case 9:
        enemy = new Enemy ("Wolf", 60, 19, 80, 45, 10);
        break;
      case 10:
        enemy = new Enemy ("Assasin", 50, 25, 90, 50, 100);
        break;
      default:
        enemy = new Enemy ("Wraith", 200, 20, 70, 200);
        break;
    }
  }
}



