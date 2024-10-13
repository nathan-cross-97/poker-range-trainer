
var score = 0;
var position = '';
var stackSize = '';
var userInputDict = {};
let posClicked = false;
let stackClicked = false;

var solutions = {
    'UTG1': {
        'AA': 100,
        'KK': 100,
        'AKs': 100,
        'AQs': 100,
        'AJs': 100,
        'ATs': 100,
        'A9s': 100,
        'A8s': 100,
        'A7s': 100,
        'A6s': 100,
        'A5s': 100,
        'A4s': 100,
        'A3s': 100,
        'AKo': 100,
        'AQo': 100,
        'KQo': 75,
        'KQs': 100,
        'JJ': 100,
        'TT': 100,
        'QQ': 100,
        'KJs': 100,
        'KTs': 100,
        'K5s':25,
        'K9s': 50,
        'QJs': 100,
        'QTs': 75,
        'JTs': 50,
        'T9s': 50,
        '99': 100,
        '88': 100,
        '77': 50,
        '66': 25,
        '65s': 25,
    },
    'UTG2': {
    'AA': 100,
    'KK': 100,
    'AKs': 100,
    'AQs': 100,
    'AJs': 100,
    'ATs': 100,
    'A9s': 100,
    'A8s': 100,
    'A7s': 100,
    'A6s': 100,
    'A5s': 100,
    'A4s': 100,
    'A3s': 100,
    'A2s': 100,
    'AKo': 100,
    'AQo': 100,
    'KQo': 75,
    'KQs': 100,
    'JJ': 100,
    'TT': 100,
    'QQ': 100,
    'KJs': 100,
    'KTs': 100,
    'K5s':25,
    'K9s': 50,
    'QJs': 100,
    'QTs': 100,
    'JTs': 100,
    'T9s': 50,
    '99': 100,
    '88': 100,
    '77': 50,
    '66': 25,
    '65s': 50,
    '55': 25
    },
    'UTG3': {
    'AA': 100,
    'KK': 100,
    'AKs': 100,
    'AQs': 100,
    'AJs': 100,
    'ATs': 100,
    'A9s': 100,
    'A8s': 100,
    'A7s': 100,
    'A6s': 100,
    'A5s': 100,
    'A4s': 100,
    'A3s': 100,
    'A2s': 100,
    'AKo': 100,
    'AQo': 100,
    'AJo': 75,
    'KQo': 100,
    'KQs': 100,
    'JJ': 100,
    'TT': 100,
    'QQ': 100,
    'KJs': 100,
    'KTs': 100,
    'K8s':25,
    'K6s':25,
    'K5s':25,
    'K9s': 100,
    'QJs': 100,
    'QTs': 100,
    'JTs': 100,
    'T9s': 75,
    '99': 100,
    '88': 100,
    '77': 100,
    '66': 50,
    '65s': 75,
    '55': 25,
    '54s':25
    },
    'LJ': {
    'AA': 100,
    'KK': 100,
    'AKs': 100,
    'AQs': 100,
    'AJs': 100,
    'ATs': 100,
    'A9s': 100,
    'A8s': 100,
    'A7s': 100,
    'A6s': 100,
    'A5s': 100,
    'A4s': 100,
    'A3s': 100,
    'A2s': 100,
    'AKo': 100,
    'AQo': 100,
    'AJo': 100,
    'ATo': 50,
    'KQo': 100,
    'KJo': 50,
    'KQs': 100,
    'JJ': 100,
    'TT': 100,
    'QQ': 100,
    'KJs': 100,
    'KTs': 100,
    'K7s':100,
    'K8s':100,
    'K6s':25,
    'K5s':25,
    'K9s': 100,
    'QJs': 100,
    'QTs': 100,
    'JTs': 100,
    'T9s': 100,
    '99': 100,
    '88': 100,
    '77': 100,
    '66': 100,
    '65s': 75,
    '55': 50,
    '54s':25
    },
    'HJ': {
    'AA': 100,
    'KK': 100,
    'AKs': 100,
    'AQs': 100,
    'AJs': 100,
    'ATs': 100,
    'A9s': 100,
    'A8s': 100,
    'A7s': 100,
    'A6s': 100,
    'A5s': 100,
    'A4s': 100,
    'A3s': 100,
    'A2s': 100,
    'AKo': 100,
    'AQo': 100,
    'AJo': 100,
    'ATo': 100,
    'KQo': 100,
    'KJo': 100,
    'KTo': 50,
    'KQs': 100,
    'JJ': 100,
    'TT': 100,
    'QQ': 100,
    'QJo':75,
    'KJs': 100,
    'KTs': 100,
    'K7s':100,
    'K8s':100,
    'K6s':100,
    'K5s':50,
    'K9s': 100,
    'QJs': 100,
    'QTs': 100,
    'Q9s': 100,
    'JTs': 100,
    'J9s': 100,
    'T9s': 100,
    'T8s': 100,
    '99': 100,
    '88': 100,
    '77': 100,
    '76s': 25,
    '66': 100,
    '65s': 100,
    '55': 100,
    '54s':25
    },
    'CO': {
    'AA': 100,
    'KK': 100,
    'AKs': 100,
    'AQs': 100,
    'AJs': 100,
    'ATs': 100,
    'A9s': 100,
    'A8s': 100,
    'A7s': 100,
    'A6s': 100,
    'A5s': 100,
    'A4s': 100,
    'A3s': 100,
    'A2s': 100,
    'AKo': 100,
    'AQo': 100,
    'AJo': 100,
    'ATo': 100,
    'A9o': 100,
    'A8o': 50,
    'A5o': 50,
    'KQo': 100,
    'KJo': 100,
    'KTo': 100,
    'KQs': 100,
    'JJ': 100,
    'JTo': 100,
    'TT': 100,
    'QQ': 100,
    'QJo':100,
    'QTo':100,
    'KJs': 100,
    'KTs': 100,
    'K7s':100,
    'K8s':100,
    'K6s':100,
    'K5s':100,
    'K4s':100,
    'K9s': 100,
    'QJs': 100,
    'QTs': 100,
    'Q9s': 100,
    'Q8s': 100,
    'JTs': 100,
    'J9s': 100,
    'J8s': 100,
    'T9s': 100,
    'T8s': 100,
    'T7s': 50,
    '99': 100,
    '98s': 100,
    '97s': 75,
    '88': 100,
    '87s':50,
    '77': 100,
    '76s': 75,
    '66': 100,
    '65s': 100,
    '55': 100,
    '54s':75,
    '44':100
    },
    'BTN': {
    'AA': 100,
    'KK': 100,
    'AKs': 100,
    'AQs': 100,
    'AJs': 100,
    'ATs': 100,
    'A9s': 100,
    'A8s': 100,
    'A7s': 100,
    'A6s': 100,
    'A5s': 100,
    'A4s': 100,
    'A3s': 100,
    'A2s': 100,
    'AKo': 100,
    'AQo': 100,
    'AJo': 100,
    'ATo': 100,
    'A9o': 100,
    'A8o': 100,
    'A7o': 100,
    'A6o': 100,
    'A5o': 100,
    'A4o': 100,
    'A3o': 50,
    'KQo': 100,
    'KJo': 100,
    'KTo': 100,
    'KQs': 100,
    'JJ': 100,
    'JTo': 100,
    'TT': 100,
    'QQ': 100,
    'QJo':100,
    'QTo':100,
    'KJs': 100,
    'KTs': 100,
    'K7s':100,
    'K8s':100,
    'K6s':100,
    'K5s':100,
    'K4s':100,
    'K3s':100,
    'K2s':100,
    'K9s': 100,
    'QJs': 100,
    'QTs': 100,
    'Q9s': 100,
    'Q8s': 100,
    'Q7s': 100,
    'Q6s': 100,
    'Q5s': 100,
    'Q4s': 100,
    'Q3s': 100,
    'JTs': 100,
    'J9s': 100,
    'J8s': 100,
    'J7s': 100,
    'J6s': 100,
    'J5s': 100,
    'T9s': 100,
    'T8s': 100,
    'T7s': 100,
    'T6s': 100,
    '99': 100,
    '98s': 100,
    '97s': 100,
    '96s': 100,
    '88': 100,
    '87s':100,
    '86s':100,
    '77': 100,
    '76s': 100,
    '75s': 100,
    '66': 100,
    '65s': 100,
    '55': 100,
    '54s':100,
    '44':100,
    '33':100,
    '22':100
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

    const iconFinal = document.createElement('span');

    iconPerfect.classList.add("icon");
    iconInaccuracy.classList.add("icon");
    iconMistake.classList.add("icon");
    iconFinal.classList.add("icon");

    iconLabelPerfect.classList.add("label");
    iconLabelInaccuracy.classList.add("label");
    iconLabelMistake.classList.add("label");

    iconValuePerfect.classList.add("value");
    iconValueInaccuracy.classList.add("value");
    iconValueMistake.classList.add("value");

    iconPerfect.textContent = '✔';
    iconPerfect.style.fontSize = '25px';
    iconInaccuracy.textContent = '⚠';
    iconInaccuracy.style.fontSize = '25px';
    iconMistake.textContent = '❌'
    iconFinal.style.fontSize = '32px';

    iconLabelPerfect.textContent = 'Perfect';
    iconLabelInaccuracy.textContent = 'Inaccuracy ';
    iconLabelMistake.textContent = 'Mistake'
    
    const byScore = document.createElement('h3');
    byScore.textContent = "By Score";

    gridsContainer.appendChild(solutionCompareWindow);

    //Compares the two grids, highlights on original grid what was missed in red and what 
    const customInput = document.getElementById('grid-container');
    const solutionCompare = document.getElementById('solution-grid');
    let comparedHands = compareSolution(customInput, position);
    
    let correctCount = Object.keys(comparedHands.exactMatches).length;
    let inaccuracyCount = Object.keys(comparedHands.nonZeroNonMatching).length;
    let wrongCount = Object.keys(comparedHands.zeroNonMatching).length;

    iconValuePerfect.textContent = `${correctCount}`;
    iconValueInaccuracy.textContent = `${inaccuracyCount}`;
    iconValueMistake.textContent = `${wrongCount}`;

    let calculatedScores = calcScore(inaccuracyCount,wrongCount);


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

    const finalScore = document.createElement('h3');
    finalScore.textContent = calculatedScores[0].toString()+'%';
    const finalCat = document.createElement('h2');
    finalCat.textContent = calculatedScores[1];

    if (finalCat.textContent == 'Bad') {
        iconFinal.textContent = '❌'
        finalCat.classList.add('mistake');
        finalScore.classList.add('mistake');
    }

    if (finalCat.textContent == 'Okay') {
        iconFinal.textContent = '⚠'
        iconFinal.classList.add('mistake');
        finalCat.classList.add('inaccuracy');
        finalScore.classList.add('inaccuracy');
    }

    if (finalCat.textContent == 'Good') {
        iconFinal.textContent = '⚠';
        iconFinal.classList.add('perfect');
        finalCat.classList.add('perfect');
        finalScore.classList.add('perfect');
    }

    if (finalCat.textContent == 'Excellent') {
        iconFinal.textContent = '✔'
        iconFinal.classList.add('perfect');
        finalCat.classList.add('perfect');
        finalScore.classList.add('perfect');
    }

    solutionCompareWindow.appendChild(finalCat);
    solutionCompareWindow.appendChild(iconFinal);
    solutionCompareWindow.appendChild(finalScore);
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
    const exactMatches = {};
    const nonZeroNonMatching = {};
    const zeroNonMatching = {};

    for (const hand in userInputDict) {
        if (userInputDict[hand] === solutionOutput[hand]) {
            exactMatches[hand] = userInputDict[hand];
        } else if (userInputDict[hand] !== solutionOutput[hand] && userInputDict[hand] !== 0 && solutionOutput[hand] !== 0) {
        nonZeroNonMatching[hand] = [userInputDict[hand], solutionOutput[hand]];
        } else if (userInputDict[hand] === 0 || solutionOutput[hand] === 0) {
        zeroNonMatching[hand] = [userInputDict[hand], solutionOutput[hand]];
        }
    }

    console.log("Exact matches:", exactMatches);
    console.log("Non-zero, non-matching:", nonZeroNonMatching);
    console.log("One value is zero:", zeroNonMatching);
    return {exactMatches, nonZeroNonMatching, zeroNonMatching};
}

// score

function calcScore(inaccuracyCount, wrongCount) {
        // calculate input open % vs solution open % 
    //each 100 - mistake * 2 + inaccuracy * 1 
    //bad 0-50, okay 50-80
    // good 80-90
    // excellent 90+

    let finalScore = 100;

    let scoreCategory = 'Excellent';
    finalScore = finalScore - inaccuracyCount - wrongCount*3;
    if (finalScore < 0) {
        finalScore = 0;
    }
    if (finalScore>-1 && finalScore< 50) {
        scoreCategory = 'Bad';
    }
    if (finalScore>49 && finalScore<80) {
        scoreCategory = 'Okay';
    }

    if (finalScore>79 && finalScore<90) {
        scoreCategory = 'Good';
    }
    return [finalScore, scoreCategory];

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
        posClicked = true;
        checkButtons();
        // Highlight the clicked button
        button.classList.add('highlighted');
        position = button.textContent;
    });
});

