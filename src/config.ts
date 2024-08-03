import * as core from "@actions/core";

export interface Config {}

export function getConfig(): Config {
  let config: Config = {
    // test = core.getInput("test")
  };
  return config;
}
