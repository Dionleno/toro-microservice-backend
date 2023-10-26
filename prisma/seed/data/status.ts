import { status } from ".prisma/client";

export const StatusMock = [
  {
    id: 1,
    description: 'Ativo'
  },
  {
    id: 2,
    description: 'Inativo'
  },
] as Array<status>;