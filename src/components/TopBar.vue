<template>
  <header class="toolbar">
    <div class="work-surface flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <div class="flex flex-wrap items-center gap-2">
          <h1 class="m-0 text-2xl font-850">RenalCue CKD Triage</h1>
          <span class="badge">NIH DEBUT 2026</span>
          <span class="badge">student_partner_track</span>
        </div>
        <p class="m-0 mt-1 max-w-4xl text-sm color-slate-600">
          Biomedical software MVP for community kidney-risk intake, validation and routing.
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button class="icon-btn" title="Generated evidence timestamp" type="button">
          <i data-lucide="clock-3" class="h-4 w-4"></i>
          <span>{{ updatedLabel }}</span>
        </button>
        <button class="icon-btn" title="Submission packet ready state" type="button">
          <i data-lucide="file-check-2" class="h-4 w-4"></i>
          <span>Submission Packet</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    updatedAt: { type: String, default: "" },
  },
  computed: {
    updatedLabel() {
      if (!this.updatedAt) return "Not generated";
      return this.updatedAt.replace("T", " ").replace("Z", " UTC");
    },
  },
  updated() {
    window.renalcueRuntime.refreshIcons();
  },
  mounted() {
    window.renalcueRuntime.refreshIcons();
  },
};
</script>
