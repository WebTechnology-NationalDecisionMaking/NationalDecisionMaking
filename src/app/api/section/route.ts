import { Section } from '%/src/models/section';
import { readData } from '%/src/utils/server/dataLoader';
import { NextResponse } from 'next/server';

export function GET(
  _: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const found = readData().find((section) => section.id === params.id);
  if (!found) {
    return NextResponse.error();
  }

  return NextResponse.json(found satisfies Section);
}
