const My_hero = ["Thor","Spiderman"]
const DC_hero = ["Superman","Flash"]


// My_hero.push(DC_hero)

// console.log(My_hero);
// console.log(My_hero[2][0]);

// const allhero = My_hero.concat(DC_hero)
// console.log(allhero);

// const allhero = [...My_hero, ...DC_hero]

// console.log(allhero);

const  arr = [1, 2, 3, 4, 5,[6, 7, 8],7, [1, 2, 3,[1, 2]]]

const arr1 = arr.flat(Infinity)

console.log(arr1);
   

console.log(Array.isArray("Ritesh"));
console.log(Array.from("Ritesh"));

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score, score1, score2 ));