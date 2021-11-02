import { Partner } from "../model/Partner";
import { BaseDatabase } from "./BaseDatabase";

const table = "cubo_network";

export class PartnerDatabase extends BaseDatabase {
  public async createPartner(partner: Partner) {
    await BaseDatabase.connection(table).insert({
      id: partner.getId(),
      firstname: partner.getFirstname(),
      lastname: partner.getLastname(),
      participation: partner.getParticipation(),
    });
  }

  public async getAllPartners(): Promise<Partner[]> {
    try {
      const partners: Partner[] = [];
      const result = await BaseDatabase.connection(table).select("*");

      for (let partner of result) {
        partners.push(partner);
      }

      return partners;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getParticipation(): Promise<number> {
    try {
      const sum = await BaseDatabase.connection.raw(
        `SELECT SUM(participation) AS participation FROM ${table};`
      );

      const participation = Partner.toParticipationModel(sum[0][0]);

      return participation;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPartnerById(id: string): Promise<Partner> {
    try {
      const partner = await BaseDatabase.connection(table)
        .select("*")
        .where({ id });

      return Partner.toPartnerModel(partner[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async deletePartner(id: string) {
    await BaseDatabase.connection(table).delete().where({ id });
  }
}
