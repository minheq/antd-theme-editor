const less = require("less");
const path = require("path");
const readFile = require("fs-readfile-promise");
const writeFile = require("node-fs-writefile-promise");
const fs = require("fs-extra");

const compileClasses = async () => {
  const lessInput = await readFile(
    path.resolve(__dirname, `../src/classes-override.less`),
    "utf8"
  );

  const { css } = await less.render(lessInput, {
    filename: path.resolve(__dirname, `../src/classes-override.less`)
  });

  await writeFile(
    path.resolve(__dirname, `../dist/antd-classes-override.css`),
    css
  );

  console.log("Compiled less classes");
};

const copyVariablesOverride = async () => {
  await fs.copy(
    path.resolve(__dirname, "../src/antd-theme-override.less"),
    path.resolve(__dirname, "../dist/antd-theme-override.less")
  );

  console.log("Copied antd theme override file");
};

const exportFiles = async () => {
  await copyVariablesOverride();
  await compileClasses();
};

exportFiles().then(() => console.log("Export finished"));
