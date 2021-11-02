import { Request, Response } from "express";
import { createPartnerBusiness } from "../business/createPartnerBusiness";

export const createPartner = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, participation } = req.body;
    
    const partner = await createPartnerBusiness({firstname, lastname, participation})
    
    res.status(201).send(partner)
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
