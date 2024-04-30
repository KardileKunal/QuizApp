// Define your questions with options for each category
// question and their options taken from google
const questions = {
	"Pipes": [
		{ 
			question: "Pipes A & B fill a tank in 10 & 15 hrs. Together, how long?", 
		options: ["A) 6 hrs", "B) 7.5 hrs", "C) Less than 6 hrs", "D) More than 15 hrs"],
		 correctAnswer: "B) 7.5 hrs"
	 	},  // Combined rate is faster than individual rates
        { 
			question: "Pipe A fills a tank in 12 hrs. A leak empties it in 20 hrs. Net effect (fill/empty)?",
		 options: ["A) Fills faster", "B) No change", "C) Empties faster", "D) Depends on pipes"],
		  correctAnswer:  "C) Empties faster"
		 }, // Leak empties slower than filling
        { 
			question: "Pipe A fills a tank in x hrs. Pipe B is twice slower. B's time to fill?",
		 options: ["A) x hrs", "B) 2x hrs", "C) x/2 hrs", "D) Depends on A's rate"],
		  correctAnswer: "B) 2x hrs" 
		}, // B takes double the time of A
        { 
			question: "Bathtub 1/3 full. Pipe A fills in 5 mins, B empties in 8 mins. Fill time?", 
		options: ["A) Less than 5 mins", "B) 5 mins", "C) More than 5 mins", "D) Data insufficient"],
		 correctAnswer: "B) 5 mins" 
		}, // Need to fill remaining 2/3, A is faster
        { 
			question: "Pipes A & B fill a pool in 6 & 8 hrs. What portion filled after 3 hrs?",
		 options: ["A) 1/2", "B) 3/4", "C) More than 1/2", "D) Less than 1/4"],
		  correctAnswer:"B) 3/4"
		}, // Both contribute, portion filled will be between slowest rate's progress (A's 3 hrs work) and combined rate's progress (both for 3 hrs)
        { 
			question: "Main inlet fills tank in 4 hrs, drain empties in 6 hrs. How long to fill half?",
		 options: ["A) Less than 2 hrs", "B) 2 hrs", "C) More than 2 hrs", "D) Depends on size"],
		  correctAnswer: "C) More than 2 hrs"
		}, // Combined rate is positive (filling) and slower than inlet alone
        { 
			question: "Pipe X fills 3x faster than Pipe Y. Together they fill in 1 hr. Pipe Y's time?",
		 options: ["A) 1.5 hrs", "B) 2 hrs", "C) 3 hrs", "D) Cannot determine"],
		  correctAnswer:"C) 3 hrs" 
		}, // Y is slower, so its time will be higher than combined time
        { 
			question: "Tank needs 100 units, Pipe A fills 10 units/hr, Pipe B fills 8 units/hr. 4 hrs work?",
		 options: ["A) Less than 72", "B) 72 units", "C) More than 72", "D) 100 units"],
		  correctAnswer: "B) 72 units"
		 }, // Combined rate is 18 units/hr, so filled units will be less than product of rate and time (72) but more than individual rates' work in 4 hrs
        { 
			question: "Tank 20% full. Pipe A fills entire tank in 5 hrs. Pipe B rate to reach 80% in 3 hrs (working together)?",
		 options: ["A) Less than 20%", "B) 20%", "C) More than 20%", "D) Data insufficient"], 
		 correctAnswer: "D) Data insufficient" 
		}, // Need to fill 60% in 3 hrs, which is a higher rate than A's rate for the whole tank
        { 
			question: "A tank has two inlets, A and B. Inlet A fills the tank in 4 hours, and Inlet B takes 6 hours. If both inlets are opened simultaneously, how much faster will they fill the tank compared to the slower inlet working alone?",
		 options: ["A) 25% faster", "B) 33% faster", "C) 50% faster", "D) 66% faster"],
		  correctAnswer:"B) 33% faster" 
		}, // Combined rate is faster than the slowest individual rate

	],
	"Probability": [

			{
				 question: "You flip a fair coin. What is the probability of getting heads?",
			 options: ["A) 0%", "B) 25%", "C) 50%", "D) 75%"],
			 correctAnswer:  "C) 50%" 
		}, // 50% chance for heads or tails in a fair coin
			{
				 question: "A bag contains 3 red marbles and 2 blue marbles. What is the probability of picking a red marble?",
			 options: ["A) 1/5", "B) 2/3", "C) 3/5", "D) 1/2"],
			 correctAnswer:  "C) 3/5"
		 }, // 3 red marbles out of 5 total
			{
				 question: "A die has 6 sides. What is the probability of rolling a number greater than 4?",
			 options: ["A) 1/3", "B) 1/2", "C) 2/3", "D) 5/6"],
			 correctAnswer: "D) 5/6"
		 }, // 2 favorable outcomes (5 & 6) out of 6 total
			{
				 question: "There are 52 cards in a deck. What is the probability of picking a king of hearts?",
			 options: ["A) 1/13", "B) 1/52", "C) 4/13", "D) Impossible"],
			 correctAnswer: "B) 1/52"
		 }, // Only 1 king of hearts out of 52 cards
			{
				 question: "You roll two dice. What is the probability of getting a sum of 7?",
			 options: ["A) 1/6", "B) 1/9", "C) 1/12", "D) 1/18"],
			 correctAnswer:  "C) 1/12" 
		}, // 6 favorable outcomes ((1,6), (2,5), (3,4), (4,3), (5,2), (6,1)) out of 36 total possibilities
			{
				 question: "A box contains 4 red balls, 3 green balls, and 2 blue balls. You pick a ball without replacement. What is the probability of picking a green ball then a red ball?",
			 dependent: true,
			 options: ["A) 3/9 * 4/8", "B) 3/9 * (4/8 - 1/9)", "C) (3/9 + 4/8) / 2", "D) Impossible to calculate"],
			 correctAnswer: "A) 3/9 * 4/8" 
		}, // Dependent events as the first pick affects the second (fewer red balls after picking green)
			{
				 question: "A bag has 10 colored balls: 4 red, 3 blue, and 3 yellow. What is the probability of picking a red ball or a blue ball?",
			 options: ["A) 1/3", "B) 2/3", "C) 7/10", "D) 9/10"],
			 correctAnswer: "D) 9/10"
		 }, // Probability of red OR blue = probability of red + probability of blue (without overlap)
			{
				 question: "In a class of 20 students, 8 wear glasses. What is the probability that a randomly chosen student does NOT wear glasses?",
			 options: ["A) 2/5", "B) 3/5", "C) 8/20", "D) 12/20"],
			 correctAnswer: "B) 3/5"
		 }, // Probability of NOT wearing glasses = 1 - probability of wearing glasses
			{
				 question: "A spinner has 4 equal sections: red, green, blue, and yellow. What is the probability of landing on red or not landing on red?",
			 options: ["A) 0%", "B) 25%", "C) 50%", "D) 100%"],
			 correctAnswer: "D) 100%"
		 }, // This is a trick question. Any spin will result in either landing on red or not landing on red (100% probability)
			{
				 question: "From a deck of cards, you draw one card, replace it, and then draw another card. What is the probability of drawing a heart in the first draw and a spade in the second draw?",
			 options: ["A) 1/4 * 1/4", "B) 1/4 * 3/4", "C) Depends on the order", "D) Impossible to calculate"],
			 correctAnswer: "A) 1/4 * 1/4" 
		}, // Independent events (replacing the card ensures the draws are not dependent)
			{
				 question: "A bag contains only white and black marbles. The probability of picking a white marble is 2/3. What is the probability of picking a black marble?",
			 options: ["A) 1/3", "B) 2/3", "C) Depends on the number of marbles", "D) Impossible to determine"],
			 correctAnswer: "B) 2/3" 
		} //Since the bag only contains white and black marbles, the probabilities of picking either color must add up to 1 (certain outcome). If the probability of picking a white marble is 2/3, then the remaining probability (1 - 2/3 = 1/3) must be the probability of picking a black marble.

	],


    "age": [
       
        {
             question: "If someone was born in 1980, what is their age in the year 2024?",
         options: ["A) Cannot be determined", "B) 34", "C) 44", "D) 54"],
         correctAnswer: "B) 34" 
        },// Calculates age based on birth year and current year
        { 
            question: "The legal voting age in the US is:", 
            options: ["A) 16", "B) 18", "C) 21", "D) 25"],
            correctAnswer: "B) 18"
         }, // Common legal age for a specific action
        { 
            question: "At what age do children typically start kindergarten?",
             options: ["A) 3 years old", "B) 4 years old", "C) 5 years old", "D) 6 years old"],
             correctAnswer: "C) 5 years old" 
        }, // Average age for a developmental stage
        { 
            question: "People are generally considered senior citizens when they reach the age of:",
             options: ["A) 55", "B) 60", "C) 65", "D) 70"], 
             correctAnswer: "C) 65" 
        }, // Socially defined age range 
        { 
            question: "A dog year is roughly equivalent to how many human years?", 
            options: ["A) 1", "B) 3", "C) 7", "D) 10"],
            correctAnswer: "B) 3" 
        }, // Conversion between age units for different species
        { 
            question: "Which term describes someone in their 20s?",
             options: ["A) Infant", "B) Toddler", "C) Teenager", "D) Young adult"], 
             correctAnswer: "D) Young adult"
        }, // Age-related terminology
        { 
            question: "How does aging typically affect a person's eyesight?",
             options: ["A) Improves", "B) May worsen", "C) Stays the same", "D) Depends on genetics"], 
             correctAnswer: "B) May worsen" 
        }, // Age-related physical changes
        { 
            question: "What is the average life expectancy in developed countries?", 
            options: ["A) 50-60 years", "B) 60-70 years", "C) 70-80 years", "D) 80-90 years"],
            correctAnswer:  "C) 70-80 years" 
        }, // Statistical average lifespan
        { 
            question: "People often celebrate reaching a milestone age like:",
             options: ["A) 10th", "B) 16th", "C) 21st", "D) All of the above"],
             correctAnswer:  "D) All of the above"
        }, // Culturally significant ages
        { 
            question: "How can a healthy lifestyle help with aging?",
             options: ["A) Improves overall health", "B) Reduces risk of diseases", "C) Both A and B", "D) None of the above"],
             correctAnswer: "C) Both A and B" 
        }, // Impact of lifestyle on aging process
        { 
            question: "Maturity typically comes with:",
             options: ["A) Increased impulsiveness", "B) Improved decision-making", "C) Less responsibility", "D) Dependence on others"],
             correctAnswer: "B) Improved decision-making"
            }, // Age-related development of cognitive skills
],

//questions and correctAnswer for this is taken from google 
"profit": [
    
        { 
            question: "A company sells a product for $10 and has a cost price of $6. What is the profit per unit sold?",
             options: ["A) $4", "B) $6", "C) $8", "D) $10"],
              correctAnswer: "A) $4" 
        }, // Profit = Selling price - Cost price
        { 
            question: "If a business has a total revenue of $100,000 and expenses of $80,000, what is its net profit?",
             options: ["A) -$20,000", "B) $20,000", "C) $80,000", "D) $100,000"], 
             correctAnswer: "B) $20,000" 
        }, // Net profit = Revenue - Expenses
        { 
            question: "A store increased its sales by 10% but its profit margin remained the same. Will the net profit increase, decrease, or stay the same?",
             options: ["A) Increase", "B) Decrease", "C) Stay the same", "D) Depends on other factors"],
             correctAnswer: "B) Decrease"
        }, // Profit margin * Increased sales = Increased profit
        { 
            question: "A company offers a discount on a product, lowering the selling price. What will likely happen to the profit per unit sold?",
             options: ["A) Increase", "B) Decrease", "C) Stay the same", "D) Unpredictable"],
             correctAnswer: "B) Decrease" 
        }, // Discounts generally decrease profit per unit
        { 
            question: "Which of the following is NOT a typical expense for a business?",
             options: ["A) Rent", "B) Revenue", "C) Employee salaries", "D) Marketing costs"],
              correctAnswer: "B) Revenue" 
        }, // Revenue is income, not an expense
        { 
            question: "A company invests in new equipment to improve efficiency. How might this impact future profits?",
             options: ["A) Increase profit by reducing production costs", "B) Decrease profit due to the equipment investment", "C) No impact on profit", "D) Depends on the equipment's effectiveness"],
              correctAnswer: "B) Decrease profit due to the equipment investment" 
        }, // Efficiency improvements can lead to higher profits
        { 
            question: "Breaking even means a company has: ", 
            options: ["A) Positive net profit", "B) Negative net profit", "C) Zero net profit", "D) High debt"], 
            correctAnswer: "C) Zero net profit"
     }, // Breaking even = Revenue = Expenses
        { 
            question: "What is the main purpose of calculating profit for a business?",
             options: ["A) Track sales performance", "B) Measure financial health", "C) Manage customer relationships", "D) Advertise products"],
              correctAnswer: "B) Measure financial health"
         }, // Profitability is a key financial health indicator
        { 
            question: "A company can increase its profit margin by:",
             options: ["A) Reducing expenses", "B) Increasing selling price", "C) Both A and B", "D) Neither A nor B"], 
             correctAnswer: "C) Both A and B" 
        }, // Profit margin = Profit / Revenue (both A & B can affect it)
        { 
            question: "E-commerce businesses often have lower overhead costs compared to brick-and-mortar stores. How might this benefit their profit margins?",
             options: ["A) No impact", "B) May lead to higher profit margins", "C) May lead to lower profit margins", "D) Cannot be determined"],
             correctAnswer: "B) May lead to higher profit margins" 
        }, // Lower overhead costs can contribute to higher profit margins
]




};

