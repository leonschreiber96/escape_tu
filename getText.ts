import fs from "fs";

export default function getText(name: string): string {
   const text = fs.readFileSync(`./texts/${name}.txt`, "utf8");
   return text;
}