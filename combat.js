// ====================================================================
// Combat System File
// 2/4/20
// All functions related to combat
//
// ====================================================================

// turn counter for battle
var turns = 1;

//rest counter
var restCount = 3;

// enemy count
var enemyDefeated = 0;
// defense rating for when you block
var defendRating = 0;

// to randomize the attack damage
function randomDamage (attack) {
  var factor = Math.round(Math.random()) * 2 ; // gets a plus or minus factor\
  console.log(factor + " is the factor");
  var add = Math.round(Math.random() *5 ); // gets a random number 
  var damage = 0;
  console.log(add + " is the change");
  if (factor == 0){
    damage = damage - add;
  }
  else {
    damage = damage + add;
  }
  console.log(damage + " is the final add on");
  damage = damage + attack; // calculates the total
  console.log(damage + " is the final attack");
  return damage;
}

// PLayer Attack
function attacking () {
  var chance = Math.floor(Math.random() * 101);       
  console.log(chance, " is the chance");
  var damage = randomDamage (Player.attack);

  // attack goes through
  if (chance < Player.attackChance) {
    enemy.health = enemy.health - (damage);
    document.getElementById('healthE').innerHTML=enemy.health + " health";
    document.getElementById('action1').innerHTML=("You did " + damage + " damage to " + enemy.name + "!");
    //return enemy.health;

  }
  // attack critical hit
  else if (chance == 100){
    var crit = (randomDamage(Player.attack) * 2);
    enemy.health = enemy.health - crit;
    document.getElementById('healthE').innerHTML=enemy.health + " health";
    document.getElementById('action1').innerHTML=("You criticaled and did " + crit + " damage to " + enemy.name + "!");
    //return enemy.health;
  }
  // attack misses
  else {
    document.getElementById('action1').innerHTML=("Your attack missed!");
  }
  
  if (enemy.health <= 0){
    enemyDied();
    document.getElementById('action2').innerHTML=("You defeated " + enemy.name + "! You earned " + enemy.xp + " experience points!");
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

//Enemy attack
function eAttack(defendRating) {
  var chance = Math.floor(Math.random() * 101);
  var damage = randomDamage(enemy.attack);
  console.log(chance, " is the enemys chance")
  defendRating = defendRating * 0.01;
  console.log(defendRating + " is the value of the defense");
  attack = damage - (damage * defendRating);
  attack = Math.round(attack);
  console.log(attack + " is the final attack")

  // attack is blocked
  if (attack <= 0) {
    document.getElementById('action2').innerHTML=(enemy.name + "'s attack was blocked! No damage!");

  }
  // attack goes through
  else if (chance < enemy.attackChance) {
    Player.health = Player.health - attack;
    document.getElementById('health').innerHTML=Player.health + " health / " + Player.maxHealth + " health";
    document.getElementById('action2').innerHTML=(enemy.name + " attacked you and did " + attack + " damage!");
    //return enemy.health;

  }
  // attack critical hit
  else if (chance == 100){
    var crit = (attack * 2);
    Player.health = Player.health - crit;
    document.getElementById('health').innerHTML=Player.health + " health / " + Player.maxHealth + " health";
    document.getElementById('action2').innerHTML=(enemy.name + " attacked you with a critical hit and did " + crit + " damage!");
    //return enemy.health;
  }
  // attack misses
  else {
    document.getElementById('action2').innerHTML=(enemy.name + " attacked you and missed!");

  }
  // if enemy kills player
  if (Player.health <= 0){
    playerDeath();
  }
  else {
    return;
  }
}


// when the player dies
function playerDeath() {
  alert("You have died!");
  document.getElementById('action3').innerHTML=("You have died from the enemy's attack!");
  document.getElementById('name').innerHTML="You have died";
  document.getElementById('health').innerHTML="Maybe next time you'll do better";
  document.getElementById('mana').innerHTML="You died at level " + Player.level;
  document.getElementById('attack').innerHTML="";
  document.getElementById('defeated').innerHTML= "You were able to defeat " + enemyDefeated + " enemies.";
  document.getElementById('restNumber').innerHTML="Try again next time!";
  document.getElementById("find").disabled = true;
  document.getElementById("rest").disabled = true;
  document.getElementById("attackButton").disabled = true;
  document.getElementById("defend").disabled = true;
  document.getElementById("magic").disabled = true;
  document.getElementById("fireBall").disabled = true;
  document.getElementById("iceRay").disabled = true;
  document.getElementById("battle").disabled = true;
  document.getElementById("healingHands").disabled = true;
  document.getElementById("lightningStorm").disabled = true;
  document.getElementById("newGame").disabled = false;
  document.getElementById("shop").disabled = true;
  document.getElementById('nameE').innerHTML="";
  document.getElementById('healthE').innerHTML="";
  document.getElementById('attackE').innerHTML="";
  turns = 1;
  document.getElementById('turns').innerHTML="";
  document.getElementById("startGame").style.display = "block";
  localStorage.setItem('player', JSON.stringify(Player));

}

// enemy dies
function enemyDied() {
  //enemy dies
  alert("You have defeated the " + enemy.name + "!");
  battleDisable();
  //resets the enemy board
  Player.defeated = Player.defeated + 1;
  document.getElementById('defeated').innerHTML= Player.defeated + " enemies defeated";
  localStorage.setItem('player', JSON.stringify(Player));


  expCheck();
  goldDrop();


}

//ability to block
function defend() {
  var roll = Math.floor(Math.random() * 50);
  console.log(roll + " is the defense roll value");
  defendRating = roll + Player.defense;

  if (roll >=100){
    document.getElementById('action1').innerHTML=("You have blocked their attack perfectly!");
  }

  else {
    document.getElementById('action1').innerHTML=("You have partially blocked their attack!");
  }
  turn++;
  eAttack(defendRating);
  turn++;
  defendRating = 0;
  // TO add Mana
  var manaDifference = Player.maxMana - Player.mana;
  console.log(manaDifference + " = mana difference");
  if (manaDifference < 10 ) {
    Player.mana = Player.mana + manaDifference;
  }
  else {
    Player.mana = Player.mana + 10;
  }
  document.getElementById('mana').innerHTML = Player.mana + " mana";

}

//disables menu for battle and outside menu is set
function battleDisable() {
  document.getElementById("find").disabled = false;
  document.getElementById("rest").disabled = false;
  document.getElementById("attackButton").disabled = true;
  document.getElementById("magic").disabled = true;
  document.getElementById("fireBall").disabled = true;
  document.getElementById("lightningStorm").disabled = true;
  document.getElementById("iceRay").disabled = true;
  document.getElementById("defend").disabled = true;
  document.getElementById("shop").disabled = false;
  document.getElementById("healthP").disabled = true;
  document.getElementById("manaP").disabled = true;

  //resets the enemy board
  document.getElementById('nameE').innerHTML="";
  document.getElementById('healthE').innerHTML="";
  document.getElementById('attackE').innerHTML="";
  turns = 1;
  document.getElementById('turn').innerHTML="";
  document.getElementById('action1').innerHTML="";
  document.getElementById('action2').innerHTML="";
  document.getElementById('action3').innerHTML="";
  document.getElementById("battle").disabled = true;
  document.getElementById("find").disabled = false;
  if (restCount == 0){
    document.getElementById("rest").disabled = true;
  }
  else {
    document.getElementById("rest").disabled = false;
  }
  spellDisable();
}

//enables menu for battle
function battleEnable() {
  spellUnlock(level);
  document.getElementById("attackButton").disabled = false;
  document.getElementById("magic").disabled = false;
  document.getElementById("fireBall").disabled = false;
  document.getElementById("iceRay").disabled = false;
  document.getElementById("lightningStorm").disabled = false;
  document.getElementById("healingHands").disabled = false;
  document.getElementById("defend").disabled = false;
  document.getElementById("battle").disabled = true;
  document.getElementById("shop").disabled = true;
  document.getElementById('action1').innerHTML="";
  document.getElementById('action2').innerHTML="";
  document.getElementById('action3').innerHTML="";
  document.getElementById("healthP").disabled = false;
  document.getElementById("manaP").disabled = false;

  var turns = 1;
  document.getElementById("turn").innerHTML= "Turn " + turns;
}

// Rest++ function

function restPlus() {
  var remainder = Player.defeated % 10;

  if (remainder == 0){
    Player.rest++;
    document.getElementById('restNumber').innerHTML="Number of Rests Available: " + Player.rest;
    document.getElementById('action1').innerHTML=("You have earned another chance to rest!");
  }
  else {
    return;
  }

}
