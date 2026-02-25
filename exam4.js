const MC_ANSWERS = ['B','C','B','C','B','B','C','C','D','C','C','B','C','C','C','C','C','C','B','B','C','B','B','C','C','C','B','C','B','B'];

const MC_QUESTIONS = [
  "What is the correct representation of a program's execution model?",
  "In the instruction cycle diagram, what happens after \"Execute Instruction\"?",
  "What is the role of the Instruction Interpreter in a program's execution?",
  "Which of the following correctly describes the Program Counter (PC)?",
  "What is stored in the Instruction Register (IR)?",
  "In the top-level computer architecture diagram, which two buses connect the CPU and Memory?",
  "Which component of the CPU holds small, ultra-fast storage for data being actively processed?",
  "During the Fetch Cycle, after the instruction is fetched, what happens to the PC?",
  "Which of the following is NOT a category of operations that can occur during the Execute Cycle?",
  "The Instruction Set Architecture (ISA) is best described as:",
  "In the layered ISA diagram, which layer sits directly ABOVE the ISA layer?",
  "A 16-bit instruction is divided into a 4-bit opcode and two 6-bit operand references. How many unique operations can this ISA support?",
  "In the instruction format with a 4-bit opcode, how many memory locations or registers can each 6-bit operand reference?",
  "In the 9-bit instruction Add R1, R2, R3 encoded as 001 01 10 11, what does the first field 001 represent?",
  "In the instruction Sub R1, R3, R2, which register receives the result?",
  "Which of the following is the correct formula for Performance?",
  "Machine A runs a program in 10 seconds and Machine B runs it in 40 seconds. How many times faster is Machine A?",
  "Which of the following correctly represents the CPU Time formula?",
  "What does CPU Time measure, as opposed to Elapsed Time?",
  "A 4 GHz CPU has what clock cycle time?",
  "The clock rate and clock cycle time share which mathematical relationship?",
  "What is the correct unit for Clock Rate?",
  "To IMPROVE CPU performance, which of the following actions would you take?",
  "Why can we NOT assume that 1 instruction = 1 clock cycle?",
  "Which statement about CPI is correct?",
  "In the simple program example, which instruction reads from an input device?",
  "In the program execution example, the instruction Store R1, ML5 does what?",
  "In the 9-bit instruction design where opcodes are 3 bits, how many unique instructions can be encoded?",
  "Computer A runs Program 1 in 1 sec and Program 2 in 1000 sec. Computer B runs Program 1 in 10 sec and Program 2 in 100 sec. Which computer has better overall performance based on total execution time?",
  "What does the three-part performance equation CPU Time = IC × CPI × Clock Cycle Time tell us about what controls each factor?"
];

