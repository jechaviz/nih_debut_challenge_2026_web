<template>
  <div class="app-shell">
    <TopBar :updated-at="summary.generated_at" />
    <main class="work-surface grid gap-5">
      <MetricStrip :summary="summary" />

      <section class="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <CaseTable :findings="summary.findings" />
        <div class="grid gap-4 content-start">
          <RiskMatrix :summary="summary" />
          <SubmissionPanel :readiness="readiness" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
const runtime = window.renalcueRuntime;

export default {
  components: {
    TopBar: Vue.defineAsyncComponent(() => load("./src/components/TopBar.vue")),
    MetricStrip: Vue.defineAsyncComponent(() => load("./src/components/MetricStrip.vue")),
    CaseTable: Vue.defineAsyncComponent(() => load("./src/components/CaseTable.vue")),
    RiskMatrix: Vue.defineAsyncComponent(() => load("./src/components/RiskMatrix.vue")),
    SubmissionPanel: Vue.defineAsyncComponent(() => load("./src/components/SubmissionPanel.vue")),
  },
  data() {
    return {
      summary: {
        generated_at: "",
        case_count: 0,
        pass_rate: 0,
        very_high: 0,
        high: 0,
        moderate: 0,
        low: 0,
        findings: [],
      },
      readiness: {
        status: "loading",
        checks: {},
        blockers: [],
        artifacts: [],
      },
    };
  },
  async mounted() {
    const fallbackSummary = {
      generated_at: "not generated",
      case_count: 0,
      pass_rate: 0,
      very_high: 0,
      high: 0,
      moderate: 0,
      low: 0,
      findings: [],
    };
    this.summary = await runtime.loadJson("./src/data/case_results.json", fallbackSummary);
    this.readiness = await runtime.loadJson("./src/data/readiness_report.json", this.readiness);
    this.$nextTick(runtime.refreshIcons);
  },
};

function load(path) {
  return window["vue3-sfc-loader"].loadModule(path, {
    moduleCache: { vue: Vue },
    async getFile(url) {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${url} ${response.status}`);
      return response.text();
    },
    addStyle(textContent) {
      const style = Object.assign(document.createElement("style"), { textContent });
      document.head.appendChild(style);
    },
  });
}
</script>
