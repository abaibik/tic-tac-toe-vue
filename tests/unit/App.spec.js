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
});
