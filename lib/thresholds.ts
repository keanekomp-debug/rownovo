export function getStatus(type: string, value: number) {
  switch (type) {
    case "ph":
      if (value < 5.5 || value > 9) return "danger";
      if (value < 6.5 || value > 8.5) return "warning";
      return "good";

    case "temperature":
      if (value > 25) return "danger";
      if (value >= 20) return "warning";
      return "good";

    case "dissolvedOxygen":
      if (value < 5) return "danger";
      if (value <= 8) return "warning";
      return "good";

    case "conductivity":
      if (value > 1000) return "danger";
      if (value >= 500) return "warning";
      return "good";

    case "turbidity":
      if (value > 25) return "danger";
      if (value >= 5) return "warning";
      return "good";

    case "orp":
      if (value < 50) return "danger";
      if (value <= 150) return "warning";
      return "good";

    default:
      return "good";
  }
}
