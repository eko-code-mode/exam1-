const MC_ANSWERS = ['B','C','D','B','C','D','C','D','B','B','C','B','C','C','D','C','B','D','B','B','B','C','C','C','B','B','B','B','B','B'];

const MC_QUESTIONS = [
  "Which of the following BEST defines a computer?",
  "What is the term used for the list of instructions stored inside a computer?",
  "Which type of computer is BEST suited for large-scale numerical calculations such as weather forecasting?",
  "Which type of computer is described as having high-resolution I/O graphics capability and is used in engineering and interactive design work?",
  "How many functionally independent main parts does a computer consist of?",
  "Which unit of the computer is referred to as the \"nerve center\" that sends signals to all other units and senses their states?",
  "What type of memory is exclusively associated with the processor, operates at electronic speeds, and must contain programs while they are being executed?",
  "Which of the following is an example of secondary memory?",
  "Memory in which any location can be reached in a short and fixed amount of time after specifying its address is called:",
  "Read-Only Memory (ROM) is described as memory that:",
  "What are the small, fast RAM units coupled with the processor and often contained on the same IC chip called?",
  "The number of bits in each word of memory is called the:",
  "The time required to access one word from memory is called:",
  "Consider the instruction: Add LOCA, R0. What is the FIRST step performed?",
  "Which register holds the memory address of the next instruction to be fetched and executed?",
  "What is the function of the Memory Address Register (MAR)?",
  "What is the function of the Memory Data Register (MDR)?",
  "Which register holds the instruction currently being executed and provides its output to the control circuits?",
  "A group of lines that serves as a connecting path for several devices is called a:",
  "Which of the following BEST describes a single bus structure?",
  "In a single bus structure, how many units can actively use the bus at any given time?",
  "What is the basic performance equation for processor execution time?",
  "In the performance equation T = (N × S) / R, what does the variable S represent?",
  "In the performance equation T = (N × S) / R, what does R represent?",
  "Pipelining improves performance by:",
  "In ideal pipelining where all instructions are overlapped to the maximum degree, the effective value of S becomes:",
  "What is superscalar execution?",
  "SPEC rating is computed as:",
  "A SPEC rating of 50 means that:",
  "Which of the following BEST differentiates a shared memory multiprocessor from a message-passing multicomputer?"
];

const MC_OPTIONS = [
  ["A slow mechanical device that stores information", "A fast electronic calculating machine that accepts digitized input, processes it according to internally stored instructions, and produces resulting information", "A device that only performs arithmetic operations", "A programmable device that only accepts analog input"],
  ["Data", "Memory", "Program", "Register"],
  ["Personal Computer", "Notebook Computer", "Enterprise System", "Supercomputer"],
  ["Personal Computer", "Workstation", "Notebook Computer", "Enterprise System"],
  ["Three", "Four", "Five", "Six"],
  ["Input Unit", "Arithmetic Logic Unit", "Memory Unit", "Control Unit"],
  ["Secondary Memory", "Cache Memory", "Primary Memory", "ROM"],
  ["RAM", "ROM", "Cache", "Magnetic Disk"],
  ["ROM", "RAM", "Cache", "Secondary Memory"],
  ["Can be written by the user", "Is only readable and contains the operating system; its contents cannot be altered", "Loses data when power is turned off", "Is used for secondary storage"],
  ["Registers", "ROM", "Cache", "Secondary Memory"],
  ["Memory Access Time", "Word Length", "Address Size", "Bus Width"],
  ["Clock Cycle", "Processor Time", "Memory Access Time", "Elapsed Time"],
  ["The operand at LOCA is fetched and added to R0", "The result is stored in R0", "The instruction is fetched from memory into the processor", "The address LOCA is sent to the output unit"],
  ["MAR", "MDR", "IR", "PC"],
  ["Holds the instruction currently being executed", "Contains data to be written into or read from memory", "Holds the address of the memory location to be accessed", "Keeps track of the next instruction address"],
  ["Holds the address of the location to be accessed", "Contains the data to be written into or read out of an address location", "Points to the next instruction to be executed", "Stores the instruction being decoded"],
  ["PC", "MAR", "MDR", "IR"],
  ["Register", "Bus", "Cache", "Word"],
  ["High cost and inflexible", "Low cost and very flexible for attaching peripheral devices", "High performance but also high cost", "Used only for connecting processors"],
  ["One", "Two", "Three", "Four"],
  ["T = N + S + R", "T = N × R / S", "T = (N × S) / R", "T = R / (N × S)"],
  ["Clock rate in cycles per second", "Total number of instructions executed", "Average number of basic steps (clock cycles) needed to execute one instruction", "Total elapsed time"],
  ["Number of instructions", "Average steps per instruction", "Clock rate in cycles per second", "Processor time in seconds"],
  ["Increasing the number of instructions executed", "Overlapping the execution of successive instructions", "Reducing the clock rate", "Increasing memory access time"],
  ["0", "1", "2", "Equal to the number of pipeline stages"],
  ["Executing one instruction per clock cycle using a single pipeline", "Using multiple instruction pipelines to start execution of several instructions every clock cycle", "Running instructions slower to increase accuracy", "Reducing the number of registers in the processor"],
  ["Running time on the computer under test / Running time on the reference computer", "Running time on the reference computer / Running time on the computer under test", "Clock rate of test computer / Clock rate of reference computer", "Number of instructions / Clock rate"],
  ["The reference computer is 50 times faster than the computer under test", "The computer under test is 50 times faster than the reference computer", "Both computers perform equally on 50% of benchmarks", "The computer under test uses 50 clock cycles per instruction"],
  ["Multiprocessors use slower processors than multicomputers", "In multiprocessors, all processors share access to all memory; in multicomputers, each computer has its own memory and communicates via messages over a network", "Multicomputers have more processors than multiprocessors", "Multiprocessors are cheaper than multicomputers"]
];

