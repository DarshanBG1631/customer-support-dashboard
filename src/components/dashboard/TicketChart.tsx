import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import type { Conversation } from "../../types/conversation";

interface Props {
  conversations: Conversation[];
}

const TicketChart = ({ conversations }: Props) => {
  const open = conversations.filter(
    c => c.status === "Open"
  ).length;

  const pending = conversations.filter(
    c => c.status === "Pending"
  ).length;

  const resolved = conversations.filter(
    c => c.status === "Resolved"
  ).length;

  const data = [
    { name: "Open", value: open },
    { name: "Pending", value: pending },
    { name: "Resolved", value: resolved },
  ];

  const COLORS = [
    "#3B82F6",
    "#F59E0B",
    "#10B981",
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 h-[350px]">
      <h2 className="text-lg font-bold mb-4">
        Ticket Status
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={90}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TicketChart;