const MC_OPTIONS = [
  ["Data → Results → Arithmetic Functions", "Data → Sequence of Arithmetic and Logic Functions → Results", "Instructions → Data → Results", "Results → Data → Logic Functions"],
  ["The program halts immediately", "The CPU waits for user input", "The CPU loops back to fetch the next instruction", "The PC resets to zero"],
  ["It stores data in memory", "It receives instruction codes and sends control signals to functional units", "It directly performs arithmetic operations", "It manages input and output devices"],
  ["It holds the current instruction being executed", "It holds the result of the last arithmetic operation", "It holds the memory address of the next instruction to be fetched", "It holds the clock rate of the processor"],
  ["The address of the next instruction", "The current instruction being decoded and executed", "The result of the current computation", "The clock cycle count"],
  ["Control Bus and Data Bus", "Address Bus and Data Bus", "Instruction Bus and Result Bus", "Clock Bus and Address Bus"],
  ["Instruction Register", "Program Counter", "Register File", "Functional Units"],
  ["It is reset to 0", "It is decremented by 1", "It is incremented by 1 (unless a jump occurs)", "It remains unchanged"],
  ["Processor-Memory data transfer", "Data processing (arithmetic/logic)", "Control (alteration of sequence)", "Clock synchronization"],
  ["The physical transistors inside a CPU", "The operating system's kernel", "The hardware/software interface that defines available instructions", "The compiler that translates code"],
  ["Circuit Design", "Digital Design", "Compiler / Assembler", "Application"],
  ["6", "16", "64", "256"],
  ["16", "32", "64", "128"],
  ["Destination register R1", "Source register R2", "The ADD opcode", "Source register R3"],
  ["R2", "R3", "R1", "R0"],
  ["Performance = Execution Time", "Performance = Execution Time × Clock Rate", "Performance = 1 / Execution Time", "Performance = CPI / Clock Rate"],
  ["2×", "3×", "4×", "0.25×"],
  ["CPU Time = Clock Rate × CPI", "CPU Time = Instruction Count + CPI + Clock Cycle Time", "CPU Time = Instruction Count × CPI × Clock Cycle Time", "CPU Time = Instruction Count / (CPI × Clock Rate)"],
  ["Total time including I/O and waiting", "Only the time the CPU spent executing your program", "Time spent in the operating system only", "Time for data to travel through the bus"],
  ["500 ps", "250 ps", "200 ps", "1 ns"],
  ["They are equal", "They are additive inverses", "They are multiplicative inverses (reciprocals)", "Clock Rate = Clock Cycle Time²"],
  ["Seconds per cycle", "Cycles per second (Hz)", "Instructions per second", "Nanoseconds"],
  ["Increase CPI and decrease clock rate", "Decrease instruction count and decrease clock cycle time", "Increase clock cycle time and increase instruction count", "Decrease clock rate and increase CPI"],
  ["Because the clock doesn't run during instruction execution", "Because the PC skips instructions randomly", "Because different instructions require different numbers of clock cycles", "Because the IR can only hold one cycle at a time"],
  ["CPI is always exactly 1 for all modern processors", "CPI is a fixed constant determined only by clock rate", "CPI varies depending on instruction type; memory access takes more cycles than register access", "CPI only applies to floating-point instructions"],
  ["Load", "Store", "Read", "Sub"],
  ["Copies memory location 5 into R1", "Writes the value of R1 into memory location 5", "Jumps to memory location 5", "Reads from input port 5"],
  ["3", "4", "8", "16"],
  ["Computer A, because it runs Program 1 faster", "Computer B, because its total time of 110 sec < Computer A's 1001 sec", "They are equal in overall performance", "Computer A, because 1000 sec is longer than any of B's times"],
  ["All three factors are controlled solely by the hardware manufacturer", "IC is controlled by the compiler/ISA; CPI by ISA/implementation; Clock Cycle Time by hardware implementation", "IC is controlled by the programmer only; CPI by the OS; Clock Cycle Time by the compiler", "All three are controlled by the operating system"]
];

const IDENT_QUESTIONS = [
  "Identify the term: This register always points to the memory address of the NEXT instruction to be fetched.",
  "Identify the term: This register holds the CURRENT instruction being decoded and executed by the CPU.",
  "Identify the term: The two-step cycle that the CPU continuously repeats: retrieving an instruction, then carrying it out.",
  "Identify the term: The hardware/software interface that acts as the \"contract\" between software and hardware, defining all available instructions.",
  "Identify the term: The unique binary code assigned to each operation (like ADD, SUB, MULT) that tells the CPU what to perform.",
  "Identify the term: The communication pathway that carries memory addresses from the CPU to memory (one direction only).",
  "Identify the term: The communication pathway that carries actual data or instructions between the CPU and memory (bidirectional).",
  "Identify the term: The part of the CPU that reads an operation code and issues control signals to the appropriate hardware units.",
  "Identify the term: The small, ultra-fast storage locations inside the CPU that hold data being actively used during execution.",
  "Identify the term: The total amount of work completed per unit of time; contrasted with response time which measures a single task.",
  "Identify the term: The total real-world time from start to finish of a program, including I/O, memory access, and all waiting.",
  "Identify the term: The time only the CPU spends executing your program, excluding I/O and other program overhead.",
  "Identify the term: The average number of clock cycles required to execute one instruction in a program.",
  "Identify the term: The total count of machine instructions executed when a program runs to completion.",
  "Identify the term: The duration of one complete clock tick; equal to 1 divided by the clock rate.",
  "Identify the term: The component of the CPU that performs actual arithmetic and logic computations.",
  "Identify the term: The layer in the ISA architecture diagram that translates assembly language mnemonics into machine-level binary code.",
  "Identify the term: In a 16-bit instruction format with 4-bit opcode and two 6-bit operands, this is the maximum number of unique operations the ISA can support.",
  "Identify the term: The principle that states total execution time is the most consistent and fair way to summarize and compare computer performance across multiple programs.",
  "Identify the term: During program execution, this type of operation alters the normal sequential flow of instruction execution — for example, a jump instruction."
];

