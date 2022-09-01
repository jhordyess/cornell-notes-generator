# Cornell Notes Generator

A simple Cornell notes generator with [React](https://reactjs.org/) .

After learning how to take the best notes, I create this.

## Info

Choose the color with the picker, but the transparence has a bug 😶.

Properties: letter paper, double-sided, 1cm of margin, portrait letter, and some predefined values.

## Online

See online: [https://jhordyess.github.io/cornell-notes-generator/](https://jhordyess.github.io/cornell-notes-generator/).

## Dockerize

Run the `docker.sh` file, it will create a new container image with the tag `jhordyess/conage` and run it; so you can visit [http://localhost](http://localhost).

```sh
bash docker.sh
```

Run for PowerShell `docker.ps1`.

```ps1
& docker.ps1
```

## Dev Info

- JavaScript library: [Meta - React](https://reactjs.org/)
- Create PDF files using React: [Diego Muracciole - React-pdf](https://react-pdf.org/)
- Color Pickers: [casesandberg - React Color](https://casesandberg.github.io/react-color/)
- Font family: [Google fonts - Alegreya Sans, designed by Juan Pablo del Peral, Huerta Tipográfica](https://fonts.google.com/specimen/Alegreya+Sans)

## Evolution from LaTeX

The original idea was started with [LaTeX](https://www.latex-project.org/) and its package [TikZ](https://www.ctan.org/pkg/pgf), see the code and example: [https://github.com/jhordyess/cornell-notes-generator-latex](https://github.com/jhordyess/cornell-notes-generator-latex)

Now uses [React](https://reactjs.org/) to have more control for: lengths, rows, columns, use portrait or landscape, view in the letter or A4 size, single-sided or double-sided, and so on.

## License

© 2022 [Jhordyess](https://github.com/jhordyess). Under the [MIT](https://choosealicense.com/licenses/mit/) license.

---

Made with 💪 by [Jhordyess](https://www.jhordyess.com/)
