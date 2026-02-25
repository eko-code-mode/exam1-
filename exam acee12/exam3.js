const MC_ANSWERS = ['B','C','B','D','C','B','B','D','C','C','D','D','C','B','B','D','B','C','B','C','B','D','B','C','D','B','C','C','C','D'];

const MC_QUESTIONS = [
  "Which of the following BEST describes a microcomputer?",
  "The basic unit of information in a computer is called a:",
  "How many bits make up one nibble?",
  "How many bits make up one word?",
  "In an 8-bit microprocessor, what is the largest decimal value that can be stored in a single 1-byte register or memory location?",
  "The data bus in an 8-bit microprocessor consists of how many conducting wires?",
  "Which of the following BEST describes the direction of the address bus?",
  "A 16-bit address bus allows the microprocessor to access how many unique memory locations?",
  "What is the decimal address of the HIGHEST memory location in a system with a 16-bit address bus?",
  "Which two internal registers help the microprocessor point to a specific memory location during a memory read operation?",
  "During a memory read, after the address is placed on the address bus, where is the data from memory first loaded inside the microprocessor?",
  "In the binary number b₇b₆b₅b₄b₃b₂b₁b₀, which bit is referred to as the Least Significant Bit (LSB)?",
  "What is the decimal equivalent of the binary number 10011₂?",
  "What is the binary representation of the decimal number 19?",
  "When converting decimal to binary using repeated division, in which order are the remainders read to form the binary number?",
  "What is the hexadecimal number system's base?",
  "In the hexadecimal system, what decimal value does the letter B represent?",
  "What is the decimal equivalent of 1BA₁₆?",
  "What is the hexadecimal representation of 442₁₀?",
  "When converting binary to hexadecimal, how are the binary digits grouped?",
  "What is the hexadecimal equivalent of the binary number 0010 1100 1010₂?",
  "In assembly language, which prefix is used to indicate a hexadecimal number?",
  "In the assembly instruction LDAA #8, what does the # symbol indicate?",
  "What is the hexadecimal opcode for the LDAA (Load Accumulator A) instruction?",
  "In the simple assembly program (LDAA #1, LDAB #4, ABA, STAA $0000, WAI), what is the total number of bytes occupied in memory?",
  "Why does the STAA $0000 instruction only require 2 bytes instead of 3?",
  "In the instruction execution cycle, what is the CORRECT order of steps?",
  "During execution of LDAA #1 stored at address $C000, what is placed into the Instruction Register (IR) during Step 1?",
  "After completely executing the instruction LDAA #1 (stored starting at $C000), what address does the Program Counter (PC) hold?",
  "Which of the following registers in the Motorola M6800 microprocessor is a 2-byte register essential for indexed addressing?"
];

const MC_OPTIONS = [
  ["A processor packaged in a single integrated circuit", "A computer that uses a microprocessor as its CPU", "A large computer system used by corporations", "A computer that only performs arithmetic operations"],
  ["Byte", "Nibble", "Bit", "Word"],
  ["2", "4", "8", "16"],
  ["4", "8", "12", "16"],
  ["127", "128", "255", "256"],
  ["4", "8", "16", "32"],
  ["Bidirectional — travels both from CPU to memory and from memory to CPU", "Unidirectional — travels only from CPU to memory", "Unidirectional — travels only from memory to CPU", "Bidirectional — travels between all components equally"],
  ["256", "1,024", "32,768", "65,536"],
  ["255", "1,023", "65,535", "65,536"],
  ["IR and CC", "ACCA and ACCB", "PC and MAR", "SP and XR"],
  ["Accumulator", "Program Counter", "Instruction Register", "Memory Data Register (MDR)"],
  ["b₇", "b₄", "b₁", "b₀"],
  ["17", "18", "19", "21"],
  ["10001₂", "10011₂", "10101₂", "11001₂"],
  ["Top to bottom (first remainder is the MSB)", "Bottom to top (last remainder is the MSB)", "Randomly, the order does not matter", "Only the last three remainders are used"],
  ["2", "8", "10", "16"],
  ["10", "11", "12", "13"],
  ["346", "410", "442", "498"],
  ["$1AB", "$1BA", "$BAI", "$2AB"],
  ["In groups of 2 from the left", "In groups of 3 from the right", "In groups of 4 from the right", "In groups of 8 from the left"],
  ["$2BA", "$2CA", "$ABC", "$B2C"],
  ["#", "%", "@", "$"],
  ["The operand is a memory address", "The immediate addressing mode is being used; the operand is the data itself", "The operand is stored in a register", "The instruction uses indirect addressing"],
  ["C6", "4C", "86", "1B"],
  ["5", "6", "7", "8"],
  ["Because STAA has no operand", "Because the opcode $97 automatically instructs the processor to insert $00 as the high byte; only the low byte needs to be stored", "Because all store instructions are always 2 bytes", "Because $0000 is stored entirely in one byte"],
  ["Execute → Fetch opcode → Decode → Fetch additional bytes", "Decode → Fetch opcode → Execute → Fetch additional bytes", "Fetch opcode → Decode → Fetch additional bytes → Execute", "Fetch additional bytes → Fetch opcode → Decode → Execute"],
  ["$01", "$C000", "$86", "$C001"],
  ["$C000", "$C001", "$C002", "$C003"],
  ["ACCA", "CC Register", "MDR", "Index Register (XR)"]
];

