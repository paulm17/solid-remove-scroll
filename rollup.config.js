import withSolid from "rollup-preset-solid";

export default withSolid({
  input: "./src/index.tsx",
  targets: ["esm"],
  output: {
    globals: {
      "solid-js": "solidJs",
      "solid-js/web": "web",
      "solid-prevent-scroll": "createPreventScroll",
    },
  },
});