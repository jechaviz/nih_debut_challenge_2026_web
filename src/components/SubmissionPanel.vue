<template>
  <section class="panel p-4">
    <div class="flex items-center justify-between gap-3">
      <div>
        <h2 class="m-0 text-lg font-850">Submission Packet</h2>
        <p class="m-0 text-sm color-slate-600">{{ readiness.status }}</p>
      </div>
      <i data-lucide="shield-check" class="h-5 w-5 color-blue-700"></i>
    </div>
    <dl class="mt-4 grid gap-2">
      <div v-for="(value, key) in readiness.checks" :key="key" class="flex justify-between gap-3 border-b border-slate-200 pb-2">
        <dt class="font-750 color-slate-600">{{ label(key) }}</dt>
        <dd class="m-0 text-right">{{ value }}</dd>
      </div>
    </dl>
    <div class="mt-4 grid gap-2">
      <strong>Submission inputs</strong>
      <ul class="m-0 grid gap-2 pl-5 text-sm color-slate-700">
        <li v-for="item in readiness.submission_inputs" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    readiness: { type: Object, required: true },
  },
  methods: {
    label(value) {
      return String(value || "").replaceAll("_", " ");
    },
  },
  mounted() {
    window.renalcueRuntime.refreshIcons();
  },
};
</script>
