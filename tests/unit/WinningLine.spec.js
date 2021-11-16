import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import WinningLine from "@/components/WinningLine.vue";

describe("WinningLine.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const winningLines = [
    [
      ["(0,0)", "(0,1)", "(0,2)"],
      [5, 5],
      [25, 5],
    ],
    [
      ["(1,0)", "(1,1)", "(1,2)"],
      [5, 15],
      [25, 15],
    ],
    [
      ["(2,0)", "(2,1)", "(2,2)"],
      [5, 25],
      [25, 25],
    ],
    [
      ["(0,0)", "(1,0)", "(2,0)"],
      [5, 5],
      [5, 25],
    ],
    [
      ["(0,1)", "(1,1)", "(2,1)"],
      [15, 5],
      [15, 25],
    ],
    [
      ["(0,2)", "(1,2)", "(2,2)"],
      [25, 5],
      [25, 25],
    ],
    [
      ["(0,0)", "(1,1)", "(2,2)"],
      [5, 5],
      [25, 25],
    ],
    [
      ["(0,2)", "(1,1)", "(2,0)"],
      [25, 5],
      [5, 25],
    ],
  ];

  for (const [winningLine, coordStart, coordEnd] of winningLines) {
    it(`line ${coordStart} - ${coordEnd} for ${winningLine}`, () => {
      const wrapper = shallowMount(WinningLine, {
        mocks: {
          $store: {
            getters: {
              winningLine: winningLine,
            },
          },
        },
        localVue,
      });
      expect(wrapper.vm.coordStart).toStrictEqual(coordStart);
      expect(wrapper.vm.coordEnd).toStrictEqual(coordEnd);
    });
  }
});
