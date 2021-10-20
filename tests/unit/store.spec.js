import { mutations, getters } from "@/store";

const { gameOver, makeTurn } = mutations;
const { gameFinished, winner } = getters;

describe("Store", () => {
  const Board = {
    "(0,0)": undefined,
    "(0,1)": undefined,
    "(0,2)": undefined,
    "(1,0)": undefined,
    "(1,1)": undefined,
    "(1,2)": undefined,
    "(2,0)": undefined,
    "(2,1)": undefined,
    "(2,2)": undefined,
  };

  it("makeTurn insert X and change it to O when currentPlayer is X", () => {
    const state = {
      CurrentPlayer: "X",
      Board: { ...Board },
    };
    makeTurn(state, "(0,0)");
    expect(state.Board["(0,0)"]).toBe("X");
    expect(state.CurrentPlayer).toBe("O");
  });

  it("makeTurn insert O and change it to X when currentPlayer is O", () => {
    const state = {
      CurrentPlayer: "O",
      Board: { ...Board },
    };
    makeTurn(state, "(0,1)");
    expect(state.Board["(0,1)"]).toBe("O");
    expect(state.CurrentPlayer).toBe("X");
  });

  it("makeTurn does nothing when cell is occupied", () => {
    const state = {
      CurrentPlayer: "O",
      Board: { ...Board, "(2,2)": "X" },
    };
    makeTurn(state, "(2,2)");
    expect(state.Board["(2,2)"]).toBe("X");
    expect(state.CurrentPlayer).toBe("O");
  });

  it("gameOver clears board and set currentPlayer X", () => {
    const state = {
      CurrentPlayer: "O",
      Board: { ...Board, "(2,2)": "X" },
    };
    gameOver(state);
    expect(state.Board).toStrictEqual(Board);
    expect(state.CurrentPlayer).toBe("X");
  });

  it("gameFinished returns false when board is empty", () => {
    const state = {
      Board: { ...Board },
    };
    expect(gameFinished(state)).toBe(false);
  });

  const testData = [
    { ...Board, "(0,0)": "X", "(0,1)": "X", "(0,2)": "X" },
    { ...Board, "(1,0)": "X", "(1,1)": "X", "(1,2)": "X" },
    { ...Board, "(2,0)": "X", "(2,1)": "X", "(2,2)": "X" },
  ];
  for (const testBoard of testData) {
    it(`gameFinished returns true when board is ${JSON.stringify(
      testBoard
    )}`, () => {
      const state = {
        Board: testBoard,
      };
      expect(gameFinished(state)).toBe(true);
    });
  }
});
