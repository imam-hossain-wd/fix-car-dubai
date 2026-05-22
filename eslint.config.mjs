import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals").filter((config) => {
    // Filter out any configuration blocks that specifically target TS files
    // and would trigger the loading of the TypeScript parser.
    if (config.files && Array.isArray(config.files)) {
      return !config.files.some((f) => f.includes(".ts") || f.includes(".tsx"));
    }
    return true;
  }),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