const stackButtons = document.querySelectorAll('.stack-button');

stackButtons.forEach(button => {
    button.addEventListener('click', () => {
        stackButtons.forEach(btn => {
            btn.classList.remove('highlighted');
        });
        stackClicked = true;
        checkButtons();
        button.classList.add('highlighted');
        stackSize = button.textContent;
        if(stackSize === '100BB') {
            solutions = {
                'UTG1': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'AKo': 100,
                'AQo': 100,
                'KQo': 75,
                'KQs': 100,
                'JJ': 100,
                'TT': 100,
                'QQ': 100,
                'KJs': 100,
                'KTs': 100,
                'K5s':25,
                'K9s': 50,
                'QJs': 100,
                'QTs': 75,
                'JTs': 50,
                'T9s': 50,
                '99': 100,
                '88': 100,
                '77': 50,
                '66': 25,
                '65s': 25,
                },
                'UTG2': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'KQo': 75,
                'KQs': 100,
                'JJ': 100,
                'TT': 100,
                'QQ': 100,
                'KJs': 100,
                'KTs': 100,
                'K5s':25,
                'K9s': 50,
                'QJs': 100,
                'QTs': 100,
                'JTs': 100,
                'T9s': 50,
                '99': 100,
                '88': 100,
                '77': 50,
                '66': 25,
                '65s': 50,
                '55': 25
                },
                'UTG3': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'AJo': 75,
                'KQo': 100,
                'KQs': 100,
                'JJ': 100,
                'TT': 100,
                'QQ': 100,
                'KJs': 100,
                'KTs': 100,
                'K8s':25,
                'K6s':25,
                'K5s':25,
                'K9s': 100,
                'QJs': 100,
                'QTs': 100,
                'JTs': 100,
                'T9s': 75,
                '99': 100,
                '88': 100,
                '77': 100,
                '66': 50,
                '65s': 75,
                '55': 25,
                '54s':25
                },
                'LJ': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'AJo': 100,
                'ATo': 50,
                'KQo': 100,
                'KJo': 50,
                'KQs': 100,
                'JJ': 100,
                'TT': 100,
                'QQ': 100,
                'KJs': 100,
                'KTs': 100,
                'K7s':100,
                'K8s':100,
                'K6s':25,
                'K5s':25,
                'K9s': 100,
                'QJs': 100,
                'QTs': 100,
                'JTs': 100,
                'T9s': 100,
                '99': 100,
                '88': 100,
                '77': 100,
                '66': 100,
                '65s': 75,
                '55': 50,
                '54s':25
                },
                'HJ': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'AJo': 100,
                'ATo': 100,
                'KQo': 100,
                'KJo': 100,
                'KTo': 50,
                'KQs': 100,
                'JJ': 100,
                'TT': 100,
                'QQ': 100,
                'QJo':75,
                'KJs': 100,
                'KTs': 100,
                'K7s':100,
                'K8s':100,
                'K6s':100,
                'K5s':50,
                'K9s': 100,
                'QJs': 100,
                'QTs': 100,
                'Q9s': 100,
                'JTs': 100,
                'J9s': 100,
                'T9s': 100,
                'T8s': 100,
                '99': 100,
                '88': 100,
                '77': 100,
                '76s': 25,
                '66': 100,
                '65s': 100,
                '55': 100,
                '54s':25
                },
                'CO': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'AJo': 100,
                'ATo': 100,
                'A9o': 100,
                'A8o': 50,
                'A5o': 50,
                'KQo': 100,
                'KJo': 100,
                'KTo': 100,
                'KQs': 100,
                'JJ': 100,
                'JTo': 100,
                'TT': 100,
                'QQ': 100,
                'QJo':100,
                'QTo':100,
                'KJs': 100,
                'KTs': 100,
                'K7s':100,
                'K8s':100,
                'K6s':100,
                'K5s':100,
                'K4s':100,
                'K9s': 100,
                'QJs': 100,
                'QTs': 100,
                'Q9s': 100,
                'Q8s': 100,
                'JTs': 100,
                'J9s': 100,
                'J8s': 100,
                'T9s': 100,
                'T8s': 100,
                'T7s': 50,
                '99': 100,
                '98s': 100,
                '97s': 75,
                '88': 100,
                '87s':50,
                '77': 100,
                '76s': 75,
                '66': 100,
                '65s': 100,
                '55': 100,
                '54s':75,
                '44':100
                },
                'BTN': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'AJo': 100,
                'ATo': 100,
                'A9o': 100,
                'A8o': 100,
                'A7o': 100,
                'A6o': 100,
                'A5o': 100,
                'A4o': 100,
                'A3o': 50,
                'KQo': 100,
                'KJo': 100,
                'KTo': 100,
                'KQs': 100,
                'JJ': 100,
                'JTo': 100,
                'TT': 100,
                'QQ': 100,
                'QJo':100,
                'QTo':100,
                'KJs': 100,
                'KTs': 100,
                'K7s':100,
                'K8s':100,
                'K6s':100,
                'K5s':100,
                'K4s':100,
                'K3s':100,
                'K2s':100,
                'K9s': 100,
                'QJs': 100,
                'QTs': 100,
                'Q9s': 100,
                'Q8s': 100,
                'Q7s': 100,
                'Q6s': 100,
                'Q5s': 100,
                'Q4s': 100,
                'Q3s': 100,
                'JTs': 100,
                'J9s': 100,
                'J8s': 100,
                'J7s': 100,
                'J6s': 100,
                'J5s': 100,
                'T9s': 100,
                'T8s': 100,
                'T7s': 100,
                'T6s': 100,
                '99': 100,
                '98s': 100,
                '97s': 100,
                '96s': 100,
                '88': 100,
                '87s':100,
                '86s':100,
                '77': 100,
                '76s': 100,
                '75s': 100,
                '66': 100,
                '65s': 100,
                '55': 100,
                '54s':100,
                '44':100,
                '33':100,
                '22':100
                }
        };
            addZero();

        }
        if(stackSize == '200BB') {
            solutions = {
                'UTG1': {
                    'AA': 100,
                    'KK': 100,
                    'AKs': 100,
                    'AQs': 100,
                    'AJs': 100,
                    'ATs': 100,
                    'A9s': 100,
                    'A8s': 100,
                    'A7s': 100,
                    'A6s': 100,
                    'A5s': 100,
                    'A4s': 100,
                    'A3s': 100,
                    'AKo': 100,
                    'AQo': 100,
                    'KQo': 50,
                    'KQs': 100,
                    'JJ': 100,
                    'TT': 100,
                    'QQ': 100,
                    'KJs': 100,
                    'KTs': 100,
                    'K5s':25,
                    'K9s': 50,
                    'QJs': 100,
                    'QTs': 75,
                    'JTs': 50,
                    'T9s': 50,
                    '99': 100,
                    '88': 100,
                    '77': 50,
                    '66': 25,
                    '65s': 50,
                },
                'UTG2': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'KQo': 50,
                'KQs': 100,
                'JJ': 100,
                'TT': 100,
                'QQ': 100,
                'KJs': 100,
                'KTs': 100,
                'K5s':25,
                'K9s': 50,
                'QJs': 100,
                'QTs': 100,
                'JTs': 100,
                'T9s': 100,
                '99': 100,
                '88': 100,
                '77': 50,
                '66': 25,
                '65s': 75,
                '55': 25
                },
                'UTG3': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'AJo': 75,
                'KQo': 100,
                'KQs': 100,
                'JJ': 100,
                'TT': 100,
                'QQ': 100,
                'KJs': 100,
                'KTs': 100,
                'K9s': 50,
                'QJs': 100,
                'QTs': 100,
                'JTs': 100,
                'J9s':50,
                'T9s': 100,
                '99': 100,
                '88': 100,
                '77': 100,
                '66': 50,
                '65s': 100,
                '55': 50,
                },
                'LJ': {
                    'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'AJo': 100,
                'ATo':50,
                'KQo': 100,
                'KQs': 100,
                'JJ': 100,
                'TT': 100,
                'QQ': 100,
                'KJs': 100,
                'KTs': 100,
                'K9s': 100,
                'K8s': 50,
                'K7s': 50,
                'QJs': 100,
                'QTs': 100,
                'JTs': 100,
                'J9s':100,
                'T9s': 100,
                'T8s':50,
                '99': 100,
                '88': 100,
                '77': 100,
                '76s':50,
                '66': 100,
                '65s': 100,
                '55': 100,
                },
                'HJ': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'AJo': 100,
                'ATo': 100,
                'KQo': 100,
                'KJo': 100,
                'KTo': 50,
                'KQs': 100,
                'JJ': 100,
                'TT': 100,
                'QQ': 100,
                'QJo':75,
                'KJs': 100,
                'KTs': 100,
                'K7s':100,
                'K8s':100,
                'K6s':100,
                'K5s':50,
                'K9s': 100,
                'QJs': 100,
                'QTs': 100,
                'Q9s': 100,
                'JTs': 100,
                'J9s': 100,
                'T9s': 100,
                'T8s': 100,
                '99': 100,
                '88': 100,
                '77': 100,
                '76s': 25,
                '66': 100,
                '65s': 100,
                '55': 100,
                '54s':25
                },
                'CO': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'AJo': 100,
                'ATo': 100,
                'A9o': 100,
                'A8o': 50,
                'A5o': 50,
                'KQo': 100,
                'KJo': 100,
                'KTo': 100,
                'KQs': 100,
                'JJ': 100,
                'JTo': 100,
                'TT': 100,
                'QQ': 100,
                'QJo':100,
                'QTo':100,
                'KJs': 100,
                'KTs': 100,
                'K7s':100,
                'K8s':100,
                'K6s':100,
                'K5s':100,
                'K4s':100,
                'K9s': 100,
                'QJs': 100,
                'QTs': 100,
                'Q9s': 100,
                'Q8s': 100,
                'JTs': 100,
                'J9s': 100,
                'J8s': 100,
                'T9s': 100,
                'T8s': 100,
                'T7s': 50,
                '99': 100,
                '98s': 100,
                '97s': 75,
                '88': 100,
                '87s':50,
                '77': 100,
                '76s': 75,
                '66': 100,
                '65s': 100,
                '55': 100,
                '54s':75,
                '44':100
                },
                'BTN': {
                'AA': 100,
                'KK': 100,
                'AKs': 100,
                'AQs': 100,
                'AJs': 100,
                'ATs': 100,
                'A9s': 100,
                'A8s': 100,
                'A7s': 100,
                'A6s': 100,
                'A5s': 100,
                'A4s': 100,
                'A3s': 100,
                'A2s': 100,
                'AKo': 100,
                'AQo': 100,
                'AJo': 100,
                'ATo': 100,
                'A9o': 100,
                'A8o': 100,
                'A7o': 100,
                'A6o': 100,
                'A5o': 100,
                'A4o': 100,
                'A3o': 50,
                'KQo': 100,
                'KJo': 100,
                'KTo': 100,
                'KQs': 100,
                'JJ': 100,
                'JTo': 100,
                'TT': 100,
                'QQ': 100,
                'QJo':100,
                'QTo':100,
                'KJs': 100,
                'KTs': 100,
                'K7s':100,
                'K8s':100,
                'K6s':100,
                'K5s':100,
                'K4s':100,
                'K3s':100,
                'K2s':100,
                'K9s': 100,
                'QJs': 100,
                'QTs': 100,
                'Q9s': 100,
                'Q8s': 100,
                'Q7s': 100,
                'Q6s': 100,
                'Q5s': 100,
                'Q4s': 100,
                'Q3s': 100,
                'JTs': 100,
                'J9s': 100,
                'J8s': 100,
                'J7s': 100,
                'J6s': 100,
                'J5s': 100,
                'T9s': 100,
                'T8s': 100,
                'T7s': 100,
                'T6s': 100,
                '99': 100,
                '98s': 100,
                '97s': 100,
                '96s': 100,
                '88': 100,
                '87s':100,
                '86s':100,
                '77': 100,
                '76s': 100,
                '75s': 100,
                '66': 100,
                '65s': 100,
                '55': 100,
                '54s':100,
                '44':100,
                '33':100,
                '22':100
                }
            };
            addZero();
        }
    })
})


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


function checkButtons() {
    if (posClicked && stackClicked) {
        checkAnswer.disabled = false;
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

