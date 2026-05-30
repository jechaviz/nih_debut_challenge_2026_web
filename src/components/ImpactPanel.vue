<template>
  <section class="panel p-4">
    <div class="flex items-center justify-between gap-3">
      <div>
        <h2 class="m-0 text-lg font-850">Why DEBUT Will Care</h2>
        <p class="m-0 text-sm color-slate-600">Workflow adoption, not only a calculator.</p>
      </div>
      <i data-lucide="target" class="h-5 w-5 color-teal-700"></i>
    </div>
    <div class="mt-4 grid gap-3 sm:grid-cols-2">
      <div class="impact-metric">
        <strong>{{ impact.minutes_saved_per_day }}</strong>
        <span>minutes saved per screening day</span>
      </div>
      <div class="impact-metric">
        <strong>{{ impact.hours_saved_per_20_days }}</strong>
        <span>hours returned per 20 clinic days</span>
      </div>
      <div class="impact-metric">
        <strong>{{ impact.referral_rescues_per_100 }}</strong>
        <span>referral rescues per 100 flagged cases</span>
      </div>
      <div class="impact-metric">
        <strong>{{ impact.niddk_fit }}%</strong>
        <span>NIDDK kidney-prize fit</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    impact: { type: Object, required: true },
  },
  mounted() {
    window.renalcueRuntime.refreshIcons();
  },
};
</script>

<style scoped>
.impact-metric {
  display: grid;
  gap: 3px;
  min-height: 92px;
  align-content: center;
  border: 1px solid #d8e0dc;
  padding: 13px;
}

.impact-metric strong {
  font-size: 1.85rem;
}

.impact-metric span {
  color: #5f6e6a;
  font-size: 0.9rem;
  font-weight: 720;
}
</style>
