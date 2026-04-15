import { test, expect, describe } from "bun:test";

describe("bun-test-repo", () => {
  test("should pass basic test", () => {
    expect(1 + 1).toBe(2);
  });

  test("should have chalk available", async () => {
    const chalk = await import("chalk");
    // Chalk returns unstyled strings when stdout is not a TTY
    expect(chalk.default.green("test")).toBe("test");
  });

  test("should have commander available", async () => {
    const { Command } = await import("commander");
    const program = new Command();
    expect(program).toBeDefined();
  });
});
