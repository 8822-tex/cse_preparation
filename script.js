/* =========================================================
   KRISHNA'S B.TECH MATHEMATICS SOLVER
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   1. ELEMENTS
   ========================================================= */

const themeBtn = document.getElementById("themeBtn");
const searchInput = document.getElementById("searchInput");

const moduleCards = document.querySelectorAll(".module-card");
const moduleButtons = document.querySelectorAll(".open-module");

const selectedTopic = document.getElementById("selectedTopic");
const questionBox = document.getElementById("questionBox");
const solutionArea = document.getElementById("solutionArea");

const quickTopics = document.querySelectorAll(".quick-topic");


/* =========================================================
   2. MATHEMATICS QUESTION DATABASE
   ========================================================= */

const mathData = {

    module1: {

        title: "Module I — Differential Calculus-I",

        topics: [
            {
                name: "Limit and Continuity",

                question:
                    "Evaluate lim(x→2) (x² − 4)/(x − 2).",

                concept:
                    "When direct substitution gives 0/0, factorize the expression and simplify before taking the limit.",

                formula:
                    "lim(x→a) f(x) = value obtained after simplification.",

                steps: [
                    {
                        title: "Step 1 — Write the given limit",

                        work:
                            "L = lim(x→2) (x² − 4)/(x − 2)",

                        explanation:
                            "We first write the expression exactly as given."
                    },

                    {
                        title: "Step 2 — Factorize",

                        work:
                            "x² − 4 = (x − 2)(x + 2)",

                        explanation:
                            "The numerator is a difference of two squares."
                    },

                    {
                        title: "Step 3 — Substitute the factorized form",

                        work:
                            "L = lim(x→2) [(x − 2)(x + 2)]/(x − 2)",

                        explanation:
                            "Now the common factor (x − 2) can be cancelled."
                    },

                    {
                        title: "Step 4 — Simplify",

                        work:
                            "L = lim(x→2) (x + 2)",

                        explanation:
                            "After cancellation, the expression becomes simple."
                    },

                    {
                        title: "Step 5 — Put x = 2",

                        work:
                            "L = 2 + 2 = 4",

                        explanation:
                            "Now direct substitution is possible."
                    }
                ],

                answer: "∴ The required limit is 4."
            }
        ]
    },


    /* =====================================================
       MODULE II
       ===================================================== */

    module2: {

        title: "Module II — Differential Calculus-II",

        topics: [
            {
                name: "Partial Differentiation",

                question:
                    "If z = x²y + xy², find ∂z/∂x.",

                concept:
                    "For partial differentiation with respect to x, treat y as a constant.",

                formula:
                    "∂z/∂x = differentiate z with respect to x while keeping y constant.",

                steps: [

                    {
                        title: "Step 1 — Given",

                        work:
                            "z = x²y + xy²",

                        explanation:
                            "We are asked to differentiate z partially with respect to x."
                    },

                    {
                        title: "Step 2 — Differentiate the first term",

                        work:
                            "∂(x²y)/∂x = 2xy",

                        explanation:
                            "Since y is treated as a constant, it remains outside the differentiation."
                    },

                    {
                        title: "Step 3 — Differentiate the second term",

                        work:
                            "∂(xy²)/∂x = y²",

                        explanation:
                            "y² is constant with respect to x, and derivative of x is 1."
                    },

                    {
                        title: "Step 4 — Combine",

                        work:
                            "∂z/∂x = 2xy + y²",

                        explanation:
                            "Add the partial derivatives of both terms."
                    }
                ],

                answer:
                    "∴ ∂z/∂x = 2xy + y²"
            }
        ]
    },


    /* =====================================================
       MODULE III
       ===================================================== */

    module3: {

        title: "Module III — Matrices",

        topics: [
            {
                name: "Rank of Matrix",

                question:
                    "Find the rank of A = [[1,2,3],[2,4,6],[1,1,1]].",

                concept:
                    "The rank of a matrix is the maximum number of linearly independent rows or columns. We can find it by reducing the matrix to echelon form.",

                formula:
                    "Rank(A) = number of non-zero rows in echelon form.",

                steps: [

                    {
                        title: "Step 1 — Write the matrix",

                        work:
                            "A = [ 1  2  3 ;  2  4  6 ;  1  1  1 ]",

                        explanation:
                            "We start with the given matrix."
                    },

                    {
                        title: "Step 2 — Apply row operation",

                        work:
                            "R₂ → R₂ − 2R₁",

                        explanation:
                            "This operation makes the first element of the second row zero."
                    },

                    {
                        title: "Step 3 — Calculate R₂",

                        work:
                            "R₂ = [2,4,6] − 2[1,2,3] = [0,0,0]",

                        explanation:
                            "The entire second row becomes zero."
                    },

                    {
                        title: "Step 4 — Apply another row operation",

                        work:
                            "R₃ → R₃ − R₁",

                        explanation:
                            "We simplify the third row using the first row."
                    },

                    {
                        title: "Step 5 — Calculate R₃",

                        work:
                            "R₃ = [1,1,1] − [1,2,3] = [0,−1,−2]",

                        explanation:
                            "The third row remains a non-zero row."
                    },

                    {
                        title: "Step 6 — Count non-zero rows",

                        work:
                            "Number of non-zero rows = 2",

                        explanation:
                            "There are two non-zero rows in echelon form."
                    }
                ],

                answer:
                    "∴ Rank(A) = 2"
            }
        ]
    },


    /* =====================================================
       MODULE IV
       ===================================================== */

    module4: {

        title: "Module IV — Multivariable Calculus-I",

        topics: [
            {
                name: "Double Integration",

                question:
                    "Evaluate ∫₀¹ ∫₀² (x + y) dx dy.",

                concept:
                    "In a double integral, integrate with respect to the inner variable first and then the outer variable.",

                formula:
                    "∫∫ f(x,y) dx dy = integrate with respect to x first, then y.",

                steps: [

                    {
                        title: "Step 1 — Write the integral",

                        work:
                            "I = ∫₀¹ ∫₀² (x + y) dx dy",

                        explanation:
                            "The inner integral is with respect to x."
                    },

                    {
                        title: "Step 2 — Integrate with respect to x",

                        work:
                            "∫(x + y)dx = x²/2 + xy",

                        explanation:
                            "While integrating with respect to x, y is treated as a constant."
                    },

                    {
                        title: "Step 3 — Apply x = 0 and x = 2",

                        work:
                            "[x²/2 + xy]₀² = 2 + 2y",

                        explanation:
                            "Substitute the upper and lower limits of x."
                    },

                    {
                        title: "Step 4 — Integrate with respect to y",

                        work:
                            "I = ∫₀¹ (2 + 2y)dy",

                        explanation:
                            "Now only y remains, so we perform the outer integration."
                    },

                    {
                        title: "Step 5 — Final calculation",

                        work:
                            "I = [2y + y²]₀¹ = 2 + 1 = 3",

                        explanation:
                            "Substituting the limits gives the final result."
                    }
                ],

                answer:
                    "∴ The value of the double integral is 3."
            }
        ]
    },


    /* =====================================================
       MODULE V
       ===================================================== */

    module5: {

        title: "Unit V — Vector Calculus",

        topics: [
            {
                name: "Gradient",

                question:
                    "Find the gradient of φ = x² + y² + z².",

                concept:
                    "The gradient of a scalar function gives a vector containing its partial derivatives with respect to x, y and z.",

                formula:
                    "∇φ = (∂φ/∂x)i + (∂φ/∂y)j + (∂φ/∂z)k",

                steps: [

                    {
                        title: "Step 1 — Given scalar function",

                        work:
                            "φ = x² + y² + z²",

                        explanation:
                            "We have a scalar point function."
                    },

                    {
                        title: "Step 2 — Find ∂φ/∂x",

                        work:
                            "∂φ/∂x = 2x",

                        explanation:
                            "Differentiate with respect to x while keeping y and z constant."
                    },

                    {
                        title: "Step 3 — Find ∂φ/∂y",

                        work:
                            "∂φ/∂y = 2y",

                        explanation:
                            "Differentiate with respect to y."
                    },

                    {
                        title: "Step 4 — Find ∂φ/∂z",

                        work:
                            "∂φ/∂z = 2z",

                        explanation:
                            "Differentiate with respect to z."
                    },

                    {
                        title: "Step 5 — Form the gradient",

                        work:
                            "∇φ = 2xi + 2yj + 2zk",

                        explanation:
                            "Combine the three partial derivatives using the gradient formula."
                    }
                ],

                answer:
                    "∴ ∇φ = 2xi + 2yj + 2zk"
            },

            {
                name: "Divergence",

                question:
                    "Find the divergence of F = xi + yj + zk.",

                concept:
                    "Divergence of a vector field measures the net outward flow from a point.",

                formula:
                    "∇·F = ∂P/∂x + ∂Q/∂y + ∂R/∂z",

                steps: [

                    {
                        title: "Step 1 — Identify P, Q and R",

                        work:
                            "P = x,   Q = y,   R = z",

                        explanation:
                            "Write the vector field in the form F = Pi + Qj + Rk."
                    },

                    {
                        title: "Step 2 — Differentiate P",

                        work:
                            "∂P/∂x = ∂x/∂x = 1",

                        explanation:
                            "The derivative of x with respect to x is 1."
                    },

                    {
                        title: "Step 3 — Differentiate Q",

                        work:
                            "∂Q/∂y = ∂y/∂y = 1",

                        explanation:
                            "The derivative of y with respect to y is 1."
                    },

                    {
                        title: "Step 4 — Differentiate R",

                        work:
                            "∂R/∂z = ∂z/∂z = 1",

                        explanation:
                            "The derivative of z with respect to z is 1."
                    },

                    {
                        title: "Step 5 — Apply divergence formula",

                        work:
                            "∇·F = 1 + 1 + 1 = 3",

                        explanation:
                            "Add the three partial derivatives."
                    }
                ],

                answer:
                    "∴ ∇·F = 3"
            }
        ]
    }
};


