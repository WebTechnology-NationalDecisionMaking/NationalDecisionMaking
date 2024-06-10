import prisma from '%/src/config/prisma';
import { SectionSubmitRequestDTO } from '%/src/models/dto/SectionDTO';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/AuthOption';
import { getUserByEmail } from '%/src/services/api/user/UserServerService';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Permission Denied', { status: 403 });
  }

  if (!session.user || !session.user.email) {
    return new Response('Permission Denied', { status: 403 });
  }

  const user = await getUserByEmail(session.user.email);

  if (!user) {
    return new Response('Permission Denied', { status: 403 });
  }

  const dto =
    (await request.json()) satisfies SectionSubmitRequestDTO as SectionSubmitRequestDTO;

  // save the submits
  for (const { id, value } of dto.questionAnswers) {
    // save the submit
    await prisma.submit.upsert({
      where: {
        userId_sectionId_questionId: {
          userId: user.id,
          sectionId: dto.sectionId,
          questionId: id,
        },
      },
      update: {
        value,
      },
      create: {
        value,
        questionId: id,
        sectionId: dto.sectionId,
        userId: user.id,
      },
    });
  }

  return new Response('Success', { status: 200 });
}