// Function to redirect to the quiz page with selected category
function redirectToQuiz(category) {
	// Store the selected category and user's name in localStorage for later use
	localStorage.setItem('selectedCategory', category);
	localStorage.setItem('userName', document.getElementById('name').value.trim());
	// Redirect to the quiz page
	window.location.href = 'quiz.html';
}

// Function to start the quiz
function startQuiz() {
	var name = document.getElementById('name').value.trim();
	if (name === '') {
			alert('Please enter your name to start the quiz.');
	} else {
			// Store the user's name in localStorage for later use
			localStorage.setItem('userName', name);
			alert("Plz select the Category to Start Quiz.");
			// Redirect to the category selection page
			//window.location.href = 'category.html';
	}
}

// Function to handle category selection and start the quiz
function selectCategory(category) {
	redirectToQuiz(category);
}

let currentQuestionIndex = 0;
let score = 0;

// Function to load next question on the quiz page
function loadNextQuestion() {
	const selectedCategory = localStorage.getItem('selectedCategory');
	const categoryQuestions = questions[selectedCategory];
	const questionContainer = document.getElementById('question');
	const optionsContainer = document.getElementById('options');
	questionContainer.innerHTML = ''; // Clear previous question
	optionsContainer.innerHTML = ''; // Clear previous options

	// Display the current question
	const currentQuestion = categoryQuestions[currentQuestionIndex];
	const questionElement = document.createElement('p');
	questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
	questionContainer.appendChild(questionElement);

	// Display options
	currentQuestion.options.forEach((option, index) => {
			const optionElement = document.createElement('button');
			optionElement.textContent = option;
			optionElement.onclick = function() {
					checkAnswerAndLoadNext(option);
			};
			optionsContainer.appendChild(optionElement);
	});
}

