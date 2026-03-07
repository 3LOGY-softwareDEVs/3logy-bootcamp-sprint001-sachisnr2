# 📊 SPRINT 01: Grading Rubric
## Detailed Scoring Guide for Instructors

**Total Points:** 100  
**Weight:** 60% of Sprint Grade

---

## 🎯 FUNCTIONAL REQUIREMENTS (40 points)

### Core Functionality (25 points)

| Criteria | Excellent (25-22) | Good (21-18) | Fair (17-14) | Poor (<14) |
|----------|-------------------|--------------|--------------|-----------|
| **Program Execution** | Runs flawlessly, no crashes | Runs with minor bugs | Runs but has significant issues | Doesn't run or crashes |
| **Feature Implementation** | All features work perfectly | Most features work | Some features work | Few features work |
| **User Input/Output** | Clear prompts, formatted output | Mostly clear | Some unclear messages | Confusing interface |
| **Error Handling** | Graceful handling of all edge cases | Handles most edge cases | Basic error handling | No error handling |

**Scoring:**
- **25-22 pts:** All features work, comprehensive error handling
- **21-18 pts:** Core features work, basic error handling
- **17-14 pts:** Basic version works, minimal error handling
- **<14 pts:** Incomplete or non-functional

### Technical Implementation (15 points)

| Requirement | Points | Criteria |
|-------------|--------|----------|
| **Variables & Data Types** | 3 | Correct use of let/const, appropriate types |
| **Control Flow** | 3 | Effective use of if/else, loops |
| **Functions** | 3 | At least 3 well-designed functions |
| **Data Structures** | 3 | Appropriate use of arrays/objects |
| **Type Conversion** | 3 | Correct parseInt/parseFloat usage |

**Deductions:**
- Missing required functions: -2 pts each
- Poor data structure choice: -1 to -3 pts
- Type conversion errors: -1 to -2 pts

---

## 📚 GIT & DOCUMENTATION (30 points)

### Version Control (15 points)

| Criteria | Points | Excellent | Good | Fair | Poor |
|----------|--------|-----------|------|------|------|
| **Commit Quantity** | 5 | 15+ commits | 10-14 commits | 5-9 commits | <5 commits |
| **Commit Quality** | 5 | Descriptive messages | Mostly descriptive | Some desc | Poor msgs |
| **Branching** | 5 | 3+ branches used | 2 branches | 1 branch attempt | No branches |

**Commit Message Examples:**
- ✅ Good: "Add input validation for age calculator"
- ✅ Good: "Fix division by zero error in calculator"
- ❌ Bad: "fixed stuff"
- ❌ Bad: "update"

### Documentation (15 points)

**README.md (10 points):**

| Section | Points | Requirements |
|---------|--------|--------------|
| **Project Description** | 2 | Clear explanation of what project does |
| **Features List** | 2 | Comprehensive feature list |
| **How to Run** | 2 | Clear installation/run instructions |
| **Technologies Used** | 1 | Lists languages, tools used |
| **What I Learned** | 2 | Thoughtful reflection (3+ sentences) |
| **Author Info** | 1 | Name, GitHub link |

**Code Comments (5 points):**
- Well-commented complex logic: 5 pts
- Some comments: 3 pts  
- Minimal comments: 1 pt
- No comments: 0 pts

---

## 💎 CODE QUALITY (20 points)

### Code Organization (10 points)

| Aspect | Points | Excellent | Needs Work |
|--------|--------|-----------|------------|
| **Structure** | 3 | Logical organization | Disorganized |
| **Naming** | 3 | Descriptive names | Unclear names |
| **DRY Principle** | 2 | No repetition | Repetitive code |
| **Formatting** | 2 | Consistent indentation | Inconsistent |

**Variable Naming Examples:**
- ✅ Good: `userAge`, `totalScore`, `isValidInput`
- ❌ Bad: `x`, `temp`, `thing`, `data1`

### Readability (10 points)

| Criteria | Points | Description |
|----------|--------|-------------|
| **Clean Code** | 5 | Easy to understand, follows conventions |
| **No Debug Code** | 2 | No console.log("here"), commented code |
| **Consistent Style** | 2 | Consistent quote style, semicolons |
| **Professional** | 1 | Looks like production code |

**Deductions:**
- Excessive commented-out code: -2 pts
- Debug statements left in: -1 to -3 pts
- Inconsistent formatting: -1 to -2 pts