const IDENT_ANSWERS = [
  ["Program Counter", "PC"],
  ["Instruction Register", "IR"],
  ["Instruction Cycle", "Fetch-Execute Cycle", "Fetch Execute Cycle"],
  ["Instruction Set Architecture", "ISA"],
  ["Operation Code", "Opcode"],
  ["Address Bus"],
  ["Data Bus"],
  ["Control Unit"],
  ["Registers", "Register File"],
  ["Throughput"],
  ["Elapsed Time", "Wall Clock Time"],
  ["CPU Time", "User CPU Time"],
  ["CPI", "Cycles Per Instruction"],
  ["Instruction Count", "IC"],
  ["Clock Cycle Time", "Cycle Time"],
  ["Functional Units", "ALU", "Arithmetic Logic Unit"],
  ["Assembler"],
  ["16", "16 unique operations", "2^4", "2⁴"],
  ["Total Execution Time"],
  ["Control Operation", "Jump", "Branch"]
];

const LETTERS = ['A', 'B', 'C', 'D'];
const STORAGE_KEY = 'exam4-score-records';

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
  const totalCorrect = mcCorrect + identCorrect;
  const total = mcTotal + identTotal;

  return { mcCorrect, mcTotal, identCorrect, identTotal, totalCorrect, total };
}

function recordScore() {
  const score = computeScore();
  const record = {
    ...score,
    date: new Date().toLocaleString()
  };
  saveScoreRecord(record);
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
  const q = +el.dataset.q;
  const letter = el.dataset.letter;
  const correct = MC_ANSWERS[q];
  const opts = el.closest('.options').querySelectorAll('.option');

  opts.forEach(opt => {
    opt.classList.remove('correct', 'wrong', 'checked');
  });

  el.classList.add('checked');
  if (letter === correct) {
    el.classList.add('correct');
  } else {
    el.classList.add('wrong');
    const correctOpt = [...opts].find(o => o.dataset.letter === correct);
    if (correctOpt) correctOpt.classList.add('correct');
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
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        checkIdent(+input.dataset.q);
        input.blur();
      }
    });
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

  if (match) {
    item.classList.add('correct');
    input.disabled = true;
  } else {
    item.classList.add('wrong');
  }

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
  const score = computeScore();
  alert(`Exam submitted!\n\nPart I: ${score.mcCorrect}/${score.mcTotal}\nPart II: ${score.identCorrect}/${score.identTotal}\nTotal: ${score.totalCorrect}/${score.total}\n\nYour score has been recorded.`);
}

function updateScore(forceShow) {
  const { mcCorrect, mcTotal, identCorrect, identTotal, totalCorrect, total } = computeScore();

  const summary = document.getElementById('score-summary');
  if (forceShow || totalCorrect > 0 || document.querySelector('.option.checked')) {
    summary.style.display = 'block';
    summary.innerHTML = `
      <h4>Score Summary</h4>
      <p>Part I: ${mcCorrect} / ${mcTotal} | Part II: ${identCorrect} / ${identTotal}</p>
      <p><strong>Total: ${totalCorrect} / ${total}</strong></p>
    `;
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
