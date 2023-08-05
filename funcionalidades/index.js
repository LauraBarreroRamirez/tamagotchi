const Image = document.getElementById("egg");
const text = document.getElementById("text");
const buttonSleep = document.getElementById("buttonSleep");
const buttonPlay = document.getElementById("buttonPlay");
const buttonEat = document.getElementById("buttonEat");
const energyLevel = document.getElementById("energyLevel")
const namePet = document.getElementById("namePet");
const myPet = init("Fuffly")

function init(name) {
    let energy = 100;
    energyLevel.textContent=`Energy Level is: ${energy}, Age: 0`;
    namePet.textContent=name
    
    return {
        namePet: name,
        energy,
        age: 0,
        statusPet: '',
        canSleep: false,
        canEat: false,
        canPlay: true
    }
} 

function updatePetStatus (pet, reason, needValidation)  {
    pet.canSleep = pet.energy < 100
    pet.canEat = pet.energy <= 80
    pet.canPlay = pet.energy > 20 && pet.energy <= 100

    if(pet.energy === 100 && needValidation) {
        pet.age += 1
    }
    
    if(!pet.canPlay && reason === 'play'){
        Image.src="../gif/cansado.gif";
        text.textContent= `Estoy cansado, Necesito dormir`;
    }
        
    if(!pet.canSleep && reason === 'sleep') {
        Image.src="../gif/lleno.gif";
        text.textContent= "Estoy descansado, Ya no tengo sueño";
    }
        
    if(!pet.canEat && reason === 'eat') {
        Image.src="../gif/lleno.gif";
        text.textContent= "Estoy lleno, No quiero comer mas";
    }

    energyLevel.textContent=`Energy Level is: ${pet.energy}, Age: ${pet.age}`
}

function sleep (pet) {
    if(pet.canSleep) {
        Image.src="../gif/durmiendo.gif";
        text.textContent= `${pet.namePet} esta durmiendo`;
        pet.statusPet = "sleeping";
        pet.energy += 20 
    } 
    updatePetStatus(pet, 'sleep', pet.canSleep)
}

function play (pet) {
    if(pet.canPlay) {
        pet.energy -= 20
        pet.statusPet = "jugando";
        text.textContent= "";
        Image.src="../gif/jugando.gif";  
    }
    updatePetStatus(pet, 'play', pet.canPlay)
}

function eat (pet) {
    if(pet.canEat){
        pet.energy += 20
        Image.src="../gif/comiendo.gif";
        pet.statusPet = "comiendo" 
        text.textContent= "";
    }
    updatePetStatus(pet, 'eat', pet.canEat)
}

// function age (pet) {
//     if (pet.energy === 100) {
//         Image.src="../gif/cumpleaños.gif";
//         text.textContent=`${pet.namePet} esta cumpliendo años`;
//         pet.statusPet ="cumpliendo años";
//         pet.age += 1;
//     }
// }
// class Tamagochi {

//     constructor (name) {
//         this.name = name;
//         this.energy = 0;
//         this.status = '';
//         this.age = 0;
//         energyLevel.textContent=`Energy Level is:${this.energy}`;
//         namePet.textContent=this.name
//     }

//     sleep () {
//         if (this.energy <= 20) {
//             Image.src="../gif/durmiendo.gif";
//             text.textContent= `${this.namePet} need sleep`;
//             this.statusPet = "sleeping";
//             this.age++;
//             this.energy += 20;
//             energyLevel.textContent=`Energy Level is:${this.energy}`;       
//         } else if(this.energy < 100){
//             text.textContent= "I just slept";
//             this.energy += 20
//             energyLevel.textContent=`Energy Level is:${this.energy}`
//             if (this.energy === 100) {
//                 Image.src="../gif/principal.gif"
//             }
//         } else {
//             text.textContent= "I don't need to sleep";
//             energyLevel.textContent=`Energy:${this.energy}`
//         }
//     }
// }

// const myPetTwo = new Tamagochi("Firulais")

buttonSleep.addEventListener('click',()=>sleep(myPet));
buttonPlay.addEventListener('click',()=>play(myPet));
buttonEat.addEventListener('click',()=>eat(myPet));
// buttonSleep.addEventListener('click',()=> myPetTwo.sleep());