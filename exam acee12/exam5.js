const MC_ANSWERS = ['D','C','C','C','B','C','C','B','B','C','C','B','D','A','B','B','C','C','B','B','A','B','B','B','B','C','B','B','B','B'];

const MC_QUESTIONS = [
  "A processor has a clock cycle time of 200 ps. What is its clock rate?",
  "Which of the following correctly expresses the relationship between Clock Rate (CR) and Cycle Time (CT)?",
  "A computer has a clock cycle time of 5 ns. What is its clock rate?",
  "Machine A runs a program in 20 seconds and Machine B runs the same program in 25 seconds. How many times faster is Machine A than Machine B?",
  "Which of the following is the correct full performance equation for CPU time?",
  "A CPU runs at 1 MHz and a program takes 45 million cycles to execute. What is the CPU time?",
  "A CPU runs at 500 MHz and a program takes 45 million cycles to execute. What is the CPU time?",
  "A benchmark has 100 instructions: 25 loads/stores (2 cycles each), 50 adds (1 cycle each), and 25 square root operations (50 cycles each). What is the CPI?",
  "Which of the following is the correct formula for MIPS rate?",
  "What is the MFLOPS rate of a program that executes 4 million floating-point operations in 5 seconds?",
  "A processor runs at 400 MHz with a CPI of 2.24. What is the approximate MIPS rate?",
  "In Amdahl's Law Speedup = 1 / [(1−f) + (f/SU_f)], what does the term (1−f) represent?",
  "Using Amdahl's Law, a feature used 30% of the time is made 10× faster. What is the overall system speedup?",
  "A program has 10% inherently sequential code. Using parallel processors, what is the MAXIMUM theoretical speedup regardless of how many processors you add?",
  "Machine A has a clock cycle time of 10 ns and CPI of 2.0. Machine B has a clock cycle time of 20 ns and CPI of 1.2. With 10⁹ instructions, which machine is faster and by how much?",
  "Which of the following is a DISADVANTAGE of using MIPS as a performance metric?",
  "In the extended processor time formula T = Ic × [p + (m × k)] × τ, what does the variable k represent?",
  "A processor runs at 200 MHz with CPI = 4.4. What is the MIPS rate?",
  "A program executes on a 400 MHz processor. The instruction mix is: ALU=60% (CPI=1), Load/Store cache hit=18% (CPI=2), Branch=12% (CPI=4), Memory with cache miss=10% (CPI=8). What is the effective CPI?",
  "Using the CPI from Question 19, and assuming 2 million total instructions, what is the CPU execution time?",
  "Suppose 20% of a program is inherently sequential. Using Amdahl's parallel speedup formula with 10 processors, what is the speedup?",
  "Which of the following correctly defines Throughput in the context of computer performance?",
  "A task uses floating-point operations 40% of the time. A new hardware design speeds up the floating-point module by a factor K. What is the MAXIMUM possible overall speedup independent of K?",
  "CPU time can be broken into two components. Which correctly identifies them?",
  "A processor is driven by a constant frequency f. If f = 2 GHz, what is the cycle time τ?",
  "In the CPI formula CPI = Σ(CPI_i × IC_i), what does IC_i represent when used as a fraction?",
  "The Concorde flies DC to Paris in 3 hours at 1350 mph carrying 132 passengers. The Boeing 747 takes 6.5 hours at 610 mph carrying 470 passengers. In the context of computer performance, the Concorde represents which type of performance advantage?",
  "A program runs with the following mix: 50% instructions take 3 cycles, 30% take 4 cycles, 20% take 5 cycles. The processor runs at 2 GHz with 10⁹ instructions. What is the CPU time?",
  "Amdahl's Law example: f_x = 95% and S_x = 1.10. What is the overall speedup?",
  "Which statement BEST describes why Amdahl's Law limits the benefit of parallel processing?"
];

