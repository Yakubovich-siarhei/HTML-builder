const { stdout } = process;
const path = require("path");
const fs = require("fs");
const { mkdir, rm, copyFile } = require("fs/promises");

const origPath = path.join(__dirname, "files");
const copyPath = path.join(__dirname, "files-copy");

const readOriginFolder = async (err, files) => {
  if (err) stdout.write(err.message);

  await rm(copyPath, { recursive: true, force: true });

  await mkdir(copyPath, { recursive: true });

  files.forEach(async (file) => {
    const originFilePath = path.join(origPath, file);
    const copyFilePath = path.join(copyPath, file);

    await copyFile(originFilePath, copyFilePath);
  });
};

fs.readdir(origPath, readOriginFolder);
