export class Partner {
  constructor(
    private id: string,
    private name: string,
    private lastname: string,
    private participation: number
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getLastname() {
    return this.lastname;
  }

  getParticipation() {
    return this.participation;
  }

  setId(id: string) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setLastname(lastname: string) {
    this.lastname = lastname;
  }

  setParticipation(participation: number) {
    this.participation = participation;
  }

  static toParticipationModel(data: any) {
    return data.participation
  }

  static toPartnerModel(partner: any): Partner {
    return new Partner(
      partner.id,
      partner.name,
      partner.lastname,
      partner.participation
    );
  }
}
