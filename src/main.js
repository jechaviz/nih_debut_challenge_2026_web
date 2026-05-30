const { loadModule } = window["vue3-sfc-loader"];

const options = {
  moduleCache: { vue: Vue },
  async getFile(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${url} ${response.status}`);
    }
    return response.text();
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement("style"), { textContent });
    document.head.appendChild(style);
  },
};

const app = Vue.createApp(
  Vue.defineAsyncComponent(() => loadModule("./src/App.vue", options)),
);

app.mount("#app");
