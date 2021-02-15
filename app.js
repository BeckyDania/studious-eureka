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
        name: "Grace Brewster Murray Hopper",
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

const completeSpread = cards.concat(cards)
console.table(completeSpread)

completeSpread.sort(() => 0.5 - Math.random())


let firstCardPicked = ''
let secondCardPicked = ''
let numOfCardsPicked = 0
let previousTarget = null
let numOfCardsRemaining = completeSpread.length
console.log(numOfCardsRemaining)
let delay = 1000

const game = document.getElementById("gameboard")
const board = document.createElement('section')
board.className = 'board'

board.className = "row-fluid d-flex flex-wrap position-relative grid"

const startGameDiv = document.createElement('div')
startGameDiv.id = "startgame"
game.appendChild(startGameDiv)

const startBtn = document.createElement('button')
startBtn.innerHTML = "Women In Stem"
startGameDiv.appendChild(startBtn)

const cardDiv = document.createElement('div')
cardDiv.id = "cardStudyGuide"
cardDiv.className = "card"
startGameDiv.appendChild(cardDiv)

game.appendChild(board)

const createStudyGuide = () => {

    cards.forEach((card, i) => {
                
    const studyGuide = document.createElement('div')
    studyGuide.className = "card row-fluid"
    studyGuide.id = "studyguide"
    studyGuide.style = "width: 30rem"
    studyGuide.setAttribute('data-id', i)

    
    const cardImage = document.createElement("img")
    cardImage.setAttribute('data-set', card.name)
    cardImage.className = "d-block img-fluid img-thumbnail"
    cardImage.src = card.image
    cardImage.classList = "card-img-top"

    const cardBody = document.createElement('div')
    cardBody.className = "card-body"
    cardBody.setAttribute('data-id', i)
    let h5 = document.createElement('h5')
    h5.classList = "card-title"
    h5.innerText = card.name
    let p = document.createElement('p')
    p.innerText = card.biography
    let link = document.createElement("a")
    link.setAttribute("href", card.link)
    link.innerText = "Link for more information."


    const controls = document.createElement("div")
    controls.id = "controls"
    const prevControl = document.createElement("button")
    
    prevControl.classList = "previous"
    prevControl.id = "previous"
    prevControl.innerText = "Previous"

/////PREVIOUS EVENT LISTENER/////
/// GOING TO HAVE TO SWITCH THIS TO NEXT
    prevControl.addEventListener("click", () => {
        let previousCard = cardBody.parentNode
        previousCard.classList.add("previousCard")
       // console.log(previousCard)

     //  console.log(cardBody.parentNode.parentNode.firstChild)
       
       const firstChild = cardBody.parentNode.parentNode.firstChild
      // console.log(firstChild)
       
       const lastChild = cardBody.parentNode.parentNode.lastChild
      // console.log(lastChild)
       
       let currentCard= cardBody.parentNode.previousSibling
       currentCard.classList.add("currentCard")
   //    console.log(currentCard)
    
   if(cardBody.classList !== "currentCard" && cardBody.classList !== previousCard){
                cardBody.style.visibility = "hidden"
                currentCard.style.visibility = "visible"
         console.log(currentCard)
                previousCard.style.visibility = "hidden"
         console.log(previousCard)
    //     // Need the following to take off the "previousCard"
                cardBody.parentNode.classList.remove('currentCard')
        if(previousCard !== lastChild){
                cardBody.parentNode.nextSibling.classList.remove ('previousCard')
              //  firstChild.classList.remove('previousCard')
            }
        
    //    if(currentCard === firstChild){  
    //            firstChild.classList.remove('currentCard')
    //            firstChild.classList.add('previousCard')
    //           // prevControl.remove()
    //            lastChild.classList.add('currentCard')
    //            firstChild.style.visibility = "hidden"
    //            document.getElementsByClassName('currentCard').style.visibility = "visible"
    //      }

         ///need something for starting over///
       /* if(cardBody.parentNode.parentNode.firstChild === true){
           cardBody.parentNode.classList.remove('currentCard')
           cardBody.parentNode.previousSibling.classList.remove('previousCard')
           cardBody.style.visibility = "hidden"
           cardBody.parentNode.parentNode.lastChild.classList.add('currentCard')
           cardBody.parentNode.parentNode.lastChild.style.visibility = "visible" */

       //     cardBody.style.visibility = 'hidden'

       //     
      // }
       //    console.log('startover')
       //     }
       }
    })
    
    const nextControl = document.createElement("button")
    //nextControl.setAttribute("href", "#")
    nextControl.classList = "next"
    nextControl.id = "next"
    nextControl.innerText = "Next"

    nextControl.addEventListener("click", () => {
    
        console.log('hello')



    })

    const cardDiv = document.getElementById("cardStudyGuide")
    cardDiv.appendChild(studyGuide)
    studyGuide.appendChild(cardBody)
    cardBody.appendChild(cardImage)
    cardBody.appendChild(h5)
    cardBody.appendChild(p)
    cardBody.appendChild(link)
    cardBody.appendChild(controls)
    controls.appendChild(prevControl)
    controls.appendChild(nextControl)

    })
} 

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
            }) 
        }


        
        const resetRound = () => {
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
        cardDiv.style.visibility = "visible"
        } 
    }



    startBtn.addEventListener("click", () => {

    createSpread()
    startGameDiv.style.visibility = "hidden"
    const carouselDiv = document.getElementById('carousel study guide')
    cardDiv.style.visibility = "hidden"
})

createStudyGuide()
//createSlideShow()
selections()
checkForMatch()
resetRound()
newGame()
