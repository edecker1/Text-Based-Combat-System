// ====================================================================
// Magic System File
// 2/4/20
// All functions related to use of magic 
//
// ====================================================================

/*
Level 1: Ice Ray
Level 2: Fireball
Level 3: Healing Hands
Level 5: Lightning Storm
Level 7: Curse
Level 10: Hellfire

*/

function Spells(name, manaCost, damage, healingTag) {
  this.name = name;
  this.manaCost = manaCost;
  this.damage = damage;
  this.healingTag = healingTag;
}

var fireBall = new Spells("Fireball", 20, 25, 0);
var iceRay = new Spells("Ice Ray", 10, 13, 0);
var healingHand = new Spells("Healing Hands", 20, 30, 1);
var lightningStorm = new Spells("Lightning Storm", 35, 45, 0);
var cure = new Spells("Curse", 25, 20, 0); // eventually add status effect
var hellFire = new Spells("Hellfire", 50, 65, 0);

//offensive spells
function castSpell(Spell) {
  if (Player.mana >= Spell.manaCost){
    // if damage spell
    if (Spell.healingTag == 0){
      Player.mana = Player.mana - Spell.manaCost;
      var damage = Math.floor(Math.random() * 10);
      console.log(damage + " is the added damage to the spell");
      damage = damage + Spell.damage;
      console.log(damage + " is the final damage count");
      enemy.health = enemy.health - damage;
      document.getElementById('action1').innerHTML=("You cast the mighty spell " + Spell.name + "! You deal " + damage + " damage to " + enemy.name + "!");    
      document.getElementById('healthE').innerHTML=enemy.health + " health";
      document.getElementById('mana').innerHTML=Player.mana + " mana";
      
      if (enemy.health <= 0){
        enemyDied();
      }
      else {
        // processes enemy turn
        turns++;
        document.getElementById("turn").innerHTML= "Turn " + turns;
        eAttack(defendRating);
        turns++;
        document.getElementById("turn").innerHTML= "Turn " + turns;
      }
    }

      //if healing spell
      else if (Spell.healingTag == 1) {
        Player.mana = Player.mana - Spell.manaCost;
        var healing = Math.floor(Math.random() * 10);
        console.log(healing + " is the added healing bonus");

        healing = healing + Spell.damage;
        console.log(healing + " is the total amount they will be healed by");

        var diff = Player.maxHealth - Player.health;

        if (healing <= diff){
          Player.health = Player.health + healing;
          document.getElementById('health').innerHTML=Player.health + " health / " + Player.maxHealth + " health";
          document.getElementById('action1').innerHTML=("You cast the mighty spell " + Spell.name + "! You heal for " + healing + "!");
          document.getElementById('mana').innerHTML=Player.mana + " mana / " + Player.maxMana + " mana";
        }
        // So they dont heal for more than their max health
        else {
          healing = diff;
          Player.health = Player.health + healing;
          document.getElementById('health').innerHTML=Player.health + " health / " + Player.maxHealth + " health";
          document.getElementById('action1').innerHTML=("You cast the mighty spell " + Spell.name + "! You heal for " + healing + "!");
          document.getElementById('mana').innerHTML=Player.mana + " mana / " + Player.maxMana + " mana";
        }
        // processes enemy turn
        turns++;
        document.getElementById("turn").innerHTML= "Turn " + turns;
        eAttack(defendRating);
        turns++;
        document.getElementById("turn").innerHTML= "Turn " + turns;
      }
  }

  else if (Player.mana < Spell.manaCost) {
    alert("You don't have enough mana!");
  }

}

function spellDisable () {
    document.getElementById("healingHands").style.display = "none";
    document.getElementById("fireBall").style.display = "none";
    document.getElementById("iceRay").style.display = "none";

}

