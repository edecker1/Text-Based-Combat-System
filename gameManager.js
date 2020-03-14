// ====================================================================
// Game Manager File
// 2/4/20
// Game Manager file holds the most important functions that run the game
//
// ====================================================================

var gameManager = {
  setGameStart: function() {
    // reset Player
    Player.name = localStorage.getItem("characterName");
    Player.health = 100;
    Player.maxHealth = 100;
    Player.mana = 100;
    Player.maxMana = 100;
    Player.level = 1;
    Player.xp = 0;
    Player.attack = 10;
    Player.attackChance = 90;
    Player.defeated = 0;
    Player.rest = 3;
    Player.gold = 0;
    //set up game
    alert("A new game has begun!");
    document.getElementById('name').innerHTML="Name: " + Player.name;
    document.getElementById('level').innerHTML="Level " + Player.level;
    document.getElementById('health').innerHTML=Player.health + " health / " + Player.maxHealth + " health";
    document.getElementById('mana').innerHTML=Player.mana + " mana / " + Player.maxMana + " mana";
    document.getElementById('attack').innerHTML=Player.attack + " attack";
    document.getElementById('gold').innerHTML=Player.gold + " gold coins";
    document.getElementById('defeated').innerHTML= Player.defeated + " enemies defeated";
    document.getElementById('restNumber').innerHTML="Number of Rests Available: " + Player.rest;
    document.getElementById("healthP").innerHTML = Player.healthPotions + " Health Potions";
    document.getElementById("manaP").innerHTML = Player.manaPotions + " Mana Potions";
    localStorage.setItem('player', JSON.stringify(Player));
    battleDisable();
    spellUnlock(level);
    spellDisable();
  },

  searchEnemy: function() {
    //Finds enemy based on current tier
    tieredEnemy();

    document.getElementById('nameE').innerHTML="Name: " + enemy.name;
    document.getElementById('healthE').innerHTML=enemy.health + " health";
    document.getElementById('attackE').innerHTML=enemy.attack + " attack";
    document.getElementById("battle").disabled = false;
    document.getElementById("find").disabled = true;
    document.getElementById("rest").disabled = true;


  },

  attackPlayer: function() {
    attacking();
  },

  attackEnemy: function() {
    eAttack();
  },

  //How battles will work
  battle: function() {
    battleEnable();
    spellUnlock(level);
  },

  rest: function() {
    document.getElementById('action1').innerHTML=("You have chosen to rest!");
    Player.health = Player.maxHealth;
    Player.mana = Player.maxMana;
    document.getElementById('health').innerHTML=Player.health + " health / " + Player.maxHealth + " health";
    document.getElementById('mana').innerHTML=Player.mana + " mana / " + Player.maxMana + " mana";
    Player.rest = Player.rest - 1;
    document.getElementById('restNumber').innerHTML="Number of Rests Available: " + Player.rest;

    if (Player.rest == 0) {
      document.getElementById("rest").disabled = true;
    }
    else {
      return;
    }
    localStorage.setItem('player', JSON.stringify(Player));
  },

  shop: function() {
    Player = JSON.parse(localStorage.getItem('player'));
    document.getElementById("goldCount").innerHTML = "Gold: " + Player.gold;
  },

  game: function() {
    if (localStorage.saved){
      // var user = JSON.parse(localStorage.getItem('user')); to retrieve back
      Player = JSON.parse(localStorage.getItem('player'));
      document.getElementById('name').innerHTML="Name: " + Player.name;
      document.getElementById('level').innerHTML="Level " + Player.level;
      document.getElementById('health').innerHTML=Player.health + " health / " + Player.maxHealth + " health";
      document.getElementById('mana').innerHTML= Player.mana + " mana / " + Player.maxMana + " mana";
      document.getElementById('attack').innerHTML= Player.attack + " attack";
      document.getElementById('gold').innerHTML= Player.gold + " gold coins";
      document.getElementById('defeated').innerHTML= Player.defeated + " enemies defeated";
      document.getElementById('restNumber').innerHTML="Number of Rests Available: " + Player.rest;
      document.getElementById("healthP").innerHTML = Player.healthPotions + " Health Potions";
      document.getElementById("manaP").innerHTML = Player.manaPotions + " Mana Potions";
      spellUnlock(level);
      spellDisable();
      document.getElementById("shop").style.display = "inline";
      console.log(localStorage.getItem("saved"));

    }
    else {
      localStorage.setItem('player', JSON.stringify(Player));
      localStorage.setItem("saved", "1");
      document.getElementById('name').innerHTML="Name: " + Player.name;
      document.getElementById('level').innerHTML="Level " + Player.level;
      document.getElementById('health').innerHTML= Player.health + " health / " + Player.maxHealth + " health";
      document.getElementById('mana').innerHTML= Player.mana + " mana / " + Player.maxMana + " mana";
      document.getElementById('attack').innerHTML= Player.attack + " attack";
      document.getElementById('gold').innerHTML= Player.gold + " gold coins";
      document.getElementById('defeated').innerHTML= Player.defeated + " enemies defeated";
      document.getElementById('restNumber').innerHTML="Number of Rests Available: " + Player.rest;
      document.getElementById("healthP").innerHTML = Player.healthPotions + " Health Potions";
      document.getElementById("manaP").innerHTML = Player.manaPotions + " Mana Potions";
      spellUnlock(level);
      document.getElementById("shop").style.display = "inline";
      localStorage.setItem("saved", "1");
      console.log(localStorage.getItem("saved"));
    }
  }

}

