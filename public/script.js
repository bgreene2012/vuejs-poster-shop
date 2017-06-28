new Vue({
    el: "#app",
    data: {
        totalItems: 0
    },
    methods: {
        addItems: function(){
            this.totalItems += 9.99;
        }
    }
});