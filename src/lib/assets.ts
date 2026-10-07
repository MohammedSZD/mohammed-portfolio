import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Build-time check for files under /public. Lets pages render a designed
 * placeholder until a real screenshot (or the CV) is dropped in.
 */
export function publicFileExists(publicPath: string): boolean {
  if (!publicPath.startsWith("/") || publicPath.includes("..")) return false;
  return existsSync(path.join(process.cwd(), "public", publicPath));
}
