new Vue({
    el: '#app',
    data: {
        monsterHealth: 100,
        userHealth: 100,
        gameStarted: false,
        warLog: []
    },
    methods: {
        startGame: function() {
            this.gameStarted = true;
            this.userHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(specialAttack) {
            let min = 5, max = 12;
            if (specialAttack) {
                min = 10;
                max = 20;
            }
            let userAttack = this.calculateDamage(min, max);
            this.warLog.push(userAttack);
            this.monsterHealth -= userAttack;
            if (this.checkGame()){
                return;
            }

            let monsterAttack = this.calculateDamage(3, 10);
            this.warLog.push(monsterAttack);
            this.userHealth -= monsterAttack;
            
            this.checkGame();
        },
        specialAttack: function() {
            this.attack(true);
        },
        heal: function() {
            let healingAmount = this.userHealth <= 90 ? 10: 100 - this.userHealth;
            this.warLog.push(healingAmount);

            let monsterAttack = this.calculateDamage(3, 10);
            this.userHealth -= monsterAttack;
            this.warLog.push(monsterAttack);
            this.checkGame();
        },
        endGame: function() {
            this.gameStarted = false;
            
        },
        giveUp: function() {
            this.gameStarted = false;
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max + 1),min);
        },
        checkGame: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won!!\nStart new game?')){
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }
                return true;
            }
            if (this.userHealth <= 0) {
                if (confirm('You lost !!\nStart new game?')){
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }
                return true;
            }
            return false;
        }
    }
})