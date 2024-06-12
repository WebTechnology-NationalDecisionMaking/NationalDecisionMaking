'use client';

import { createContext, useContext, useState } from 'react';

import { Section } from '../models/section';
import { SectionStore } from '../store/SectionStore';

const SectionContext = createContext<SectionStore | undefined>(undefined);

export const useSectionStore = (): SectionStore => {
  const store = useContext(SectionContext);

  if (!store) {
    throw new Error('useSectionStore must be used within a SectionProvider');
  }

  return store;
};

export function SectionProvider({
  children,
  section,
}: {
  children: React.ReactNode;
  section: Section;
}) {
  const [store] = useState(() => new SectionStore(section));

  return (
    <SectionContext.Provider value={store}>{children}</SectionContext.Provider>
  );
}
