import "reflect-metadata";
import app from "./app";
import config from "./config";
import { AppDataSource } from "./database/connection";

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(config.port, () => {
      console.log(
        `⚡️[server]: Server running correctly at ${config.host}:${config.port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
