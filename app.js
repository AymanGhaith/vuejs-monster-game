new Vue({
    el: '#app',
    data: {
        userHealth: 100,
        monsterHealth: 100,
        gameStarted: false
    },
    methods: {
        startGame: function(){
            this.userHealth = 100;
            this.monsterHealth = 100;
            this.gameStarted = true;
        },
        endGame: function(){
            alert("game finished")
            this.gameStarted = false;
        }
    }
})