// lib/data.js
import { Section } from '../../models/section';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data/data.json');

let data: Section[] | null = null;

export function readData(): Section[] {
  if (data === null) {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    data = JSON.parse(fileContents).sections;
  }
  return data!;
}
