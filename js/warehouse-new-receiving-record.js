var app = new Vue({
    el: '#main',
    data: {
        initForm: {
            trackingNumber: null,
            shippingManifestNumber: null
        },
        pageState: 'initForm',
        partiallyRecived: false,
        productBoxes: [
            {
                expanded: false,
                skuSelectorVisible: false,
                numberOfBoxes: 2,
                boxWishToRecive: null,
                checkedAll: false,
                boxWeight: 11,
                dimentions: {
                    dimention1: 52,
                    dimention2: 41,
                    dimention3: 31,
                },
                subItems: [
                    {sku: 'IP7PTGSP', qty: 60, qtyReviced: 0, costPerItem: 100},
                    {sku: 'IP7PTGSQ', qty: 100, qtyReviced: 0, costPerItem: 200}
                ]
            },
            {
                expanded: false,
                skuSelectorVisible: false,
                numberOfBoxes: 1,
                boxWishToRecive: null,
                checkedAll: false,
                boxWeight: 10.7,
                dimentions: {
                    dimention1: 52,
                    dimention2: 41,
                    dimention3: 31,
                },
                subItems: [
                    {sku: 'IP7PTGSP', qty: 60, qtyReviced: 0, costPerItem: 200},
                    {sku: 'IP7PTGSA', qty: 50, qtyReviced: 0, costPerItem: 250}
                ]
            },
            {
                expanded: false,
                skuSelectorVisible: false,
                numberOfBoxes: 1,
                boxWishToRecive: null,
                checkedAll: false,
                boxWeight: 5,
                dimentions: {
                    dimention1: 52,
                    dimention2: 41,
                    dimention3: 31,
                },
                subItems: [
                    {sku: 'GPL6PBA-CL', qty: 30, qtyReviced: 0, costPerItem: 100},
                    {sku: 'GPL6PBA-CZ', qty: 40, qtyReviced: 0, costPerItem: 150}
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
                this.productBoxes[i].checkedAll = false;
                return true;
            }else if(boxWishToRecive == numberOfBoxes){
                this.productBoxes[i].checkedAll = true;
            }
            else{
                this.productBoxes[i].checkedAll = false;
                return false;
            }
        },
        checkSkuValidity(i){
            var box = this.productBoxes[i];
            var totalQty = 0;
            var totalQtyRecived = 0;

            box.subItems.forEach(function(item){
                totalQty += item.qty;
                totalQtyRecived += parseInt(item.qtyReviced);
            });

            if(totalQtyRecived != 0 && totalQty != totalQtyRecived){
                return true;
            }else{
                return false;
            }
        },
        reciveAll(){
            var boxes = this.productBoxes;
            boxes.forEach(function (item) {
                item.boxWishToRecive = item.numberOfBoxes;
                item.subItems.forEach(function(subItem){
                    subItem.qtyReviced = subItem.qty;
                });
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
        },
        reciveThisBoxFully(i){
            var value = this.productBoxes[i].checkedAll;
            if(value){
                this.productBoxes[i].boxWishToRecive = this.productBoxes[i].numberOfBoxes;
                //console.log( this.productBoxes[i].subItems );
                this.productBoxes[i].subItems.forEach(function(subitem){
                    subitem.qtyReviced = subitem.qty;
                });
            }else{
                this.productBoxes[i].boxWishToRecive = null;
            }
        },
        totalSkuInThisBox(i){
            var total = 0;
            this.productBoxes[i].subItems.forEach(function(subItem){
                total += subItem.qty;
            });
            return total;
        },
        fetchProducts(){
            //Set this.productBoxes value here by ajax request
            var trackingNumber = this.initForm.trackingNumber;
            var shippingManifestNumber = this.initForm.shippingManifestNumber;

            console.log(trackingNumber, shippingManifestNumber);
            this.pageState = 'content';
        }
    },
    mounted(){
        $('select').select2();
    }
})