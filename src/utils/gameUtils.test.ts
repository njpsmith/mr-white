// Write tests...

// Example
import { describe, it, expect } from "vitest";
import { assignRoles } from "./gameUtils";

describe("assignRoles", () => {
  it("assigns exactly one Mr White role", () => {
    const players = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    const result = assignRoles(players);

    const mrWhites = result.filter((player) => player.role === "MR_WHITE");

    expect(mrWhites).toHaveLength(1);
  });
});
