<template>
  <div class="app-shell">
    <TopBar :updated-at="summary.generated_at" />
    <main class="work-surface grid gap-5">
      <MetricStrip :summary="summary" />

      <section class="grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.85fr)]">
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
import TopBar from "./components/TopBar.vue";
import MetricStrip from "./components/MetricStrip.vue";
import CaseTable from "./components/CaseTable.vue";
import RiskMatrix from "./components/RiskMatrix.vue";
import SubmissionPanel from "./components/SubmissionPanel.vue";

const runtime = window.renalcueRuntime;

export default {
  components: { TopBar, MetricStrip, CaseTable, RiskMatrix, SubmissionPanel },
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
</script>
