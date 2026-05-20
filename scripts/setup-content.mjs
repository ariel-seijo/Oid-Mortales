import { existsSync, copyFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const target = resolve(root, "src/app/test/_lib/questions/historia.ts");
const source = resolve(root, "src/app/test/_lib/questions/historia.example.ts");

if (!existsSync(target)) {
  copyFileSync(source, target);
  console.log("[setup-content] historia.ts creado a partir de historia.example.ts");
} else {
  console.log("[setup-content] historia.ts ya existe, no se sobrescribe");
}
