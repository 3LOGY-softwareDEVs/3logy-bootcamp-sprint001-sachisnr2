# 📝 INSTRUCTOR NOTES - Sprint 01 Assignment Template

## 📂 Template Structure

This folder contains the **Sprint 01 Assignment Template** ready for GitHub Classroom deployment.

```
SPRINT-01/ASSIGNMENT-TEMPLATE/
├── README.md                      # Main student guide (Instructions for sprint)
├── README-TEMPLATE.md             # Template for their project README
├── SUBMISSION-CHECKLIST.md        # Pre-submission checklist
├── .gitignore                     # Git ignore file
├── src/                           # Source code folder
│   └── index.js                   # Starter code template
└── docs/                          # Optional documentation folder
    └── .gitkeep                   # Keeps folder in Git
```

---

## 🚀 How to Deploy to GitHub Classroom

### Step 1: Create Template Repository

1. **Create a new repository** on GitHub:
   - Name: `sprint-01-template` (or `bootcamp-sprint-01-template`)
   - Description: "Sprint 01 Assignment Template for 3LOGY Bootcamp 2026"
   - Visibility: **Public** or **Private** (your choice)
   - Initialize: **Do NOT add README, .gitignore, or license** (we have them)

2. **Push this template to the repository:**
   ```bash
   cd SPRINT-01/ASSIGNMENT-TEMPLATE
   
   git init
   git add .
   git commit -m "Initial Sprint 01 assignment template"
   
   # Add your GitHub remote (replace with your URL)
   git remote add origin https://github.com/3LOGY-Bootcamp-2026/sprint-01-template.git
   
   git branch -M main
   git push -u origin main
   ```

### Step 2: Set Up GitHub Classroom Assignment

1. **Go to GitHub Classroom:** https://classroom.github.com
2. **Select your classroom:** "3LOGY Bootcamp 2026" (or create one)
3. **Create New Assignment:**
   - Type: **Individual assignment**
   - Title: `Sprint 01 - Simple Programming Project`
   - Deadline: Monday Week 3, 2:00 PM (your timezone)
   - Repository visibility: **Public** (so you can see their work)

4. **Select Template Repository:**
   - Choose: `sprint-01-template` (the repo you created in Step 1)
   - Grant students: **Admin access** (so they can manage their own repo)

5. **Add Starter Code:** Already included in template

6. **Autograding (Optional):**
   - For Sprint 01, autograding is optional
   - Focus on manual code review and demo presentations
   - Can add basic tests for later sprints

7. **Generate Assignment Link**

### Step 3: Share with Students

1. **Post assignment link in Discord:**
   ```
   📢 Sprint 01 Assignment is Now Available!
   
   Click this link to accept and create your repository:
   [GitHub Classroom Assignment Link]
   
   Due: Monday Week 3, 2:00 PM
   Submit: Post your GitHub repo URL in #sprint-01-submissions
   
   Questions? Ask in #sprint-01-help
   ```

2. **In Class Announcement (Friday Week 2):**
   - Explain the template structure
   - Show them the README.md guide
   - Demonstrate accepting the assignment
   - Walk through first commit

---

## 📋 What Students Get

When students accept the assignment, they get a **personal repository** with:

