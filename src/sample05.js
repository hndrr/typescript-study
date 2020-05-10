"use strict";
var Item = /** @class */ (function () {
    function Item(price, tax) {
        if (tax) {
            this.tax = tax;
        }
        else {
            this.tax = 10;
        }
        if (isFinite(price)) {
            this.price = price;
        }
        else {
            this.price = 0;
        }
    }
    Item.prototype.getTax = function () {
        return Math.round(this.price * (this.tax / 100));
    };
    return Item;
}());
var apple = new Item(180);
console.log(apple.tax, apple.getTax());
