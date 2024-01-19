// @ts-nocheck
import { type Options } from "rehype-pretty-code";
import vercel from "./vercel.json";
export const rehypePrettyCodeOptions: Partial<Options> = {
  // use a prepackaged theme
  theme: JSON.parse(vercel),
  // theme: "tokyonight",
  // or import a custom theme
  // theme: JSON.parse(dark),
};
