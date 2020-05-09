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
        attack: function() {
            let userAttack = this.random();
            let monsterAttack = this.random();
            this.warLog.push(userAttack, monsterAttack);
            this.userHealth -= monsterAttack;
            this.monsterHealth -= userAttack;
            this.checkWinner();
        },
        specialAttack: function() {
            
        },
        heal: function() {
            let healingAmount = this.userHealth <= 90 ? 10: 100 - this.userHealth;
            this.warLog.push(healingAmount);
            let monsterAttack = this.random();
            this.userHealth -= monsterAttack;
            this.warLog.push(monsterAttack);
            this.checkWinner();
        },
        endGame: function() {
            this.gameStarted = false;
            
        },
        giveUp: function() {

        },
        random: function() {
            return Math.floor(Math.random()*10);
        },
        checkWinner: function() {
            if (this.userHealth <= 0) {
                if (confirm('You lost !!\n\nStart new game?')){
                    this.endGame();
                };
            }
            if (this.monsterHealth <= 0) {
                if (confirm('You winn !!\n\nStart new game?')){
                    this.endGame();
                };
            }
        }
    }
})