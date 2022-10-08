'use strict';

var demo = document.getElementById("demo");



const a = number => number *2;

demo.innerHTML += a(5);
// function which get the input para (selector) --> return the element based on its CSS from querySelector
const $ = selector => document.querySelector(selector); // select tags based on its CSS (first match)
const colours = ['red', 'green', 'orange', 'blue', 'pink', 'black','brown'];

const createNewElement = () =>{
    const container = $('#container');
    const newDiv = document.createElement('div');
    newDiv.classList.add('coloured');
    newDiv.style.height = '70px';
    newDiv.style.width = '70px';
    newDiv.style.border = '3px solid black';
    container.appendChild(newDiv);
};


const changeColour = () => {
                // [e1, e2, e3]
    const allElements = document.querySelectorAll('.coloured'); // return all the CSS matches in form of an array

    var randIndex = Math.floor(Math.random()*7);

         

        allElements[allElements.length-1].style.background = colours[randIndex];
   

};


    $("#create").addEventListener('click', createNewElement);
    $("#change").addEventListener('click', changeColour);


    // data stored in small text file
    //document.cookie ='username = "Hesam"';
    // name ,value and exdays
     






