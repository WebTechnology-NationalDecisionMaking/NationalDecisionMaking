export interface SimpleSection {
  id: string;
  title: string;
  description: string;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  type: 'value' | 'select';
  selectionList: string[];
  defaultSelection: string;
  defaultValue: number;
}

export interface Section extends SimpleSection {
  content: string;
  legalContent: string;
  questions: Question[];
}
