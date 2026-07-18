import type { Conversation } from "../../types/conversation";

interface Props {
  conversations: Conversation[];
}

const AnalyticsCards = ({ conversations }: Props) => {
  const total = conversations.length;

  const open = conversations.filter(
    c => c.status === "Open"
  ).length;

  const pending = conversations.filter(
    c => c.status === "Pending"
  ).length;

  const resolved = conversations.filter(
    c => c.status === "Resolved"
  ).length;

  const highPriority = conversations.filter(
    c => c.priority === "High"
  ).length;

  const escalated = conversations.filter(
    c => c.escalated
  ).length;

  const averageWait = (
    conversations.reduce((sum, c) => {
      return sum + Number(c.waitingTime.split(" ")[0]);
    }, 0) / total
  ).toFixed(0);

  return (
    <div className="grid grid-cols-4 gap-3 mb-4">

      <Card title="Customers" value={total} />

      <Card title="Open" value={open} />

      <Card title="Pending" value={pending} />

      <Card title="Resolved" value={resolved} />

      <Card title="High Priority" value={highPriority} />

      <Card title="Escalated" value={escalated} />

      <Card title="Avg Wait" value={`${averageWait} min`} />

    </div>
  );
};

interface CardProps {
  title: string;
  value: string | number;
}

const Card = ({ title, value }: CardProps) => (
  <div className="bg-white rounded-xl shadow p-4">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-2xl font-bold mt-2">{value}</h2>
  </div>
);

export default AnalyticsCards;