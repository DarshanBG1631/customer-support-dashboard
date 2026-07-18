import type { Conversation } from "../../types/conversation";

interface Props {
  conversations: Conversation[];
}

const StatsCards = ({ conversations }: Props) => {

  const open = conversations.filter(
    c => c.status === "Open"
  ).length;

  const pending = conversations.filter(
    c => c.status === "Pending"
  ).length;

  const resolved = conversations.filter(
    c => c.status === "Resolved"
  ).length;

  return (
    <div className="grid grid-cols-3 gap-3 mb-5">

      <div className="bg-blue-50 rounded-xl p-3">
        <p className="text-sm text-gray-500">Open</p>
        <h2 className="text-2xl font-bold">{open}</h2>
      </div>

      <div className="bg-orange-50 rounded-xl p-3">
        <p className="text-sm text-gray-500">Pending</p>
        <h2 className="text-2xl font-bold">{pending}</h2>
      </div>

      <div className="bg-green-50 rounded-xl p-3">
        <p className="text-sm text-gray-500">Resolved</p>
        <h2 className="text-2xl font-bold">{resolved}</h2>
      </div>

    </div>
  );
};

export default StatsCards;