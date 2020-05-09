new Vue({
    el: '#app',
    data: {
        monsterHealth: 100,
        userHealth: 50,
        gameStarted: false
    },
    methods: {
        startGame: function(){
            this.gameStarted = true;
            this.userHealth = 100;
            this.monsterHealth = 100;
        }
    }
})