/**
 * Objective: get base, height of a triangle. Calculate the area by using the provide formula. and then display the area.
 * step -1: get base value of the triangle
 * step -2: added an id in the base input field
 * step -3: get element byId to access the input field
 * step -4: get value from the input field. (value is string now)
 * step -5: convert the string value to a number. use parseFloat
 * 
 * 
 * 
 */


function calculateTriangleArea(){
               // get triangle base value
               const triangleBaseInput = document.getElementById('triangle-base');
               const triangleBaseText = triangleBaseInput.value;
               const Base = parseFloat(triangleBaseText);
               console.log(Base);

               // get triangle height value
               const triangleHeightInput = document.getElementById('triangle-height');
               const triangleHeightText = triangleHeightInput.value
               const height = parseFloat(triangleHeightText)
               console.log(height);

               // calculate triangle area
               const area = 0.5 * Base * height;
               console.log('area of the triangle is :', area); 

               // display triangle area
               const triangleAreaSpan = document.getElementById('triangle-area');
               triangleAreaSpan.innerText = area;
}