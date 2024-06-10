import api from '%/src/config/api';
import {
  GetSectionListResponseDTO,
  SectionSubmitRequestDTO,
} from '%/src/models/dto/SectionDTO';
import { Section, SimpleSection } from '%/src/models/section';

export async function getSectionList(): Promise<SimpleSection[]> {
  const response = (await api.get('/api/section/list'))
    .data as GetSectionListResponseDTO;

  return response.sections;
}

export async function getSection(sectionId: string): Promise<Section | null> {
  try {
    const response = (
      await api.get(`/api/section`, {
        params: {
          id: sectionId,
        },
      })
    ).data as Section;

    return response;
  } catch (error) {
    return null;
  }
}

export async function submitSection(
  sectionId: string,
  questionAnswers: { id: string; value: number }[]
) {
  await api.post('/api/section/submit', {
    sectionId,
    questionAnswers,
  } satisfies SectionSubmitRequestDTO);
}
