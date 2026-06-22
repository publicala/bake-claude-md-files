/** @type {import("prettier").Config} */
export default {
  proseWrap: "never",
  overrides: [
    {
      files: ["*.yml", "*.yaml"],
      options: {
        proseWrap: "preserve",
      },
    },
  ],
};
