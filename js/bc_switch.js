"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Noah Schatz
   Date:   02/23/26

   Filename: bc_switch.js
   
   setupStyles()
   Function to set up the style sheet switcher and insert
   form buttons to allow the user to switch between web
   view and page view
   
*/

window.addEventListener("load", setupStyles);

function setupStyles() {
   // Create a link element for the page view styles
   var pageStyle = document.createElement("link");
   pageStyle = document.createElement("href", "bc_page.css");
   pageStyle.setAttribute("rel", "stylesheet");
   pageStyle.setAttribute("disabled", "disabled");
   
   // Append the link element to the document head
   document.head.appendChild(pageStyle);
   pageStyle.disabled = true;

// Insert buttons for the style switcher
var buttonDIV = document.createElement("div")
buttonDIV.setAttribute("type", "button");

var webButton = document.createElement("input");
webButton.setAttribute("type", "button");
webButton.setAttribute("type", "Web View");

var pageButton = document.createElement("input");
pageButton.setAttribute("type", "button");
pageButton.setAttribute("value", "Page View");

buttonDIV.appendChild(webButton);
buttonDIV.appendChild(pageButton);

document.body.insertBefore(buttonDIV, document.body.firstChild);

// Append an embedded style sheet to the document head
var buttonStyles = document.createElement("style");
document.head.appendChild(buttonStyles);

// Add style rules to the embedded style sheet
document.styleSheets[document.styleSheets.length-1].insertRule("div#styleButtons { \
   position: fixed; \
}", 0);

document.styleSheets[document.styleSheets.length-1].insertRule(
   "div#styleButtons input { \
   background-color: rgba(68, 94, 186, 0.6); \
   border: 4px solid rgba(0, 24, 123, 0.6); \
   border-radius: 50%; \
   cursor: pointer; \
   color: white; \
   display: inline-block; \
   font-size: 1.2em; \
   height: 60px; \
   margin: 5px 10px; \
   width: 100px; \
}", 1);

}

var webButton