const MC_OPTIONS = [
  ["200 MHz", "500 MHz", "2 GHz", "5 GHz"],
  ["CR = CT²", "CT = CR × 10⁶", "CR = 1 / CT", "CT = CR + 1"],
  ["500 MHz", "100 MHz", "200 MHz", "5 GHz"],
  ["0.80×", "1.20×", "1.25×", "5.00×"],
  ["CPU Time = IC + CPI + Clock Cycle Time", "CPU Time = IC × CPI / Clock Rate", "CPU Time = Clock Rate / (IC × CPI)", "CPU Time = IC × Clock Rate × CPI"],
  ["45 milliseconds", "4.5 seconds", "45 seconds", "450 seconds"],
  ["9 seconds", "0.9 seconds", "0.09 seconds", "0.009 seconds"],
  ["17.67", "13.50", "11.25", "53.00"],
  ["MIPS = IC × T × 10⁶", "MIPS = f / (CPI × 10⁶)", "MIPS = CPI × f × 10⁶", "MIPS = T / (IC × 10⁶)"],
  ["20 MFLOPS", "4 MFLOPS", "0.8 MFLOPS", "1.25 MFLOPS"],
  ["200 MIPS", "896 MIPS", "178 MIPS", "400 MIPS"],
  ["The fraction of the system that was enhanced", "The fraction of the system that was NOT enhanced and remains unchanged", "The speedup of the enhanced portion", "The total number of processors used"],
  ["1.00×", "1.27×", "3.00×", "1.37×"],
  ["10×", "90×", "Infinite", "9×"],
  ["Machine B is faster by 1.2×", "Machine A is faster by 1.2×", "Machine A is faster by 2.0×", "They are equal"],
  ["MIPS is too difficult to calculate", "MIPS may not reflect actual performance because simple instructions score better even if less useful work is done", "MIPS requires knowing the exact memory size", "MIPS only works for processors above 1 GHz"],
  ["The number of instructions in the program", "The number of processor cycles to decode an instruction", "The ratio between memory cycle time and processor cycle time", "The total clock cycles per instruction"],
  ["880 MIPS", "22 MIPS", "45.45 MIPS", "4.4 MIPS"],
  ["3.75", "2.24", "1.80", "4.00"],
  ["5.6 milliseconds", "11.2 milliseconds", "0.56 milliseconds", "2.24 milliseconds"],
  ["3.57×", "5.00×", "8.00×", "10.00×"],
  ["The time between the start and the end of a single task", "The total number of tasks completed in a given period of time", "The number of clock cycles per instruction", "The total memory bandwidth in bytes per second"],
  ["2.50×", "1.67×", "4.00×", "0.60×"],
  ["Fetch time and Execute time", "User CPU time and System CPU time", "Clock time and Memory time", "Instruction time and Data time"],
  ["2 ns", "0.5 ns", "5 ns", "0.2 ns"],
  ["The total number of instructions in the program", "The number of clock cycles for instruction class i", "The proportion (fraction) of instructions belonging to class i", "The clock rate for instruction class i"],
  ["Higher throughput", "Better response time (lower latency)", "Greater memory bandwidth", "Higher CPI efficiency"],
  ["1.75 seconds", "1.85 seconds", "2.00 seconds", "1.60 seconds"],
  ["1.047", "1.094", "1.500", "2.000"],
  ["Parallel processors always increase the CPI", "The sequential portion of a program cannot be parallelized, and it acts as a permanent bottleneck that limits total speedup regardless of the number of processors", "More processors always reduce the clock rate", "Parallel programs always have higher instruction counts"]
];

