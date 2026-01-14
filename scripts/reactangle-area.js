function calculateRectangleArea(){
     // Get Length of the rectangle
     const lengthInput = document.getElementById('rectangle-length');
     const lengthText = lengthInput.value;
     const length = parseFloat(lengthText);
     console.log(length);

     // Get Width of the rectangle
     const widthInput = document.getElementById('rectangle-width');
     const widthText = widthInput.value;
     const width = parseFloat(widthText);
     console.log(width);

     // Calculate area 
     const area = length * width;
     console.log('Area of the rectangle: ', area);

     // Display rectangle area
     const rectangleAreaSpan = document.getElementById('rectangle-area');
     rectangleAreaSpan.innerText = area;

}