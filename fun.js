const questions = [
    {
        q: "How do you handle hand-holding?",
        options: [
            { text: "I initiate and pull you close", type: "dominant" },
            { text: "I wait for you to grab my hand", type: "submissive" },
            { text: "I playfully swing our arms", type: "fun" },
            { text: "I just hold your pinky finger", type: "cute" }
        ]
    },
    {
        q: "What is your ideal movie night?",
        options: [
            { text: "I pick the movie, you bring snacks", type: "dominant" },
            { text: "Whatever you want to watch is fine", type: "submissive" },
            { text: "A comedy so we can laugh together", type: "fun" },
            { text: "A cozy animated movie with heavy cuddling", type: "cute" }
        ]
    },
    {
        q: "How do you kiss?",
        options: [
            { text: "Pulling you in by the waist", type: "dominant" },
            { text: "Melting into it when you initiate", type: "submissive" },
            { text: "Sneaking a surprise peck", type: "fun" },
            { text: "Soft, sweet, and lingering", type: "cute" }
        ]
    },
    {
        q: "If we are cooking together...",
        options: [
            { text: "I assign you tasks as my sous-chef", type: "dominant" },
            { text: "I sit on the counter and watch you", type: "submissive" },
            { text: "We end up starting a flour fight", type: "fun" },
            { text: "We bake sweet treats and share them", type: "cute" }
        ]
    },
    {
        q: "How do you act when you're jealous?",
        options: [
            { text: "I pull you closer to make a point", type: "dominant" },
            { text: "I get quiet and a little pouty", type: "submissive" },
            { text: "I make a sarcastic, teasing joke", type: "fun" },
            { text: "I ask for extra attention and hugs", type: "cute" }
        ]
    },
    {
        q: "What is ur Ideal First Date we should do togethor?",
        options: [
            { text: "A cozy movie night togethor ", type: "dominant" },
            { text: "Anywhere you take me", type: "submissive" },
            { text: "to the museums or aquariums or study cafe ", type: "fun" },
            { text: "watch the new spring flowers yumyum", type: "cute" }
        ]
    },
    {
        q: "How do u like to be in intimacy??",
        options: [
            { text: "I take over, ur mine! ", type: "dominant" },
            { text: "You lead i like being dominated babe", type: "submissive" },
            { text: "switchy i like both ", type: "fun" },
            { text: "i dont really like it tbh", type: "cute" }
        ]
    },
    {
        q: "what do u secretly like but wont tell me?(ur turn ons ehheeh dear royy)",
        options: [
            { text: "crying ", type: "dominant" },
            { text: "feet fetish", type: "submissive" },
            { text: "mommy caring ", type: "fun" },
            { text: "praise", type: "cute" }
        ]
    }

];

let currentQuestionIndex = 0;
let scores = { dominant: 0, submissive: 0, fun: 0, cute: 0 };

function startQuiz() {
    currentQuestionIndex = 0;
    scores = { dominant: 0, submissive: 0, fun: 0, cute: 0 };
    document.getElementById('quiz-title').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const currentQ = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = `Question ${currentQuestionIndex + 1}: ${currentQ.q}`;
    
    const optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = ''; // Clear old buttons

    // Randomize the order of buttons so the types aren't always in the same spot
    const shuffledOptions = [...currentQ.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.onclick = () => selectOption(opt.type);
        optionsGrid.appendChild(btn);
    });
}

function selectOption(type) {
    scores[type]++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-box').classList.add('hidden');
    const resultBox = document.getElementById('result-box');
    resultBox.classList.remove('hidden');

    // Find the highest score to give him a title
    let dominantTrait = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    // Capitalize the first letter for the title
    let formattedTrait = dominantTrait.charAt(0).toUpperCase() + dominantTrait.slice(1);

    document.getElementById('vibe-title').innerText = `Your Vibe: The ${formattedTrait} One!`;
    
    // The exact message requested
    document.getElementById('custom-message').innerText = "Oh Roy,u are so handsome hot and perfect and  you are so smart and kind and i love talking to you and want to get to know you more, dont ghost me baby plz";}