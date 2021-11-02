import { Request, Response } from "express";
import { getAllPartnersBusiness } from "../business/getAllPartnersBusiness";

export const getAllPartners = async (req: Request, res: Response) => {
  try {
    const partners = await getAllPartnersBusiness();
    
    res.status(200).send(partners)
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
