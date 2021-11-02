import { PartnerDatabase } from "../data/PartnerDatabase";
import { Partner } from "../model/Partner";
import { IdGenerator } from "../services/IdGenerator";

export const createPartnerBusiness = async ({
  firstname,
  lastname,
  participation,
}: any) => {
  if (!firstname || !lastname || !participation) {
    throw new Error("Preencha todos os campos corretamente");
  }

  const idGenerator = new IdGenerator();
  const partnerDabatase = new PartnerDatabase();

  const id: string = idGenerator.generateId();

  const participationSum = await partnerDabatase.getParticipation();

  if (participationSum >= 100) {
    throw new Error("Toda participação já foi dividida.");
  }

  if (participation + participationSum > 100) {
    throw new Error("Participação total ultrapassa 100%.");
  }

  const partner = new Partner(id, firstname, lastname, participation);
  await partnerDabatase.createPartner(partner);

  return partner;
};
