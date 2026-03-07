# Sprint 01 - Simple Programming Project

**Sprint Duration:** Friday Week 2 → Monday Week 3  
**Total Points:** 100 points (60% of Sprint Grade)  
**Due:** Monday Week 3, 2:00 PM  

---

## 📚 PROJECT OVERVIEW

Welcome to your first sprint! You'll build a complete JavaScript program demonstrating the programming fundamentals you've learned in Weeks 1-2.

**Choose ONE project:**
- **Option 1:** Calculator App
- **Option 2:** Quiz Game  
- **Option 3:** To-Do List Manager
- **Option 4:** Number Guessing Game (Enhanced)

See detailed requirements in the Sprint 01 materials shared in class.

---

## 📁 FOLDER STRUCTURE

```
sprint-01-YOUR-NAME/
├── README.md                  # Your project documentation (REQUIRED!)
├── .gitignore                 # Files to ignore in Git
├── src/                       # Source code folder
│   ├── index.js              # Main program file
│   └── utils.js              # Helper functions (optional)
├── docs/                      # Additional documentation (optional)
│   └── features.md           # Feature breakdown
└── SUBMISSION-CHECKLIST.md    # Check before submitting!
```

---

## 🚀 GETTING STARTED

### Step 1: Accept the Assignment
1. Click the GitHub Classroom invitation link (provided in Discord)
2. Accept the Sprint 01 assignment
3. GitHub creates your personal repository: `sprint-01-YOUR-USERNAME`

### Step 2: Clone Your Repository
```bash
# Navigate to your Bootcamp folder
cd Desktop/Bootcamp

# Clone your personal repo (replace YOUR-USERNAME)
git clone https://github.com/3LOGY-Bootcamp-2026/sprint-01-YOUR-USERNAME.git

# Navigate into the folder
cd sprint-01-YOUR-USERNAME
```

### Step 3: Set Up Your Project

**Option A: Start from template files (recommended for beginners)**
```bash
# Files already in this repo - customize them!
code README.md        # Edit to describe YOUR project
code src/index.js     # Start coding here
```

**Option B: Create your own structure**
```bash
# Create folders
mkdir src
mkdir docs

# Create main file
code src/index.js
```

### Step 4: Make Your First Commit
```bash
# Check status
git status

# Stage your changes
git add .

# Commit with descriptive message
git commit -m "Initial project setup: Add README and folder structure"

# Push to GitHub
git push origin main
```

---

## 💻 DEVELOPMENT WORKFLOW

### Recommended Sprint Timeline:

#### Friday Week 2 (Sprint Planning - 3 hours)
- [ ] **2:00-2:30 PM:** Choose project option
- [ ] **2:30-3:30 PM:** Break down features into tasks
- [ ] **3:30-4:00 PM:** Create GitHub repo and initial commit
- [ ] **4:00-5:00 PM:** Start core feature #1

#### Saturday (Core Development - 3-4 hours)
- [ ] **Morning:** Implement core features 1-2
- [ ] **Afternoon:** Implement features 3-4
- [ ] **Evening:** Test features, make commits

#### Sunday (Completion - 4-5 hours)
- [ ] **Morning:** Complete remaining features
- [ ] **Afternoon:** Add error handling
- [ ] **Evening:** Write README, peer review

#### Monday Week 3 (Polish - 2 hours before 2pm)
- [ ] **9:00-10:00 AM:** Final testing
- [ ] **10:00-11:00 AM:** Prepare demo presentation
- [ ] **11:00-12:00 PM:** Final commits and push
- [ ] **12:00-2:00 PM:** Buffer time / lunch
- [ ] **2:00 PM:** DEADLINE - Submit repo link in Discord

---

## 📝 USING GIT BRANCHES (REQUIRED!)

You MUST use at least 2 feature branches for this sprint.

### Example Workflow:

#### Feature 1: Basic Calculator Operations
```bash
# Create feature branch
git checkout -b feature/basic-operations

# Make your changes in src/index.js
code src/index.js

# Test your feature
node src/index.js

# Commit when working
git add src/index.js
git commit -m "Add basic calculator operations: add, subtract, multiply, divide"

# Push feature branch
git push origin feature/basic-operations

# Merge to main when complete
git checkout main
git merge feature/basic-operations
git push origin main
```

#### Feature 2: Memory Functions
```bash
# Create another feature branch
git checkout -b feature/memory-functions

# Develop feature
# Test feature
# Commit feature

git add .
git commit -m "Add memory store, recall, and clear functions"
git push origin feature/memory-functions

# Merge to main
git checkout main
git merge feature/memory-functions
git push origin main
```

**Goal:** At least 10 meaningful commits across 2+ feature branches!

---

## ✅ REQUIREMENTS CHECKLIST

### Functional Requirements (40 points)
- [ ] Program runs without crashes
- [ ] All main features work as described
- [ ] User input and output work correctly
- [ ] Error handling for invalid input
- [ ] Clear prompts and messages

### Git & Documentation (30 points)
- [ ] GitHub repository created and public
- [ ] At least 10 meaningful commits
- [ ] At least 2 feature branches used
- [ ] Descriptive commit messages
- [ ] `.gitignore` file included
- [ ] Professional README.md with all sections
- [ ] Code comments explaining complex logic

### Code Quality (20 points)
- [ ] Clean, readable code structure
- [ ] Descriptive variable and function names
- [ ] DRY principle applied (no repetition)
- [ ] Proper code formatting and indentation
- [ ] At least 3 custom functions

