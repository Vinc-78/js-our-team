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