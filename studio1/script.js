(function () {
    'use strict';
    console.log('JS is running');

    //var allPs =document.querySelectorAll('p');
    //var submit = document.querySelector('button');
    var myForm = document.querySelector('form');//first instance of form 


    //prevent form submission
    myForm.addEventListener('click', function (event) {
        event.preventDefault();

        //var formData = document.querySelector('input').value;//will get 1st input here 

        //ERROR message if user clicks cancel or ok with no text 
        /*if (formData == null || formData =="") { 
            alert ('ERROR: Please fill all the form.')
        }
        */
    });

        
}) ();