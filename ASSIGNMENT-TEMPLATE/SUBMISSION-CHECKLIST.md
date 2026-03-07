# ✅ SPRINT 01 SUBMISSION CHECKLIST

**Student Name:** _______________  
**Project Type:** Calculator / Quiz / Todo / Game  
**Due:** Monday Week 3, 2:00 PM

---

## 📋 BEFORE YOU SUBMIT - CHECK EVERYTHING!

Use this checklist to ensure your submission is complete. Check off each item as you complete it.

---

## 🎯 FUNCTIONAL REQUIREMENTS (40 points)

### Program Works Correctly
- [ ] Program runs without crashing
- [ ] All main features are implemented
- [ ] All features work as described in requirements
- [ ] User can interact with the program (input/output works)
- [ ] Program handles user input correctly
- [ ] Program exits cleanly when user chooses to quit

### Error Handling
- [ ] Program handles empty input (user presses Enter without typing)
- [ ] Program handles invalid input (letters when expecting numbers)
- [ ] Program handles out-of-range values
- [ ] Program gives clear error messages
- [ ] Program doesn't crash on bad input
- [ ] Edge cases are handled (division by zero, empty arrays, etc.)

### User Experience
- [ ] Prompts are clear and easy to understand
- [ ] Output is formatted nicely (not just raw data dumps)
- [ ] Menu/options are easy to navigate
- [ ] Instructions are provided to the user
- [ ] Program flow makes sense

---

## 📚 GIT & DOCUMENTATION (30 points)

### GitHub Repository
- [ ] Repository is created and public
- [ ] Repository name is descriptive (not just "sprint-01")
- [ ] All code is pushed to GitHub
- [ ] No unnecessary files in repo (no node_modules, .DS_Store, etc.)

### Git Commits (MINIMUM 10 REQUIRED!)
- [ ] At least 10 commits made
- [ ] Commits have descriptive messages (not "update" or "fixed stuff")
- [ ] Commits are spread throughout development (not all on last day)
- [ ] Each commit represents a logical unit of work
- [ ] Commit messages start with capital letter

**Check your commit count:**
```bash
git log --oneline | wc -l
```

**Example Good Commit Messages:**
✅ "Add basic calculator operations: add, subtract, multiply, divide"
✅ "Implement memory store and recall functions"
✅ "Fix division by zero error"
✅ "Add input validation for numeric operations"

**Example Bad Commit Messages:**
❌ "update"
❌ "fixed stuff"
❌ "changes"
❌ "idk"

### Git Branches (MINIMUM 2 REQUIRED!)
- [ ] At least 2 feature branches created
- [ ] Feature branches have descriptive names
- [ ] Branches were merged back to main
- [ ] No unmerged branches left hanging

**Check your branches:**
```bash
git branch -a
```

**Example Good Branch Names:**
✅ feature/calculator-operations
✅ feature/memory-functions
✅ feature/error-handling
✅ bugfix/division-by-zero

### .gitignore File
- [ ] .gitignore file exists in root
- [ ] Ignores node_modules/
- [ ] Ignores OS files (.DS_Store, Thumbs.db)
- [ ] Ignores editor files (.vscode/, .idea/)

### README.md Documentation
- [ ] README.md file exists in root
- [ ] Project title is clear
- [ ] Description explains what the project does (2-3 paragraphs)
- [ ] Features list is complete
- [ ] "How to Run" instructions are clear and tested
- [ ] Technologies used are listed
- [ ] "What I Learned" section is thoughtful (3+ sentences)
- [ ] Author information is included
- [ ] No spelling/grammar errors
- [ ] Formatting looks good on GitHub (preview it!)

### Code Comments
- [ ] Complex logic is commented
- [ ] Functions have comments explaining what they do
- [ ] Comments are helpful (not just restating code)
- [ ] No commented-out code left in (clean it up!)

---

## 💎 CODE QUALITY (20 points)

### Code Organization
- [ ] Code is logically organized
- [ ] Related code is grouped together
- [ ] No "spaghetti code" (tangled, hard to follow)
- [ ] Main logic is separated from helper functions

### Function Requirements
- [ ] At least 3 custom functions created
- [ ] Each function does ONE thing well
- [ ] Functions have descriptive names
- [ ] Functions are reused (DRY principle)
- [ ] No excessively long functions (break them down!)

### Variable Naming
- [ ] All variables have descriptive names
- [ ] No single-letter variables (except i, j in loops)
- [ ] Consistent naming convention (camelCase recommended)
- [ ] No confusing abbreviations

**Good Variable Names:**
✅ `userChoice`, `calculationResult`, `operationHistory`
✅ `totalScore`, `currentQuestion`, `isValidInput`

**Bad Variable Names:**
❌ `x`, `temp`, `thing`, `data1`, `var2`
❌ `a`, `b`, `c` (except in specific math contexts)

### DRY Principle (Don't Repeat Yourself)
- [ ] No copy-pasted code blocks
- [ ] Repeated logic is moved to functions
- [ ] Similar operations use the same function

### Code Formatting
- [ ] Consistent indentation (2 or 4 spaces)
- [ ] Proper spacing around operators
- [ ] No excessively long lines (under 80-100 characters)
- [ ] Opening braces on same line (or consistently on new line)

