const MC_ANSWERS = ['B','C','D','C','B','B','C','C','C','B','B','C','D','B','D','C','B','B','D','D','B','C','C','B','D','C','B','D','B','B'];

const MC_QUESTIONS = [
  "Which of the following BEST defines a microprocessor?",
  "Any microprocessor-based system having a limited number of resources is called a:",
  "Which of the following is NOT a component shown in the microprocessor-based system diagram (Fig. 1)?",
  "Which bus carries a unique binary pattern used to identify a specific memory location or I/O port?",
  "An 8-bit address bus can address how many different memory locations?",
  "Which of the following BEST describes the data bus?",
  "Which bus carries signals for selection of memory or I/O device, direction of data transfer, and synchronization?",
  "The 8085 microprocessor is packaged in how many pins?",
  "What is the maximum clock frequency at which the 8085 microprocessor can run?",
  "The 8085 has a 16-bit address bus. How much memory can it address?",
  "In the 8085, which registers can be combined as register pairs to perform 16-bit operations?",
  "The accumulator in the 8085 is identified as which register?",
  "Which flag in the 8085 is set to 1 when the result of an arithmetic operation is zero?",
  "Which flag is set when a carry results from bit D3 and passes to bit D4 in the 8085?",
  "The Sign Flag (S) in the 8085 is a copy of which bit of the accumulator?",
  "Which 16-bit register in the 8085 points to a memory location in R/W memory called the stack?",
  "What does the ALE signal in the 8085 indicate?",
  "In the 8085, what does IO/M = 0 indicate?",
  "Based on the S1 and S0 status signals of the 8085, which combination indicates a FETCH operation?",
  "Which interrupt in the 8085 is non-maskable and has the HIGHEST priority?",
  "What is the function of the READY signal in the 8085?",
  "In the 8085, the lower address lines A0–A7 are multiplexed with the data bus lines D0–D7. These lines are called:",
  "Which of the following addressing modes uses the HL register pair to point to the memory location where data is stored?",
  "Which addressing mode is used in the instruction MVI A, 9AH?",
  "The instruction MOV B, C uses which addressing mode?",
  "Which instruction in the 8085 transfers program execution to a memory location unconditionally?",
  "What is the function of the CALL instruction in the 8085?",
  "Which instruction in the 8085 disables all maskable interrupts?",
  "The instruction DAA in the 8085 is used to:",
  "Which of the following correctly lists the interrupt priority of the 8085 from HIGHEST to LOWEST?"
];

const MC_OPTIONS = [
  ["A computer that uses multiple processors", "A programmable electronics chip that has computing and decision-making capabilities similar to a CPU", "A memory chip that stores programs permanently", "A device that only performs input and output operations"],
  ["Supercomputer", "Mainframe", "Microcomputer", "Workstation"],
  ["CPU", "Memory", "Input", "Printer"],
  ["Data Bus", "Control Bus", "Address Bus", "System Bus"],
  ["128", "256", "512", "1024"],
  ["Unidirectional; carries only addresses", "Bidirectional; transfers data between memory and processor or between I/O device and processor", "Unidirectional; carries only control signals", "Bidirectional; carries only addresses and control signals"],
  ["Address Bus", "Data Bus", "Control Bus", "System Bus"],
  ["20", "28", "40", "64"],
  ["1 MHz", "2 MHz", "3 MHz", "5 MHz"],
  ["32 KB", "64 KB", "128 KB", "256 KB"],
  ["A, B, and C only", "B and C, D and E, H and L", "SP and PC only", "IR and PC only"],
  ["Register B", "Register R0", "Register A", "Register H"],
  ["Sign Flag (S)", "Carry Flag (CY)", "Parity Flag (P)", "Zero Flag (Z)"],
  ["Carry Flag (CY)", "Auxiliary Carry Flag (AC)", "Sign Flag (S)", "Parity Flag (P)"],
  ["D0", "D3", "D5", "D7"],
  ["Program Counter (PC)", "Instruction Register (IR)", "Stack Pointer (SP)", "Memory Address Register (MAR)"],
  ["A write operation is in progress", "A valid address is present on the AD0–AD7 lines", "An interrupt has been requested", "The processor is halted"],
  ["An I/O operation is being performed", "A memory operation is being performed", "The processor is halted", "An interrupt is being serviced"],
  ["S1=0, S0=0", "S1=0, S0=1", "S1=1, S0=0", "S1=1, S0=1"],
  ["INTR", "RST 5.5", "RST 7.5", "TRAP"],
  ["It acknowledges a HOLD request", "When low, it causes the processor to insert wait states for slow devices", "It resets the processor to address 0", "It enables serial data output"],
  ["A0–A7", "D0–D7", "AD0–AD7", "MA0–MA7"],
  ["Immediate Addressing", "Register Direct Addressing", "Indirect Addressing", "Implicit Addressing"],
  ["Memory Direct Addressing", "Immediate Addressing", "Indirect Addressing", "Implicit Addressing"],
  ["Immediate Addressing", "Memory Direct Addressing", "Indirect Addressing", "Register Direct Addressing"],
  ["JZ", "JC", "JMP", "JNZ"],
  ["Returns from a subroutine unconditionally", "Transfers execution to a subroutine and saves the return address on the stack", "Jumps to an address only if the Zero flag is set", "Halts the processor until an interrupt occurs"],
  ["EI", "NOP", "HLT", "DI"],
  ["Decrement the accumulator", "Convert the binary result in the accumulator to BCD format", "Add two register pairs", "Disable all interrupts"],
  ["INTR → RST 5.5 → RST 6.5 → RST 7.5 → TRAP", "TRAP → RST 7.5 → RST 6.5 → RST 5.5 → INTR", "RST 5.5 → RST 6.5 → RST 7.5 → TRAP → INTR", "TRAP → INTR → RST 5.5 → RST 6.5 → RST 7.5"]
];

