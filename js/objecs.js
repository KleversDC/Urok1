// let obj  = {};
//let obj = new Object();
// obj.Nema = "Evgen";
// obj.Age = 30;
// console.log(obj.Nema + " " + onj.Age);

// delete obj.Age;
// console.log(obj.Nema + " " + onj.Age);

// obj["Adress"]= "Rivne";
// console.log(obj.Adress);

// let obj = {
// neme: "Evgen",
// age:30,
// adress:"Rivne",
// countryOfStudent:{
//     country : "Ukraine",
//     citi:"Rivne",
//     steet:"Sevcenka",
//     house : 1
// },
// car:["BMW" , "Volva" , "Mersedes"],
// print: function()
// {
//     alert(this.name + " " + this.age);
// },
// showInfo()
// {
//  alert(this.neme + " " + this.age);
// }

// }
// obj.showInfo();
// obj.print();
// obj = null;
// console.log(obj);
// // function addCarToObject(obj,newwCar)
// // {
// //     obj.car.push(newwCar);
// // }
// // function ShowAllCars(obj)
// // {
// //     alert("Car :" + obj.car.join(","));
// // }
// // ShowAllCars(obj);
// // let newwCar = prompt("Enter the name of the new Car");
// // addCarToObject(obj,nCar);
// // ShowAllCars(obj);



// // console.log(obj.countryOfStudent.citi);

// // if('country' in obj.countryOfStudent)
// // {
// //     alert("the country is " + obj.countryOfStudent.country);
// // }
// // else
// // {
// //     console.log("Error 404");
// // }

// let res = "\tPerson info:\n";
// for(let property in obj){
//     if(property == "countryOfStuding"){
//         res += "\t\tCountry of studying:\n";
//         for(let property2 in obj[property]){
//             res += "\t\t\t" + property2 + ": " + obj[property][property2] + "\n";
//         }
//     }
//     res+= property + ": " + obj[property] + "\n";
// }
 
// alert(res);


// function Rectangle(width , height)
// {
//    this.width = width;
//    this.height = height;
//    this.erea = width * height;
//    this.perimeter = 2 *(width +height);
//    this.showInfo = function()
//    {
//     alert("Width :" + this.width + "\n Heighy :"+ this.height + "\nAner :" + this.erea + "\n perumetr :" + this.perimeter);
//    }
// }
// let rect1 = new Rectangle(10,12);
// rect1.showInfo();

let car = {
    brand: "BMW",
    model: "X5",
    year: 2022,
    maxGear: 6,
    currentGear: 4,
    speed: 120,
    setSpeed(value) {
        if (typeof value === "number" && value >= 0) {
            this.speed = value;
        } else {
            console.log("Invalid speed value");
        }
    },
    shiftUp() {
        if (this.currentGear < this.maxGear) {
            this.currentGear++;
        } else {
            console.log("Already at maximum gear");
        }
    },
    shiftDown() {
        if (this.currentGear > 0) {
            this.currentGear--;
        } else {
            console.log("Already at minimum gear");
        }
    },
    stop() {
        this.speed = 100;
        this.currentGear = 1;
    },
    showInfo() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Speed: ${this.speed} km/h`);
        console.log(`Gear: ${this.currentGear}`);
    }
};

// Example usage
car.showInfo();
car.setSpeed(80);
car.shiftUp();
car.shiftUp();
car.showInfo();
car.shiftDown();
car.setSpeed(-20);
car.stop();
car.showInfo();
