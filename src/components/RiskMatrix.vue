<template>
  <section class="panel p-4">
    <div class="flex items-center justify-between gap-3">
      <div>
        <h2 class="m-0 text-lg font-850">Risk Mix</h2>
        <p class="m-0 text-sm color-slate-600">KDIGO-style CGA bands represented in the fixture set.</p>
      </div>
      <i data-lucide="activity" class="h-5 w-5 color-teal-700"></i>
    </div>
    <div class="mt-4 grid grid-cols-2 gap-2">
      <div class="risk-tile very">
        <strong>{{ summary.very_high }}</strong>
        <span>Very high</span>
      </div>
      <div class="risk-tile high">
        <strong>{{ summary.high }}</strong>
        <span>High</span>
      </div>
      <div class="risk-tile moderate">
        <strong>{{ summary.moderate }}</strong>
        <span>Moderate</span>
      </div>
      <div class="risk-tile low">
        <strong>{{ summary.low }}</strong>
        <span>Low</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    summary: { type: Object, required: true },
  },
  mounted() {
    window.renalcueRuntime.refreshIcons();
  },
};
</script>

<style scoped>
.risk-tile {
  display: grid;
  min-height: 96px;
  align-content: center;
  gap: 2px;
  border: 1px solid #d8e0dc;
  padding: 14px;
}

.risk-tile strong {
  font-size: 2rem;
}

.risk-tile span {
  color: #5b6965;
  font-size: 0.9rem;
  font-weight: 750;
}

.very { border-left: 5px solid #be123c; }
.high { border-left: 5px solid #b45309; }
.moderate { border-left: 5px solid #2563eb; }
.low { border-left: 5px solid #0f766e; }
</style>