### Clean Code
- [ ] No debug console.log() statements left in
- [ ] No commented-out code blocks
- [ ] No unused variables or functions
- [ ] Code is readable by someone else

---

## 👥 PEER REVIEW (10 points)

### Getting Peer Review
- [ ] Found a peer review partner (coordinated in Discord)
- [ ] Shared repository link with peer
- [ ] Peer has reviewed your code
- [ ] Received peer feedback (GitHub Issue, Discord, or document)
- [ ] Addressed peer feedback with new commits
- [ ] Thanked your peer reviewer!

### Giving Peer Review
- [ ] Reviewed peer's code
- [ ] Tested their program
- [ ] Provided constructive feedback
- [ ] Submitted review to them (GitHub Issue or Discord)

---

## 🧪 FINAL TESTING

### Test Your Program One More Time
- [ ] Run program from scratch
- [ ] Test every feature/menu option
- [ ] Try to break it with bad inputs
- [ ] Test on a different computer (if possible)
- [ ] Ask someone else to try it

### Test Your Instructions
- [ ] Have someone follow your README instructions
- [ ] Confirm they can run your program
- [ ] Update instructions if anything is unclear

---

## 📤 SUBMISSION PROCESS

### Verify GitHub
- [ ] All code is pushed to GitHub
- [ ] README looks good on GitHub (check online)
- [ ] Repository is public (not private)
- [ ] No "This shouldn't be here" files

**Final Git Push:**
```bash
# Check status
git status

# If changes exist, add and commit
git add .
git commit -m "Final submission: Complete all features and documentation"

# Push to GitHub
git push origin main

# Verify
git log --oneline
```

### Prepare Demo Presentation
- [ ] Practiced running the program
- [ ] Prepared 5-minute demo talking points
- [ ] Know what features to highlight
- [ ] Ready to explain one technical challenge you solved

### Submit in Discord
- [ ] Go to #sprint-01-submissions channel
- [ ] Post in this format:
  ```
  Sprint 01 Submission - [Your Full Name]
  Project: [Calculator/Quiz/Todo/Game]
  GitHub Repository: [Your GitHub URL]
  Notable Features: [List 2-3 cool features]
  ```
- [ ] Submitted BEFORE 2:00 PM Monday Week 3

---

## 📊 SELF-ASSESSMENT

Rate yourself honestly (this is for your reflection, not graded):

### Functional Requirements (40 pts)
My program works: ⭐ ⭐ ⭐ ⭐ ⭐ (circle stars)
Confidence level: _____ / 40 points

### Git & Documentation (30 pts)
My Git workflow and docs: ⭐ ⭐ ⭐ ⭐ ⭐
Confidence level: _____ / 30 points

### Code Quality (20 pts)
My code quality: ⭐ ⭐ ⭐ ⭐ ⭐
Confidence level: _____ / 20 points

### Peer Review (10 pts)
Peer review process: ⭐ ⭐ ⭐ ⭐ ⭐
Confidence level: _____ / 10 points

**Total Self-Assessment:** _____ / 100 points

---

## 🎯 FINAL QUESTIONS

Before you submit, answer these:

1. **Does your program work?**  
   [ ] Yes, flawlessly  
   [ ] Yes, with minor bugs  
   [ ] Mostly works  
   [ ] Needs more work

2. **Are you proud of your code?**  
   [ ] Very proud  
   [ ] Somewhat proud  
   [ ] It works but could be better  
   [ ] I rushed it

3. **Did you learn something valuable?**  
   [ ] Absolutely!  
   [ ] Yes  
   [ ] Some things  
   [ ] Not really

4. **Is your README helpful?**  
   [ ] Yes, anyone could run my program  
   [ ] Probably  
   [ ] It's kind of basic  
   [ ] I need to improve it

If you answered anything below the top option, consider spending more time!

---

## ⚠️ COMMON MISTAKES - AVOID THESE!

- ❌ Waiting until Sunday night to start
- ❌ One giant commit with all code
- ❌ No error handling ("it works on my machine!")
- ❌ Minimal README ("just look at my code")
- ❌ Bad variable names (x, temp, thing)
- ❌ No testing with edge cases
- ❌ Forgetting to push to GitHub
- ❌ Skipping peer review
- ❌ Debug code still in final version
- ❌ Messy, unformatted code

---

## 🏆 READY TO SUBMIT?

If you checked EVERY box above, you're ready!

**Final Confirmation:**
- [ ] I have checked every item on this list
- [ ] My code is on GitHub and pushed
- [ ] My README is complete
- [ ] I have tested my program thoroughly
- [ ] I am ready to demo on Monday
- [ ] I am proud of this work

**Commit this completed checklist:**
```bash
git add SUBMISSION-CHECKLIST.md
git commit -m "Complete submission checklist - Ready to submit!"
git push origin main
```

---

## 🎉 CONGRATULATIONS!

You've completed your first sprint! This is a huge milestone.

**What happens next:**
- Monday 2:00 PM: Sprint Review (demos)
- Monday 4:00 PM: Sprint Retrospective (reflection)
- This project becomes your first portfolio piece!

**You built something real. Be proud!** 🚀

---

**Last updated:** [Date you complete this]  
**Completed by:** [Your name]  
**Project:** [Your project name]
