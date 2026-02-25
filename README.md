# Exam Ace — Interactive Computer Architecture Exams

An interactive, self-grading exam system for **Computer Organisation and Architecture** covering 5 weeks of course content.

## Features

- **30 Multiple Choice + 20 Identification** per week (Weeks 1–3)
- **30 Multiple Choice + 20 Identification + 20 Problem Solving** (Weeks 4–5)
- Instant feedback: wrong answers turn red, correct answers turn green
- Score recording with localStorage (persists between sessions)
- Responsive layout for desktop and mobile
- Collapsible answer keys with step-by-step solutions
- Tables for problem-solving data where applicable

## Exam Coverage

| Week | Topic |
|------|-------|
| 1 | Computer Organisation – Basic Structure of Computers |
| 2 | Microprocessor and Microcomputer Architecture – 8085 |
| 3 | Data Bus, Address Bus, and Memory |
| 4 | Computer Architecture – Instruction Cycle, ISA, Performance |
| 5 | Performance of a Processor – CPI, MIPS, MFLOPS, Amdahl's Law |

## File Structure

```
exam acee12/
├── index.html     # Landing page (start here)
├── exam.html      # Week 1
├── exam2.html     # Week 2
├── exam3.html     # Week 3
├── exam4.html     # Week 4
├── exam5.html     # Week 5
├── exam.css       # Shared styles
├── exam.js        # Week 1 logic
├── exam2.js       # Week 2 logic
├── exam3.js       # Week 3 logic
├── exam4.js       # Week 4 logic
├── exam5.js       # Week 5 logic
├── README.md
├── LICENSE
└── .gitignore
```

## How to Run

### Option 1: Landing page
Open `index.html` to see all exams and choose which week to take.

### Option 2: Open directly
Double-click any `exam.html` file to open in your browser. For best compatibility (especially localStorage for score records), use a local server.

### Option 3: Local server (recommended)
```bash
cd "exam acee12"
python -m http.server 8000
```
Then open `http://localhost:8000/` or `http://localhost:8000/index.html` in your browser.

### Option 4: Access from phone (same Wi‑Fi)
1. Run the local server as above.
2. Find your computer's IP (e.g. `ipconfig` on Windows).
3. On your phone, open `http://YOUR_IP:8000/`.

## Deploying to GitHub Pages

1. Create a new repository on GitHub.
2. Push your code (or upload files).
3. Go to **Settings → Pages**.
4. Under "Source", select **Deploy from a branch**.
5. Branch: `main` (or `master`), folder: `/ (root)`.
6. Save — your site will be at `https://YOUR_USERNAME.github.io/REPO_NAME/`.

The `index.html` landing page will be the default page visitors see.

## Technologies

- HTML5
- CSS3 (custom properties, flexbox, responsive)
- Vanilla JavaScript (no frameworks)
- localStorage for score persistence

## License

MIT License — see [LICENSE](LICENSE) for details.
