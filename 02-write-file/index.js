const fs = require("fs");
const path = require("path");
const { stdout, stdin } = require("process");

const writeStream = fs.createWriteStream(
  path.join(__dirname, "text-write.txt")
);

stdout.write("Hi, enter your text:  .Or write: exit");
process.on("exit", () => stdout.write("\nGood Bye!"));
process.on("SIGINT", () => process.exit());

stdin.on("data", (data) => {
  if (data.toString().trim() === "exit") {
    process.exit();
  }
  writeStream.write(data);
});
