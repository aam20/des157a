(function () {
    'use strict';
    console.log('JS is running');

    //var allPs =document.querySelectorAll('p');
    //var submit = document.querySelector('button');
    var form = document.querySelector('form');//first instance of form 
    const madlib = document.querySelector('#madlib');

    var hat2ch = document.getElementById("hat2ch");


    //prevent form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const place = document.querySelector('#place').value;  
        const name = document.querySelector('#name').value;  
        const verb = document.querySelector('#verb').value;  
        const emotion = document.querySelector('#emotion').value; 
        const name2 = document.querySelector('#name2').value;  
        const genre = document.querySelector('#genre').value;  
        const adj = document.querySelector('#adj').value;  
        const animal = document.querySelector('#animal').value;  
        const fruit = document.querySelector('#fruit').value;  


        const text1 = `It was a dark Halloween night in ${place}, and a cat named ${name} was ${verb} the streets.`;
        const text2 = ` Earlier, ${name} was very excited to trick or treat in their ${animal} costume. Sadly, no one gave ${name} candy because they were scared of black cats and the bad omens connected to them. `;


        const text3 = ` ${name} was very hungry and ${emotion} and decided to sneak into their friend ${name2}'s house to talk to ${name2} about what had happened. Unfortunately, hunger took over and ${name} looked through ${name2}’s kitchen and decided to eat ${name2}'s ${fruit} jam, thinking ${name2} wouldn’t mind. `;
        const text4 = ` ${name} ate the jam while crying and watching ${genre} movies in ${name2}’s living room. On the way to the living room, ${name} had spilled jam over the floor and smeared it on the walls because they had stumbled over a table. `;

        
        madlib.innerHTML = text1 + text2 + text3 + text4;


        document.getElementById('overlay').className="showing";
        document.getElementById('sec1').className="hidden";


        /*BEAR IMAGE CHANGES*/
        if (animal =='bear' && fruit=="cherry") {
            document.getElementById('hat1ch').className="show";
        }

        else if (animal =='bear' && fruit=="strawberry") {
            document.getElementById('hat1st').className="show";
        }

        if (animal =='frog' && fruit=="cherry") {
            document.getElementById('hat2ch').className="show";
        }

        else if (animal =='frog' && fruit=="strawberry") {
            document.getElementById('hat2st').className="show";
        }

       
    });


    
 
}) ();