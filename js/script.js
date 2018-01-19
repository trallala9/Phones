function Phone(brand, price, color, weight, opinion) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.weight = weight;
    this.opinion = opinion;
}
Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." +
        " The weight of your phone is " + this.weight + "." + " Rated for " + this.opinion + " stars in 2016 " + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver", 100, "five");
iPhone6S.printInfo();
var SamsungGalaxyS6 = new Phone("Samsung", 2500, "lightblue", 150, "four");
SamsungGalaxyS6.printInfo();
var OnePlusOne = new Phone("HTC", 2000, "black", 200, "three");
OnePlusOne.printInfo();
