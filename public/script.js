new Vue({
    el: "#app",
    data: {
        totalItems: 0,
        items: [
            { title: "Item 1" },
            { title: "Item 2" },
            { title: "Item 3" }
        ],
        cart: [],
    },
    methods: {
        addItems: function(ndx){
            console.log(ndx);
            this.totalItems += 9.99;
        }
    }
});