const IDENT_QUESTIONS = [
  "Identify the term: A microprocessor with built-in memory and ports, programmed for generic control applications (e.g., 8051).",
  "Identify the term: The semiconductor technology most common in modern chips, known for low power consumption.",
  "Identify the term: The 8-bit register in the 8085 that is part of the ALU; it stores data and holds the result of every arithmetic and logical operation.",
  "Identify the term: The set of five flip-flops in the 8085 that are set or reset based on the result of an operation.",
  "Identify the term: The flag in the 8085 that is set to 1 when the accumulator result has an even number of 1s.",
  "Identify the term: The 8-bit register in the 8085 that temporarily stores the current instruction fetched from memory before it is decoded.",
  "Identify the term: The technology used to manufacture the 8085 microprocessor chip.",
  "Identify the term: The crystal frequency connected to X1 and X2 pins of the 8085 for 3 MHz operation.",
  "Identify the term: The 8085 control signal that, when active (low), indicates data is being read from memory or I/O and is on the data bus.",
  "Identify the term: The signal a peripheral (e.g., DMA) sends to the 8085 to request control of the address and data buses.",
  "Identify the term: The processor architecture classification that uses simple instructions, making pipelining easier.",
  "Identify the term: The type of 8085 instruction that copies data from one location to another without changing the source.",
  "Identify the term: A 3-byte 8085 instruction: first byte is the opcode, second and third bytes form a 16-bit address (e.g., JMP 9050H).",
  "Identify the term: The addressing mode where no operand is specified because the instruction implies it (e.g., CMA).",
  "Identify the term: The 8085 instruction that unconditionally returns from a subroutine by popping the return address from the stack.",
  "Identify the term: The 8085 instruction that reads the status of interrupts 7.5, 6.5, 5.5 and serial input, loading the result into the accumulator.",
  "Identify the term: The 8085 instruction that halts the CPU until an interrupt or reset occurs.",
  "Identify the term: The 8085 jump instruction that transfers to an address only when the Zero flag is 1.",
  "Identify the term: The 8085 instruction that rotates all accumulator bits left by one, with D7 going to both D0 and the Carry flag.",
  "Identify the term: The restart address of the TRAP interrupt in the 8085."
];

const IDENT_ANSWERS = [
  ["Microcontroller"],
  ["CMOS", "Complementary Metal-Oxide Semiconductor"],
  ["Accumulator", "Register A"],
  ["Flag Register"],
  ["Parity Flag", "P"],
  ["Instruction Register", "IR"],
  ["N-MOS", "N-type Metal Oxide Semiconductor", "NMOS"],
  ["6 MHz", "6MHz", "6mhz"],
  ["RD", "Read Signal", "Read"],
  ["HOLD"],
  ["RISC", "Reduced Instruction Set Computer"],
  ["Data Transfer Instruction"],
  ["Three-Byte Instruction", "3-byte instruction"],
  ["Implicit Addressing", "Implied Addressing"],
  ["RET", "Return"],
  ["RIM", "Read Interrupt Mask"],
  ["HLT", "Halt"],
  ["JZ", "Jump if Zero"],
  ["RLC", "Rotate Left Circular"],
  ["0024H", "24H", "0024"]
];

const LETTERS = ['A', 'B', 'C', 'D'];
const STORAGE_KEY = 'exam2-score-records';

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
