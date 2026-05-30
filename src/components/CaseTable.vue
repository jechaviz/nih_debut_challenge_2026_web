<template>
  <section class="grid gap-3">
    <div class="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 class="m-0 text-lg font-850">Case Results</h2>
        <p class="m-0 text-sm color-slate-600">Synthetic CKD intake scenarios scored by the Vlang core.</p>
      </div>
      <label class="flex items-center gap-2 text-sm">
        <span class="color-slate-600">Risk filter</span>
        <select v-model="riskFilter" class="border border-slate-300 bg-white px-2 py-2">
          <option value="">All</option>
          <option value="very_high">Very high</option>
          <option value="high">High</option>
          <option value="moderate">Moderate</option>
          <option value="low">Low</option>
        </select>
      </label>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>eGFR</th>
            <th>Stages</th>
            <th>Risk</th>
            <th>Action</th>
            <th>Recommendation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filtered" :key="item.id">
            <td><strong>{{ item.id }}</strong><br><span class="text-sm color-slate-500">{{ item.age }} / {{ item.sex }}</span></td>
            <td>{{ item.egfr_ml_min_1_73m2 }}</td>
            <td>{{ item.gfr_stage }} / {{ item.albuminuria_stage }}</td>
            <td><span :class="riskClass(item.risk_band)">{{ label(item.risk_band) }}</span></td>
            <td>{{ label(item.action_key) }}</td>
            <td class="max-w-115">{{ item.recommendation }}</td>
          </tr>
          <tr v-if="filtered.length === 0">
            <td colspan="6">No cases match this filter.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    findings: { type: Array, default: () => [] },
  },
  data() {
    return { riskFilter: "" };
  },
  computed: {
    filtered() {
      if (!this.riskFilter) return this.findings;
      return this.findings.filter((item) => item.risk_band === this.riskFilter);
    },
  },
  methods: {
    label(value) {
      return String(value || "").replaceAll("_", " ");
    },
    riskClass(value) {
      return `font-850 risk-${value}`;
    },
  },
};
</script>
