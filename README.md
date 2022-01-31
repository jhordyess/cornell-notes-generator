# Cornell Notes Generator

A simple Cornell notes generator with [React-pdf](https://react-pdf.org/).

After learning how to take the best notes, I create this.

## Info

Choose the color with the picker, but the transparence has a bug 😶.

Properties: letter paper, double-sided, 1cm of margin, portrait letter, and some predefined values.

## Online

See live: [https://jhordyess.github.io/cornell-notes-generator/](https://jhordyess.github.io/cornell-notes-generator/).

## Dockerfile

Use the Dockerfile to build, map port 80 to port 80, run the container, and visit [http://localhost/cornell-notes-generator/](http://localhost/cornell-notes-generator/).

## Dev Info

- JavaScript library: [Meta - React](https://reactjs.org/)
- Create PDF files using React: [Diego Muracciole - React-pdf](https://react-pdf.org/)
- Color Pickers: [casesandberg - React Color](https://casesandberg.github.io/react-color/)
- Font family: [Google fonts - Alegreya Sans, designed by Juan Pablo del Peral, Huerta Tipográfica](https://fonts.google.com/specimen/Alegreya+Sans)

## Evolution from LaTeX

The original idea was started with [LaTeX](https://www.latex-project.org/) and his package [TikZ](https://www.ctan.org/pkg/pgf), see the code and example: [https://github.com/jhordyess/cornell-notes-generator/tree/latex](https://github.com/jhordyess/cornell-notes-generator/tree/latex)

Now uses [React](https://reactjs.org/) to have more control for: lengths, rows, columns, use portrait or landscape, view in the letter or A4 size, single-sided or double-sided, and so on.

---

@2022 Jhordyess
