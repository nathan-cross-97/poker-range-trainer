
var score = 0;
var position = '';
var userInputDict = {};

const solutions = {
    'UTG1': {
    'AA': 100
    },
    'UTG2': {
    'AA' : 100,
    'KK' : 100,
    'A9o' : 75,
    '55' : 50,
    '22' : 25
    }
};

addZero();

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
                highlight(gridItem,openInput.value);  // Highlight this item
            });
            
            gridItem.addEventListener('mousemove', () => {
                if (isDragging) {
                    highlight(gridItem,openInput.value);  // Highlight while dragging
                }
            });
            
            // Stop highlighting when mouse is released
            gridItem.addEventListener('mouseup', () => {
                isDragging = false;
            });
            
            // Append the grid item to the grid container
            gridItem.setAttribute('data-open','0');
            gridContainer.appendChild(gridItem);
        }
    }
}


function createPreflopGridSolution(position, solution) {
    // Select the grid container
    const gridsContainer = document.getElementById('container');

    let gridContainer = document.createElement('div');
    gridContainer.classList.add("grid-container-class");
    gridContainer.id = 'solution-grid';

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
                if(solution[position][gridItem.textContent] !== undefined){
                    highlightP(gridItem,solution[position][gridItem.textContent]);
                }
            }

            //offsuit
            if(row > col) {
                gridItem.textContent = cards[col]+cards[row]+'o'; // Row and column numbers
                gridItem.classList.add('offsuit');
                if(solution[position][gridItem.textContent] !== undefined){
                    highlightP(gridItem,solution[position][gridItem.textContent]);
                }

            }

            //suited
            if(row < col) {
                gridItem.textContent = cards[row]+cards[col]+'s'; // Row and column numbers
                gridItem.classList.add('suited');
                if(solution[position][gridItem.textContent] !== undefined){
                    highlightP(gridItem,solution[position][gridItem.textContent]);
                }

            }
                   
            // Append the grid item to the grid container
            gridContainer.appendChild(gridItem);
        }
    }
    gridsContainer.appendChild(gridContainer);


}

function createSolutionCompareWindow() {
    // Create window which shows score 
    
    const gridsContainer = document.getElementById('container');

    let solutionCompareWindow = document.createElement('div');
    solutionCompareWindow.classList.add("solution-compare");
    solutionCompareWindow.id = 'solution-id';



    // Rst functionality
    const resetButton = document.createElement('button');
    resetButton.textContent = "Reset"
    resetButton.id = 'rst';
    resetButton.classList.add('fold-buttons');

    resetButton.addEventListener('click', () => {
        const parent = document.getElementById('container');
        const child1 = document.getElementById('solution-id');
        const child2 = document.getElementById('solution-grid');
        const child3 = document.getElementById('grid-container');
        parent.removeChild(child1);
        parent.removeChild(child2);
        parent.removeChild(child3);
        var newPreflopGrid = document.createElement('div');
        newPreflopGrid.id = 'grid-container';
        newPreflopGrid.classList.add('grid-container-class');
        var gridContainer = document.getElementById('container');
        gridContainer.appendChild(newPreflopGrid);
        positionButtons.forEach(button => {
            button.classList.remove("highlighted");
                }); 
        createPreflopGrid();
    });


    // Results 

    const textBubble = document.createElement('h2');
    textBubble.textContent = "Results:"
    const totalOpen = document.createElement('h3');
    totalOpen.textContent = "Total";

    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add("score-container");

    const scoreList = document.createElement('ul');
    scoreList.classList.add('score-list');

    const scorePerfect = document.createElement('li');
    const scoreInaccuracy = document.createElement('li');
    const scoreMistake = document.createElement('li');

    scorePerfect.classList.add('score-item');
    scorePerfect.classList.add('perfect');

    scoreInaccuracy.classList.add('score-item');
    scoreInaccuracy.classList.add('inaccuracy');

    scoreMistake.classList.add('score-item');
    scoreMistake.classList.add('mistake');

    const iconPerfect = document.createElement('span');
    const iconLabelPerfect = document.createElement('span');
    const iconValuePerfect = document.createElement('span');

    const iconInaccuracy = document.createElement('span');
    const iconLabelInaccuracy = document.createElement('span');
    const iconValueInaccuracy = document.createElement('span');

    const iconMistake = document.createElement('span');
    const iconLabelMistake = document.createElement('span');
    const iconValueMistake = document.createElement('span');

    iconPerfect.classList.add("icon");
    iconInaccuracy.classList.add("icon");
    iconMistake.classList.add("icon");

    iconLabelPerfect.classList.add("label");
    iconLabelInaccuracy.classList.add("label");
    iconLabelMistake.classList.add("label");

    iconValuePerfect.classList.add("value");
    iconValueInaccuracy.classList.add("value");
    iconValueMistake.classList.add("value");

    iconPerfect.textContent = '✔';
    iconInaccuracy.textContent = '⚠';
    iconMistake.textContent = '❌'

    iconLabelPerfect.textContent = 'Perfect';
    iconLabelInaccuracy.textContent = 'Inaccuracy';
    iconLabelMistake.textContent = 'Mistake'
    
    const byScore = document.createElement('h3');
    byScore.textContent = "By Score";

    gridsContainer.appendChild(solutionCompareWindow);

    //Compares the two grids, highlights on original grid what was missed in red and what 
    const customInput = document.getElementById('grid-container');
    const solutionCompare = document.getElementById('solution-grid');
    compareSolution(customInput, position);

    // Add Reset button 

    scorePerfect.appendChild(iconPerfect);
    scorePerfect.appendChild(iconLabelPerfect);
    scorePerfect.appendChild(iconValuePerfect);

    scoreInaccuracy.appendChild(iconInaccuracy);
    scoreInaccuracy.appendChild(iconLabelInaccuracy);
    scoreInaccuracy.appendChild(iconValueInaccuracy);

    scoreMistake.appendChild(iconMistake);
    scoreMistake.appendChild(iconLabelMistake);
    scoreMistake.appendChild(iconValueMistake);


    scoreContainer.appendChild(byScore);
    scoreList.appendChild(scorePerfect);
    scoreList.appendChild(scoreInaccuracy);
    scoreList.appendChild(scoreMistake);
    scoreContainer.appendChild(scoreList);


    solutionCompareWindow.appendChild(textBubble);
    solutionCompareWindow.appendChild(totalOpen);
    solutionCompareWindow.appendChild(scoreContainer);
    solutionCompareWindow.appendChild(resetButton);
    
}

