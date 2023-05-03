const path = require("path");
const fs = require("fs/promises");

const currPath = path.join(__dirname, "secret-folder");

const folderFiles = async () => {
  const files = await fs.readdir(currPath);
  files.forEach(async (item) => {
    const stat = await fs.stat(path.join(currPath, item));
    if (!stat.isDirectory()) {
      const extName = path.extname(item).substring(1);
      const fileName = path.basename(item, path.extname(item));
      const size = stat.size;
      console.log(`file name = ${fileName}; type = ${extName}; size= ${size}b`);
    }
  });
};
folderFiles();
