var app = new Vue({
    el: '#app',
    data: {
        products: null
    },
    methods: {
        openSkuSelector(){
            //Write ajax code here if you want to
            // fetch the products when the sku selector is opened/ the + sign is clicked

            this.products = ['Product 1', 'Product 2'] //And set the data>products like this 
        }
    },
    mounted(){
        //Write ajax code here if you want to load the products as soon as the page is loaded
        this.products = ['Product 1', 'Product 2'] //And set the data>products like this 
    }
  })