"use client";

import { useEffect, useState } from "react";

export default function StatsStrip() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 300;
      if (i >= 14823) {
        i = 14823;
        clearInterval(interval);
      }
      setCount(i);
    }, 20);
  }, []);

  return (
    <div className="border-y border-border py-6 text-center">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-sm">
        <div>Buoys: 3</div>
        <div>Rivers: 2</div>
        <div>Data Today: {count}</div>
        <div>Countries: 1</div>
        <div>Datasets: 12</div>
        <div>Cost: $5,202</div>
      </div>
    </div>
  );
}