/* =========================================================
   3. CURRENT STATE
   ========================================================= */

let currentModule = null;
let currentTopic = null;
let currentStep = 0;


/* =========================================================
   4. DARK / LIGHT MODE
   ========================================================= */

function loadTheme() {

    const savedTheme = localStorage.getItem("mathSolverTheme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeBtn.textContent = "☀️";

    } else {

        document.body.classList.remove("dark-mode");

        themeBtn.textContent = "🌙";
    }
}


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const darkMode =
        document.body.classList.contains("dark-mode");

    if (darkMode) {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "mathSolverTheme",
            "dark"
        );

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "mathSolverTheme",
            "light"
        );
    }
});


/* Load saved theme */

loadTheme();


/* =========================================================
   5. MODULE BUTTONS
   ========================================================= */

moduleButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const moduleId =
            button.getAttribute("data-module");

        openModule(moduleId);

    });

});


/* =========================================================
   6. OPEN MODULE
   ========================================================= */

function openModule(moduleId) {

    const module = mathData[moduleId];

    if (!module) {

        console.error(
            "Module not found:",
            moduleId
        );

        return;
    }


    currentModule = moduleId;


    selectedTopic.textContent =
        module.title;


    if (module.topics.length > 0) {

        currentTopic = module.topics[0];

        showQuestion(currentTopic);

    }


    /* Scroll to solver */

    document
        .getElementById("solverSection")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


/* =========================================================
   7. SHOW QUESTION
   ========================================================= */

function showQuestion(topic) {

    currentTopic = topic;

    currentStep = 0;


    questionBox.innerHTML = `
        <strong>${topic.name}</strong>
        <br><br>
        ${topic.question}
    `;


    showSolutionIntro(topic);
}


/* =========================================================
   8. SOLUTION INTRO
   ========================================================= */

function showSolutionIntro(topic) {

    solutionArea.innerHTML = `

        <div class="solution-content">

            <div class="solution-label">
                📖 CONCEPT
            </div>

            <h4>
                ${topic.name}
            </h4>

            <p>
                ${topic.concept}
            </p>


            <div class="formula-box">

                <strong>
                    Formula / Rule
                </strong>

                <div>
                    ${topic.formula}
                </div>

            </div>


            <button
                id="startSolutionBtn"
                class="solution-button">

                Start Step-by-Step Solution →

            </button>

        </div>
    `;


    const startButton =
        document.getElementById(
            "startSolutionBtn"
        );


    startButton.addEventListener(
        "click",
        function () {

            currentStep = 0;

            renderStep();

        }
    );
}


/* =========================================================
   9. RENDER STEP
   ========================================================= */

function renderStep() {

    if (!currentTopic) {

        return;
    }


    const steps =
        currentTopic.steps;

    const step =
        steps[currentStep];


    const progress =
        ((currentStep + 1) / steps.length) * 100;


    solutionArea.innerHTML = `

        <div class="solution-content">

            <div class="step-header">

                <span>
                    STEP ${currentStep + 1}
                    OF ${steps.length}
                </span>

                <span>
                    ${Math.round(progress)}%
                </span>

            </div>


            <div class="progress-track">

                <div
                    class="progress-fill"
                    style="width:${progress}%">
                </div>

            </div>


            <h4 class="step-title">
                ${step.title}
            </h4>


            <div class="math-work">

                ${step.work}

            </div>


            <div class="why-box">

                <strong>
                    💡 Why this step?
                </strong>

                <p>
                    ${step.explanation}
                </p>

            </div>


            <div class="step-buttons">

                <button
                    id="previousStep"
                    class="step-button secondary">

                    ← Previous

                </button>


                <button
                    id="nextStep"
                    class="step-button primary">

                    ${
                        currentStep === steps.length - 1
                        ? "Show Answer"
                        : "Next Step →"
                    }

                </button>

            </div>

        </div>
    `;


    const previousButton =
        document.getElementById(
            "previousStep"
        );

    const nextButton =
        document.getElementById(
            "nextStep"
        );


    previousButton.addEventListener(
        "click",
        previousStep
    );


    nextButton.addEventListener(
        "click",
        nextStep
    );
}


/* =========================================================
   10. PREVIOUS STEP
   ========================================================= */

function previousStep() {

    if (currentStep > 0) {

        currentStep--;

        renderStep();
    }
}


/* =========================================================
   11. NEXT STEP
   ========================================================= */

function nextStep() {

    if (
        currentStep <
        currentTopic.steps.length - 1
    ) {

        currentStep++;

        renderStep();

    } else {

        showFinalAnswer();
    }
}


/* =========================================================
   12. FINAL ANSWER
   ========================================================= */

function showFinalAnswer() {

    solutionArea.innerHTML = `

        <div class="final-answer">

            <div class="success-icon">
                ✓
            </div>

            <div class="solution-label">
                FINAL ANSWER
            </div>

            <h3>
                ${currentTopic.answer}
            </h3>

            <p>
                You have completed the
                step-by-step solution.
            </p>


            <button
                id="restartSolution"
                class="solution-button">

                ↻ Solve Again

            </button>

        </div>
    `;


    document
        .getElementById("restartSolution")
        .addEventListener(
            "click",
            function () {

                currentStep = 0;

                renderStep();

            }
        );
}


/* =========================================================
   13. SEARCH SYSTEM
   ========================================================= */

searchInput.addEventListener(
    "input",
    function () {

        const searchTerm =
            searchInput.value
                .toLowerCase()
                .trim();


        moduleCards.forEach(function (card) {

            const text =
                card.textContent.toLowerCase();


            if (
                searchTerm === "" ||
                text.includes(searchTerm)
            ) {

                card.classList.remove(
                    "hidden"
                );

            } else {

                card.classList.add(
                    "hidden"
                );
            }

        });

    }
);


/* =========================================================
   14. QUICK TOPICS
   ========================================================= */

quickTopics.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const topicText =
                button.textContent
                    .toLowerCase();


            let foundTopic = null;
            let foundModule = null;


            /* Search every module */

            Object.keys(mathData).forEach(
                function (moduleId) {

                    const module =
                        mathData[moduleId];


                    module.topics.forEach(
                        function (topic) {

                            const name =
                                topic.name
                                    .toLowerCase();


                            if (
                                topicText.includes(
                                    name.split(" ")[0]
                                )
                            ) {

                                foundTopic =
                                    topic;

                                foundModule =
                                    moduleId;
                            }

                        }
                    );

                }
            );


            if (
                foundTopic &&
                foundModule
            ) {

                currentModule =
                    foundModule;

                selectedTopic.textContent =
                    mathData[foundModule].title;

                showQuestion(foundTopic);


                document
                    .getElementById(
                        "solverSection"
                    )
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            } else {

                /* If topic is not in database yet */

                selectedTopic.textContent =
                    "Topic selected";

                questionBox.innerHTML = `
                    <strong>
                        ${button.textContent}
                    </strong>
                    <br><br>
                    More questions for this
                    topic will be added soon.
                `;

                solutionArea.innerHTML = `

                    <div class="solution-placeholder">

                        <span>🚧</span>

                        <h4>
                            Question bank coming soon
                        </h4>

                        <p>
                            We will add more
                            step-by-step questions
                            to this topic.
                        </p>

                    </div>
                `;

            }

        }
    );

});


