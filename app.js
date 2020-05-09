new Vue({
    el: '#app',
    data: {
        monsterHealth: 100,
        userHealth: 100,
        gameStarted: false,
        attackLog: []
    },
    methods: {
        startGame: function(){
            this.gameStarted = true;
            this.userHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(){
            let userAttack = this.random();
            let monsterAttack = this.random();
            this.attackLog.push(userAttack, monsterAttack);
            this.userHealth -= monsterAttack;
            this.monsterHealth -= userAttack;
            if (this.userHealth <= 0){
                if (confirm('You lost !!\n\nStart new game?')){
                    this.endGame();
                };
            }
            if (this.monsterHealth <= 0){
                if (confirm('You winn !!\n\nStart new game?')){
                    this.endGame();
                };
            }

        },
        endGame: function(){
            this.gameStarted = false;
            
        },
        random: function(){
            return Math.floor(Math.random()*10);
        }
    }
})