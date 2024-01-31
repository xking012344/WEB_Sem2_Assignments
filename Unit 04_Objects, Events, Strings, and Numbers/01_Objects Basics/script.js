const building = {
    height: "2000",
    width: "500",
    length: "500",
    fullVolume: function () {
        return this.length * this.width * this.height;
    }

};

console.log(building.length);
console.log(building.width);
console.log(building.height);
console.log(building.fullVolume);