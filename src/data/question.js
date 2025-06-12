const questions = [
  {
    question: "What tag is used for a line break in HTML?",
    options: ["<lb>", "<br>", "<newline>", "<break>"],
    answer: "<br>",
    explanation: "The <br> tag inserts a single line break in HTML."
  },
  {
    question: "Which CSS property changes the text color?",
    options: ["text-style", "color", "background-color", "font-size"],
    answer: "color",
    explanation: "The 'color' property sets the foreground text color in CSS."
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["# comment", "// comment", "/* comment */", "<!-- comment -->"],
    answer: "// comment",
    explanation: "Single-line comments in JavaScript start with //."
  },
  {
    question: "Which HTML element is used to embed JavaScript?",
    options: ["<script>", "<javascript>", "<js>", "<code>"],
    answer: "<script>",
    explanation: "JavaScript is embedded using the <script> tag in HTML."
  },
  {
    question: "How do you select an element with class 'btn' in CSS?",
    options: ["btn", "*btn", ".btn", "#btn"],
    answer: ".btn",
    explanation: "CSS selectors use a dot (.) before class names."
  },
  {
    question: "Which CSS property controls the size of the font?",
    options: ["text-font", "font-style", "font-size", "text-size"],
    answer: "font-size",
    explanation: "'font-size' defines the size of the text."
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["let x;", "var x;", "dim x;", "variable x;"],
    answer: "var x;",
    explanation: "'var' is the traditional keyword for declaring variables in JS."
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks Text Markup",
      "Hyper Text Markup Language",
      "Hyper Tool Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language",
    explanation: "HTML stands for Hyper Text Markup Language."
  },
  {
    question: "How do you add a background color in CSS?",
    options: ["color-background", "background-color", "color", "bgcolor"],
    answer: "background-color",
    explanation: "The 'background-color' property sets the element's background color."
  },
  {
    question: "Which JavaScript method writes output to the browser console?",
    options: ["write()", "print()", "alert()", "console.log()"],
    answer: "console.log()",
    explanation: "'console.log()' displays messages in the developer console."
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: ["src", "alt", "href", "title"],
    answer: "alt",
    explanation: "The 'alt' attribute describes the image if it fails to load."
  },
  {
    question: "What is the correct way to write a function in JavaScript?",
    options: [
      "function:myFunction() {}",
      "function myFunction() {}",
      "def myFunction() {}",
      "func myFunction() {}"
    ],
    answer: "function myFunction() {}",
    explanation: "JavaScript functions are declared using the 'function' keyword."
  },
  {
    question: "Which CSS property is used to center text?",
    options: ["text-align", "align-text", "center-text", "font-align"],
    answer: "text-align",
    explanation: "'text-align: center;' centers the text horizontally."
  },
  {
    question: "How do you write 'Hello World' in an alert box in JavaScript?",
    options: [
      "msgBox('Hello World')",
      "msg('Hello World')",
      "alert('Hello World')",
      "alertBox('Hello World')"
    ],
    answer: "alert('Hello World')",
    explanation: "'alert()' pops up a message box in the browser."
  },
  {
    question: "Which HTML element defines the title of a document?",
    options: ["<meta>", "<header>", "<title>", "<head>"],
    answer: "<title>",
    explanation: "The <title> tag defines the title shown on the browser tab."
  },
  {
    question: "How do you make a numbered list in HTML?",
    options: ["<li>", "<list>", "<ol>", "<ul>"],
    answer: "<ol>",
    explanation: "The <ol> tag is used for ordered (numbered) lists."
  },
  {
    question: "What is the default display value of a <div> element?",
    options: ["inline", "inline-block", "block", "none"],
    answer: "block",
    explanation: "<div> is a block-level element by default."
  },
  {
    question: "Which property controls the space between letters in CSS?",
    options: ["word-spacing", "letter-spacing", "text-indent", "line-height"],
    answer: "letter-spacing",
    explanation: "'letter-spacing' adjusts spacing between characters."
  },
  {
    question: "How do you select an element with id 'main' in CSS?",
    options: [".main", "*main", "#main", "main"],
    answer: "#main",
    explanation: "CSS uses '#' to select elements by id."
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<url>", "<href>"],
    answer: "<a>",
    explanation: "The <a> tag defines a hyperlink in HTML."
  }
];

export default questions;