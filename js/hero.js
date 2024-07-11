const skills = [
    "Technologist",
    "Developer",
    "Problem Solver",
    "Crticial Thinker",
    "Data-Driven",
    "Detail-Oriented",
    "Designer",
    "Collaborator",
    "Human-Centered",
    "Innovator",
    "Learner",
    "Lifter",
    "Forward Thinker",
    "Systems Oriented"
];

const skillsDelay = 2;
let maxRows = 3;
let maxColumns = 6;
let quadHeight = 90 / maxRows;
let quadWidth = 100 / maxColumns;
let quadrants = [];

function createQuads() {
    for (let row = 0; row < maxRows; row++) {
        let rowLetter = ((row + 1) + 9).toString(36).toUpperCase();
        for (let column = 0; column < maxColumns; column++) {
            let positionX = (quadWidth * (column + 1));
            let positionY = (quadHeight * (row + 1));
            let quad = {
                id: `${rowLetter}${column + 1}`,
                position: {
                    x: positionX - quadWidth,
                    y: positionY - quadHeight
                },
                skillPosition: {
                    x: positionX - (Math.floor(quadWidth + (Math.random() - 0.5) * quadWidth) / 2),
                    y: positionY - (Math.floor(quadHeight + (Math.random() - 0.5) * quadHeight) / 2)
                },
                taken: false
            };
            quadrants.push(quad);
        }
    }
}

function selectQuad() {
    let max = quadrants.length;
    let index = Math.floor(Math.random() * quadrants.length);
    let selectedQuad = quadrants[index];
    quadrants = quadrants.slice(0, index).concat(quadrants.slice(index + 1));
    return selectedQuad;
}

function init() {
    createQuads();
    
    quadrants.forEach((quad) => {
        let quadrantDiv = document.createElement('div');
        quadrantDiv.classList.add('quad');
        quadrantDiv.appendChild(document.createTextNode(quad.id));
        
        quadrantDiv.style.setProperty('--hue', Math.floor(Math.random() * 360));
        
        quadrantDiv.style.height = quadHeight + '%';
        quadrantDiv.style.width = quadWidth + '%';
        
        quadrantDiv.style.left = quad.position.x + '%';
        quadrantDiv.style.top = quad.position.y + '%';
        
        document.getElementById('quads').appendChild(quadrantDiv);
    });
    
    skills.forEach((skill) => {
        let skillBubble = document.createElement('span');
        skillBubble.classList.add('skill');
        skillBubble.appendChild(document.createTextNode(skill));
        
        let selectedQuadrant = selectQuad();
        skillBubble.style.left = selectedQuadrant.skillPosition.x + '%';
        skillBubble.style.top = selectedQuadrant.skillPosition.y + '%';
        
        skillBubble.style.setProperty('--delay', skillsDelay + (Math.random() * 1) + 's');
        skillBubble.style.setProperty('--rotation', ((Math.random() - 0.5) * 2) * 100 + 'deg');
        skillBubble.style.setProperty('--rotationSet', (Math.random() - 0.5) * 10 + 'deg');
        skillBubble.style.setProperty('--hue', Math.floor(Math.random() * 360));
        
        document.getElementById('skills').appendChild(skillBubble);
    });
}

init();

document.getElementById('debug').addEventListener('click', () => {
    document.getElementById('quads').classList.toggle('active');
});

document.getElementById('restart').addEventListener('click', () => {
    document.querySelectorAll('.skill').forEach((el) => {
        el.remove();
    });
    document.querySelectorAll('.quad').forEach((el) => {
        el.remove();
    });
    quadrants = [];
    init();
});
