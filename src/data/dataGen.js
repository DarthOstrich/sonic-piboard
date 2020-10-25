const fs = require("fs");
const util = require("util");
const files = fs.readdirSync("./public/samples/");

const samples = {};
files.forEach(sample => {
  const name = sample.split(".")[0];
  if (sample.split(".")[1] != "flac") {
    return;
  }
  const cat = sample.split("_")[0];
  const entry = {
    name
  };
  if (samples[cat]) {
    samples[cat].push(entry);
  } else {
    samples[cat] = [entry];
  }
});

fs.writeFile("./src/data/data.js", `export const samples = ${util.inspect(samples)}`, function(err, file) {
  if (err) throw err;
  console.log("Saved!");
});
