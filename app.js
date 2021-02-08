console.log("Becky's Project")

// create variables for images
const chienShiungWu = "wmxnSTEMimages/ChienShiungWu.png"
const faridaBedwei = "wmxnSTEMimages/farida_bedwei.png"
const graceHopper = "wmxnSTEMimages/graceHopper.png"
const katherineJohnson = "wmxnSTEMimages/katehrine_johnson.png"
const maeJemison = "wmxnSTEMimages/maeJemison.png"
const maryGoldRoss = "wmxnSTEMimages/mary_gold_ross.png"
const maryamMirzakhani = "wmxnSTEMimages/maryam.png"
const valerieThomas = "wmxnSTEMimages/maryam.png"

const chShWuBio = "Chien-Shiung Wu was a Chinese-American experimental physicist who made significant contributions in the field of nuclear physics. Wu worked on the Manhattan Project, where she helped develop the process for separating uranium into uranium-235 and uranium-238 isotopes by gaseous diffusion."

const farBeBio = "Farida Nana Efua Bedwei is a Ghanaian software engineer and cofounder of Logiciel, a fin-tech company in Ghana. Farida Bedwei has built mobile and enterprise applications, and is also known for her knowledge of software architecture, and deploying mobile services, particularly for banking applications."

const kathJohnBio = "Creola Katherine Johnson was an African-American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights."

const maeJemBio = "Mae Carol Jemison is an American engineer, physician, and former NASA astronaut. She became the first black woman to travel into space when she served as a mission specialist aboard the Space Shuttle Endeavour."

const marMirBio = "Maryam Mirzakhani was an Iranian mathematician and a professor of mathematics at Stanford University. Her research topics included Teichmüller theory, hyperbolic geometry, ergodic theory, and symplectic geometry."

const graceHopBio = "Grace Brewster Murray Hopper was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first linkers."

const maryGrBio = "Mary Golda Ross was the first known Native American female engineer, and the first female engineer in the history of Lockheed. She was one of the 40 founding engineers of the renowned and highly secretive Skunk Works project at Lockheed Corporation."

const valThomBio = "Valerie L. Thomas is an American scientist and inventor. She invented the illusion transmitter, for which she received a patent in 1980. She was responsible for developing the digital media formats image processing systems used in the early years of the Landsat program."

// link websites//
const chShWuLink = "https://www.beyondcurie.com/chien-shiung-wu"
const kathJohnLink = "https://www.beyondcurie.com/katherine-johnson"
const maeJemLink = "https://www.beyondcurie.com/mae-jemison"
const marMirLink = "https://www.beyondcurie.com/maryam-mirzakhani"
const graceHopLink = "https://www.beyondcurie.com/grace-hopper"
const maryGrLink = "https://www.beyondcurie.com/mary-golda-ross"
const farBeLink = "https://www.beyondcurie.com/new-project-86"
const valThomLink = "https://www.beyondcurie.com/valerie-thomas"

// HOLDING OFF - will create a card - create variables for accomplishments


//Create array of objects with descriptions of accomplishments - to store and link the data

const cards = [
    {
        name: "Chien-Shiung Wu",
        image: chienShiungWu,
        biography: chShWuBio,
        link: chShWuLink
    },
    {
        name: "Farida Nana Efua Bedwei",
        image: faridaBedwei,
        biography: farBeLink,
        link: farBeLink
    },
    {
        name: "Katherine Johnson",
        image: katherineJohnson,
        biography: kathJohnBio,
        link: kathJohnLink
    },
    {
        name: "Mae Carol Jemison",
        image: maeJemison,
        biography: maeJemBio,
        link: maeJemLink
    },
    {
        name: "Maryam Mirzakhani",
        image: maryamMirzakhani,
        biography: marMirBio,
        link: marMirLink
    },
    {
        name: "Grace Brewster Murray Hopper ",
        image: graceHopper,
        biography: graceHopBio,
        link: graceHopLink
    },
    {
        name: "Mary Golda Ross",
        image: maryGoldRoss,
        biography: maryGrBio,
        link: maryGrLink
    },
    {
        name: "Valerie L. Thomas",
        image: valerieThomas,
        biography: valThomBio,
        link: valThomLink
    }

]

//Duplicate cards
const completeSpread = cards.concat(cards)
console.table(completeSpread)

//randomize cards
completeSpread.sort(() => 0.5 - Math.random())
//console.table(cards)

let cardsFlipped = []
let cardsFlippedId = []

//This works - prints image, full bio and name
//console.table(cards[0])

//Create divs for each card layout

//back of card spread
/* const createDivs = () => {
    for(i=0; i < cards.length; i++){
        //let div = ("div")
        let div1 = document.createElement("div")
        div1.setAttribute("data-id", i)
        div1.setAttribute("id", "cards")
        document.getElementById("gameboard").appendChild(div1)
    }
} */

const createSpread = () => {
    for(i=0; i < completeSpread.length; i++){
    
    /* for(i=0; i < cards.length; i++){
        //let div = ("div")
        let div1 = document.createElement("div")
        div1.setAttribute("data-id", i)
        div1.setAttribute("id", "cards") */
        
        let cardElement = document.createElement("img")
        cardElement.src= completeSpread[i].image
        //"wmxnSTEMimages/WomenInStem.jpg"
        cardElement.className = "img-fluid img-thumbnail col-3"
        //classList - you can add or remove without affecting others; className - wipes out all when empty.  classList for toggle and replace methods
       cardElement.classList.add('card')

    
        
      /*  document.getElementById("#gameboard").appendChild(cardElement) */

        //for(i = 0; i < div[data-id]; i++){

        
        //document.getElementById(div1).appendChild(cardElement)
        // document.querySelectorAll('div[data-id]').appendChild('img')
      //  cardElement.addEventListener("click", flipcard)
     document.getElementById("gameboard").appendChild(cardElement)
       //console.table(`img[data-id = "${i}"]`)
   }
}

const selections = () =>{
    document.getElementsByClassName('card').addEventlistener('click', (event) {

        let clicked = event.target

    if(clicked.nodeName === )
    })
}

//const completeSpread = cards.concat(cards)

/* const checkForMatch = () => {
    const wisImage = document.getElementsByTagName("img")
    const firstPick = cardsToPlay[0]
    const nextPick = cardsToPlay[1]

    if(firstPick === nextPick){
        wisImage[firstPick].setAttribute('src', "wxmnSTEMimages/Wome")
    }
} */

/* const flipcard = () => {
    let cardId = this.getAttribute("data-id")
    cardsFlipped.push(cards[cardId].name)
    cardsFlippedId.push(cardId)
    //console.log()
    this.setAttribute("src", cards[cardId].image)
    checkForMatch()
} */
//createDivs()
createSpread()

// flipcard()
 