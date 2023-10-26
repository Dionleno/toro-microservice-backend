import { clients } from ".prisma/client";

export const ClientsMock = [
  {
    id: 1,
    fullname: "Client 1",
    email: "client1@gmail.com",
    created_at: new Date(),
  },
  {
    id: 2,
    fullname: "Client 2",
    email: "client2@gmail.com",
    created_at: new Date(),
  },
] as Array<clients>;
