<template>
  <section class="grid gap-3 md:grid-cols-4" aria-label="Prototype evidence metrics">
    <div class="metric-cell">
      <span class="text-xs font-800 uppercase color-slate-500">Synthetic cases</span>
      <strong class="text-3xl">{{ summary.case_count }}</strong>
      <span class="text-sm color-slate-600">No PHI; deterministic fixtures</span>
    </div>
    <div class="metric-cell">
      <span class="text-xs font-800 uppercase color-slate-500">Expected-label pass</span>
      <strong class="text-3xl">{{ summary.pass_rate }}%</strong>
      <span class="text-sm color-slate-600">Risk band and routing checks</span>
    </div>
    <div class="metric-cell">
      <span class="text-xs font-800 uppercase color-slate-500">Escalation cases</span>
      <strong class="text-3xl risk-very_high">{{ summary.very_high }}</strong>
      <span class="text-sm color-slate-600">Very-high kidney risk</span>
    </div>
    <div class="metric-cell">
      <span class="text-xs font-800 uppercase color-slate-500">Scope</span>
      <strong class="text-xl">CKD triage</strong>
      <span class="text-sm color-slate-600">Decision support, not autonomous diagnosis</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    summary: { type: Object, required: true },
  },
};
</script>
