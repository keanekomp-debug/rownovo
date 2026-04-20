"use client";

import { useState } from "react";
import data from "@/data/bom.json";

export default function BOMTable() {
  const [filter, setFilter] = useState("All");

  const items = data.items.filter(
    (i) => filter === "All" || i.category === filter
  );

  const total = items.reduce((sum, i) => sum + i.unit * i.qty, 0);

  return (
    <div>
      <div className="flex gap-3 mb-4">
        {["All", "Electrical", "Mechanical", "3D Printed"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className="px-3 py-1 border border-border">
            {f}
          </button>
        ))}
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-muted">
            <th>Component</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Unit</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i, idx) => (
            <tr key={idx} className="border-t border-border">
              <td>{i.component}</td>
              <td>{i.name}</td>
              <td>{i.qty}</td>
              <td>${i.unit}</td>
              <td>${i.unit * i.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right font-bold text-primary">
        TOTAL: ${total}
      </div>
    </div>
  );
}
