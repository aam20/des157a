(function () {
    'use strict';
    console.log("reading js");

    const cards  = document.querySelectorAll('#slider img'); /*an array for each card */
    const myInfo = document.querySelectorAll('.flex'); /*an array of all the content for each card*/

    //LOOP + CLOSE event listener used to be here 

    ///RANDOM CARD ids --- SO SCROLLING GOES TO CARDS @ random
    const cardIds = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine", "#ten", "#eleven", "#twelve"];
    // console.log(cardIds);


    //FUNCTION CAPTURES RANDOM ITEM FROM CARD ID ARRAY
    function getRandomItem(rare) {
        //random number/index value 
        const randomIn = Math.floor(Math.random() * rare.length);
        
        //random item 
        const item = rare[randomIn]; /*based on the randomnumber value*/
        return item;
    }

    /*ADDING RANDOM SCROLL*/
    const random = document.querySelector('.random'); 
   
    /*randomizes card & takes user to location*/
    random.addEventListener('click', function(event) {
        // console.log('in random');
        // event.preventDefault();
        const randomHref = getRandomItem (cardIds); /*getting random from cardIds*/

        //change href inside random button anchor 
        const newHref = random.querySelector("a.selected").href=`${randomHref}`; 
        console.log(newHref);


        /**************SMOOTH SCROLL FUNCTION **************/
        function smoothScroll (ev) {
            ev.preventDefault();

            //hold the href that's inside 
            const targetID = event.target.getAttribute('href'); /*holds which one was clicked*/
            console.log(`${targetID} this is the target ID`);
            const targetAnchor = document.querySelector(targetID); /*finding the selector in html*/
            console.log(`${targetAnchor} this is the target ANChor`);
            const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 200;
            window.scrollBy({top:originalTop, left:0, behavior:'smooth'});
            console.log(originalTop);
            
        }
    
        // random.addEventListener("click", smoothScroll);

        document.querySelector(`${randomHref}`).style.filter= "grayscale(100%)"; //ADD GRAYSCALE WHEN USER HAS
        document.querySelector(`${randomHref}`).style.background= "black"; //ADD GRAYSCALE WHEN USER HAS
        document.querySelector(`${randomHref}`).style.transform= "scale(1.0)"; //ADD GRAYSCALE WHEN USER HAS
        document.querySelector(`${randomHref}`).style.transition = "all 1s ease-in";

        
        if (newHref == "#one") {
            // document.querySelector(`#c1`).style.filter= "none";
            document.querySelector(`#cc1`).style.filter= "grayscale(100%)";
        }

        else if (newHref == "#two") {
            document.querySelector(`#cc2`).style.filter= "grayscale(100%)";
        }

        else if (newHref == "#three") {
            document.querySelector(`#cc3`).style.filter= "grayscale(100%)";
        }

        else if (newHref == "#four") {
            document.querySelector(`#cc4`).style.filter= "grayscale(100%)";
        }


        else if (newHref == "#five") {
            document.querySelector(`#cc5`).style.filter= "grayscale(100%)";
        }


        else if (newHref == "#six") {
            document.querySelector(`#cc6`).style.filter= "grayscale(100%)";
        }


        else if (newHref == "#seven") {
            document.querySelector(`#cc7`).style.filter= "grayscale(100%)";
        }

        else if (newHref == "#eight") {
            document.querySelector(`#cc8`).style.filter= "grayscale(100%)";
        }

        else if (newHref == "#nine") {
            document.querySelector(`#cc9`).style.filter= "grayscale(100%)";
        }

        else if (newHref == "#ten") {
            document.querySelector(`#cc10`).style.filter= "grayscale(100%)";
        }

        else if (newHref == "#eleven") {
            document.querySelector(`#cc11`).style.filter= "grayscale(100%)";
        }

        else if (newHref == "#twelve") {
            document.querySelector(`#cc12`).style.filter= "grayscale(100%)";
        }

        
        ///CLICKING & ACCESSING OVERLAYS ONLY AFTER RANDOM BUTTON IS CLICKED 
        for (let i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById('overlay1').classList="show";
                document.querySelector('#separate').classList = "hidden";
    
                //CARD1
                if (cards[i] == cards[0]) {
                    myInfo[0].classList= "showing";
                    // myInfo[0].classList = "showing";
                    myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[0]}`;
                }
    
                //CARD2
                if (cards[i] == cards[1] ) {
                    myInfo[1].classList = "showing";
                    myInfo[0].classList = "hidden";
                    // myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[1]}`;
                }
    
                //CARD3
                if (cards[i] == cards[2]) {
                    myInfo[2].classList = "showing";
                    myInfo[0].classList = "hidden";
                    myInfo[1].classList = "hidden";
                    // myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[2]}`;
                  
                }
    
                //CARD4
                if (cards[i] == cards[3]) {
                    myInfo[3].classList = "showing";
                    myInfo[0].classList = "hidden";
                    myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    // myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[3]}`;
                }
    
                //CARD5
                if (cards[i] == cards[4]) {
                    myInfo[4].classList = "showing";
                    myInfo[0].classList = "hidden";
                    myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    // myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[4]}`;
                }
    
                //CARD6
                if (cards[i] == cards[5]) {
                    myInfo[5].classList = "showing";
                    myInfo[0].classList = "hidden";
                    myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    // myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[5]}`;
                }
    
                //CARD7
                if (cards[i] == cards[6]) {
                    myInfo[6].classList = "showing";
                    myInfo[0].classList = "hidden";
                    myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    // myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[6]}`;
                }
    
                //CARD8
                if (cards[i] == cards[7] ) {
                  
                    myInfo[7].classList = "showing";
                    myInfo[0].classList = "hidden";
                    myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    // myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[7]}`;
                }
    
                //CARD9
                if (cards[i] == cards[8] ) {
                  
                    myInfo[8].classList = "showing";
                    myInfo[0].classList = "hidden";
                    myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    // myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[8]}`;
                }
                
    
                //CARD10
                if (cards[i] == cards[9]) {
                   
                    myInfo[9].classList = "showing";
                    myInfo[0].classList = "hidden";
                    myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    
                    // myInfo[9].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[9]}`;
                }

                //CARD 11 
                if (cards[i] == cards[10]) {
                    
                    myInfo[10].classList = "showing";
                    myInfo[0].classList = "hidden";
                    myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[11].classList = "hidden";
                    // myInfo[9].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[9]}`;
                }

                 //CARD 12
                 if (cards[i] == cards[11]) {
                    
                    myInfo[11].classList = "showing";
                    myInfo[0].classList = "hidden";
                    myInfo[1].classList = "hidden";
                    myInfo[2].classList = "hidden";
                    myInfo[3].classList = "hidden";
                    myInfo[4].classList = "hidden";
                    myInfo[5].classList = "hidden";
                    myInfo[6].classList = "hidden";
                    myInfo[7].classList = "hidden";
                    myInfo[8].classList = "hidden";
                    myInfo[9].classList = "hidden";
                    myInfo[10].classList = "hidden";
                    // myInfo[9].classList = "hidden";
                    // document.getElementById('myImage').src=`images/${myPhotos[9]}`;
                }

            });
        }
            
        /*to close/hide overlay(s)*/
        const close = document.querySelector('.close'); 
        close.addEventListener('click', function (event) {
            event.preventDefault(); /*when close stay on same scroll location/card*/
            document.getElementById('overlay1').classList="hidden";//overlay hides
          
            document.querySelector('#separate').classList = "showing"; /*cards + sheet appear*/
            /*in mobile after closing, the section of the slider disappears*/
    
            document.querySelector('section #slider').classList = "showing"; /*cards + sheet appear*/
            console.log('close');
        }); //end for loop
    }); //end of random event listener 

}) ();