import * as config from "./config";
import * as core from "@actions/core";

function main(): Promise<void> {
  let cfg: config.Config = config.getConfig();

  try {
    run(cfg);
  } catch (error: any) {
    core.setFailed(error.message);
  }

  return Promise.resolve();
}

async function run(cfg: config.Config): Promise<void> {
  // Implement the function here
}
