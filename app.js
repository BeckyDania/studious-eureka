console.log("Becky's Project")

// create variables for images
const chienShiungWu = "wmxnSTEMimages/ChienShiungWu.png"
const faridaBedwei = "wmxnSTEMimages/farida_bedwei.png"
const graceHopper = "wmxnSTEMimages/graceHopper.png"
const katherineJohnson = "wmxnSTEMimages/katehrine_johnson.png"
const maeJemison = "wmxnSTEMimages/maeJemison.png"
const maryGoldRoss = "wmxnSTEMimages/mary_gold_ross.png"
const maryamMirzakhani = "wmxnSTEMimages/maryam.png"
const valerieThomas = "wmxnSTEMimages/valerie_thomas.png"

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
        biography: farBeBio,
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

let firstCardPicked = ''
let secondCardPicked = ''
let numOfCardsPicked = 0
let previousTarget = null
let numOfCardsRemaining = completeSpread.length
console.log(numOfCardsRemaining)
let delay = 10000



//This works - prints image, full bio and name
//console.table(cards[0])

const game = document.getElementById("gameboard")
const board = document.createElement('section')
board.className = 'board'
//board.className = "row-fluid d-flex justify-content-between align-items-center align-content-between flex-wrap"
board.className = "row-fluid d-flex flex-wrap position-relative grid"

const startBtn = document.createElement('button')
startBtn.innerHTML = "Women In Stem"

//startBtn.addEventListener("click", createSpread)
//Will style startBtn - STYLE NOW - too small to view
// This will appear under the study guide carousel


game.appendChild(startBtn)
game.appendChild(board)

//create function to press starBtn to create spread

const createSpread = () => {

    for(let i=0; i < completeSpread.length; i++){
        
        const card = document.createElement('div')
        card.className = "col-fluid-3"
        card.setAttribute('data-set', completeSpread[i].name)
        card.classList.add('card')



        const flipFront = document.createElement('div')
        const front = document.createElement('img')
        flipFront.appendChild(front)
        front.src = "wmxnSTEMimages/WomenInStem.jpg"
        front.className = "img-fluid img-thumbnail"
        flipFront.setAttribute('data-set', completeSpread[i].name)
        front.classList.add('front')
        //front.style.visibility = "visible | hidden | initial | inherit"
        

        //cardElement.classList.add('card')
        const flipBack = document.createElement('div')
        const cardElement = document.createElement("img")
        flipBack.setAttribute('data-set', completeSpread[i].name)
        flipBack.appendChild(cardElement)
        cardElement.src = completeSpread[i].image
        cardElement.className = "img-fluid img-thumbnail inline"
        cardElement.setAttribute('data-set', completeSpread[i].name)
        cardElement.classList.add('back')

        

        board.appendChild(card)
        card.appendChild(flipFront)
        card.appendChild(flipBack)
     
       }
    } 


    const selections = () => {
        board.addEventListener('click', event => {
            const clicked = event.target
            console.log(firstCardPicked)
            console.log(secondCardPicked)

            //console.log(clicked)
            if(clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.parentNode.classList.contains('selected')){
                return
            } if(numOfCardsPicked < 2){
                numOfCardsPicked++
                console.log(numOfCardsPicked)
            } 
            if(numOfCardsPicked === 1){
                firstCardPicked = clicked.parentNode.dataset.set
                console.log(firstCardPicked)
                clicked.parentNode.parentNode.classList.add('selected')
                clicked.style.visibility = "hidden"

            }else if(numOfCardsPicked === 2){
                     secondCardPicked = clicked.parentNode.dataset.set
                    clicked.parentNode.parentNode.classList.add('selected')
                    clicked.style.visibility = "hidden"
    
             }
             if (firstCardPicked !== '' && secondCardPicked !== '') {
               if(firstCardPicked === secondCardPicked){
                   setTimeout(checkForMatch, delay)
                   //getElementsByClassName('matched').remove()
                   // Put the study guide here?
                   setTimeout(resetRound, delay)
                } else {
                    setTimeout(resetRound, delay)
                }
               }
             previousTarget = clicked.parentNode.dataset.set
             console.log(previousTarget)
           })
        
        }


        const checkForMatch = () => {
             let selected = document.querySelectorAll('.selected')
            selected.forEach((card) => {
                card.classList.add('matched')
                createStudyGuide()
                card.remove()
                numOfCardsRemaining-=1
                console.log(numOfCardsRemaining)
            
            // 4 divs - image - bio - link - include btn 
            // btn - will include eventlistener to remove card - 
            //resume game - no need to restart game - possibly need selections

            }) 
        }
const createStudyGuide = () => {

        //let matched = document.querySelectorAll('.front')

        //console.log(matched)
            completeSpread.forEach((card) => {

            const studyGuide = document.createElement('div')
            studyGuide.className = "card"
            studyGuide.style = "width: 18rem"

            const cardImage = document.createElement("img")
            cardImage.setAttribute('data-set', card.name)
            cardImage.className = "img-fluid img-thumbnail"
            cardImage.src = card.image
            cardImage.classList = "card-img-top"
            studyGuide.appendChild(cardImage)



            const cardBody = document.createElement('div')
            cardBody.className = "card-body"
            let h5 = document.createElement('h5')
            h5.classList = "card-title"
            h5.innerText = card.name
            let p = document.createElement('p')
            p.innerText = card.biography
            let link = document.createElement("a")
            link.setAttribute("href", card.link)
            link.innerText = "Link for more information."
           // let nextBtn = document.createElement('button')
          //  nextBtn.innerText = "Click to continue game"


            const game = document.getElementById("gameboard")
            game.appendChild(studyGuide)
            studyGuide.appendChild(cardImage)
            studyGuide.appendChild(cardBody)
            cardBody.appendChild(h5)
            cardBody.appendChild(p)
            cardBody.appendChild(link)
            //cardBody.appendChild(nextBtn)


    })
}


        
        const resetRound = () => {
           // console.log("resetting")
            firstCardPicked = ''
            secondCardPicked = ''
            numOfCardsPicked = 0
            previousTarget = null
            newGame()
            
            document.querySelectorAll('.selected')
            console.log(numOfCardsRemaining)
            let front = document.querySelectorAll('.front')
            
            front.forEach(card => {
               card.style.visibility = "initial"
               card.parentNode.parentNode.classList.remove('selected')
                   })
        
        }

        const newGame = () => {
        if(numOfCardsRemaining === 0){
        startBtn.style.visibility = "visible"
        } 
    }



    startBtn.addEventListener("click", () => {
//startGame()
    createSpread()
    startBtn.style.visibility = "hidden"
})

selections()
checkForMatch()
createStudyGuide()
resetRound()
newGame()