### Peer Review (10 points)
- [ ] Code reviewed by at least 1 peer
- [ ] Peer feedback addressed with commits

---

## 📖 README REQUIREMENTS

Your `README.md` must include these sections:

### 1. Project Title & Description
```markdown
# Calculator App

A command-line calculator that performs basic arithmetic operations
with memory storage and operation history features.
```

### 2. Features List
```markdown
## Features

- Basic operations: +, -, *, /
- Memory functions: store, recall, clear
- Operation history (last 10)
- Error handling for division by zero
- Input validation
```

### 3. How to Run
```markdown
## How to Run

1. Clone this repository
2. Navigate to the project folder
3. Run: `node src/index.js`
4. Follow the on-screen prompts
```

### 4. Technologies Used
```markdown
## Technologies Used

- JavaScript (ES6)
- Node.js
- Git & GitHub
```

### 5. What I Learned
```markdown
## What I Learned

This project helped me understand:
- How to use functions to organize code
- Error handling with try-catch
- Working with arrays to store history
- Git branching and merging workflow
```

### 6. Author Information
```markdown
## Author

**Your Name**  
[GitHub Profile](https://github.com/yourusername)  
3LOGY Software Development Bootcamp 2026
```

---

## 🧪 TESTING YOUR CODE

Before submitting, test these scenarios:

### Basic Functionality
- [ ] Program starts without errors
- [ ] All menu options work
- [ ] Program exits cleanly

### Edge Cases
- [ ] Empty input (pressing Enter without typing)
- [ ] Invalid input (letters instead of numbers)
- [ ] Division by zero
- [ ] Very large numbers
- [ ] Negative numbers

### User Experience
- [ ] Prompts are clear
- [ ] Error messages are helpful
- [ ] Output is formatted nicely
- [ ] Program doesn't crash on bad input

---

## 👥 PEER REVIEW PROCESS

### Getting a Peer Review:

1. **Find a partner** (coordinate in Discord #sprint-01-help)
2. **Share repo links** with each other
3. **Clone partner's repo** and run their program
4. **Complete peer review** using the template in Sprint 01 materials
5. **Post feedback** as a GitHub Issue on their repo OR in Discord thread
6. **Address feedback** they give you with commits

### What to Look For:
- Does the program work?
- Is the code readable?
- Are there bugs or edge cases not handled?
- Is the README clear?
- Suggestions for improvement

---

## 📤 SUBMISSION PROCESS

### Before 2:00 PM Monday Week 3:

1. **Final Testing**
   ```bash
   # Test your program one last time
   node src/index.js
   ```

2. **Check Git Status**
   ```bash
   # Make sure everything is pushed
   git status
   git log --oneline
   ```

3. **Verify README**
   - View your README on GitHub
   - Check formatting renders correctly
   - All sections complete

4. **Review Checklist**
   - Open `SUBMISSION-CHECKLIST.md`
   - Check off every item
   - Commit the completed checklist

5. **Submit in Discord**
   - Go to `#sprint-01-submissions` channel
   - Post format:
   ```
   Sprint 01 Submission - [Your Name]
   Project: [Calculator/Quiz/Todo/Game]
   Repo: [Your GitHub URL]
   ```

---

## 🆘 GETTING HELP

### During Development:
- **Discord #sprint-01-help:** Ask technical questions
- **Discord #code-review:** Request early feedback
- **Office Hours:** Friday 3-5pm (virtual)

### Common Issues:
- **Git conflicts:** Ask in Discord, we'll help resolve
- **Program not running:** Check Node.js installed, check syntax errors
- **Lost on features:** Review project requirements, ask for clarification

---

## ⚠️ IMPORTANT REMINDERS

1. **Start Early!** Don't wait until Sunday night
2. **Commit Often!** Every feature = new commit
3. **Test Thoroughly!** Don't just test the "happy path"
4. **Ask Questions!** Use Discord, peers, instructor
5. **Have Fun!** This is YOUR first portfolio project

---

## 🏆 SUCCESS TIPS

**From Previous Students:**

> "I broke my project into 5 small features and committed after each one. Made it so much easier!" - Samson

> "Testing edge cases saved me. Found 3 bugs before submission!" - Hajara

> "Git branches seemed scary at first but they're actually really useful." - Usman

> "Starting Friday gave me time to fix bugs I found over the weekend." - Abdulsalam

---

## 🎯 GRADING BREAKDOWN

| Category | Points | Key Focus |
|----------|--------|-----------|
| **Functionality** | 40 | Does it work? All features implemented? |
| **Git & Docs** | 30 | Good commits? Professional README? |
| **Code Quality** | 20 | Clean code? Good naming? DRY principle? |
| **Peer Review** | 10 | Got review? Addressed feedback? |
| **TOTAL** | **100** | |

See `SPRINT-01/RUBRICS/GRADING-RUBRIC.md` for detailed scoring.

---

## 🌟 AFTER SUBMISSION

**Monday Week 3 (2:00-5:00 PM):**
- Sprint Review: Everyone demos their project (5 min each)
- Sprint Retrospective: Reflect on what you learned
- Celebrate your first completed sprint! 🎉

**Your project becomes:**
- First item in your developer portfolio
- Example of your skills for future employers
- Foundation for more complex projects
- Reference material for Sprint 02

---

**You've got this! Build something you're proud of!** 🚀

---

**Questions? Post in Discord #sprint-01-help or ask in class!**
