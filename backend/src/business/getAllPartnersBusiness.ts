import { PartnerDatabase } from "../data/PartnerDatabase";

export const getAllPartnersBusiness = async () => {
  const partnerDatabase = new PartnerDatabase();
  const partners = await partnerDatabase.getAllPartners();

  return partners;
};
