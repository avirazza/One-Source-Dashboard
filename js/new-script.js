var app = new Vue({
    el: '#main',
    data: {
        //Main form
        totalCost: 573.3,
        totalWeight: 45.5,

        // totalCost: null,
        // totalWeight: null,

        //For tracking numbers

        trackingNumberFormVisible: false,
        trackingNumberFormMode: 'save',
        trackingNumberToUpdate: null,
        trackingNumberForm: {
            trackingNumber: null,
            numberOfBoxesInTracking: null,
            company: null
        },
        trackingNumbers: [
            //Prepopulated data
            {trackingNumber: '2825226342', numberOfBoxesInTracking: 216, company: 'UPS'},
            {trackingNumber: '2825226343', numberOfBoxesInTracking: 32, company: 'Fedex'}
        ],

        //For product boxes

        productBoxFormVisible: false,
        productBoxFormMode: 'save',
        productToUpdate: null,
        productBoxForm: {
            dimention1: null,
            dimention2: null,
            dimention3: null,
            numberOfBoxes: null,
            boxWeight: null
        },
        productBoxes: [
            {
                expanded: false,
                skuSelectorVisible: false,
                numberOfBoxes: 2,
                boxWeight: 11,
                dimentions: {
                    dimention1: 52,
                    dimention2: 41,
                    dimention3: 31,
                },
                subItems: [
                    {sku: 'IP7PTGSP', qty: 60, costPerItem: 70}
                ]
            },
            {
                expanded: false,
                skuSelectorVisible: false,
                numberOfBoxes: 1,
                boxWeight: 10.7,
                dimentions: {
                    dimention1: 52,
                    dimention2: 41,
                    dimention3: 31,
                },
                subItems: [
                    {sku: 'IP7PTGSP', qty: 60, costPerItem: 70}
                ]
            },
            {
                expanded: false,
                skuSelectorVisible: false,
                numberOfBoxes: 1,
                boxWeight: 5,
                dimentions: {
                    dimention1: 52,
                    dimention2: 41,
                    dimention3: 31,
                },
                subItems: [
                    {sku: 'GPL6PBA-CL', qty: 60, costPerItem: 70}
                ]
            }
        ],

        //For sub items

        subItemFormVisible: false,
        subItemFormMode: 'save',
        subItemIndexToUpdate: null,
        subItemForm: {
            parentIndex: null,
            childIndex: null,
            sku: null,
            qty: null,
            costPerItem: null
        },

        //Final form submit
        showGenerateBillPopup: false,

        //Adding Sku
        addingSkuTo: null,
        selectedProduct: null,
        skuForm: {},
        products: [
            {
                name: 'Incipio Stylus Inscribe Executive Stylus And Pen With Black Ink',
                thumbnail: 'http://placehold.jp/50x50.png',
                qrn: '598064',
                mpn: 'STYLUSPENBLK',
                upc: '814523450040',
                sku: 'STY_INCIP_B',
                manufacturer: 'Incipio',
                status: 'Disabled',
                created: '12/31/15',
                price: '5.99',
                available: 0,
                type: 'product',
                po: [
                    {number: 101, totalQty: 3000, qtyArrived: 3000},
                    {number: 102, totalQty: 2000, qtyArrived: null},
                    {number: 103, totalQty: 2000, qtyArrived: null}
                ]
            },
            {
                name: 'Mini Stylus - Iphone / Touch Screen - Pink',
                thumbnail: 'http://placehold.jp/50x50.png',
                qrn: '567143',
                mpn: null,
                upc: null,
                sku: 'IP4STY-MINI-P',
                manufacturer: 'Base',
                status: 'Hidden',
                created: '12/31/15',
                price: '3.50',
                available: 0,
                type: 'kit',
                components: [
                    {
                        name: 'Component 1',
                        po: [
                            {number: 104, totalQty: 3000, qtyArrived: 3000},
                            {number: 105, totalQty: 2000, qtyArrived: null},
                            {number: 106, totalQty: 2000, qtyArrived: null}
                        ]
                    },
                    {
                        name: 'Component 2',
                        po: [
                            {number: 104, totalQty: 3000, qtyArrived: 3000},
                            {number: 105, totalQty: 2000, qtyArrived: null},
                            {number: 106, totalQty: 2000, qtyArrived: null}
                        ]
                    },
                    
                ]
            },
            {
                name: 'Sports Armband Iphone 5 Holder',
                thumbnail: 'http://placehold.jp/50x50.png',
                qrn: '543206',
                mpn: null,
                upc: null,
                sku: 'IP5ARMBAND',
                manufacturer: 'Sports',
                status: 'Disabled',
                created: '12/31/15',
                price: '6.90',
                available: 1065,
                type: 'product',
                po: [
                    {number: 107, totalQty: 3000, qtyArrived: 3000},
                    {number: 108, totalQty: 2000, qtyArrived: null},
                    {number: 109, totalQty: 2000, qtyArrived: null}
                ]
            },
            {
                name: 'ipad Stylus - Black',
                thumbnail: 'http://placehold.jp/50x50.png',
                qrn: '724400',
                mpn: null,
                upc: null,
                sku: 'IP4STYLUS-B',
                manufacturer: 'Base',
                status: 'Hidden',
                created: '12/31/15',
                price: '4.50',
                available: 1065,
                type: 'kit',
                components: [
                    {
                        name: 'Component 1',
                        po: [
                            {number: 110, totalQty: 3000, qtyArrived: 3000},
                            {number: 111, totalQty: 2000, qtyArrived: null},
                            {number: 112, totalQty: 2000, qtyArrived: null}
                        ]
                    },
                    {
                        name: 'Component 2',
                        po: [
                            {number: 110, totalQty: 3000, qtyArrived: 3000},
                            {number: 111, totalQty: 2000, qtyArrived: null},
                            {number: 112, totalQty: 2000, qtyArrived: null}
                        ]
                    },
                    
                ]
            },
            {
                name: 'Micro Data Cable',
                thumbnail: 'http://placehold.jp/50x50.png',
                qrn: '474190',
                mpn: null,
                upc: '081462717033',
                sku: 'AMMICRODK',
                manufacturer: 'Base',
                status: 'Disabled',
                created: '12/31/15',
                price: '2.99',
                available: 1065,
                type: 'product',
                po: [
                    {number: 113, totalQty: 3000, qtyArrived: 3000},
                    {number: 114, totalQty: 2000, qtyArrived: null},
                    {number: 115, totalQty: 2000, qtyArrived: null}
                ]
            }
        ]

    },
    methods: {
        //For tracking numbers

        openTrackingNumberForm(){
            this.trackingNumberFormVisible = true;
        },
        closeTrackingNumberForm(){
            this.trackingNumberFormVisible = false;
            this.trackingNumberForm.trackingNumber = null;
            this.trackingNumberForm.numberOfBoxesInTracking = null;
            this.trackingNumberForm.company = null;

            this.trackingNumberFormMode = 'save';
        },
        handleTrackingNumberForm(){
            if(this.trackingNumberFormMode == 'save'){
                this.trackingNumbers.push({
                    trackingNumber: this.trackingNumberForm.trackingNumber, 
                    numberOfBoxesInTracking: this.trackingNumberForm.numberOfBoxesInTracking, 
                    company: this.trackingNumberForm.company
                });
                this.trackingNumberForm.trackingNumber = null,
                this.trackingNumberForm.numberOfBoxesInTracking = null,
                this.trackingNumberForm.company = null
    
                this.trackingNumberFormVisible = false;
            }else if(this.trackingNumberFormMode == 'update'){
                this.trackingNumbers[this.trackingNumberToUpdate].trackingNumber = this.trackingNumberForm.trackingNumber;
                this.trackingNumbers[this.trackingNumberToUpdate].numberOfBoxesInTracking = this.trackingNumberForm.numberOfBoxesInTracking;
                this.trackingNumbers[this.trackingNumberToUpdate].company = this.trackingNumberForm.company;
                
                this.closeTrackingNumberForm();
            }

        },
        deleteTrackingNumber(i){
            this.trackingNumbers.splice(i, 1);
        },
        editTrackingNumber(i){
            this.trackingNumberForm.trackingNumber = this.trackingNumbers[i].trackingNumber;
            this.trackingNumberForm.numberOfBoxesInTracking = this.trackingNumbers[i].numberOfBoxesInTracking;
            this.trackingNumberForm.company = this.trackingNumbers[i].company;

            this.trackingNumberFormMode = 'update';
            this.trackingNumberToUpdate = i;
            this.openTrackingNumberForm();
        },

        // For product boxes

        openProductBoxForm(){
            this.productBoxFormVisible = true;
        },
        closeProductBoxForm(){
            this.productBoxFormVisible = false;

            this.productBoxForm.dimention1 = null;
            this.productBoxForm.dimention2 = null;
            this.productBoxForm.dimention3 = null;
            this.productBoxForm.weight = null;
            this.productBoxForm.numberOfBoxes = null;

            this.productBoxFormMode = 'save';
        },
        handleProductBoxForm(){
            if(this.productBoxFormMode == 'save'){

                this.productBoxes.push({
                    expanded: false,
                    skuSelectorVisible: false,
                    numberOfBoxes: parseFloat(this.productBoxForm.numberOfBoxes),
                    boxWeight: parseFloat(this.productBoxForm.boxWeight),
                    dimentions: {
                        dimention1: parseFloat(this.productBoxForm.dimention1),
                        dimention2: parseFloat(this.productBoxForm.dimention2),
                        dimention3: parseFloat(this.productBoxForm.dimention3),
                    },
                    subItems: []
                });

            }else if(this.productBoxFormMode == 'update'){  

                console.log('Updating');
            }
            this.closeProductBoxForm()
        },
        editProductBox(i){
            this.productBoxFormMode = 'update';

            this.productBoxForm.dimention1 = this.productBoxes[i].dimentions.dimention1;
            this.productBoxForm.dimention2 = this.productBoxes[i].dimentions.dimention2;
            this.productBoxForm.dimention3 = this.productBoxes[i].dimentions.dimention3;
            this.productBoxForm.weight = this.productBoxes[i].weight;
            //this.productBoxForm.numberOfBoxes = this.productBoxes[i].numberOfBoxes;
            this.productBoxForm.numberOfBoxes = this.productBoxes[i].subItems.length;

            this.productToUpdate = i;
            this.openProductBoxForm();
        },

        //Adding Sku

        openSkuSelector(i){
            this.productBoxes[i].expanded = true;
            this.productBoxes[i].skuSelectorVisible = true;
            this.addingSkuTo = i;
        },
        openSkuForm(parentBox, product){
            this.addingSkuTo = parentBox;
            this.selectedProduct = product;
            this.subItemFormVisible = true;
        },
        closeSkuForm(){
            this.addingSkuTo = null;
            this.selectedProduct = null;
            this.subItemFormVisible = false;
            this.addingSkuTo = null;
        },
        // addSku(parentBox, product){ 
        //     this.productBoxes[parentBox].subItems.push(
        //         {sku: product.sku, qty: 0, costPerItem: 0}
        //     );
        // },
        handleSkuForm(){
            var product = this.selectedProduct;
            var qty = 0;

            if(product.type == 'product'){
                for (let i = 0; i < product.po.length; i++) {

                    let totalQty = parseInt(product.po[i].totalQty);
                    let qtyArrived = parseInt(product.po[i].qtyArrived);
                    
                    if(totalQty > qtyArrived){
                        qty += qtyArrived;
                    }
                }
            }else if(product.type == 'kit'){
                for (let i = 0; i < product.components.length; i++) {
                    let po = product.components[i].po;
                    for (let i = 0; i < po.length; i++) {

                        let totalQty = parseInt(po[i].totalQty);
                        let qtyArrived = parseInt(po[i].qtyArrived);
                        
                        if(totalQty > qtyArrived){
                            qty += qtyArrived;
                        }
                    }
                }
            }

            this.productBoxes[this.addingSkuTo].subItems.push(
                {
                    sku: this.selectedProduct.sku, 
                    qty: qty, 
                    costPerItem: 0
                }
            );

            this.closeSkuForm();
        },

        deleteBox(i){
            this.productBoxes.splice(i, 1);
        },

        /*
        openSubBoxForm(){
            this.subItemFormVisible = true;
        },
        closeSubBoxForm(){
            this.subItemFormVisible = false;

            this.subItemForm.parentIndex = null;
            this.subItemForm.childIndex = null;
            this.subItemForm.sku = null;
            this.subItemForm.qty = null;
            this.subItemForm.costPerItem = null;

            this.subItemFormMode = 'save';
        },

        deleteBox(i){
            this.productBoxes.splice(i, 1);
        },
        handleSubBoxForm(){
            var parent = this.subItemForm.parentIndex;
            var child = this.subItemForm.childIndex;

            if(this.subItemFormMode == 'save'){
                this.productBoxes[parent].subItems.push({ 
                    sku: this.subItemForm.sku,
                    qty: this.subItemForm.qty, 
                    costPerItem: this.subItemForm.costPerItem
                });

            }else if(this.subItemFormMode == 'update'){ 
                this.productBoxes[parent].subItems[child].sku = this.subItemForm.sku;
                this.productBoxes[parent].subItems[child].qty = this.subItemForm.qty;
                this.productBoxes[parent].subItems[child].costPerItem = this.subItemForm.costPerItem;
            }
            //console.log('Parent :',parent, ' Child:',child );
            this.closeSubBoxForm();
        },
        addSubItem(parentIndex){ 
            this.productBoxes[parentIndex].expanded = true;
            this.subItemForm.parentIndex = parentIndex;
            this.openSubBoxForm();
        },
        editSubItem(parentIndex, childIndex){ 
            this.subItemForm.parentIndex = parentIndex;
            this.subItemForm.childIndex = childIndex;

            this.subItemForm.sku = this.productBoxes[parentIndex].subItems[childIndex].sku;
            this.subItemForm.qty = this.productBoxes[parentIndex].subItems[childIndex].qty;
            this.subItemForm.costPerItem = this.productBoxes[parentIndex].subItems[childIndex].costPerItem;

            this.subItemFormMode = 'update';
            this.openSubBoxForm();
        },
        deleteSubBox(parentIndex, childIndex){
            this.productBoxes[parentIndex].subItems.splice(childIndex, 1);
        },


        */
       
        deleteSubBox(parentIndex, childIndex){
            this.productBoxes[parentIndex].subItems.splice(childIndex, 1);
        },

        toggleContent(i){
            this.productBoxes[i].expanded = !this.productBoxes[i].expanded;
        },

        //Final form submission

        openGenerateBillPopup(){
            this.showGenerateBillPopup = true;
        },
        closeGenerateBillPopup(){
            this.showGenerateBillPopup = false;
        },
        generateBill(){
            console.log('Generating bill');
            this.closeGenerateBillPopup();
        },

        //Getters
        getCostPerKillo(){
            var costPerKillo = this.totalCost / this.totalWeight;
            return costPerKillo;
        },
        getTotalNumberOfBoxes(){
            var value = 0;
            for (let i = 0; i < this.productBoxes.length; i++) {
                value += this.productBoxes[i].numberOfBoxes;
            }
            return value;
        },
        getTotalBoxesWeight(){
            var value = 0;
            for (let i = 0; i < this.productBoxes.length; i++) {
                value += this.productBoxes[i].numberOfBoxes * this.productBoxes[i].boxWeight;
            }
            return value;
        },
        getSingleBoxWeight(i){
            var value = this.productBoxes[i].numberOfBoxes * this.productBoxes[i].boxWeight;
            return value;
        },
        getTotalAdjustedWeight(i){
            var thisBoxWeight = this.getSingleBoxWeight(i);

            var totalWeight = this.totalWeight;
            var totalBoxWeight = this.getTotalBoxesWeight();
            var value = (totalWeight / totalBoxWeight) * thisBoxWeight;
            return value;
        },
        getTotalCostOfBoxes(i){
            var totalAdjustedWeight = this.getTotalAdjustedWeight(i);
            var costPerKillo = this.getCostPerKillo()
            var value = totalAdjustedWeight * costPerKillo;
            return value;
        }

    }
})