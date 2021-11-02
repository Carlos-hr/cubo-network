export class Partner {
  constructor(
    private id: string,
    private firstname: string,
    private lastname: string,
    private participation: number
  ) {}

  getId() {
    return this.id;
  }

  getFirstname() {
    return this.firstname;
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

  setFirstname(firstname: string) {
    this.firstname = firstname;
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
      partner.firstname,
      partner.lastname,
      partner.participation
    );
  }
}
