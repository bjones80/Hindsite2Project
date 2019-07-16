export class ClientPassword {
  constructor(
    public id: number,
    public clientId: number,
    public employeeId: number,
    public gpsFile: string,
    public locations: string,
    public date: Date
  ) {
  }
}
