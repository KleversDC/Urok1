// let time = {
//     hours: 10,
//     minutes: 59,
//     seconds: 59
// };

// function formatTime(t) {
//     return `${String(t.hours).padStart(2, '0')}:${String(t.minutes).padStart(2, '0')}:${String(t.seconds).padStart(2, '0')}`;
// }

// function addSecond(t) {
//     t.seconds++;
//     if (t.seconds >= 60) {
//         t.seconds = 0;
//         t.minutes++;
//         if (t.minutes >= 60) {
//             t.minutes = 0;
//             t.hours = (t.hours + 1) % 24;
//         }
//     }
// }

// function subtractSecond(t) {
//     t.seconds--;
//     if (t.seconds < 0) {
//         t.seconds = 59;
//         t.minutes--;
//         if (t.minutes < 0) {
//             t.minutes = 59;
//             t.hours = (t.hours - 1 + 24) % 24;
//         }
//     }
// }

// function changeTimeBySeconds(t, deltaSeconds) {
//     let totalSeconds = t.hours * 3600 + t.minutes * 60 + t.seconds + deltaSeconds;
//     if (totalSeconds < 0) {
//         totalSeconds = (24 * 3600 + totalSeconds) % (24 * 3600);
//     }
//     t.hours = Math.floor(totalSeconds / 3600) % 24;
//     t.minutes = Math.floor((totalSeconds % 3600) / 60);
//     t.seconds = totalSeconds % 60;
// }

// console.log("Initial time:", formatTime(time));
// addSecond(time);
// console.log("After +1 second:", formatTime(time));
// subtractSecond(time);
// console.log("After -1 second:", formatTime(time));
// changeTimeBySeconds(time, 62);
// console.log("After +62 seconds:", formatTime(time));




let car = {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2020,
    avgSpeed: 90
};

function showCarInfo(c) {
    console.log(`Manufacturer: ${c.manufacturer}`);
    console.log(`Model: ${c.model}`);
    console.log(`Year: ${c.year}`);
    console.log(`Average speed: ${c.avgSpeed} km/h`);
}

function calculateTravelTime(c, distance) {
    let time = distance / c.avgSpeed;
    let breaks = Math.floor(time / 4);
    return time + breaks;
}

showCarInfo(car);
let distance = 720;
let travelTime = calculateTravelTime(car, distance);
console.log(`Time to travel ${distance} km: ${travelTime.toFixed(2)} hours`);
