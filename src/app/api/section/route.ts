import { Section } from '%/src/models/section';
import { readData } from '%/src/utils/server/dataLoader';
import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
  const reqUrl = req.url;
  const { searchParams } = new URL(reqUrl);

  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.error();
  }

  const found = readData().find((section) => section.id === id);
  if (!found) {
    return NextResponse.error();
  }

  return NextResponse.json(found satisfies Section);
}
