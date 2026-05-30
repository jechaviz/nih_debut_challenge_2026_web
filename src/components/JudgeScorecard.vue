<template>
  <section class="panel p-4">
    <div class="flex items-center justify-between gap-3">
      <div>
        <h2 class="m-0 text-lg font-850">Internal Judge Score</h2>
        <p class="m-0 text-sm color-slate-600">Mapped to DEBUT and VentureWell criteria.</p>
      </div>
      <strong class="score">{{ scorecard.total }}/100</strong>
    </div>
    <div class="mt-4 grid gap-3">
      <div v-for="item in scorecard.criteria" :key="item.axis" class="score-row">
        <div class="flex items-start justify-between gap-3">
          <div>
            <strong>{{ item.axis }}</strong>
            <p class="m-0 text-sm color-slate-600">{{ item.evidence }}</p>
          </div>
          <span>{{ item.score }}</span>
        </div>
        <div class="bar" aria-hidden="true">
          <div :style="{ width: `${Math.min(100, item.score * 5)}%` }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    scorecard: { type: Object, required: true },
  },
};
</script>

<style scoped>
.score {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 88px;
  min-height: 42px;
  border: 1px solid #d8e0dc;
  font-size: 1.25rem;
}

.score-row {
  display: grid;
  gap: 7px;
}

.score-row span {
  font-weight: 850;
}

.bar {
  height: 8px;
  background: #e7ece9;
}

.bar div {
  height: 100%;
  background: #0f766e;
}
</style>
