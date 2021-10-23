import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  it("commits gameOver when button clicked", async () => {
    const mockCommit = jest.fn();
    const wrapper = shallowMount(App, {
      mocks: {
        $store: {
          commit: mockCommit,
          getters: { gameFinished: true },
        },
      },
      localVue,
    });
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(mockCommit).toHaveBeenCalledWith("gameOver");
  });

  for (const gameFinished of [true, false]) {
    it(`renders text when gameFinished=${gameFinished}`, () => {
      const wrapper = shallowMount(App, {
        mocks: {
          $store: {
            getters: { gameFinished: gameFinished },
          },
        },
        localVue,
      });
      expect(wrapper.find(".reload-text").exists()).toBe(gameFinished);
    });
  }

  it("renders winner when there is a winner", () => {
    const wrapper = shallowMount(App, {
      mocks: {
        $store: {
          getters: { gameFinished: true, winner: "X" },
        },
      },
      localVue,
    });
    expect(wrapper.find(".text-winner").text()).toBe("The winner is X!");
  });

  it("renders no winner when there is no winner", () => {
    const wrapper = shallowMount(App, {
      mocks: {
        $store: {
          getters: { gameFinished: true, winner: undefined },
        },
      },
      localVue,
    });
    expect(wrapper.find(".text-no-winner").text()).toBe("No winner :(");
  });
});
