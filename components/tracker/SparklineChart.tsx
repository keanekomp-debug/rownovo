"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts";

export default function SparklineChart({ data }: any) {
  return (
    <div className="h-20">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#00FFD1" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
