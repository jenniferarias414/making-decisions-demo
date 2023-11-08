/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Pikachu and
    Onix.
*/ 

let pikachuAttack = 25
let onixAttack = 35

if(pikachuAttack > onixAttack) {
    console.log('Pikachu has a higher attack than Onix.')
} else if(onixAttack > pikachuAttack) {
    console.log('Onix has a higher attack than Pikachu.')
} else {
    console.log('They the same.')
}

let pikachuHealth = 100
let pikachuDefense = 0

if(pikachuHealth <= onixAttack) {
    console.log("Pikachu fainted")
} else {
    // pikachuHealth = pikachuHealth - onixAttack
    pikachuHealth -= onixAttack
    console.log(`Pikachu's health is down to ${pikachuHealth}`)
}

pikachuDefense += 25

if(pikachuHealth <= onixAttack - pikachuDefense) {
    console.log('Pikachu fainted')
} else {
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}`)
}

if(pikachuHealth + 50 >= 100){
    pikachuHealth = 100
} else {
    pikachuHealth += 50
}

let ironTailHits = false

// if(ironTailHits === true){
//     console.log('the battle continues')
// } else {
//     console.log('Onix fled the battle')
// }

if(ironTailHits !== false){
    console.log('the battle continues')
} else {
    console.log('Onix fled the battle')
}

console.log(`Pikachu's health is now ${pikachuHealth}`)

for(let i = 0; i < 5; i++){
    if(pikachuHealth <= onixAttack - pikachuDefense) {
        console.log('Pikachu fainted')
    } else {
        pikachuHealth -= (onixAttack - pikachuDefense)
        console.log(`Pikachu's health is down to ${pikachuHealth}`)
    }
}
console.log('while loop stuff')
while(pikachuHealth > 0){
    pikachuHealth -= (onixAttack - pikachuDefense)
        console.log(`Pikachu's health is down to ${pikachuHealth}`)
        if(pikachuHealth <= 0){
            console.log('Pikachu faints, battle done')
        }
}