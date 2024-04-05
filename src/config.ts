import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 4000,
  dbPort: process.env.PORTDB ? parseInt(process.env.PORTDB) : 1433,
  username: process.env.USERDB || "",
  password: process.env.PASSWORDDB || "",
  server: process.env.SERVERDB || "",
  database: process.env.DATABASE || "",
  secret: process.env.SECRET || "",
  urlDb: process.env.URLDB || "",
  host: process.env.HOST || "",
};
