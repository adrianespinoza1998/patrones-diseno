export class Database {
  private static instance: Database;
  private numberOfConnections: number;

  private constructor() {
    this.numberOfConnections = 0;
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public checkConnection(): void {
    this.numberOfConnections++;
    console.log(
      `Trying database connection in attemp number: ${this.numberOfConnections}`
    );
  }
}
