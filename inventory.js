// ====================================================================
// Inventory File
// 2/19/20
// Holds all functions related to inventory system
// 
// Should be able to equip or use items
// "Hold items" or "active" items for battle like potions
// ====================================================================

//should have a equipment type
// if consumable, can be brought into battle
// armor rating helps defense
// potion rating is how much it helps if consumable
function item (name, consumable, type, armor, potion){
  this.name = name;
  this.consumable = consumable;
  this.type = type;
  this.armor = armor;
  this.potion = potion;
}

function goldDrop() {
  Player.gold = Player.gold + enemy.gold;
  localStorage.setItem('player', JSON.stringify(Player));
  document.getElementById('gold').innerHTML=Player.gold + " gold coins";
  alert("You have earned " + enemy.gold + " gold coins!");
}



// Shop Options

// + Health Potions
function healthPotionBuy () {
  if (Player.gold >= 50){
    Player.gold = Player.gold - 50;
    Player.healthPotions++;
    document.getElementById("goldCount").innerHTML = "Gold: " + Player.gold;
    document.getElementById("manaP").innerHTML = Player.healthPotions + " Health Potions";
    localStorage.setItem('player', JSON.stringify(Player));
    alert("You have bought one health potion!");
  }
  else {
    alert("You do not have enough gold!");
  }
}


// + Mana Potion
function manaPotionBuy () {
  if (Player.gold >= 50){
    Player.gold = Player.gold - 50;
    Player.manaPotions++;
    document.getElementById("goldCount").innerHTML = "Gold: " + Player.gold;
    document.getElementById("manaP").innerHTML = Player.manaPotions + " Mana Potions";
    localStorage.setItem('player', JSON.stringify(Player));
    alert("You have bought one mana potion!");
  }
  else {
    alert("You do not have enough gold!");
  }
}

// + Health
function healthBoost() {
  if (Player.gold >= 100){
    Player.gold = Player.gold - 100;
    Player.maxHealth = Player.maxHealth + 25;
    Player.health = Player.health + 25;
    document.getElementById("goldCount").innerHTML = "Gold: " + Player.gold;
    localStorage.setItem('player', JSON.stringify(Player));
    alert("Your health has increased by 25!");
  }
  else {
    alert("You do not have enough gold!");
  }
}

// + Mana
function manaBoost() {
  if (Player.gold >= 100){
    Player.gold = Player.gold - 100;
    Player.maxMana = Player.maxMana + 15;
    Player.mana = Player.mana + 15;
    document.getElementById("goldCount").innerHTML = "Gold: " + Player.gold;
    localStorage.setItem('player', JSON.stringify(Player));
    alert("Your mana has increased by 15!");
  }
  else {
    alert("You do not have enough gold!");
  }
}

// + attack
function attackBoost() {
  if (Player.gold >= 100){
    Player.gold = Player.gold - 100;
    Player.attack = Player.attack + 10;
    document.getElementById("goldCount").innerHTML = "Gold: " + Player.gold;
    localStorage.setItem('player', JSON.stringify(Player));
    alert("Your attack has increased by 5!");
  }
  else {
    alert("You do not have enough gold!");
  }
}

// Let's try adding a health potion

function healthPotion() {
  // If player has any health potions
  if (Player.healthPotions > 0){
    //This conditional branch is so that it doesn't gain over max health
    var diff = Player.maxHealth - Player.health;
    
    if (diff >= 50){
      alert("You have used a health potion to gain 50 Health points!");
      Player.health = Player.health + 50;
      Player.healthPotions--;
      document.getElementById("health").innerHTML = Player.health + " health / " + Player.maxHealth + " health";
      document.getElementById("healthP").innerHTML = Player.healthPotions + " Health Potions";
      
      // enemy turn 
      turns++;
      document.getElementById("turn").innerHTML= "Turn " + turns;
      eAttack(defendRating);
      turns++;
      document.getElementById("turn").innerHTML= "Turn " + turns;

    }

    else {
      alert("You have used a health potion to gain " + diff + " Health points!");
      Player.health = Player.health + diff;
      Player.healthPotions--;
      document.getElementById("health").innerHTML = Player.health + " health / " + Player.maxHealth + " health";
      document.getElementById("healthP").innerHTML = Player.healthPotions + " Health Potions";
      
      // enemy turn 
      turns++;
      document.getElementById("turn").innerHTML= "Turn " + turns;
      eAttack(defendRating);
      turns++;
      document.getElementById("turn").innerHTML= "Turn " + turns;
    }
  }

  else {
    alert("You do not have enough health potions!");
  }
}

// Let's do a mana potion
function manaPotion() {
  // If player has any health potions
  if (Player.manaPotions > 0){
    //This conditional branch is so that it doesn't gain over max mana
    var diff = Player.maxMana - Player.mana;
    
    if (diff >= 30){
      alert("You have used a mana potion to gain 30 mana points!");
      Player.health = Player.mana + 30;
      Player.healthPotions--;
      document.getElementById("mana").innerHTML = Player.mana + " mana / " + Player.maxMana + " mana";
      document.getElementById("manaP").innerHTML = Player.manaPotions + " Mana Potions";
      
      // enemy turn 
      turns++;
      document.getElementById("turn").innerHTML= "Turn " + turns;
      eAttack(defendRating);
      turns++;
      document.getElementById("turn").innerHTML= "Turn " + turns;

    }

    else {
      alert("You have used a mana potion to gain " + diff + " mana points!");
      Player.health = Player.mana + diff;
      Player.manaPotions--;
      document.getElementById("mana").innerHTML = Player.mana + " mana / " + Player.maxMana + " mana";
      document.getElementById("manaP").innerHTML = Player.manaPotions + " Mana Potions";
      
      // enemy turn 
      turns++;
      document.getElementById("turn").innerHTML= "Turn " + turns;
      eAttack(defendRating);
      turns++;
      document.getElementById("turn").innerHTML= "Turn " + turns;
    }
  }

  else {
    alert("You do not have enough health potions!");
  }
}






