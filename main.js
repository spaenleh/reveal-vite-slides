import "reveal.js/dist/reveal.css";

import "reveal.js/dist/theme/white.css";

// custom theme
import "./theme/forward.scss";
// import "./theme/foil.scss";
// import "./theme/salmon.scss";
// import "./theme/custom.scss";

import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes";

const deck = new Reveal();
deck.initialize({
  hash: true,
  slideNumber: true,
  transition: "none",
  plugins: [RevealNotes],
});
