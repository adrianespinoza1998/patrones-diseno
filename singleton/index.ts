import { Database } from "./Database";

const database = Database.getInstance();

database.checkConnection();

const database2 = Database.getInstance();

database2.checkConnection();
