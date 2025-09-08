"use strict";
const user = {
    id: 1,
    name: "Mario",
    roles: ["admin", "user"]
};
const product = {
    id: 101,
    name: "Laptop",
    price: 999.99
};
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }
    getItems() {
        return this.items;
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}
const cart = new Cart();
cart.addItem(product);
console.log(cart.getItems());
console.log("Total:", cart.getTotal());
console.log("Hello, TypeScript!");
console.log("Speriamo funzioni tutto correttamente.");
//# sourceMappingURL=playground.js.map