function findCommonValues(pos1, pos2) {
    const commonValues = {};

    // Loop through the keys of pos1
    for (const key in pos1) {
        // Check if the key exists in pos2 and if the values are the same
        if (pos2.hasOwnProperty(key) && pos1[key] === pos2[key]) {
            commonValues[key] = pos1[key]; // Store the common value
        }
    }

    return commonValues;
}

//Compares the two grids, highlights on original grid what was missed in red and what 

function compareSolution(userInput, position) {
    const childInput = userInput.querySelectorAll('div');
    // Loop through each child <div>
    childInput.forEach((childDiv) => {
        userInputDict[childDiv.textContent] = parseInt(childDiv.dataset.open);
    });

    const solutionOutput = solutions[position];
    const commonValues = findCommonValues(userInputDict,solutionOutput);
    console.log(Object.keys(commonValues).length);
    console.log(Object.keys(solutionOutput));
    return commonValues;
}

// score

function calcScore(commonVal) {
    
}


// Select Position

const positionButtons = document.querySelectorAll('.position-button');
const checkAnswer = document.getElementById('final');

positionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove highlight from all buttons
        positionButtons.forEach(btn => {
            btn.classList.remove('highlighted');
        }); 

        checkAnswer.disabled = false;
        // Highlight the clicked button
        button.classList.add('highlighted');
        position = button.textContent;
    });
});




// Open and Fold Buttons 

const openButtons = document.querySelectorAll('.open-buttons');
const openInput = document.getElementById('open-frequency');
openInput.value = 100;

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        openInput.value = button.textContent.replace("%","");
        closeInput.value = 100-parseInt(button.textContent.replace("%",""));

      });
});

const closeButtons = document.querySelectorAll('.fold-buttons');
const closeInput = document.getElementById('fold-frequency');
closeInput.value = 0;


closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        closeInput.value = button.textContent.replace("%","");
        openInput.value = 100-parseInt(button.textContent.replace("%",""));
      });
});


// Check Answer Button 

checkAnswer.addEventListener('click', () => {
    createSolutionCompareWindow();
    createPreflopGridSolution(position, solutions);
    checkAnswer.disabled = true;
  });


// Helper Functions 


// add all 0 to all solutions unless it exists 

