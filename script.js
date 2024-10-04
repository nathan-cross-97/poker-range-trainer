
function createPreflopGrid() {
    // Select the grid container
    const gridContainer = document.getElementById('grid-container');

    // Number of rows and columns (13x13)
    const gridSize = 13;
    const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

    // Create 13x13 grid
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            // Create a new div element for each grid cell
            const gridItem = document.createElement('div');
            
            // Add class 'grid-item' to style each div
            gridItem.classList.add('grid-item');
            
            // add some content inside each grid item, add class for styling, offsuit, pairs, and suited'
            
            //pairs
            if(row === col) {
                gridItem.textContent = cards[row]+cards[col]; // Row and column numbers
                gridItem.classList.add('pairs');
            }

            //offsuit
            if(row > col) {
                gridItem.textContent = cards[col]+cards[row]+'o'; // Row and column numbers
                gridItem.classList.add('offsuit');

            }

            //suited
            if(row < col) {
                gridItem.textContent = cards[row]+cards[col]+'s'; // Row and column numbers
                gridItem.classList.add('suited');

            }
                   
            // Add event listeners to handle mouse events
            gridItem.addEventListener('mousedown', () => {
                isDragging = true;  // Start highlighting when mouse is clicked
                gridItem.classList.add('highlighted');  // Highlight this item
            });
            
            gridItem.addEventListener('mousemove', () => {
                if (isDragging) {
                    gridItem.classList.add('highlighted');  // Highlight while dragging
                }
            });
            
            // Stop highlighting when mouse is released
            gridItem.addEventListener('mouseup', () => {
                isDragging = false;
            });
            
            // Append the grid item to the grid container
            gridContainer.appendChild(gridItem);
        }
    }
}

createPreflopGrid();