const IDENT_QUESTIONS = [
  "Identify: The formula that relates clock rate (f), instruction count (Ic), and execution time (T) to compute the number of millions of instructions executed per second.",
  "Identify: In Amdahl's Law Speedup = 1 / [(1−f) + (f/SU_f)], the symbol that represents the local speedup of the enhanced portion of the system.",
  "Identify: The performance metric measured in millions of floating-point operations per second, used specifically for scientific and numerical computing benchmarks.",
  "Identify: The term for the total real-world time from program start to finish, including I/O, memory access delays, and time waiting for other programs.",
  "Identify: The variable τ (tau) in the processor time formula T = Ic × CPI × τ represents what quantity?",
  "Identify: A program executes 3 million instructions in 2 seconds. Write the numerical MIPS rating for this program.",
  "Identify: In the extended processor time formula T = Ic × [p + (m × k)] × τ, the variable p represents what specific quantity?",
  "Identify: The name of the law that states the overall speedup is limited by the fraction of time the enhanced component is used, and the sequential portion creates an unavoidable bottleneck.",
  "Identify: When comparing two machines, Machine X takes 30 seconds and Machine Y takes 90 seconds. State exactly how many times faster Machine X is than Machine Y.",
  "Identify: In the CPU time formula, this factor is determined jointly by the ISA design and hardware implementation — NOT controlled by the compiler alone.",
  "Identify: The maximum theoretical speedup when 12% of a program must remain sequential. Compute and state the value.",
  "Identify: A feature is used 40% of the time (f = 0.40) and is made infinitely fast. What is the maximum overall speedup? Compute and state the value.",
  "Identify: The variable m in the extended processor time formula T = Ic × [p + (m × k)] × τ refers to what specific quantity per instruction?",
  "Identify: Two sub-components that together make up total CPU execution time, distinguishing user's program versus OS operations.",
  "Identify: A processor runs at 3 GHz with CPI = 1.5 and executes 6×10⁹ instructions. State the CPU execution time in seconds.",
  "Identify: The term for the time between start and completion of a single task — important to individual users.",
  "Identify: In the instruction execution rate section, the processor clock has constant frequency f. What symbol is used for cycle time, and its mathematical relationship to f?",
  "Identify: A program executes 2 million instructions in 2 seconds on a processor with CPI = 2. What is the clock rate in MHz?",
  "Identify: The name for the performance measurement approach where you divide the execution time of the slower machine by the faster machine to get a speedup ratio.",
  "Identify: In Amdahl's parallel speedup formula Speedup = 1 / [(1−f) + (f/N)], if f = 0.8 and N = 4, compute the exact speedup value."
];

const IDENT_ANSWERS = [
  ["MIPS rate", "MIPS", "Ic/(T×10⁶)", "f/(CPI×10⁶)"],
  ["SU_f", "SUf"],
  ["MFLOPS", "Millions of Floating-Point Operations Per Second"],
  ["Elapsed Time", "Wall Clock Time"],
  ["Clock Cycle Time", "Cycle Time", "τ = 1/f"],
  ["1.5 MIPS", "1.5"],
  ["p", "cycles to decode and execute", "processor cycles to decode"],
  ["Amdahl's Law"],
  ["3×", "3 times", "3"],
  ["CPI", "Cycles Per Instruction"],
  ["8.33×", "8.33", "1/0.12"],
  ["1.67×", "1.67", "1/0.6"],
  ["m", "memory references per instruction", "number of memory references"],
  ["User CPU Time", "System CPU Time"],
  ["3.0 seconds", "3 seconds", "3"],
  ["Response Time", "Execution Time", "Latency"],
  ["τ", "tau", "τ = 1/f"],
  ["2 MHz", "2"],
  ["Performance Ratio", "Speedup comparison"],
  ["2.5×", "2.5"]
];

const LETTERS = ['A', 'B', 'C', 'D'];
const STORAGE_KEY = 'exam5-score-records';

function getScoreRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveScoreRecord(record) {
  const records = getScoreRecords();
  records.unshift(record);
  const maxRecords = 50;
  const trimmed = records.slice(0, maxRecords);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
}

function clearScoreRecords() {
  localStorage.removeItem(STORAGE_KEY);
  renderScoreRecords();
}

function renderScoreRecords() {
  const container = document.getElementById('score-records-list');
  if (!container) return;
  const records = getScoreRecords();
  container.innerHTML = records.length === 0
    ? '<p class="no-records">No score records yet. Submit your exam to record your score.</p>'
    : records.map(r => `
        <div class="score-record-item">
          <div>
            <span>${r.mcCorrect}/${r.mcTotal} (Part I) · ${r.identCorrect}/${r.identTotal} (Part II) · <strong>${r.totalCorrect}/${r.total}</strong></span>
            <div class="score-record-date">${r.date}</div>
          </div>
        </div>
      `).join('');
}

function computeScore() {
  let mcCorrect = 0;
  document.querySelectorAll('.question').forEach(q => {
    const opts = q.querySelectorAll('.option.checked');
    if (opts.length && opts[0].classList.contains('correct')) mcCorrect++;
  });
  let identCorrect = 0;
  document.querySelectorAll('.identification-item').forEach(item => {
    if (item.classList.contains('correct')) identCorrect++;
  });
  const mcTotal = MC_ANSWERS.length;
  const identTotal = IDENT_ANSWERS.length;
  return { mcCorrect, mcTotal, identCorrect, identTotal, totalCorrect: mcCorrect + identCorrect, total: mcTotal + identTotal };
}

function recordScore() {
  saveScoreRecord({ ...computeScore(), date: new Date().toLocaleString() });
  renderScoreRecords();
}

