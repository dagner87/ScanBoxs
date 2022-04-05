export class Registro {
  public format: string;
  public text: string;
  public type: string;
  public icon: string;
  public created: Date;

  constructor(format: string, text: string) {
    this.format = format;
    this.text = text;
    this.created = new Date();
  }
}
