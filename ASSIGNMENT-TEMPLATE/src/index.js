/**
 * Sprint 01 - Starter Code Template
 * 
 * This is a basic template to help you get started with your Sprint 01 project.
 * You can customize, modify, or completely replace this code based on your chosen project.
 * 
 * Project Options:
 * - Option 1: Calculator App
 * - Option 2: Quiz Game
 * - Option 3: To-Do List Manager
 * - Option 4: Number Guessing Game (Enhanced)
 * 
 * Author: [Your Name]
 * Date: [Today's Date]
 * Bootcamp: 3LOGY Software Development 2026
 */

// Import readline for user input (Node.js built-in module)
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ==========================================
// GLOBAL VARIABLES
// ==========================================

// TODO: Add your global variables here
// Examples:
// let history = [];
// let memory = 0;
// let score = 0;

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Display welcome message
 */
function displayWelcome() {
  console.log('\n========================================');
  console.log('   Welcome to [Your Project Name]!');
  console.log('========================================\n');
  
  // TODO: Add more welcome information
}

/**
 * Display main menu
 */
function displayMenu() {
  console.log('\n--- Main Menu ---');
  console.log('1. [Option 1]');
  console.log('2. [Option 2]');
  console.log('3. [Option 3]');
  console.log('4. [Option 4]');
  console.log('5. Exit');
  console.log('');
  
  // TODO: Customize menu options for your project
}

/**
 * Validate numeric input
 * @param {string} input - User input to validate
 * @returns {boolean} - True if valid number, false otherwise
 */
function isValidNumber(input) {
  const num = parseFloat(input);
  return !isNaN(num) && isFinite(num);
}

/**
 * Get validated numeric input from user
 * @param {string} prompt - Question to ask user
 * @param {function} callback - Function to call with validated number
 */
function getNumberInput(prompt, callback) {
  rl.question(prompt, (answer) => {
    if (isValidNumber(answer)) {
      callback(parseFloat(answer));
    } else {
      console.log('Error: Please enter a valid number.');
      // Ask again
      getNumberInput(prompt, callback);
    }
  });
}

// ==========================================
// FEATURE FUNCTIONS
// ==========================================

/**
 * Feature 1: [Describe what this does]
 * TODO: Implement your first feature
 */
function feature1() {
  console.log('\n--- Feature 1 ---');
  // TODO: Add your feature logic here
  
  // Example structure:
  // getNumberInput('Enter a number: ', (num) => {
  //   // Do something with num
  //   console.log(`You entered: ${num}`);
  //   mainLoop(); // Return to menu
  // });
}

/**
 * Feature 2: [Describe what this does]
 * TODO: Implement your second feature
 */
function feature2() {
  console.log('\n--- Feature 2 ---');
  // TODO: Add your feature logic here
  mainLoop();
}

/**
 * Feature 3: [Describe what this does]
 * TODO: Implement your third feature
 */
function feature3() {
  console.log('\n--- Feature 3 ---');
  // TODO: Add your feature logic here
  mainLoop();
}

/**
 * Exit the program
 */
function exitProgram() {
  console.log('\nThank you for using [Your Project Name]!');
  console.log('Goodbye! 👋\n');
  rl.close();
}

// ==========================================
// MAIN PROGRAM LOGIC
// ==========================================

/**
 * Main program loop
 */
function mainLoop() {
  displayMenu();
  
  rl.question('Enter your choice (1-5): ', (choice) => {
    // Parse choice as integer
    const option = parseInt(choice);
    
    // Handle menu selection
    switch(option) {
      case 1:
        feature1();
        break;
      case 2:
        feature2();
        break;
      case 3:
        feature3();
        break;
      case 4:
        // TODO: Add your 4th feature
        console.log('Feature 4 not yet implemented');
        mainLoop();
        break;
      case 5:
        exitProgram();
        break;
      default:
        console.log('Invalid choice. Please enter a number between 1 and 5.');
        mainLoop();
    }
  });
}

/**
 * Initialize and start the program
 */
function init() {
  displayWelcome();
  mainLoop();
}

// ==========================================
// START THE PROGRAM
// ==========================================

// Run the program when file is executed
init();

// ==========================================
// DEVELOPMENT NOTES
// ==========================================

/*
 * TODO LIST:
 * [ ] Customize welcome message
 * [ ] Implement feature 1
 * [ ] Implement feature 2
 * [ ] Implement feature 3
 * [ ] Add error handling
 * [ ] Add input validation
 * [ ] Test all features
 * [ ] Add comments
 * [ ] Write README
 * [ ] Get peer review
 * 
 * TESTING CHECKLIST:
 * [ ] Test with valid inputs
 * [ ] Test with invalid inputs (letters, special chars)
 * [ ] Test with empty input (just pressing Enter)
 * [ ] Test with very large numbers
 * [ ] Test with negative numbers
 * [ ] Test all menu options
 * [ ] Test exit functionality
 * 
 * GIT WORKFLOW REMINDERS:
 * - Create feature branch for each main feature
 * - Commit after completing each feature
 * - Use descriptive commit messages
 * - Merge branches back to main when complete
 * - Push regularly to GitHub
 */
