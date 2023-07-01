import fs from "fs";
import { parse } from "csv-parse";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const getRootDir = () => {
  let currentDir = fileURLToPath(import.meta.url);
  while (!fs.existsSync(join(currentDir, "package.json"))) {
    currentDir = dirname(currentDir);
  }
  return currentDir;
};

const __dirname = getRootDir();

export const getData = async () => {
  const records = [];
  const filePath = join(__dirname, "data/asian-recipes.csv"); // Adjust the file path to point to the root directory
  const parser = fs.createReadStream(filePath).pipe(
    parse({
      columns: true, // Treat the first row as column names
      skipEmptyLines: true, // Skip empty lines
      cast: (value, context) => {
        if (
          context.column === "ingredients" ||
          context.column === "instructions"
        ) {
          if (value) {
            const cleanedValue = value
              .replace(/^\[|\]$/g, "")
              .split("', '")
              .map((item) => item.replace(/^'|'$/g, "").trim());
            return cleanedValue;
          }
          return [];
        }
        return value;
      },
    })
  );
  for await (const record of parser) {
    records.push(record);
  }
  return records;
};