function renderMC() {
  const container = document.getElementById('mc-questions');
  container.innerHTML = MC_QUESTIONS.map((q, i) => `
    <div class="question" data-q="${i}">
      <div class="question-number">${i + 1}.</div>
      <div class="question-text">${q}</div>
      <div class="options">
        ${MC_OPTIONS[i].map((opt, j) => `
          <div class="option" data-letter="${LETTERS[j]}" data-q="${i}" role="button" tabindex="0">
            <span class="option-letter">${LETTERS[j]}.</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  container.querySelectorAll('.option').forEach(el => {
    el.addEventListener('click', () => handleMCClick(el));
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') handleMCClick(el); });
  });
}

function handleMCClick(el) {
  const q = +el.dataset.q, letter = el.dataset.letter, correct = MC_ANSWERS[q];
  const opts = el.closest('.options').querySelectorAll('.option');
  opts.forEach(opt => opt.classList.remove('correct', 'wrong', 'checked'));
  el.classList.add('checked');
  if (letter === correct) el.classList.add('correct');
  else {
    el.classList.add('wrong');
    const c = [...opts].find(o => o.dataset.letter === correct);
    if (c) c.classList.add('correct');
  }
  updateScore();
}

function renderIdent() {
  const container = document.getElementById('ident-questions');
  container.innerHTML = IDENT_QUESTIONS.map((q, i) => `
    <div class="identification-item" data-q="${i}">
      <div class="question-number">${i + 1}.</div>
      <div class="question-text">${q}</div>
      <input type="text" class="ident-input" data-q="${i}" placeholder="Type your answer..." autocomplete="off">
    </div>
  `).join('');
  container.querySelectorAll('.ident-input').forEach(input => {
    input.addEventListener('blur', () => checkIdent(+input.dataset.q));
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { checkIdent(+input.dataset.q); input.blur(); } });
  });
}

function normalize(s) {
  return (s || '').toLowerCase().replace(/\s+/g, ' ').trim().replace(/[^\w\s]/g, '');
}

function checkIdent(q) {
  const input = document.querySelector(`.ident-input[data-q="${q}"]`);
  const item = input.closest('.identification-item');
  const val = input.value.trim();
  const answers = IDENT_ANSWERS[q];
  item.classList.remove('correct', 'wrong');
  if (!val) return;
  const norm = normalize(val);
  const match = answers.some(a => {
    const an = normalize(String(a));
    return norm === an || norm.includes(an) || an.includes(norm);
  });
  if (match) { item.classList.add('correct'); input.disabled = true; }
  else item.classList.add('wrong');
  updateScore();
}

function checkAll() {
  document.querySelectorAll('.ident-input').forEach(input => {
    if (!input.disabled) checkIdent(+input.dataset.q);
  });
  updateScore(true);
}

function submitExam() {
  checkAll();
  recordScore();
  const s = computeScore();
  alert(`Exam submitted!\n\nPart I: ${s.mcCorrect}/${s.mcTotal}\nPart II: ${s.identCorrect}/${s.identTotal}\nTotal: ${s.totalCorrect}/${s.total}\n\nYour score has been recorded.`);
}

function updateScore(forceShow) {
  const s = computeScore();
  const summary = document.getElementById('score-summary');
  if (forceShow || s.totalCorrect > 0 || document.querySelector('.option.checked')) {
    summary.style.display = 'block';
    summary.innerHTML = `<h4>Score Summary</h4><p>Part I: ${s.mcCorrect} / ${s.mcTotal} | Part II: ${s.identCorrect} / ${s.identTotal}</p><p><strong>Total: ${s.totalCorrect} / ${s.total}</strong></p>`;
  }
}

function buildAnswerKeys() {
  const mcTbody = document.getElementById('answer-key-mc');
  if (mcTbody) mcTbody.innerHTML = MC_ANSWERS.map((a, i) => `<tr><td>${i + 1}</td><td>${a}</td></tr>`).join('');
  const identTbody = document.getElementById('answer-key-ident');
  if (identTbody) identTbody.innerHTML = IDENT_ANSWERS.map((a, i) => `<tr><td>${i + 1}</td><td>${Array.isArray(a) ? a[0] : a}</td></tr>`).join('');
}

function init() {
  renderMC();
  renderIdent();
  buildAnswerKeys();
  renderScoreRecords();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
