module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F1A",
        surface: "#131929",
        surface2: "#1A2438",
        border: "#1E2D40",
        primary: "#00B4D8",
        primaryDeep: "#0077B6",
        alert: "#F4A261",
        success: "#52B788",
        danger: "#E63946",
        text: "#E8EDF5",
        muted: "#7A8BA6",
        data: "#00FFD1"
      },
      fontFamily: {
        heading: ["var(--font-space)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-mono)"]
      }
    }
  },
  plugins: []
};
