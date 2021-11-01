import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Cell from "@/components/Cell.vue";

describe("Cell.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  it("renders value from store", () => {
    const wrapper = shallowMount(Cell, {
      propsData: { coordinate: "(0,0)" },
      mocks: {
        $store: {
          state: {
            Board: { "(0,0)": "O" },
          },
          getters: { winningLine: undefined },
        },
      },
      localVue,
    });
    expect(wrapper.text()).toBe("O");
  });

  it("commits makeTurn when clicked and !gameFinished", async () => {
    const mockCommit = jest.fn();
    const wrapper = shallowMount(Cell, {
      propsData: { coordinate: "(0,0)" },
      mocks: {
        $store: {
          commit: mockCommit,
          state: {
            Board: { "(0,0)": undefined },
          },
          getters: { gameFinished: false, winningLine: undefined },
        },
      },
      localVue,
    });
    await wrapper.trigger("click");
    expect(mockCommit).toHaveBeenCalledWith("makeTurn", "(0,0)");
  });

  it("doesn't commit makeTurn when clicked and gameFinished", async () => {
    const mockCommit = jest.fn();
    const wrapper = shallowMount(Cell, {
      propsData: { coordinate: "(0,0)" },
      mocks: {
        $store: {
          commit: mockCommit,
          state: {
            Board: { "(0,0)": undefined },
          },
          getters: { gameFinished: true, winningLine: undefined },
        },
      },
      localVue,
    });
    await wrapper.trigger("click");
    expect(mockCommit).not.toHaveBeenCalled();
  });

  it("className contains cell when not filled", () => {
    const wrapper = shallowMount(Cell, {
      propsData: { coordinate: "(0,0)" },
      mocks: {
        $store: {
          state: {
            Board: { "(0,0)": undefined },
          },
          getters: { winningLine: undefined },
        },
      },
      localVue,
    });
    expect(wrapper.classes()).toContain("cell");
  });

  it("className contains cell-filled when filled", () => {
    const wrapper = shallowMount(Cell, {
      propsData: { coordinate: "(0,0)" },
      mocks: {
        $store: {
          state: {
            Board: { "(0,0)": "X" },
          },
          getters: { winningLine: undefined },
        },
      },
      localVue,
    });
    expect(wrapper.classes()).toContain("cell-filled");
  });

  it("className contains cell-winning when winning", () => {
    const wrapper = shallowMount(Cell, {
      propsData: { coordinate: "(0,0)" },
      mocks: {
        $store: {
          state: {
            Board: { "(0,0)": "X" },
          },
          getters: { winningLine: ["(0,0)"] },
        },
      },
      localVue,
    });
    expect(wrapper.classes()).toContain("cell-winning");
  });
});
