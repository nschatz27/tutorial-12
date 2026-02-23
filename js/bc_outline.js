"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Noah Schatz
   Date:   02/23/26

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array

*/

/* Generate an outline based on h1 through h6 headings in the soruce document */

window.addEventListener("load", makeOutline); // event listener for the load event | runs the makeOutline() function when the page is loaded

function makeOutline() {
   // Location of the document outline
   var outline = document.getElementById("outline");

   // defines the location of the outline and source variables

   // Source document for the outline
   var source = document.getElementById("doc");

   var mainHeading = document.createElement("h1");
   var outlineList = document.createElement("ol");
   var headingText = document.createTextNode("Outline"); // creates element nodes for the h1 and ol elements | creates a text node containing the text "Outline"

   mainHeading.appendChild(headingText);
   outline.appendChild(mainHeading);
   outline.appendChild(outlineList);

}

function createList(source, outlineList) {
   // Headings for the outline
   var heading = ["H1", "H2", "H3", "H4", "H5", "H6"]; // array of headings to be displayed in the outline

   /* Loops through all of teh child nodes of source article until no child nodes are left */

   for (var n = source.firstChild; n !== null; n = n.nextSibling) {
      // starts the loop with the first child node | runs the loop as long as the current node is not null | goes to the next sibling node each time through the loops

      // Examine only article headings
      var headLevel = headings.indexOf(n.nodeName); // retrieves the index of the element node name

      if (headLevel !== -1) { // tests whether the element node name appears in the headings array
         var listElem = document.createElement("li"); // creates and li element
         listElem.innerHTML = n.firstChild.nodeValue; // sets the inner HTML of the li element to the value of the heading's text node
         outlineList.appendChild(listElem); // appends the li element to the outline list

         createList(source, outlineList); // populates the online list | source of the outline headings | node containing the outline list
      }
   }
}