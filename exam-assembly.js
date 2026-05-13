(function () {
  "use strict";

  /* ─────────────────────────────────────────
     PART I — 25 MULTIPLE CHOICE
  ───────────────────────────────────────── */
  const MC_QUESTIONS = [
    { n: 1,  q: "Which of the following is considered a LOW-level language?", opts: ["Java", "Python", "Assembly Language", "C++"] },
    { n: 2,  q: "What makes high-level languages 'machine independent'?", opts: ["They use registers directly", "The same source code can run on any architecture", "They are faster than assembly", "They do not need a compiler"] },
    { n: 3,  q: "What is MICROCODE?", opts: ["A small C program", "A series of instruction words that turn hardware switches on and off to implement machine language instructions", "Another name for assembly language", "A type of compiler"] },
    { n: 4,  q: "A compiler translates:", opts: ["Machine language to assembly", "Assembly to microcode", "High-level language to machine language", "Microcode to high-level language"] },
    { n: 5,  q: "How many lines of machine language does ONE line of high-level language typically produce?", opts: ["Exactly one", "None", "Many", "Two"] },
    { n: 6,  q: "Which of the following is TRUE about assembly language?", opts: ["It runs on any machine without modification", "It is machine independent", "Each architecture has its own assembly language", "It is easier to write than C++"] },
    { n: 7,  q: "In Microsoft Visual Studio, which keyword is used to embed assembly code inside a C/C++ program?", opts: ["_inline", "_asm", "_assembly", "_code"] },
    { n: 8,  q: "What are the three main components in an assembler programmer's model of a processor?", opts: ["Cache, RAM, ROM", "Registers, Status Register, Memory", "ALU, CU, Memory", "CPU, GPU, RAM"] },
    { n: 9,  q: "How many general-purpose registers does the Intel Pentium have?", opts: ["4", "16", "32", "8"] },
    { n: 10, q: "What is the 32-bit version of the AX register called?", opts: ["RAX", "EAX", "AH", "DAX"] },
    { n: 11, q: "Which part of EAX holds the lower 8 bits?", opts: ["AH", "AX", "AL", "EL"] },
    { n: 12, q: "The mov instruction syntax is:", opts: ["mov source, destination", "mov destination, source", "mov register", "mov memory, memory"] },
    { n: 13, q: "Which register is used as the LOOP COUNTER in Intel architecture?", opts: ["EAX", "EBX", "ECX", "EDX"] },
    { n: 14, q: "Which register is the STACK POINTER?", opts: ["EBP", "ESI", "EDI", "ESP"] },
    { n: 15, q: "When assigning a char (1 byte) variable in assembly, which register should be used?", opts: ["EAX", "AX", "BL", "ECX"] },
    { n: 16, q: "Given: int dog=4, cat=3. What is in EAX after 'mov eax, dog' then 'sub eax, cat'?", opts: ["7", "3", "4", "1"] },
    { n: 17, q: "Which instruction performs a SIGNED multiplication?", opts: ["MUL", "DIV", "IMUL", "SHL"] },
    { n: 18, q: "After an idiv instruction, where is the QUOTIENT stored?", opts: ["EDX", "EBX", "EAX", "ECX"] },
    { n: 19, q: "After an idiv instruction, where is the REMAINDER stored?", opts: ["EAX", "EDX", "ECX", "EBX"] },
    { n: 20, q: "Before using idiv, why must you clear EDX with 'mov edx, 0'?", opts: ["To reset the loop counter", "To ensure the upper 32 bits of the 64-bit dividend are zero, preventing wrong results", "To free memory space", "To initialize the stack pointer"] },
    { n: 21, q: "The 64-bit register pair used in multiplication and division is:", opts: ["EAX:EBX", "ECX:EDX", "EDX:EAX", "EBX:ECX"] },
    { n: 22, q: "What does 'SAL eax, 2' do to a value of 3 in EAX?", opts: ["EAX becomes 1", "EAX becomes 6", "EAX becomes 9", "EAX becomes 12"] },
    { n: 23, q: "What is the mathematical equivalent of shifting LEFT by 1 bit?", opts: ["Divide by 2", "Multiply by 2", "Add 1", "Subtract 1"] },
    { n: 24, q: "Which shift instruction PRESERVES THE SIGN BIT when shifting right?", opts: ["SHR", "SHL", "SAR", "SAL"] },
    { n: 25, q: "Which of the following instructions can operate DIRECTLY on a memory location without using a register?", opts: ["ADD", "MOV", "IMUL", "INC"] },
  ];

  // Correct letters (A=0, B=1, C=2, D=3)
  const MC_ANSWERS = ["C", "B", "B", "C", "C", "C", "B", "B", "D", "B", "C", "B", "C", "D", "C", "D", "C", "C", "B", "B", "C", "D", "B", "C", "D"];

  /* ─────────────────────────────────────────
     PART II — 15 IDENTIFICATION
  ───────────────────────────────────────── */
  const ID_QUESTIONS = [
    "I am the instruction used for BOTH loading data from memory into a register AND storing data from a register into memory.",
    "I am the lowest level of program execution — a series of internal instruction words that physically turn hardware switches on and off.",
    "I am the Intel 32-bit register primarily used as the accumulator for arithmetic and for storing division quotients.",
    "I am the program that translates high-level language such as C or C++ into machine language.",
    "I am the 8-bit LOW portion of the AX register.",
    "I am the Intel register that serves as the LOOP COUNTER (32-bit name).",
    "I am the instruction that adds 1 to a register or memory location and is one of the few that can work directly on a memory address.",
    "I am the Intel register in EDX:EAX that holds the MOST SIGNIFICANT (upper) 32 bits of a 64-bit multiplication result.",
    "I am the shift instruction that moves bits to the RIGHT while PRESERVING the sign bit.",
    "I am the property of high-level languages that allows the same source code to compile and run on different computer architectures.",
    "I am the assembly instruction for SIGNED DIVISION — I divide the 64-bit value in EDX:EAX by a specified operand.",
    "I am the status register feature automatically updated by most instructions and used as the BASIS FOR JUMP INSTRUCTIONS.",
    "I am the Intel 32-bit register known as the DESTINATION POINTER, used in string and memory operations.",
    "I am the keyword used in Microsoft Visual Studio to embed assembly language instructions directly inside C or C++ source code.",
    "I am the data type that is 1 byte in size, treated as a one-byte integer in hardware, and requires an 8-bit register like BL for assembly operations.",
  ];

  const ID_KEYS = [
    ["mov"],
    ["microcode"],
    ["eax"],
    ["compiler"],
    ["al"],
    ["ecx"],
    ["inc"],
    ["edx"],
    ["sar"],
    ["machine independent", "machine independence", "machine-independent"],
    ["idiv"],
    ["status bits", "status flags", "flags", "status bit"],
    ["edi"],
    ["_asm", "__asm", "asm"],
    ["char"],
  ];

  const ID_OFFICIAL = [
    "MOV",
    "Microcode",
    "EAX",
    "Compiler",
    "AL",
    "ECX",
    "INC",
    "EDX",
    "SAR",
    "Machine Independent",
    "IDIV",
    "Status Bits (Flags)",
    "EDI",
    "_asm",
    "char",
  ];

  /* ─────────────────────────────────────────
     PART III — 10 ENUMERATION
  ───────────────────────────────────────── */
  const ENUM_STEMS = [
    "Enumerate the FIVE (5) special purposes of the Intel general-purpose registers (format: register — purpose).",
    "Enumerate FOUR (4) types of data movement that registers support (include whether each is common or rare).",
    "Enumerate the THREE (3) forms of the imul instruction and briefly describe what each does.",
    "Enumerate the FOUR (4) shift instructions covered in the lecture and what each one does.",
    "Enumerate the FIVE (5) hardware data types built into the CPU along with their sizes in bytes.",
    "Enumerate THREE (3) things that are part of the Assembler Programmer's Model of a Processor.",
    "Enumerate FOUR (4) arithmetic or logical instructions from the lecture table and their operations.",
    "Enumerate the THREE (3) valid forms of the mov instruction (destination-source combinations) with an example of each.",
    "Enumerate FOUR (4) software data types that do NOT exist at hardware level but are created by programming languages.",
    "Enumerate FIVE (5) of the eight Intel General-Purpose Registers (32-bit names) and their corresponding 16-bit names.",
  ];

  /* ── Enum grading keys ── */
  const ENUM_KEYS = [
    // 1 — five register purposes
    [
      ["eax", "accumulator", "arithmetic", "division"],
      ["ebx", "pointer", "data"],
      ["ecx", "counter", "loop"],
      ["edx", "i/o", "io", "input"],
      ["esp", "stack", "stack pointer"],
    ],
    // 2 — four data movement types
    [
      ["register to register", "reg to reg"],
      ["memory to register", "mem to register", "load"],
      ["register to memory", "reg to memory", "store"],
      ["memory to memory", "rare"],
    ],
    // 3 — three imul forms
    [
      ["imul memory", "multiply.*eax", "memory.*eax", "eax.*memory", "one operand"],
      ["imul reg.*memory", "reg.*memory", "two operand", "register.*memory"],
      ["imul reg.*memory.*const", "const", "constant", "three operand"],
    ],
    // 4 — four shift instructions
    [
      ["shl", "shift left"],
      ["shr", "shift right"],
      ["sal", "shift arithmetic left"],
      ["sar", "shift arithmetic right", "sign bit", "preserves"],
    ],
    // 5 — five hardware data types
    [
      ["long", "8 byte", "8-byte", "8bytes"],
      ["int", "4 byte", "4-byte", "4bytes", "integer"],
      ["short", "2 byte", "2-byte", "2bytes"],
      ["float", "4 byte", "4-byte", "floating"],
      ["double", "8 byte", "8-byte"],
    ],
    // 6 — three parts of programmer's model
    [
      ["register", "registers"],
      ["status register", "status bit", "flags"],
      ["memory"],
    ],
    // 7 — four arithmetic/logical instructions
    [
      ["add", "addition"],
      ["sub", "subtract"],
      ["mul", "imul", "multiply", "multiplication"],
      ["div", "idiv", "divide", "division", "and", "or"],
    ],
    // 8 — three forms of mov
    [
      ["register.*memory", "memory.*register", "load", "reg.*mem"],
      ["memory.*register", "register.*memory", "store", "mem.*reg"],
      ["register.*register", "reg.*reg", "copy"],
    ],
    // 9 — four software data types
    [
      ["string", "strings"],
      ["object", "objects"],
      ["boolean", "bool"],
      ["array", "multi-dimensional", "multidimensional"],
    ],
    // 10 — five of eight registers + 16-bit names
    [
      ["eax.*ax", "ax.*eax"],
      ["ebx.*bx", "bx.*ebx"],
      ["ecx.*cx", "cx.*ecx"],
      ["edx.*dx", "dx.*edx"],
      ["ebp.*bp", "bp.*ebp", "esi.*si", "si.*esi", "edi.*di", "di.*edi", "esp.*sp", "sp.*esp"],
    ],
  ];

  const ENUM_OFFICIAL = [
    "EAX — Accumulator; EBX — Pointer to data; ECX — Counter; EDX — I/O pointer; ESP — Stack pointer",
    "Register-to-Register (common); Memory-to-Register / Load (common); Register-to-Memory / Store (common); Memory-to-Memory (RARE)",
    "imul memory → multiplies EAX by memory; imul reg, memory → reg × memory; imul reg, memory, const → reg = memory × constant",
    "SHL — Shift Left (fills 0s); SHR — Shift Right (fills 0s); SAL — Shift Arithmetic Left; SAR — Shift Arithmetic Right (preserves sign bit)",
    "long — 8 bytes; int — 4 bytes; short — 2 bytes; float — 4 bytes; double — 8 bytes",
    "Registers; Status Register (flags); Memory",
    "Any four of: ADD, SUB, MUL/IMUL, DIV/IDIV, AND, OR",
    "mov reg, memory (Load); mov memory, reg (Store); mov reg, reg (Copy)",
    "Strings; Objects; Boolean; Multi-dimensional arrays",
    "EAX→AX; EBX→BX; ECX→CX; EDX→DX; EBP→BP (any 5 of the 8 pairs)",
  ];

  /* ─────────────────────────────────────────
     RENDER HELPERS
  ───────────────────────────────────────── */
  const LETTERS = ["A", "B", "C", "D"];

  function renderMC() {
    const c = document.getElementById("mc-container");
    MC_QUESTIONS.forEach(function (q) {
      const div = document.createElement("div");
      div.className = "mc-item";
      div.dataset.q = q.n;

      const stem = document.createElement("p");
      stem.className = "mc-stem";
      stem.textContent = q.n + ". " + q.q;
      div.appendChild(stem);

      const opts = document.createElement("div");
      opts.className = "mc-options";

      q.opts.forEach(function (o, i) {
        const lbl = document.createElement("label");
        const inp = document.createElement("input");
        inp.type = "radio";
        inp.name = "mc_" + q.n;
        inp.value = LETTERS[i];
        const span = document.createElement("span");
        span.textContent = LETTERS[i] + ". " + o;
        lbl.appendChild(inp);
        lbl.appendChild(span);
        opts.appendChild(lbl);
      });

      div.appendChild(opts);
      c.appendChild(div);
    });
  }

  function renderID() {
    const c = document.getElementById("id-container");
    ID_QUESTIONS.forEach(function (q, i) {
      const num = i + 1;
      const div = document.createElement("div");
      div.className = "id-item";
      div.dataset.id = num;

      const lbl = document.createElement("label");
      lbl.htmlFor = "id_" + num;
      lbl.textContent = num + ". " + q;

      const inp = document.createElement("input");
      inp.type = "text";
      inp.id = "id_" + num;
      inp.name = "id_" + num;
      inp.autocomplete = "off";
      inp.placeholder = "Your answer…";

      div.appendChild(lbl);
      div.appendChild(inp);
      c.appendChild(div);
    });
  }

  function renderEnum() {
    const c = document.getElementById("enum-container");
    ENUM_STEMS.forEach(function (stem, i) {
      const num = i + 1;
      const div = document.createElement("div");
      div.className = "enum-item";
      div.dataset.enum = num;

      const lbl = document.createElement("label");
      lbl.htmlFor = "enum_" + num;
      lbl.textContent = num + ". " + stem;

      const ta = document.createElement("textarea");
      ta.id = "enum_" + num;
      ta.name = "enum_" + num;
      ta.placeholder = "Write your answers here (one item per line)…";
      ta.rows = 6;

      div.appendChild(lbl);
      div.appendChild(ta);
      c.appendChild(div);
    });
  }

  function renderAnswerKey() {
    const c = document.getElementById("answer-key-content");

    let html = "<h3>Part I — Multiple Choice</h3><div class='key-grid'>";
    MC_QUESTIONS.forEach(function (q, i) {
      html += "<div><strong>" + q.n + ".</strong> " + MC_ANSWERS[i] + "</div>";
    });
    html += "</div>";

    html += "<h3>Part II — Identification</h3><div class='key-grid'>";
    ID_OFFICIAL.forEach(function (a, i) {
      html += "<div><strong>" + (i + 1) + ".</strong> " + a + "</div>";
    });
    html += "</div>";

    html += "<h3>Part III — Enumeration</h3><ol>";
    ENUM_OFFICIAL.forEach(function (a) {
      html += "<li>" + a + "</li>";
    });
    html += "</ol>";

    c.innerHTML = html;
  }

  /* ─────────────────────────────────────────
     GRADING
  ───────────────────────────────────────── */
  function norm(s) {
    return (s || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  function matchesAny(userNorm, keyArr) {
    return keyArr.some(function (k) {
      try { return new RegExp(k, "i").test(userNorm); } catch (e) { return userNorm.includes(k); }
    });
  }

  function gradeEnum(num, userText) {
    const lines = userText.split(/\n/).map(function (l) { return norm(l); }).filter(Boolean);
    const combined = norm(userText);
    const keyRows = ENUM_KEYS[num - 1];
    if (!keyRows) return false;
    let matched = 0;
    keyRows.forEach(function (rowKeys) {
      const hit = lines.some(function (l) { return matchesAny(l, rowKeys); }) || matchesAny(combined, rowKeys);
      if (hit) matched++;
    });
    return matched >= Math.ceil(keyRows.length * 0.5);
  }

  function clearAnswerGlows() {
    document.querySelectorAll(".mc-item, .id-item, .enum-item").forEach(function (el) {
      el.classList.remove("answer-correct", "answer-incorrect");
    });
  }

  function grade() {
    clearAnswerGlows();
    const mcRows = [], idRows = [], enumRows = [];
    let mcCorrect = 0, idCorrect = 0, enumCorrect = 0;

    MC_QUESTIONS.forEach(function (q, i) {
      const sel = document.querySelector('input[name="mc_' + q.n + '"]:checked');
      const user = sel ? sel.value : "—";
      const ok = user === MC_ANSWERS[i];
      if (ok) mcCorrect++;
      mcRows.push({ num: q.n, user: user, correct: MC_ANSWERS[i], ok: ok });
    });

    ID_QUESTIONS.forEach(function (_, i) {
      const num = i + 1;
      const inp = document.getElementById("id_" + num);
      const user = inp ? inp.value : "";
      const userNorm = norm(user);
      const ok = matchesAny(userNorm, ID_KEYS[i]);
      if (ok) idCorrect++;
      idRows.push({ num: num, user: user, official: ID_OFFICIAL[i], ok: ok });
    });

    ENUM_STEMS.forEach(function (_, i) {
      const num = i + 1;
      const ta = document.getElementById("enum_" + num);
      const user = ta ? ta.value : "";
      const ok = gradeEnum(num, user);
      if (ok) enumCorrect++;
      enumRows.push({ num: num, user: user, official: ENUM_OFFICIAL[i], ok: ok });
    });

    const totalMC = MC_QUESTIONS.length;
    const totalID = ID_QUESTIONS.length;
    const totalEnum = ENUM_STEMS.length;
    const total = totalMC + totalID + totalEnum;
    const score = mcCorrect + idCorrect + enumCorrect;

    const summary = document.getElementById("results-summary");
    summary.textContent =
      "Score: " + score + " / " + total +
      " — Part I: " + mcCorrect + "/" + totalMC +
      " | Part II: " + idCorrect + "/" + totalID +
      " | Part III: " + enumCorrect + "/" + totalEnum;

    const detail = document.getElementById("results-detail");
    let html = "<h3>Part I — Multiple Choice</h3><table><thead><tr><th>#</th><th>Your Answer</th><th>Key</th><th>Result</th></tr></thead><tbody>";
    mcRows.forEach(function (r) {
      const cls = r.ok ? "correct" : "incorrect";
      html += "<tr class='" + cls + "'><td>" + r.num + "</td><td>" + r.user + "</td><td>" + r.correct + "</td><td>" + (r.ok ? "✓" : "✗") + "</td></tr>";
    });
    html += "</tbody></table>";

    html += "<h3>Part II — Identification</h3><table><thead><tr><th>#</th><th>Your Answer</th><th>Status</th></tr></thead><tbody>";
    idRows.forEach(function (r) {
      const cls = r.ok ? "correct" : "incorrect";
      html += "<tr class='" + cls + "'><td>" + r.num + "</td><td>" + escapeHtml(r.user) + "</td><td>" + (r.ok ? "✓ Correct" : "✗ Key: " + escapeHtml(r.official)) + "</td></tr>";
    });
    html += "</tbody></table>";

    html += "<h3>Part III — Enumeration</h3><table><thead><tr><th>#</th><th>Your Answer</th><th>Expected (summary)</th></tr></thead><tbody>";
    enumRows.forEach(function (r) {
      const cls = r.ok ? "correct" : "incorrect";
      const u = r.user.length > 200 ? r.user.slice(0, 200) + "…" : r.user;
      html += "<tr class='" + cls + "'><td>" + r.num + "</td><td>" + escapeHtml(u) + "</td><td>" + escapeHtml(r.official) + "</td></tr>";
    });
    html += "</tbody></table>";
    detail.innerHTML = html;

    mcRows.forEach(function (r) {
      const b = document.querySelector('.mc-item[data-q="' + r.num + '"]');
      if (b) b.classList.add(r.ok ? "answer-correct" : "answer-incorrect");
    });
    idRows.forEach(function (r) {
      const b = document.querySelector('.id-item[data-id="' + r.num + '"]');
      if (b) b.classList.add(r.ok ? "answer-correct" : "answer-incorrect");
    });
    enumRows.forEach(function (r) {
      const b = document.querySelector('.enum-item[data-enum="' + r.num + '"]');
      if (b) b.classList.add(r.ok ? "answer-correct" : "answer-incorrect");
    });

    document.getElementById("results-panel").classList.remove("hidden");
    document.getElementById("results-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function escapeHtml(t) {
    const div = document.createElement("div");
    div.textContent = t;
    return div.innerHTML;
  }

  /* ─────────────────────────────────────────
     INIT
  ───────────────────────────────────────── */
  function init() {
    renderMC();
    renderID();
    renderEnum();
    renderAnswerKey();

    const today = new Date().toISOString().slice(0, 10);
    const dateInput = document.getElementById("exam_date");
    if (dateInput) dateInput.value = today;

    document.getElementById("exam-form").addEventListener("submit", function (e) {
      e.preventDefault();
      grade();
    });

    document.getElementById("btn-reset").addEventListener("click", function () {
      if (!confirm("Clear all answers? This cannot be undone.")) return;
      clearAnswerGlows();
      document.getElementById("exam-form").reset();
      document.getElementById("results-panel").classList.add("hidden");
      if (dateInput) dateInput.value = today;
    });

    document.getElementById("btn-print").addEventListener("click", function () {
      window.print();
    });

    document.getElementById("btn-toggle-key").addEventListener("click", function () {
      const key = document.getElementById("answer-key-content");
      const hidden = key.classList.toggle("hidden");
      this.textContent = hidden ? "Show Answer Key" : "Hide Answer Key";
    });

    document.getElementById("btn-download").addEventListener("click", function () {
      const a = document.createElement("a");
      a.href = "data:text/html;charset=utf-8," + encodeURIComponent(document.documentElement.outerHTML);
      a.download = "assembly-language-exam.html";
      a.click();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