---

## 👥 PEER REVIEW (10 points)

### Received Code Review (5 points)

| Criteria | Points |
|----------|--------|
| At least 1 peer review completed | 3 |
| Reviewer provided quality feedback | 2 |

### Addressed Feedback (5 points)

| Action | Points |
|--------|--------|
| Responded to review comments | 2 |
| Made commits addressing feedback | 3 |
| Or: Explained why not implementing | 3 |

---

## 🎁 BONUS POINTS (up to 10)

| Achievement | Bonus Points |
|------------|--------------|
| **Creative Extra Feature** | +3 |
| **Exceptional README** (screenshots, examples) | +2 |
| **15+ high-quality commits** | +2 |
| **Multiple feature branches with PRs** | +3 |
| **Input validation beyond requirements** | +2 |
| **Deployed to hosting platform** | +5 |

**Note:** Bonus points can push score above 100 (max 110)

---

## 📉 COMMON DEDUCTIONS

### Critical Issues:
- **Program doesn't run:** -20 to -40 pts
- **Major features missing:** -10 to -20 pts
- **Plagiarism:** 0 pts + academic integrity process

### Significant Issues:
- **No error handling:** -5 to -10 pts
- **Poor Git usage (<5 commits):** -10 pts
- **No README:** -10 pts
- **No branches used:** -5 pts

### Minor Issues:
- **Inconsistent formatting:** -1 to -3 pts
- **Poor variable names:** -1 to -3 pts
- **Missing comments:** -1 to -3 pts
- **Typos in README:** -1 pt

---

## 🎯 GRADING SCALE

| Points | Grade | Percentage |
|--------|-------|------------|
| 95-110 | A+ | 95-100% |
| 90-94 | A | 90-94% |
| 85-89 | B+ | 85-89% |
| 80-84 | B | 80-84% |
| 75-79 | C+ | 75-79% |
| 70-74 | C | 70-74% |
| 65-69 | D | 65-69% |
| <65 | F | <65% |

---

## ✅ GRADING WORKFLOW

### Step 1: Clone & Run (5 min)
```bash
git clone [student-repo]
cd [repo-name]
node [main-file].js
```

Test all features:
- [ ] All core features work
- [ ] Error handling works
- [ ] Edge cases handled

### Step 2: Code Review (10 min)
- [ ] Read through entire codebase
- [ ] Check for quality issues
- [ ] Note strengths and weaknesses
- [ ] Test functions individually if needed

### Step 3: Git History (5 min)
```bash
git log --oneline --graph --all
```

Check:
- [ ] Commit frequency and quality
- [ ] Branch usage
- [ ] Commit messages

### Step 4: Documentation (5 min)
- [ ] Review README completeness
- [ ] Check code comments
- [ ] Assess clarity

### Step 5: Fill Rubric (5 min)
- Use this rubric to assign scores
- Note specific strengths
- Note areas for improvement

### Step 6: Written Feedback (5 min)
Provide:
- 2-3 specific strengths
- 2-3 areas for improvement
- Encouragement
- Suggestions for Sprint 02

**Total Grading Time: ~35 minutes per student**

---

## 📝 FEEDBACK TEMPLATE

```
Sprint 01 Feedback - [Student Name]
Project: [Project Type]
Grade: [X]/100 ([Grade Letter])

Strengths:
- [Specific strength with example]
- [Specific strength with example]

Areas for Improvement:
- [Specific area with suggestion]
- [Specific area with suggestion]

Technical Notes:
- [Any technical observations]

For Sprint 02:
- [Specific goals based on this sprint]

Great work on your first project! [Encouraging message]

Score Breakdown:
- Functional: [X]/40
- Git & Docs: [X]/30
- Code Quality: [X]/20
- Peer Review: [X]/10
- Bonus: [X]/10
- Total: [X]/100
```

---

## 🎓 CALIBRATION NOTES

Before grading:
1. **Review 2-3 projects** to establish baseline
2. **Note common issues** - create FAQ
3. **Be consistent** - use rubric strictly
4. **Be fair** - don't compare students to each other
5. **Be encouraging** - this is their first project!

**Remember:** Goal is learning, not punishment. Grade fairly but generously.

---

**This rubric ensures fair, consistent, transparent grading!** ✅
