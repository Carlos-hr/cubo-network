import { PartnerDatabase } from "../data/PartnerDatabase";
import { Partner } from "../model/Partner";

export const deletePartnerBusiness = async ( id: string) => {
  const partnerDabatase = new PartnerDatabase();
  const partner: Partner = await partnerDabatase.getPartnerById(id);

  if (!id) {
    throw new Error("É necessário selecionar um usuário para remover");
  }
  if (!partner) {
    throw new Error("Usuário não encontrado!");
  }

  await partnerDabatase.deletePartner(id)
  return partner
};
