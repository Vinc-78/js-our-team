let arrayTeam = [

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg"
    },

]

//provo a scrivere in console qualche elemento dell'array
console.log("stampa tutto l'array")
console.log(arrayTeam);
console.log("stampa il primo elemento")
console.log(arrayTeam[0]);
console.log("stampa del primo elemento il nome con il dot")
console.log(arrayTeam[0].name);
console.log("stampa del primo elemento il ruolo con il propriety")
console.log(arrayTeam[0]["role"]);




//definisco le variabili che puntano agli elementi del DOM

const teamContainer = document.querySelector(".team-container");

// realizzo la funzione che per ogni elemento dell'array crea la team card e l'aggiunge al DOM
// funzione evocata da subito



stampaTutteCard();

function stampaTutteCard() {

    console.log("funziona");

    for (let i=0; i<arrayTeam.length; i++) {

        const elementArray = arrayTeam[i];

        const teamCard = document.createElement("div");
        teamCard.classList.add("team-card");
        teamContainer.append(teamCard);

        const imgCard = document.createElement("div");
        imgCard.classList.add("card-image");
        imgCard.innerHTML=`<img src="${elementArray.image}" alt="${elementArray.name}" /> `
        teamCard.append(imgCard);

        const textCard = document.createElement("div");
        textCard.classList.add("card-text");
        teamContainer.append(teamCard);

        const h3 =document.createElement("h3");
        h3.innerHTML=`${elementArray.name}`
        h3.append(textCard)

        const p =document.createElement("p");
        p.innerHTML=`${elementArray.role}`
        p.append(textCard);
        
    }

}



   