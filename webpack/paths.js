/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require("path");

const paths = {};

paths.projectRoot = resolve(__dirname, "../");
paths.dist = resolve(paths.projectRoot, "dist");
