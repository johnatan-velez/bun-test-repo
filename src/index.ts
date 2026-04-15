#!/usr/bin/env bun

import chalk from "chalk";
import { Command } from "commander";

const program = new Command();

program
  .name("bun-test-repo")
  .description("Test repository for GUIDE-1949 Bun package manager support")
  .version("1.0.0");

program
  .command("greet")
  .description("Greet someone")
  .argument("<name>", "name to greet")
  .option("-c, --color <color>", "text color", "green")
  .action((name, options) => {
    const coloredName = options.color === "green"
      ? chalk.green(name)
      : chalk.blue(name);
    console.log(`Hello, ${coloredName}!`);
  });

program.parse();
