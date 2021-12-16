var app = new Vue({
    el: '#main',
    data: {
        products: [
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/A',
                availableInInventory: 324,
                inbound: 254,
                avgShippingCostPerItem: 10,
                numberOfShipments: 20,
                shippingManifests: [
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20},
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/B',
                availableInInventory: 325,
                inbound: 255,
                avgShippingCostPerItem: 11,
                numberOfShipments: 21,
                shippingManifests: [
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20},
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/C',
                availableInInventory: 326,
                inbound: 256,
                avgShippingCostPerItem: 12,
                numberOfShipments: 22,
                shippingManifests: [
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20},
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/D',
                availableInInventory: 327,
                inbound: 257,
                avgShippingCostPerItem: 13,
                numberOfShipments: 23,
                shippingManifests: [
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20},
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/E',
                availableInInventory: 328,
                inbound: 258,
                avgShippingCostPerItem: 14,
                numberOfShipments: 24,
                shippingManifests: [
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20},
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/F',
                availableInInventory: 329,
                inbound: 259,
                avgShippingCostPerItem: 15,
                numberOfShipments: 25,
                shippingManifests: [
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20},
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20}
                ]
            },
            {
                expanded: false,
                title: 'Powerpeak Quick Change 3.0 Dial Port Car Charger',
                sku: 'VPCQC3.0-TYC/G',
                availableInInventory: 330,
                inbound: 260,
                avgShippingCostPerItem: 16,
                numberOfShipments: 26,
                shippingManifests: [
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20},
                    {number: 101, qty: 100, status: 'Delivered', costPerItem: 20}
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
            ///console.log(prooduct, i);
        }
        
    },
})