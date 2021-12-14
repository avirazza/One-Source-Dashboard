var app = new Vue({
    el: '#main',
    data: {
        partiallyRecived: false,
        productBoxes: [
            {
                expanded: false,
                skuSelectorVisible: false,
                numberOfBoxes: 2,
                boxWishToRecive: null,
                boxWeight: 11,
                dimentions: {
                    dimention1: 52,
                    dimention2: 41,
                    dimention3: 31,
                },
                subItems: [
                    {sku: 'IP7PTGSP', qty: 60, costPerItem: 100}
                ]
            },
            {
                expanded: false,
                skuSelectorVisible: false,
                numberOfBoxes: 1,
                boxWishToRecive: null,
                boxWeight: 10.7,
                dimentions: {
                    dimention1: 52,
                    dimention2: 41,
                    dimention3: 31,
                },
                subItems: [
                    {sku: 'IP7PTGSP', qty: 60, costPerItem: 200}
                ]
            },
            {
                expanded: false,
                skuSelectorVisible: false,
                numberOfBoxes: 1,
                boxWishToRecive: null,
                boxWeight: 5,
                dimentions: {
                    dimention1: 52,
                    dimention2: 41,
                    dimention3: 31,
                },
                subItems: [
                    {sku: 'GPL6PBA-CL', qty: 60, costPerItem: 300}
                ]
            }
        ]
    },
    methods: {
        toggleContent(i){
            this.productBoxes[i].expanded = !this.productBoxes[i].expanded;
        },
        checkIfInvalid(i){
            var numberOfBoxes = this.productBoxes[i].numberOfBoxes;
            var boxWishToRecive = this.productBoxes[i].boxWishToRecive;

            if(boxWishToRecive > numberOfBoxes){
                return true;
            }else{
                return false;
            }
        },
        reciveAll(){
            var boxes = this.productBoxes;
            boxes.forEach(function (item) {
                item.boxWishToRecive = item.numberOfBoxes;
            });
        },
        handleFullyRecived(){
            console.log('Fully recived');
        },
        handlePartiallyRecived(){
            console.log('Partially recived');
            this.partiallyRecived = true;
        },
        save(){
            var productBoxes = this.productBoxes;
            var totalBoxes = 0;
            var boxWishToRecive = 0;
            productBoxes.forEach(box => {
                totalBoxes += box.numberOfBoxes;
                boxWishToRecive += parseInt(box.boxWishToRecive);
            });

            if(totalBoxes == boxWishToRecive){
                this.handleFullyRecived();
            }else if(totalBoxes > boxWishToRecive){
               this.handlePartiallyRecived();
            }else{
                alert('Please fill out the details correctly');
            }
        },
        closePartiallyRecivedPopup(){
            this.partiallyRecived = false;
        },
        allocateItemsTowardsPos(){
            this.closePartiallyRecivedPopup();
            console.log('Allocatoing items towards POs');
        } 

    }
})