1. ✅ **README.md** - Complete guide on how to complete the sprint
2. ✅ **README-TEMPLATE.md** - Template for their project documentation
3. ✅ **SUBMISSION-CHECKLIST.md** - Comprehensive pre-submission checklist
4. ✅ **.gitignore** - Pre-configured to ignore common files
5. ✅ **src/index.js** - Starter code template with helpful structure
6. ✅ **docs/** - Optional folder for additional documentation

---

## 👨‍🏫 Teaching Tips

### Friday Week 2 (Sprint Planning - 3 hours)

**2:00-2:30 PM: Sprint Introduction**
- Review Sprint 01 requirements document
- Explain grading rubric (40+30+20+10 = 100 pts)
- Demo accepting GitHub Classroom assignment
- Show template repository structure

**2:30-3:30 PM: Project Planning**
- Students choose project option (Calculator/Quiz/Todo/Game)
- Break down project into features
- Identify 3-4 feature branches
- Create task list in notebook or Trello

**3:30-4:00 PM: Repository Setup**
- Accept GitHub Classroom assignment
- Clone repository locally
- Make first commit (customize README-TEMPLATE.md)
- Create first feature branch

**4:00-5:00 PM: Begin Development**
- Start implementing first feature
- Practice commit workflow
- Get starter code running
- Ask questions as needed

### Saturday-Sunday: Independent Work

Students work independently but can:
- Ask questions in Discord #sprint-01-help
- Do pair programming with peers
- Attend virtual office hours (if offered)

### Monday Week 3: Demo Day

**9:00-11:00 AM: Final Development**
- Last chance to finish features
- Write/polish README
- Get peer review
- Test thoroughly

**11:00-2:00 PM: Demo Prep**
- Practice 5-minute demo
- Final testing
- Submit repo link in Discord
- Prepare to present

**2:00-4:00 PM: Sprint Review (Demos)**
- Each student presents (5 min)
- Show working program
- Explain one technical challenge
- Q&A from peers

**4:00-5:00 PM: Sprint Retrospective**
- What went well?
- What could be improved?
- What did you learn?
- Feedback for next sprint

---

## 📊 Grading Process

### Step 1: Collect Submissions (Monday 2:00 PM)
- Students post repo URLs in #sprint-01-submissions
- Create spreadsheet tracking submissions
- Note late submissions

### Step 2: Clone & Test (Monday-Tuesday)
```bash
# For each student repository
git clone https://github.com/3LOGY-Bootcamp-2026/sprint-01-STUDENTNAME.git
cd sprint-01-STUDENTNAME

# Test the program
node src/index.js

# Check commit history
git log --oneline

# Check branches
git branch -a
```

### Step 3: Grade Using Rubric
Use `SPRINT-01/RUBRICS/GRADING-RUBRIC.md`:
- Functional Requirements (40 pts)
- Git & Documentation (30 pts)
- Code Quality (20 pts)
- Peer Review (10 pts)

### Step 4: Provide Feedback
- Create GitHub Issue on their repo with feedback
- Or: Create feedback document in Google Classroom
- Highlight strengths and areas for improvement

---

## ⚠️ Common Student Issues & Solutions

### Issue 1: "I can't clone the repository"
**Solution:**
- Check Git is installed: `git --version`
- Check GitHub authentication
- Try HTTPS instead of SSH
- Walk through step-by-step in Discord screen share

### Issue 2: "My program won't run"
**Solution:**
- Check Node.js installed: `node --version`
- Check syntax errors in code
- Check they're in correct directory
- Run `node src/index.js` (not just `index.js`)

### Issue 3: "I have merge conflicts"
**Solution:**
- Teach conflict resolution process
- Show how to identify conflict markers
- Practice resolving in VS Code
- Offer 1-on-1 help if needed

### Issue 4: "I forgot to push my code"
**Solution:**
- If before deadline: Guide them to push
- If after deadline: Accept with late penalty
- Teach importance of regular pushes

### Issue 5: "My README looks wrong on GitHub"
**Solution:**
- Markdown formatting issue
- Review with GitHub Markdown previewer
- Check for missing backticks, headers, etc.

---

## 🎯 Success Metrics for This Sprint

Track these metrics:

- ✅ **Submission Rate:** Target 100% (or 80%+ acceptable)
- ✅ **Working Programs:** Target 90%+ have functioning code
- ✅ **Git Usage:** Target 100% have 10+ commits
- ✅ **Branch Usage:** Target 80%+ use feature branches
- ✅ **README Quality:** Target 90%+ have complete README
- ✅ **Peer Review:** Target 100% participate in peer review

---

## 📝 Improvements for Next Sprint

After Sprint 01, consider:

1. **Based on student performance:**
   - Which features caused most difficulty?
   - What additional guidance is needed?
   - Should starter code be more detailed?

2. **Based on Git workflow:**
   - Did students struggle with branches?
   - Are commit messages descriptive enough?
   - Do they need more Git practice?

3. **Based on documentation:**
   - Are READMEs clear and complete?
   - Do students understand Markdown?
   - Need more README examples?

4. **Template improvements:**
   - Add more helpful comments in starter code?
   - Include example feature implementation?
   - Add more detailed Git workflow guide?

---

## 📚 Additional Resources for Students

Share these links in Discord:

**JavaScript:**
- MDN JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- JavaScript.info: https://javascript.info/

**Git & GitHub:**
- Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf
- GitHub Guides: https://guides.github.com/

**Markdown:**
- Markdown Guide: https://www.markdownguide.org/basic-syntax/
- GitHub Markdown: https://docs.github.com/en/get-started/writing-on-github

**Node.js:**
- Node.js Readline: https://nodejs.org/api/readline.html
- Node.js Docs: https://nodejs.org/en/docs/

---

## ✅ Pre-Sprint Instructor Checklist

Before Friday Week 2:

- [ ] GitHub Classroom assignment created
- [ ] Template repository pushed to GitHub
- [ ] Assignment link tested (accept as test student)
- [ ] Discord channels set up (#sprint-01-help, #sprint-01-submissions)
- [ ] Grading rubric reviewed
- [ ] Demo schedule prepared
- [ ] Office hours scheduled (if offering)
- [ ] Reviewed all template files for clarity
- [ ] Prepared sprint planning slides/materials
- [ ] Ready to answer Git/GitHub questions

---

## 🎉 Final Notes

This template provides students with:
- Clear structure and organization
- Comprehensive guidance
- Professional starting point
- Support throughout development

**Your role as instructor:**
- Guide them through process
- Answer questions patiently
- Encourage good practices
- Celebrate their achievements

**This is their first real project - make it memorable!** 🚀

---

**Template Created:** March 3, 2026  
**Ready for:** Sprint 01 (Friday Week 2 → Monday Week 3)  
**Maintainer:** [Instructor Name]
