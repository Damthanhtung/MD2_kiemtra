"use strict";
exports.__esModule = true;
var thuchanh1_1 = require("./thuchanh1");
var thuchanh1_2 = require("./thuchanh1");
var animal = [];
animal[0] = new thuchanh1_1.Tiger();
animal[1] = new thuchanh1_2.Chicken();
animal.forEach(function (item, index) {
    console.log(item.makeSound());
});
