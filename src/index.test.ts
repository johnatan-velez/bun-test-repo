import { test, expect, describe } from "bun:test";

describe("bun-test-repo", () => {
  test("should pass basic test", () => {
    expect(1 + 1).toBe(2);
  });

  test("should have chalk available", async () => {
    const chalk = await import("chalk");
    // Verify chalk module is loaded
    expect(chalk.default).toBeDefined();
  });

  test("should have commander available", async () => {
    const { Command } = await import("commander");
    const program = new Command();
    expect(program).toBeDefined();
  });
});
