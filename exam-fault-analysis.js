(function () {
  "use strict";

  const MC_QUESTIONS = [
    { n: 1, q: "Who developed the theory of symmetrical components?", opts: ["Nikola Tesla", "Charles Steinmetz", "Dr. C.L. Fortescue", "James Clerk Maxwell"] },
    { n: 2, q: "Symmetrical components resolve any unbalanced three-phase system into how many separate balanced sets?", opts: ["Two", "Three", "Four", "Five"] },
    { n: 3, q: "Which sequence component consists of three phasors that are equal in magnitude and have zero angular displacement between them?", opts: ["Positive sequence", "Negative sequence", "Zero sequence", "Neutral sequence"] },
    { n: 4, q: "The operator A, when multiplied to a phasor, rotates it by how many degrees counterclockwise?", opts: ["60°", "90°", "120°", "180°"] },
    { n: 5, q: "What is the value of A³?", opts: ["1∠120°", "1∠240°", "1∠360° = 1", "0"] },
    { n: 6, q: "Which of the following is a correct identity involving the operator A?", opts: ["1 + A + A² = 3", "1 + A + A² = 0", "A + A² = 1", "A² - A = 1"] },
    { n: 7, q: "In positive sequence components, how are the three phasors arranged?", opts: ["All in phase with each other", "90° apart in A-B-C order", "120° apart in A-B-C order", "120° apart in A-C-B order"] },
    { n: 8, q: "In negative sequence components, the phase rotation is:", opts: ["A-B-C (same as positive)", "A-C-B (reversed)", "B-A-C", "C-B-A"] },
    { n: 9, q: "The positive sequence component of Ib1 in terms of Ia1 is:", opts: ["A × Ia1", "A² × Ia1", "Ia1 / A", "3 × Ia1"] },
    { n: 10, q: "The negative sequence component of Ic2 in terms of Ia2 is:", opts: ["A × Ia2", "Ia2", "A² × Ia2", "3 × Ia2"] },
    { n: 11, q: "The zero sequence component formula Ia0 in terms of phase currents is:", opts: ["Ia0 = Ia + Ib + Ic", "Ia0 = (1/3)(Ia - Ib - Ic)", "Ia0 = (1/3)(Ia + Ib + Ic)", "Ia0 = 3(Ia + Ib + Ic)"] },
    { n: 12, q: "A fault in a power system is defined as:", opts: ["A scheduled maintenance shutdown", "An unintentional connection between conductors that normally have a voltage difference", "A planned load shedding event", "A normal voltage fluctuation in the system"] },
    { n: 13, q: "Which of the following is NOT a common cause of power system faults?", opts: ["Lightning strikes", "Insulation failure", "Scheduled transformer maintenance", "Tree branches contacting lines"] },
    { n: 14, q: "A symmetrical (balanced) fault involves:", opts: ["Only one phase grounded", "Two phases short-circuited together", "All three phases short-circuited simultaneously", "Two phases grounded"] },
    { n: 15, q: "Which sequence network is the ONLY one used in analyzing a balanced three-phase fault?", opts: ["Zero sequence network", "Negative sequence network", "Positive sequence network", "All three networks"] },
    { n: 16, q: "In the positive sequence network of an unloaded generator, the terminal voltage Va1 is:", opts: ["Va1 = Ea + Ia1Z1", "Va1 = Ea - Ia1Z1", "Va1 = Ia1Z1", "Va1 = Ea / Z1"] },
    { n: 17, q: "The negative sequence network of a generator contains:", opts: ["An internal EMF source equal to Ea", "Only the negative sequence impedance Z2, no EMF source", "Both Ea and Z2", "Only a short circuit"] },
    { n: 18, q: "The zero sequence terminal voltage of an unloaded generator is given by:", opts: ["Va0 = Ea - Ia0Z0", "Va0 = -(Z0)Ia0", "Va0 = -(3Zn + Z0)Ia0", "Va0 = 3Zn × Ia0"] },
    { n: 19, q: "In the zero sequence network, if Zn is the neutral-to-ground impedance, it appears in the sequence network as:", opts: ["Zn", "2Zn", "3Zn", "Zn/3"] },
    { n: 20, q: "Why does Zn appear as 3Zn in the zero sequence network?", opts: ["Because there are three phases contributing equally to the neutral current", "Because the impedance is multiplied by the operator A³", "Because Zn is always three times larger in zero sequence", "It is a standard approximation only"] },
    { n: 21, q: "A sequence network is best described as:", opts: ["A full three-phase circuit representation", "A single-phase equivalent circuit for one sequence only", "A delta-connected equivalent circuit", "A phasor diagram of all three sequences"] },
    { n: 22, q: "For non-contributing circuit elements such as transformers and cables, the relationship among sequence impedances is:", opts: ["Z1 > Z2 > Z0", "Z1 = Z2, Z0 is different", "Z1 = Z2 = Z0", "Z0 = 0 always"] },
    { n: 23, q: "For transmission lines, the zero sequence reactance Z0 compared to positive sequence reactance Z1 is:", opts: ["Equal to Z1", "Less than Z1 by 10-25%", "Greater than Z1 by 2 to 3.5 times", "Half the value of Z1"] },
    { n: 24, q: "For rotating machines, if Xq is not given, the negative sequence reactance X2 is taken as:", opts: ["Zero", "Equal to X1 = X''d", "Equal to Xd (synchronous reactance)", "Equal to Xd' (transient reactance)"] },
    { n: 25, q: "For rotating machines, the zero sequence reactance X0 is:", opts: ["Equal to X1", "Greater than X1 by 2 to 3.5 times", "Less than X1 by 10 to 25%", "Always zero"] },
    { n: 26, q: "Short Circuit Capacity (MVASC) is used to determine the rating of which equipment?", opts: ["Transformers only", "Circuit breakers, protective relays, and switchgear", "Transmission line conductors only", "Load centers and distribution boards"] },
    { n: 27, q: "In a Y-connected circuit with an ungrounded neutral, the zero sequence impedance seen from the terminals is:", opts: ["Zero", "Equal to Z1", "Infinite (open circuit)", "Equal to 3Z"] },
    { n: 28, q: "In a delta-connected circuit, what happens to zero sequence line currents?", opts: ["They flow freely through the delta", "They are blocked — infinite impedance to zero sequence line currents", "They are reduced by a factor of 3", "They are equal to positive sequence currents"] },
    { n: 29, q: "Can zero sequence currents circulate inside a delta winding?", opts: ["No, delta completely blocks all zero sequence currents", "Yes, zero sequence currents can circulate internally within the delta loop", "Only if the delta is grounded", "Only under symmetrical fault conditions"] },
    { n: 30, q: "In a Y-connected circuit with the neutral solidly grounded, the zero sequence network shows:", opts: ["An open circuit between neutral and reference bus", "An infinite impedance to ground", "A direct (zero impedance) connection between neutral point and reference bus", "A 3Zn impedance between neutral and reference bus"] },
    { n: 31, q: "Which transformer connection allows zero sequence current to pass from primary to secondary?", opts: ["Delta / Delta", "Ungrounded Y / Ungrounded Y", "Grounded Y / Grounded Y", "Grounded Y / Delta"] },
    { n: 32, q: "In a Grounded Y / Delta transformer (Case I), the zero sequence network on the delta side appears as:", opts: ["A short circuit to the reference bus", "An open circuit — no zero sequence current exits the delta", "An impedance of 3Zn", "The full transformer leakage impedance"] },
    { n: 33, q: "In a Delta / Delta transformer (Case V), zero sequence currents:", opts: ["Can freely pass from primary to secondary", "Cannot enter or leave externally, but can circulate inside each delta", "Are completely eliminated", "Flow only if the system is grounded"] },
    { n: 34, q: "The Thevenin impedance Zth in fault analysis represents:", opts: ["The internal resistance of the generator only", "The equivalent impedance of the entire system as seen from the fault point", "The zero sequence impedance of the network", "The line-to-ground impedance"] },
    { n: 35, q: "When series impedances in a three-phase circuit are unequal (Za ≠ Zb ≠ Zc), the voltage drop of any one sequence:", opts: ["Depends only on its own sequence current", "Is zero", "Depends on the currents of all three sequences", "Depends only on zero sequence current"] },
    { n: 36, q: "When series impedances are balanced (Za = Zb = Zc), each sequence voltage drop:", opts: ["Depends on all three sequence currents", "Produces voltage drops of like sequence only — no cross-coupling", "Doubles compared to the unbalanced case", "Becomes zero for negative and zero sequences"] },
    { n: 37, q: "Which of the following correctly describes unsymmetrical series impedances?", opts: ["Systems that are permanently unbalanced under all conditions", "Systems that are normally balanced but become unbalanced only upon occurrence of an unsymmetrical fault", "Systems with equal impedances in all three phases at all times", "Systems that only exist in delta-connected networks"] },
    { n: 38, q: "In a per-unit system, the three-phase fault current is expressed as:", opts: ["If(pu) = Vpu × Zpu", "If(pu) = Zpu / Vpu", "If(pu) = Vpu / Zpu", "If(pu) = 1 / Vpu"] },
    { n: 39, q: "The subtransient reactance X''d is specifically used in fault calculations because:", opts: ["It gives the largest impedance, resulting in the safest fault current estimate", "It gives the smallest reactance value, producing the largest (worst-case) initial fault current", "It is the easiest value to measure in the field", "It applies only to transformers, not generators"] },
    { n: 40, q: "Impedances of loads and feeders in fault analysis are:", opts: ["Always included in all three sequence networks", "Included only in the zero sequence network", "Not included in the positive and negative sequence networks", "Doubled in the zero sequence network"] },
    { n: 41, q: "A generator rated 100 MVA, 11 kV has a subtransient reactance of 0.25 pu. Assuming pre-fault voltage of 1.0 pu, what is the subtransient fault current in per-unit when a three-phase fault occurs at its terminals?", opts: ["2.5 pu", "4.0 pu", "0.25 pu", "10.0 pu"] },
    { n: 42, q: "Using the generator in Problem 1 (100 MVA, 11 kV), what is the base current in amperes?", opts: ["3,280.7 A", "5,248.6 A", "9,090.9 A", "2,624.3 A"] },
    { n: 43, q: "Using Problems 1 and 2, what is the actual subtransient fault current in amperes?", opts: ["13,122.9 A", "20,994.4 A", "26,245.8 A", "36,363.6 A"] },
    { n: 44, q: "At a 69 kV substation, the available fault current is 8 pu on a 100 MVA base. What is the available fault MVA?", opts: ["12.5 MVA", "80 MVA", "800 MVA", "8,000 MVA"] },
    { n: 45, q: "A power system has a fault duty of 500 MVA at 115 kV. What is the three-phase fault current in amperes?", opts: ["1,457.8 A", "2,510.5 A", "4,349.7 A", "7,531.6 A"] },
    { n: 46, q: "A generator rated 200 MVA, 13.8 kV operates at 1.05 pu voltage before a three-phase fault. Its subtransient reactance is X''d = 0.20 pu. What is the subtransient fault current in per-unit?", opts: ["4.0 pu", "5.25 pu", "6.0 pu", "10.5 pu"] },
    { n: 47, q: "What is the base current of a 200 MVA, 13.8 kV generator?", opts: ["6,560 A", "8,367.9 A", "14,490.8 A", "10,213.5 A"] },
    { n: 48, q: "Using Problems 6 and 7, what is the actual subtransient fault current in kA?", opts: ["43.93 kA", "52.72 kA", "75.94 kA", "60.89 kA"] },
    { n: 49, q: "The Thevenin impedance at a fault point is 0.05 pu on a 50 MVA, 34.5 kV base. Assuming 1.0 pu pre-fault voltage, what is the short circuit MVA?", opts: ["250 MVA", "500 MVA", "1,000 MVA", "2,500 MVA"] },
    { n: 50, q: "A 500 MVA, 20 kV generator has Xd'' = 0.15 pu and is operating at 1.05 pu pre-fault voltage. What is the actual subtransient fault current in kA?", opts: ["63.51 kA", "75.89 kA", "101.04 kA", "121.25 kA"] },
  ];

  const MC_ANSWERS = [
    "C", "B", "C", "C", "C", "B", "C", "B", "B", "C", "C", "B", "C", "C", "C", "B", "B", "C", "C", "A",
    "B", "C", "C", "B", "C", "B", "C", "B", "B", "C", "C", "B", "B", "B", "C", "B", "B", "C", "B", "C",
    "B", "B", "B", "C", "B", "B", "B", "A", "C", "C",
  ];

  const LETTERS = ["A", "B", "C", "D"];

  const PART_B_SOLUTIONS_HTML =
    "<p><strong>Part B — solutions</strong></p>" +
    "<p><strong>1.</strong> B — If(pu) = Vpu / X''d = 1.0 / 0.25 = 4.0 pu</p>" +
    "<p><strong>2.</strong> B — Ibase = MVA_base / (√3 × kV_base) = 100,000 / (√3 × 11) = 5,248.6 A</p>" +
    "<p><strong>3.</strong> B — If = If(pu) × Ibase = 4.0 × 5,248.6 = 20,994.4 A</p>" +
    "<p><strong>4.</strong> C — Fault MVA = If(pu) × MVA_base = 8 × 100 = 800 MVA</p>" +
    "<p><strong>5.</strong> B — If = Fault MVA / (√3 × kV) = 500,000 / (√3 × 115) = 2,510.5 A</p>" +
    "<p><strong>6.</strong> B — If(pu) = Vprefault / X''d = 1.05 / 0.20 = 5.25 pu</p>" +
    "<p><strong>7.</strong> B — Ibase = 200,000 / (√3 × 13.8) = 8,367.9 A</p>" +
    "<p><strong>8.</strong> A — If = 5.25 × 8,367.9 = 43,931.5 A ≈ 43.93 kA</p>" +
    "<p><strong>9.</strong> C — MVASC = MVA_base / Zth(pu) = 50 / 0.05 = 1,000 MVA</p>" +
    "<p><strong>10.</strong> C — If(pu) = 1.05 / 0.15 = 7.0 pu; Ibase = 500,000 / (√3 × 20) = 14,433.8 A; If ≈ 101.04 kA</p>";

  function applyMcItemGlow(qnum) {
    const idx = MC_QUESTIONS.findIndex(function (q) {
      return q.n === qnum;
    });
    if (idx < 0) return;
    const block = document.querySelector('.mc-item[data-q="' + qnum + '"]');
    if (!block) return;
    block.classList.remove("answer-correct", "answer-incorrect");
    const selected = document.querySelector('input[name="mc_' + qnum + '"]:checked');
    if (!selected) return;
    const ok = selected.value === MC_ANSWERS[idx];
    block.classList.add(ok ? "answer-correct" : "answer-incorrect");
  }

  function renderMcBlock(container, startIndex, endIndex) {
    const frag = document.createDocumentFragment();
    for (let i = startIndex; i < endIndex; i++) {
      const item = MC_QUESTIONS[i];
      const wrap = document.createElement("div");
      wrap.className = "mc-item";
      wrap.setAttribute("data-q", String(item.n));
      const stem = document.createElement("p");
      stem.className = "mc-stem";
      if (item.n <= 40) {
        stem.textContent = item.n + ". " + item.q;
      } else {
        stem.textContent = "Part B — " + (item.n - 40) + ". " + item.q;
      }
      const opts = document.createElement("div");
      opts.className = "mc-options";
      item.opts.forEach(function (text, oi) {
        const lab = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "mc_" + item.n;
        radio.value = LETTERS[oi];
        const span = document.createElement("span");
        span.textContent = LETTERS[oi] + ") " + text;
        radio.addEventListener("change", function () {
          applyMcItemGlow(item.n);
        });
        lab.appendChild(radio);
        lab.appendChild(span);
        opts.appendChild(lab);
      });
      wrap.appendChild(stem);
      wrap.appendChild(opts);
      frag.appendChild(wrap);
    }
    container.appendChild(frag);
  }

  function renderMC() {
    renderMcBlock(document.getElementById("mc-container-a"), 0, 40);
    renderMcBlock(document.getElementById("mc-container-b"), 40, 50);
  }

  function renderAnswerKey() {
    const el = document.getElementById("answer-key-content");
    const aTitle = document.createElement("p");
    aTitle.innerHTML = "<strong>Part A — Conceptual</strong>";
    const aTable = document.createElement("table");
    const aThead = document.createElement("thead");
    aThead.innerHTML = "<tr><th>No.</th><th>Ans</th><th>No.</th><th>Ans</th></tr>";
    aTable.appendChild(aThead);
    const aTbody = document.createElement("tbody");
    for (let row = 0; row < 20; row++) {
      const i = row;
      const j = row + 20;
      const tr = document.createElement("tr");
      tr.innerHTML =
        "<td>" +
        (i + 1) +
        "</td><td>" +
        MC_ANSWERS[i] +
        "</td><td>" +
        (j + 1) +
        "</td><td>" +
        MC_ANSWERS[j] +
        "</td>";
      aTbody.appendChild(tr);
    }
    aTable.appendChild(aTbody);

    const bTitle = document.createElement("p");
    bTitle.innerHTML = "<strong>Part B — Computation</strong>";
    bTitle.style.marginTop = "1.25rem";
    const bTable = document.createElement("table");
    const bThead = document.createElement("thead");
    bThead.innerHTML = "<tr><th>B #</th><th>Ans</th><th>B #</th><th>Ans</th></tr>";
    bTable.appendChild(bThead);
    const bTbody = document.createElement("tbody");
    for (let row = 0; row < 5; row++) {
      const i = 40 + row * 2;
      const j = i + 1;
      const tr = document.createElement("tr");
      tr.innerHTML =
        "<td>" +
        (i - 39) +
        "</td><td>" +
        MC_ANSWERS[i] +
        "</td><td>" +
        (j - 39) +
        "</td><td>" +
        MC_ANSWERS[j] +
        "</td>";
      bTbody.appendChild(tr);
    }
    bTable.appendChild(bTbody);

    const sol = document.createElement("div");
    sol.className = "key-enum-answers";
    sol.style.marginTop = "1rem";
    sol.innerHTML = PART_B_SOLUTIONS_HTML;

    el.innerHTML = "";
    el.appendChild(aTitle);
    el.appendChild(aTable);
    el.appendChild(bTitle);
    el.appendChild(bTable);
    el.appendChild(sol);
  }

  function clearAnswerGlows() {
    document.querySelectorAll(".mc-item.answer-correct, .mc-item.answer-incorrect").forEach(function (el) {
      el.classList.remove("answer-correct", "answer-incorrect");
    });
  }

  function grade() {
    clearAnswerGlows();

    let correct = 0;
    const rows = [];
    MC_QUESTIONS.forEach(function (item, i) {
      const name = "mc_" + item.n;
      const selected = document.querySelector('input[name="' + name + '"]:checked');
      const user = selected ? selected.value : "—";
      const key = MC_ANSWERS[i];
      const ok = user === key;
      if (ok) correct++;
      rows.push({ num: item.n, user: user, key: key, ok: ok, partB: item.n > 40 });
    });

    const summary = document.getElementById("results-summary");
    const partA = rows.slice(0, 40).filter(function (r) {
      return r.ok;
    }).length;
    const partB = rows.slice(40).filter(function (r) {
      return r.ok;
    }).length;
    summary.textContent =
      "Score: " +
      correct +
      " / 50 (Part A: " +
      partA +
      "/40; Part B: " +
      partB +
      "/10).";

    const detail = document.getElementById("results-detail");
    let html = "<h3>Part A (items 1–40)</h3><table><thead><tr><th>#</th><th>Yours</th><th>Key</th></tr></thead><tbody>";
    rows.slice(0, 40).forEach(function (r) {
      const cls = r.ok ? "correct" : "incorrect";
      html += "<tr class='" + cls + "'><td>" + r.num + "</td><td>" + r.user + "</td><td>" + r.key + "</td></tr>";
    });
    html += "</tbody></table><h3>Part B (items 1–10)</h3><table><thead><tr><th>B#</th><th>Yours</th><th>Key</th></tr></thead><tbody>";
    rows.slice(40).forEach(function (r, k) {
      const cls = r.ok ? "correct" : "incorrect";
      html += "<tr class='" + cls + "'><td>" + (k + 1) + "</td><td>" + r.user + "</td><td>" + r.key + "</td></tr>";
    });
    html += "</tbody></table>";
    detail.innerHTML = html;

    rows.forEach(function (r) {
      const block = document.querySelector('.mc-item[data-q="' + r.num + '"]');
      if (block) {
        block.classList.add(r.ok ? "answer-correct" : "answer-incorrect");
      }
    });

    document.getElementById("results-panel").classList.remove("hidden");
    document.getElementById("results-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function init() {
    renderMC();
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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
