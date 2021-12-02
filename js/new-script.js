var app = new Vue({
    el: '#main',
    data: {
        //Main form
        totalCost: 573.3,
        totalWeight: 45.5,

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
            //Prepopulated data
            {
                expanded: false,
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
        showGenerateBillPopup: false

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

        //For sub items
        
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