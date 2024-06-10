import { SimpleSection } from '../section';

export interface GetSectionListResponseDTO {
  sections: SimpleSection[];
}

export interface SectionSubmitRequestDTO {
  sectionId: string;
  questionAnswers: {
    id: string;
    value: number;
  }[];
}
