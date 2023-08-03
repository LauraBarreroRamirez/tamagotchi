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
    let age = 0;
    energyLevel.textContent=`Energy Level is:${energy}`;
    namePet.textContent=name
    
    return {
        namePet: name,
        energy,
        agePet: 0,
        statusPet: ''
    }
} 

function sleep (pet) {
    if (pet.energy <= 20) {
        Image.src="../gif/durmiendo.gif";
        text.textContent= `${pet.namePet} esta durmiendo`;
        pet.statusPet = "sleeping";
        pet.age++;
        pet.energy += 20;
        energyLevel.textContent=`El nivel de energia es:${pet.energy}`;    
    } else if(pet.energy < 100){
        text.textContent= `${pet.namePet} esta durmiendo aún`;
        pet.energy += 20
        energyLevel.textContent=`El nivel de energia es:${pet.energy}`
        if (pet.energy === 100) {
            Image.src="../gif/principal.gif"
            text.textContent= "Ya no quiero dormir";
        }
    } else {
        text.textContent= "I don't need to sleep";
        energyLevel.textContent=`Energy Level is:${pet.energy}`
    }
}

function play (pet) {
    if (pet.energy >20) {
        Image.src="../gif/jugando.gif";
        text.textContent= `${pet.namePet} esta jugando`;
        pet.statusPet = "jugando";
        pet.age++;
        pet.energy -= 20;
        energyLevel.textContent=`Energy Level is:${pet.energy}`;   
        if (pet.energy === 40) {
            Image.src="../gif/comida.gif";
            text.textContent= `${pet.namePet} tiene hambre`; }     
    } else if(pet.energy <= 20){
        Image.src="../gif/cansado.gif";
        text.textContent= "Estoy cansado, necesito dormir";
        energyLevel.textContent=`Energy Level is:${pet.energy}` 
    } 
}

function eat (pet) {
    if (pet.energy === 40) {
        Image.src="../gif/comiendo.gif";
        text.textContent= `${pet.namePet} tiene hambre`;
        pet.statusPet = "comiendo";
        pet.age++;
        pet.energy += 20;
        energyLevel.textContent=`Energy Level is:${pet.energy}`;       
    } else if(pet.energy <= 80){
        Image.src="../gif/lleno.gif";
        text.textContent= "Estoy lleno";
        pet.energy += 20
        energyLevel.textContent=`Energy Level is:${pet.energy}`
    } 
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