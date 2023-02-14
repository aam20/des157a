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


        const text1 = `It was a dark Halloween night in <span style="color:#da5252;">${place}</span>, and a cat named <span style="color:#da5252;">${name}</span> was <span style="color:#da5252">${verb}</span> the streets.`;


        const text2 = ` Earlier, ${name} was very excited to trick or treat in their <span style="color:#da5252;">${animal}</span> costume. Sadly, no one gave ${name} candy because they were scared of black cats and the bad omens connected to them. `;


        const text3 = ` ${name} was very hungry and <span style="color:#da5252;">${emotion}</span>. ${name} decided to sneak into their friend <span style="color:#da5252;">${name2}</span>'s house to talk about what had happened. Unfortunately, hunger took over and ${name} looked through ${name2}’s kitchen and decided to eat ${name2}'s <span style="color:#da5252;">${fruit}</span> jam, thinking ${name2} wouldn’t mind. `;
        
        const text4 = ` In ${name2}’s living room, ${name} ate the jam while crying and watching <span style="color:#da5252;">${genre}</span> movies. On the way to the living room, ${name} had spilled jam over the floor and smeared it on the walls. From the noise, ${name2} woke up,and after seeing the smears in the hallway, screamed <span style="color:#da5252;">${adj}</span>-murder. The next day, ${name2} confessed to ${name}.`; 
        
        madlib.innerHTML = text1 + text2 + text3 + text4;


        document.getElementById('overlay').className="showing";
        document.getElementById('sec1').className="hidden";


        /*changing image*/
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