const IDENT_QUESTIONS = [
  "Identify the term: The component where programs and data reside while the computer is running; the computer's internal storage.",
  "Identify the term: A category of computers commonly used at home, in schools, and offices—typically a desktop-style machine.",
  "Identify the term: The component that performs arithmetic and logic operations such as add, subtract, multiply, and divide.",
  "Identify the term: Storage used for large volumes of data that are not needed as often, e.g., magnetic disks and optical drives.",
  "Identify the term: Small, fast storage locations within the CPU that hold operands before they are processed by the ALU.",
  "Identify the term: A 16-bit register that stores the address of the next instruction to be fetched and run.",
  "Identify the term: The register that stores the instruction currently being executed and feeds it to the control unit.",
  "Identify the term: A unique number assigned to each word in memory so it can be located and accessed.",
  "Identify the term: The typical interconnection method that uses one shared set of lines to connect computer components.",
  "Identify the term: A signal from an I/O device requesting immediate attention from the processor, pausing the current program.",
  "Identify the term: The periodic signal that drives the processor and establishes fixed time intervals (clock cycles).",
  "Identify the term: In the performance equation, the variable S—the average clock cycles needed per instruction.",
  "Identify the term: The group that selects and publishes standardized benchmark programs for measuring computer performance.",
  "Identify the term: Running several instructions at once using multiple functional units, allowing S to drop below 1.",
  "Identify the term: The full time needed to run a program, influenced by CPU, disk, and printer speeds.",
  "Identify the term: The register that holds the memory address to be read from or written to during a memory operation.",
  "Identify the term: The register that holds the data being read from or written to a memory location.",
  "Identify the term: An architecture with simple instructions that makes efficient pipelining easier to achieve.",
  "Identify the term: An architecture with complex, powerful instructions that lowers N but increases S.",
  "Identify the term: A routine stored in memory that temporarily takes over the processor and then returns it to its prior state."
];

const IDENT_ANSWERS = [
  ["Computer Memory", "Memory"],
  ["Personal Computer", "PC"],
  ["Arithmetic Logic Unit", "ALU"],
  ["Secondary Memory"],
  ["Register", "Registers"],
  ["Program Counter", "PC"],
  ["Instruction Register", "IR"],
  ["Address"],
  ["Single Bus", "Bus Structure", "Bus"],
  ["Interrupt"],
  ["Clock"],
  ["CPI", "Clock Cycles Per Instruction", "S"],
  ["SPEC", "System Performance Evaluation Corporation"],
  ["Superscalar Execution", "Superscalar"],
  ["Elapsed Time"],
  ["Memory Address Register", "MAR"],
  ["Memory Data Register", "MDR"],
  ["RISC", "Reduced Instruction Set Computer"],
  ["CISC", "Complex Instruction Set Computer"],
  ["Interrupt Service Routine", "ISR"]
];

const LETTERS = ['A', 'B', 'C', 'D'];
const STORAGE_KEY = 'exam-score-records';

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
    const an = normalize(a);
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
  mcTbody.innerHTML = MC_ANSWERS.map((a, i) => `<tr><td>${i + 1}</td><td>${a}</td></tr>`).join('');

  const identTbody = document.getElementById('answer-key-ident');
  identTbody.innerHTML = IDENT_ANSWERS.map((a, i) => `<tr><td>${i + 1}</td><td>${Array.isArray(a) ? a[0] : a}</td></tr>`).join('');
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
