(function () {
    'use strict';
    console.log("reading js");

    const cards  = document.querySelectorAll('#slider img'); /*an array*/
    //console.log(cards);
    /*an array to alternate the image in the overlay for each card*/
    const myPhotos = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg"];

    /*card1*/
   cards[0].addEventListener('click', function (event) {
        //increment image count 
        event.preventDefault();
        document.getElementById('overlay1').className="showing";
        document.getElementById('myImage').src=`images/${myPhotos[0]}`;
        document.querySelector('h2').innerHTML = "THE SINK";
        document.querySelector('article p').innerHTML = "Luna loves sleeping in the sink, especially when its hot and only when its not wet. She likes to mess with the faucet and take long naps with her fluffy tail moving back and forth. If someone disturbs her, she will give a side eye as if saying 'are you serious.' ";
        //console.log('overlay1');
        
    });

    /*card2*/
    cards[1].addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay1').className="showing";
        document.getElementById('myImage').src=`images/${myPhotos[1]}`;
        document.querySelector('h2').innerHTML = "THE BAG";
        document.querySelector('article p').innerHTML = "This Target bag is one of Luna's favorite places to sleep in and to hide in when she feels playful. The bag is an upgrade from her usual interest in plastic bags. She took ownership of the bag and remanants of her soft hair are always left behind.";
        //console.log('overlay2');

    });

    
    /*card3*/
    cards[2].addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay1').className="showing";
        document.getElementById('myImage').src=`images/${myPhotos[2]}`;
        document.querySelector('h2').innerHTML = "THE SLIDING DOOR";
        document.querySelector('article p').innerHTML = "Luna loves to watch the outside through the sliding door. If you can't find her anywhere, she's likely be staring out the sliding door, sometimes observing the cats that roam around the backyard. If not looking outside, she's often hunting for a tiny insect nearby.";
        //console.log('overlay3');
    });

    /*card4*/
    cards[3].addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay1').className="showing";
        document.getElementById('myImage').src=`images/${myPhotos[3]}`;
        document.querySelector('h2').innerHTML = "THE YAWN";
        document.querySelector('article p').innerHTML = "Luna is rarely caught yawning on camera, but when she does she looks so cute with her small teeth and tongue. She's often cautious of her teeth, especially when you're trying to brush them.";
        //console.log('overlay4');
    });

    /*card5*/
    cards[4].addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay1').className="showing";
        document.getElementById('myImage').src=`images/${myPhotos[4]}`;
        document.querySelector('h2').innerHTML = "THE BED";
        document.querySelector('article p').innerHTML = "Luna has various beds, but this is a newer one that she tends to sleep in. This picture was caught after covering her with a blanket in the early morning. She had just settled for an early nap and was cuddling with her pillow.";
        //console.log('overlay5');
    });

    /*card6*/
    cards[5].addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay1').className="showing";
        document.getElementById('myImage').src=`images/${myPhotos[5]}`;
        document.querySelector('h2').innerHTML = "THE BLINDS";
        document.querySelector('article p').innerHTML = "The blinds are Luna's number one target when she's bored. She loves to try to play with them to the extent that she has torn strings that make up the blinds. Despite many incidents, she is still persistent with the blinds, especially if she knows no one is nearby.";
        //console.log('overlay6');
    });

    /*card7*/
    cards[6].addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay1').className="showing";
        document.getElementById('myImage').src=`images/${myPhotos[6]}`;
        document.querySelector('h2').innerHTML = "THE PAWS";
        document.querySelector('article p').innerHTML = "Luna's paws are always so cute and smol. The way her paws are brown tipped makes them stand out even more. She is oftentimes protective of her paws, but she likes to fold them under her body when she sits down to observe and to take a nap. When she sits down she resembles a very small loaf of bread or a small chicken.";
        //console.log('overlay7');
    });

    /*card8*/
    cards[7].addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay1').className="showing";
        document.getElementById('myImage').src=`images/${myPhotos[7]}`;
        document.querySelector('h2').innerHTML = "THE SURPRISE";
        document.querySelector('article p').innerHTML = "This is Luna's face when she's caught by surprise. The picture was taken off guard when she was just standing around. Her face seems taken aback that there is something underneath her face.";
        //console.log('overlay8');
    });

    /*card9*/
    cards[8].addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay1').className="showing";
        document.getElementById('myImage').src=`images/${myPhotos[8]}`;
        document.querySelector('h2').innerHTML = "THE STARING";
        document.querySelector('article p').innerHTML = "Luna always likes to stare at whoever is near her, well mostly the people she knows. If she does't know you, she'll probably hide until you leave. Sometimes she'll appear out of no where though and will be just staring at you, as if waiting for something. Sometimes she stares since she wants to play or just because, it's typically a mystery.";
        //console.log('overlay9');
    });

    /*card10*/
    cards[9].addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay1').className="showing";
        document.getElementById('myImage').src=`images/${myPhotos[9]}`;
        document.querySelector('h2').innerHTML = "THE FACE";
        document.querySelector('article p').innerHTML = "This is Luna's face, specifically her side profile that shows most of her prominent features. Her face in general is very cute with her big boba eyes that change color between green and aquamarine. She loves it when you rub and massage her nose and eye area, as well as her chin. When you rub her chin, you get to see her cute fish-like mouth.";
        //console.log('overlay10');
    });


    /*to close/hide overlay(s)*/
    const close = document.querySelector('.close'); 
    close.addEventListener('click', function () {
        document.getElementById('overlay1').className="hidden";
        console.log('close');
    });



}) ();