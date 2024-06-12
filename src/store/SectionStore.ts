import { makeAutoObservable } from 'mobx';
import { RefObject } from 'react';
import { Section } from '../models/section';

export class SectionStore {
  questionRefs: Record<string, RefObject<HTMLElement>> = {};
  section: Section;

  constructor(section: Section) {
    this.section = section;
    makeAutoObservable(this);
  }

  registerQuestionRef(questionId: string, ref: RefObject<HTMLElement>) {
    this.questionRefs[questionId] = ref;

    return () => {
      delete this.questionRefs.questionId;
    };
  }

  scrollToQuestion(questionId: string) {
    const ref = this.questionRefs[questionId];

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
