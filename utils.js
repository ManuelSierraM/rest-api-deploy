/* eslint-disable quotes */
/* eslint-disable semi */
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

export const readJSON = (path) => require(path);