const IDENT_QUESTIONS = [
  "Identify the term: The bus component that carries addresses from the CPU to memory and travels in only one direction.",
  "Identify the term: A group of 4 bits, also equal to one hexadecimal digit.",
  "Identify the term: The bit position b₇ in a 1-byte number, representing the highest value position.",
  "Identify the term: The method of converting decimal to binary by repeatedly dividing by 2 and collecting remainders read from bottom to top.",
  "Identify the term: The hexadecimal digit that represents the decimal value 15.",
  "Identify the term: The predefined binary code chosen by microprocessor designers to represent a specific operation, such as load or add.",
  "Identify the term: The human-readable abbreviated name for a microprocessor instruction, such as LDAA or ABA.",
  "Identify the term: The complete binary (or hex) representation of an instruction including both the operation code and the operand.",
  "Identify the term: The prefix used in assembly language to indicate that a number is expressed in binary.",
  "Identify the term: The assembly instruction that adds the contents of Accumulator A and Accumulator B and stores the result in Accumulator A.",
  "Identify the term: The hex opcode for the ABA instruction.",
  "Identify the term: The assembly instruction used to halt the microprocessor; an interrupt or reset is needed to exit its state.",
  "Identify the term: The 2-byte register in the Motorola M6800 that establishes a memory stack and tracks the top of the stack.",
  "Identify the term: The 1-byte register that keeps track of certain properties of the last instruction executed, such as carry, negative result, zero result, and overflow.",
  "Identify the term: The starting memory address of the simple program discussed in the Week 3 material, expressed in hexadecimal.",
  "Identify the term: The content (in hex) stored at memory address $C004 in the sample program (LDAA #1, LDAB #4, ABA, STAA $0000, WAI).",
  "Identify the term: The addressing mode used by STAA $0000 where only the low byte of the address is provided and the high byte is assumed to be $00.",
  "Identify the term: The number of read cycles required to complete the execution of the LDAA instruction in immediate addressing mode.",
  "Identify the term: The register inside the microprocessor where the opcode is placed after it is fetched from memory, so the control unit can decode it.",
  "Identify the term: The value stored at memory address $0000 after the complete execution of the sample program (LDAA #1, LDAB #4, ABA, STAA $0000, WAI)."
];

const IDENT_ANSWERS = [
  ["Address Bus"],
  ["Nibble"],
  ["Most Significant Bit", "MSB"],
  ["Repeated Division by 2", "Decimal to Binary Conversion", "Repeated division"],
  ["F"],
  ["Opcode", "Operation Code"],
  ["Mnemonic"],
  ["Machine Code"],
  ["%", "Percent sign", "Percent"],
  ["ABA", "Add Accumulators"],
  ["1B"],
  ["WAI", "Wait", "Halt"],
  ["Stack Pointer", "SP"],
  ["Condition Code Register", "CC Register", "CC"],
  ["$C000", "C000"],
  ["1B"],
  ["Direct Addressing"],
  ["Two", "2", "2 read cycles", "Two read cycles"],
  ["Instruction Register", "IR"],
  ["$05", "05", "5"]
];

const LETTERS = ['A', 'B', 'C', 'D'];
const STORAGE_KEY = 'exam3-score-records';

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
