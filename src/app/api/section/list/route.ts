import { GetSectionListResponseDTO } from '%/src/models/dto/SectionDTO';
import { readData } from '%/src/utils/server/dataLoader';
import { NextResponse } from 'next/server';

export function GET() {
  const sections = readData().map((section) => ({
    id: section.id,
    title: section.title,
    description: section.description,
  }));

  return NextResponse.json({
    sections,
  } satisfies GetSectionListResponseDTO);
}