function addZero() {
    const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
    var combos = [];
    // Create 13x13 grid
    for (let row = 0; row < 13; row++) {
        for (let col = 0; col < 13; col++) {
            if (row === col ) {
                combos.push(cards[row]+cards[col]);
            }
            if (row > col ) {
                combos.push(cards[col]+cards[row]+'o');
            }
            if (row < col ) {
                combos.push(cards[row]+cards[col]+'s');
            }
        }
    }
    for (const position in solutions) {
        let newCombo = combos;
        // Loop through the nested object for each position
        for (const hand in solutions[position]) {
            if(newCombo.includes(hand)){
                newCombo = newCombo.filter(item => item !== hand);
            }
        }
        for (let handAdd of newCombo) {
            solutions[position][handAdd] = 0;
        }
    }
}


//remove classes containing 

function removeClassContaining(gridItem, substring) {
    
    // Create a copy of the classList to iterate over (since modifying it directly can cause issues)
    const classesToRemove = [...gridItem.classList].filter(className => className.includes(substring));

    // Loop through and remove any classes containing the substring
    classesToRemove.forEach(className => {
        gridItem.classList.remove(className);
    });
}


function highlight(gridItem, percent) {
    gridItem.setAttribute('data-open','0');
    let originalPercent = percent;
    let direction = 'right';
    let highlightColor = '#b22e5b';
    let firstBackground = highlightColor;
    if (gridItem.classList.contains('pairs')) {
        direction = 'right';
        let currentBackground = '#374151';
        if (percent < 50) {
            direction = 'left';
            percent = 100 - percent;
            firstBackground = currentBackground;
            currentBackground = highlightColor;
        }
        gridItem.style.color = 'white';
        gridItem.style.background = `linear-gradient(to ${direction}, ${firstBackground} ${percent}%, ${currentBackground} ${100-percent}%)`
    }

    if (gridItem.classList.contains('offsuit')) {
        direction = 'right';
        let currentBackground = '#1f202a';
        if (percent < 50) {
            direction = 'left';
            percent = 100 - percent;
            firstBackground = currentBackground;
            currentBackground = highlightColor;
        }
        gridItem.style.color = 'white';
        gridItem.style.background = `linear-gradient(to ${direction}, ${firstBackground} ${percent}%, ${currentBackground} ${100-percent}%)`
    }

    if (gridItem.classList.contains('suited')) {
        direction = 'right';
        let currentBackground = '#282a36';
        if (percent < 50) {
            direction = 'left';
            percent = 100 - percent;
            firstBackground = currentBackground;
            currentBackground = highlightColor;
        }
        gridItem.style.color = 'white';
        gridItem.style.background = `linear-gradient(to ${direction}, ${firstBackground} ${percent}%, ${currentBackground} ${100-percent}%)`
    }


    if (originalPercent == 0) {
        gridItem.style.color = '#979eab';
    }

    gridItem.setAttribute('data-open',originalPercent.toString());

}

function highlightP(gridItem, percent) {

    let direction = 'right';
    let highlightColor = '#b22e5b';
    let firstBackground = highlightColor;
    if (gridItem.classList.contains('pairs')) {
        direction = 'right';
        let currentBackground = '#374151';
        if (percent < 50) {
            direction = 'left';
            percent = 100 - percent;
            firstBackground = currentBackground;
            currentBackground = highlightColor;
        }
        gridItem.style.color = 'white';
        gridItem.style.background = `linear-gradient(to ${direction}, ${firstBackground} ${percent}%, ${currentBackground} ${100-percent}%)`
    }

    if (gridItem.classList.contains('offsuit')) {
        direction = 'right';
        let currentBackground = '#1f202a';
        if (percent < 50) {
            direction = 'left';
            percent = 100 - percent;
            firstBackground = currentBackground;
            currentBackground = highlightColor;
        }
        gridItem.style.color = 'white';
        gridItem.style.background = `linear-gradient(to ${direction}, ${firstBackground} ${percent}%, ${currentBackground} ${100-percent}%)`
    }

    if (gridItem.classList.contains('suited')) {
        direction = 'right';
        let currentBackground = '#282a36';
        if (percent < 50) {
            direction = 'left';
            percent = 100 - percent;
            firstBackground = currentBackground;
            currentBackground = highlightColor;
        }
        gridItem.style.color = 'white';
        gridItem.style.background = `linear-gradient(to ${direction}, ${firstBackground} ${percent}%, ${currentBackground} ${100-percent}%)`
    }

}


createPreflopGrid();

