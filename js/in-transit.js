var app = new Vue({
    el: '#main',
    data: {
        products: [
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/A',
                availableInInventory: 324,
                numberOfShipments: 20,
                shippingManifests: [
                    {number: 101, dateShipped: '17-Dec-2021', qty: 20300, status: 'Delivered', shippingCostPerItem: .36},
                    {number: 102, dateShipped: '17-Dec-2021', qty: 15000, status: 'Delivered', shippingCostPerItem: .45}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/B',
                availableInInventory: 325,
                numberOfShipments: 21,
                shippingManifests: [
                    {number: 103, dateShipped: '17-Dec-2021', qty: 20300, status: 'Delivered', shippingCostPerItem: .36},
                    {number: 104, dateShipped: '17-Dec-2021', qty: 10300, status: 'Delivered', shippingCostPerItem: .45}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/C',
                avgShippingCostPerItem: 12,
                numberOfShipments: 22,
                shippingManifests: [
                    {number: 105, dateShipped: '17-Dec-2021', qty: 20300, status: 'Delivered', shippingCostPerItem: .36},
                    {number: 106, dateShipped: '17-Dec-2021', qty: 1000, status: 'Delivered', shippingCostPerItem: .45}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/D',
                avgShippingCostPerItem: 13,
                numberOfShipments: 23,
                shippingManifests: [
                    {number: 107, dateShipped: '17-Dec-2021', qty: 20300, status: 'Delivered', shippingCostPerItem: .36},
                    {number: 108, dateShipped: '17-Dec-2021', qty: 200, status: 'Delivered', shippingCostPerItem: .45}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/E',
                availableInInventory: 328,
                numberOfShipments: 24,
                shippingManifests: [
                    {number: 109, dateShipped: '17-Dec-2021', qty: 20300, status: 'Delivered', shippingCostPerItem: .36},
                    {number: 110, dateShipped: '17-Dec-2021', qty: 15000, status: 'Delivered', shippingCostPerItem: .45}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/F',
                availableInInventory: 329,
                numberOfShipments: 25,
                shippingManifests: [
                    {number: 111, dateShipped: '17-Dec-2021', qty: 15000, status: 'Delivered', shippingCostPerItem: .36},
                    {number: 112, dateShipped: '17-Dec-2021', qty: 10000, status: 'Delivered', shippingCostPerItem: .45}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/F',
                availableInInventory: 329,
                numberOfShipments: 25,
                shippingManifests: [
                    {number: 111, dateShipped: '17-Dec-2021', qty: 15000, status: 'Delivered', shippingCostPerItem: .36},
                    {number: 112, dateShipped: '17-Dec-2021', qty: 10000, status: 'Delivered', shippingCostPerItem: .45}
                ]
            },

        ]
    },
    methods: {
        toggleTab(i){
            this.products[i].expanded = !this.products[i].expanded;
        },
        deleteShippingManifest(prooduct, i){
            this.products[prooduct].shippingManifests.splice(i, 1);
        },
        getTotalInbound(i){
            value = 0;
            var shippingManifests = this.products[i].shippingManifests;

            shippingManifests.forEach(shippingManifest => {
                value += shippingManifest.qty;
            });

            return value;
        },
        getAvgShppingCostPerItem(i){
            var shippingManifests = this.products[i].shippingManifests;
            var allShippingCost = 0;
            var numberOfShippingManifests = shippingManifests.length;
            shippingManifests.forEach(shippingManifest => {
                allShippingCost += shippingManifest.shippingCostPerItem;
            });
            return allShippingCost / numberOfShippingManifests;
        }
        
    },
})