(function () {
    'use strict';
    console.log("reading js");

    const cards  = document.querySelectorAll('#slider img'); /*an array for each card */

    const myInfo = document.querySelectorAll('.flex'); /*an array of all the content for each card*/


    for (let i = 0; i < cards.length; i++) {

        cards[i].addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('overlay1').classList="show";
            // document.querySelector('section').classList = "hidden";
            // document.querySelector('#separate').style.display = "none";
            document.querySelector('#separate').classList = "hidden";

            //CARD1
            if (cards[i] == cards[0]) {
                myInfo[0].classList= "showing";
                // document.querySelector('#c2 #c3 #c4 #c5 #c6 #c7 #c8 #c9').classList.replace("showing", "hidden");
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
                // document.getElementById('myImage').src=`images/${myPhotos[0]}`;
            }

            //CARD2
            if (cards[i] == cards[1]) {
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
                // document.getElementById('myImage').src=`images/${myPhotos[6]}`;
            }

            //CARD8
            if (cards[i] == cards[7]) {
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
                // document.getElementById('myImage').src=`images/${myPhotos[7]}`;
            }

            //CARD9
            if (cards[i] == cards[8]) {
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
        document.querySelector('section').classList = "showing";//cards show
        document.querySelector('#separate').classList = "showing"; /*cards + sheet appear*/
        /*in mobile after closing, the section of the slider disappears*/

        console.log('close');
    });



}) ();