/* =========================================================
   15. ADD SOLVER-SPECIFIC STYLES
   ========================================================= */

const dynamicStyles =
    document.createElement("style");


dynamicStyles.textContent = `

    .solution-content {
        width: 100%;
    }


    .solution-label {
        color: var(--primary);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 1px;
        margin-bottom: 8px;
    }


    .solution-content h4 {
        font-size: 18px;
        margin-bottom: 10px;
    }


    .solution-content > p {
        color: var(--muted);
        font-size: 13px;
        line-height: 1.65;
    }


    .formula-box {
        margin-top: 16px;
        padding: 14px;

        background: var(--soft);

        border-left: 4px solid var(--primary);

        border-radius: 10px;

        color: var(--text);

        font-size: 13px;
        line-height: 1.6;
    }


    .formula-box strong {
        display: block;

        color: var(--primary);

        margin-bottom: 5px;

        font-size: 11px;
    }


    .solution-button {
        width: 100%;

        margin-top: 18px;

        padding: 13px 15px;

        background: var(--primary);

        color: white;

        border-radius: 11px;

        font-size: 13px;
        font-weight: 700;

        transition: 0.2s ease;
    }


    .solution-button:hover {
        background: var(--primary-dark);
    }


    .solution-button:active {
        transform: scale(0.98);
    }


    .step-header {
        display: flex;

        justify-content: space-between;

        color: var(--primary);

        font-size: 10px;
        font-weight: 800;
    }


    .progress-track {
        width: 100%;
        height: 6px;

        margin-top: 9px;

        background: var(--border);

        border-radius: 20px;

        overflow: hidden;
    }


    .progress-fill {
        height: 100%;

        background: var(--primary);

        border-radius: 20px;

        transition: width 0.3s ease;
    }


    .step-title {
        margin-top: 20px;

        font-size: 17px;
    }


    .math-work {
        margin-top: 12px;

        padding: 18px;

        background: var(--card);

        border: 1px solid var(--border);

        border-radius: 12px;

        color: var(--text);

        font-size: 15px;

        line-height: 1.8;

        font-family:
            "Times New Roman",
            serif;
    }


    .why-box {
        margin-top: 13px;

        padding: 14px;

        background: var(--soft);

        border-radius: 11px;
    }


    .why-box strong {
        display: block;

        color: var(--primary);

        font-size: 11px;

        margin-bottom: 5px;
    }


    .why-box p {
        color: var(--muted);

        font-size: 12px;

        line-height: 1.6;
    }


    .step-buttons {
        display: flex;

        gap: 9px;

        margin-top: 18px;
    }


    .step-button {
        flex: 1;

        padding: 12px;

        border-radius: 10px;

        font-size: 12px;

        font-weight: 700;

        transition: 0.2s ease;
    }


    .step-button.primary {
        background: var(--primary);

        color: white;
    }


    .step-button.secondary {
        background: var(--soft);

        color: var(--text);
    }


    .step-button:active {
        transform: scale(0.97);
    }


    .final-answer {
        min-height: 180px;

        display: flex;

        flex-direction: column;

        align-items: center;

        justify-content: center;

        text-align: center;
    }


    .success-icon {
        width: 48px;
        height: 48px;

        display: flex;

        align-items: center;
        justify-content: center;

        margin-bottom: 12px;

        background: var(--soft);

        color: var(--success);

        border-radius: 50%;

        font-size: 25px;
        font-weight: 800;
    }


    .final-answer h3 {
        margin-top: 4px;

        font-family:
            "Times New Roman",
            serif;

        font-size: 19px;

        line-height: 1.5;
    }


    .final-answer p {
        margin-top: 7px;

        color: var(--muted);

        font-size: 11px;
    }

`;


document.head.appendChild(dynamicStyles);


/* =========================================================
   16. INITIAL MESSAGE
   ========================================================= */

console.log(
    "Krishna's B.Tech Mathematics Solver loaded successfully."
);

console.log(
    "Modules available:",
    Object.keys(mathData)
);
