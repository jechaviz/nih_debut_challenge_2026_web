window.renalcueRuntime = {
  async loadJson(path, fallback) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) return fallback;
      return await response.json();
    } catch (error) {
      return fallback;
    }
  },
  refreshIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  },
};
