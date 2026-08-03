import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lessonDir = path.join(root, "lessons");
const referenceDir = path.join(root, "reference");
const lessonFiles = fs.readdirSync(lessonDir).filter((file) => file.endsWith(".html")).sort();
const referenceFiles = fs.readdirSync(referenceDir).filter((file) => file.endsWith(".html")).sort();
const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

assert(lessonFiles.length === 67, `Expected 67 lesson files; found ${lessonFiles.length}`);
const lessonIds = lessonFiles.map((file) => Number(file.match(/^(\d{4})-/)?.[1]));
assert(lessonIds.every((id, index) => id === index + 1), `Lesson IDs are not sequential: ${lessonIds.join(", ")}`);

const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "assets", "progress-data.js"), "utf8"), context);
const course = context.window.REASONING_COURSE;
const tracked = course.phases.flatMap((phase) => phase.lessons);
assert(course.phases.length === 10, `Expected 10 phases; found ${course.phases.length}`);
assert(tracked.length === 67, `Expected 67 tracked lessons; found ${tracked.length}`);
assert(tracked.every((lesson) => lesson.available), "Every authored lesson should be available");
for (const lesson of tracked) {
  assert(fs.existsSync(path.join(root, lesson.href)), `Tracked lesson is missing: ${lesson.href}`);
}

function checkHtml(relativeFile) {
  const absoluteFile = path.join(root, relativeFile);
  const html = fs.readFileSync(absoluteFile, "utf8");
  assert(/<!doctype html>/i.test(html), `${relativeFile}: missing doctype`);
  assert(/<meta name="viewport"/.test(html), `${relativeFile}: missing viewport`);
  assert(/Authored by: Abineet Singh \| August 2026/.test(html), `${relativeFile}: missing authorship`);

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|data:|#)/.test(target)) continue;
    const cleanTarget = target.split("#")[0].split("?")[0];
    const resolved = path.resolve(path.dirname(absoluteFile), cleanTarget);
    assert(fs.existsSync(resolved), `${relativeFile}: broken local link ${target}`);
  }

  for (const match of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      new Function(match[1]);
    } catch (error) {
      errors.push(`${relativeFile}: invalid inline script: ${error.message}`);
    }
  }
}

checkHtml("00-table_of_contents.html");
for (const file of lessonFiles) checkHtml(path.join("lessons", file));
for (const file of referenceFiles) checkHtml(path.join("reference", file));

for (const file of lessonFiles) {
  const html = fs.readFileSync(path.join(lessonDir, file), "utf8");
  assert(/Lesson \d+ of 67/.test(html), `${file}: lesson count is not 67`);
  assert(/Primary source/.test(html), `${file}: missing primary source`);
  assert(/Ask your teacher|ask your teacher|follow-up question/i.test(html), `${file}: missing teacher follow-up prompt`);
  assert(/progress-data\.js/.test(html) && /progress\.js/.test(html), `${file}: missing progress integration`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${lessonFiles.length} lessons, ${referenceFiles.length} references, ${tracked.length} progress entries, and all local links.`);
