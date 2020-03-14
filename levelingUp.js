// ====================================================================
// Leveling Up File
// 2/7/20
// This file holds all functions to deal with leveling up
// I want to eventually have unlocks for levels
//
// ====================================================================

function expCheck () {
  var level = Player.level;
  var levelThreshold = level * 100;
  Player.xp = Player.xp + enemy.xp;
  console.log(Player.xp + " is now the player's experience total");
  if (Player.xp >= levelThreshold){
    playerLevelUp();
    Player.xp = Player.xp - levelThreshold;
    levelThreshold = level * 100;
    alert("Congratulations on reaching level " + Player.level + "!");
    localStorage.setItem('player', JSON.stringify(Player));

  }

  else {
    alert("You gained " + enemy.xp + " experience points!");
  }
}

function playerLevelUp() {
  var level = Player.level;
  var levelThreshold = level * 100;

  level++;
  Player.level = level;
  Player.maxHealth = 100 * level;
  Player.maxMana = 100 + ((25 * level) - 25);
  Player.attack = 10 + ((level * 5) - 5);
  Player.defense = 50 + ((level * 5) - 5);
  Player.health = Player.maxHealth;
  Player.mana = Player.maxMana;
  document.getElementById('level').innerHTML="Level " + level;
  document.getElementById('health').innerHTML=Player.health + " health / " + Player.maxHealth + " health";
  document.getElementById('mana').innerHTML=Player.mana + " mana/ " + Player.maxMana + " mana";
  document.getElementById('attack').innerHTML=Player.attack + " attack";
  spellUnlock(level);
  localStorage.setItem('player', JSON.stringify(Player));
}

// Function to unlock spells as you advance
function spellUnlock (){
  // default unlock
  if (Player.level == 1){
    document.getElementById("healingHands").style.display = "none";
    document.getElementById("fireBall").style.display = "none";
    document.getElementById("iceRay").style.display = "block";
    document.getElementById("lightningStorm").style.display = "none";
  }
  else if (Player.level == 2) {
    document.getElementById("fireBall").style.display = "block";
    document.getElementById("iceRay").style.display = "block";
    document.getElementById("healingHands").style.display = "none";
    document.getElementById("lightningStorm").style.display = "none";
  }
  else if (Player.level == 3) {
    document.getElementById("healingHands").style.display = "block";
    document.getElementById("fireBall").style.display = "block";
    document.getElementById("iceRay").style.display = "block";
    document.getElementById("lightningStorm").style.display = "none";
  }
  else if (Player.level == 4) {
    document.getElementById("healingHands").style.display = "block";
    document.getElementById("fireBall").style.display = "block";
    document.getElementById("iceRay").style.display = "block";
    document.getElementById("lightningStorm").style.display = "none";
  }
  else if (Player.level == 5) {
    document.getElementById("healingHands").style.display = "block";
    document.getElementById("fireBall").style.display = "block";
    document.getElementById("iceRay").style.display = "block";
    document.getElementById("lightningStorm").style.display = "block";
  }
  else if (Player.level == 6) {
    document.getElementById("healingHands").style.display = "block";
    document.getElementById("fireBall").style.display = "block";
    document.getElementById("iceRay").style.display = "block";
    document.getElementById("lightningStorm").style.display = "block";
  }
  else if (Player.level == 7) {
    document.getElementById("healingHands").style.display = "block";
    document.getElementById("fireBall").style.display = "block";
    document.getElementById("iceRay").style.display = "block";
    document.getElementById("lightningStorm").style.display = "block";
  }
  else if (Player.level == 8) {
    document.getElementById("healingHands").style.display = "block";
    document.getElementById("fireBall").style.display = "block";
    document.getElementById("iceRay").style.display = "block";
    document.getElementById("lightningStorm").style.display = "block";
  }
  else if (Player.level == 9) {
    document.getElementById("healingHands").style.display = "block";
    document.getElementById("fireBall").style.display = "block";
    document.getElementById("iceRay").style.display = "block";
    document.getElementById("lightningStorm").style.display = "block";
  }
  else if (Player.level == 10) {
    document.getElementById("healingHands").style.display = "block";
    document.getElementById("fireBall").style.display = "block";
    document.getElementById("iceRay").style.display = "block";
    document.getElementById("lightningStorm").style.display = "block";
  }
}