import { Request, Response } from "express";
import { deletePartnerBusiness } from "../business/deletePartnerBusiness";

export const deletePartner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const partnerToRemove = await deletePartnerBusiness(id);

    res
      .status(200)
      .send({
        message: "Parceiro removido",
        parceiro: `${partnerToRemove.getFirstname()} ${partnerToRemove.getLastname()}`,
      });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
