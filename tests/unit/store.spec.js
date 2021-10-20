import { mutations, getters } from "@/store";

const { gameOver, makeTurn } = mutations;
const { gameFinished, winner } = getters;

describe("Store", () => {
  it("makeTurn insert X and change it to O when currentPlayer is X", () => {
    const state = {
      CurrentPlayer: "X",
      Board: {
        "(0,0)": undefined,
        "(0,1)": undefined,
        "(0,2)": undefined,
        "(1,0)": undefined,
        "(1,1)": undefined,
        "(1,2)": undefined,
        "(2,0)": undefined,
        "(2,1)": undefined,
        "(2,2)": undefined,
      },
    };
    makeTurn(state, "(0,0)");
    expect(state.Board["(0,0)"]).toBe("X");
    expect(state.CurrentPlayer).toBe("O");
  });
});