// Function to check the Answer and load the next question
function checkAnswerAndLoadNext(selectedOption) {
	const selectedCategory = localStorage.getItem('selectedCategory');
	const categoryQuestions = questions[selectedCategory];
	const currentQuestion = categoryQuestions[currentQuestionIndex];

	if (selectedOption === currentQuestion.correctAnswer) {
			score++; // Increment score for correct Answer
	}

	// Increase the question index
	currentQuestionIndex++;

	// Load the next question if available
	if (currentQuestionIndex < categoryQuestions.length) {
			loadNextQuestion();
	} else {
			// If all questions are answered, redirect to the result page
			localStorage.setItem('score', score);
			window.location.href = 'result.html';
	}
}

// Function to display the result
function displayResult() {
	const userName = localStorage.getItem('userName');
	const selectedCategory = localStorage.getItem('selectedCategory');
	const totalQuestions = questions[selectedCategory].length;
	const userScore = localStorage.getItem('score');

	document.getElementById('name').textContent = userName;
	document.getElementById('total-questions').textContent = totalQuestions;
	document.getElementById('correct-answers').textContent = userScore;
	document.getElementById('score').textContent = ((userScore / totalQuestions) * 100).toFixed(2) + '%';
}
// Function to start the quiz again
function startAgain() {
	// Clear the stored score
	localStorage.removeItem('score');

	// Check if a category was previously selected
	const selectedCategory = localStorage.getItem('selectedCategory');
	if (selectedCategory) {
			// If a category was selected, redirect to the quiz page with the same category
			window.location.href = 'quiz.html';
	} else {
			// If no category was selected, redirect to the result selection page
			window.location.href = 'result.html';
	}
}

function goToHome() {
	// Redirect to the home page
	window.location.href ='index.html';
}

// Logic for different pages
const currentPage = window.location.pathname.split('/').pop(); // Get current page filename
if (currentPage === 'quiz.html') {
	loadNextQuestion();
} else if (currentPage === 'result.html') {
	displayResult();
}
