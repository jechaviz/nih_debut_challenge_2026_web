<template>
  <div class="app-shell">
    <TopBar :updated-at="summary.generated_at" />
    <main class="work-surface grid gap-5">
      <MetricStrip :summary="summary" />
      <section class="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <ImpactPanel :impact="impact" />
        <JudgeScorecard :scorecard="scorecard" />
      </section>

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
import ImpactPanel from "./components/ImpactPanel.vue";
import JudgeScorecard from "./components/JudgeScorecard.vue";
import CaseTable from "./components/CaseTable.vue";
import RiskMatrix from "./components/RiskMatrix.vue";
import SubmissionPanel from "./components/SubmissionPanel.vue";

const runtime = window.renalcueRuntime;

export default {
  components: { TopBar, MetricStrip, ImpactPanel, JudgeScorecard, CaseTable, RiskMatrix, SubmissionPanel },
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
      impact: {
        cases_per_screening_day: 0,
        minutes_saved_per_day: 0,
        hours_saved_per_20_days: 0,
        referral_rescues_per_100: 0,
        urgent_reviews_captured_per_100: 0,
        low_resource_fit: 0,
        niddk_fit: 0,
      },
      scorecard: {
        total: 0,
        criteria: [],
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
    this.impact = await runtime.loadJson("./src/data/impact_model.json", this.impact);
    this.scorecard = await runtime.loadJson("./src/data/judge_scorecard.json", this.scorecard);
    this.$nextTick(runtime.refreshIcons);
  },
};
</script>
