import type { Conversation } from "../../types/conversation";

interface Props {
  conversation: Conversation;
  isSelected: boolean;
  onClick: () => void;
}

const ConversationCard = ({
  conversation,
  isSelected,
  onClick,
}: Props) => {
  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  const statusColor = {
    Open: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
    Resolved: "bg-gray-200 text-gray-700",
  };

  const sentimentEmoji = {
    Happy: "😊",
    Neutral: "😐",
    Angry: "😡",
  };

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border cursor-pointer p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        isSelected
          ? "border-yellow-400 bg-yellow-50 shadow-md"
          : "bg-white border-gray-200"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">

        <div className="flex items-center gap-3">

          <div className="relative">

            <img
              src={conversation.avatar}
              alt={conversation.customerName}
              className="w-12 h-12 rounded-full object-cover"
            />

            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>

          </div>

          <div>

            <h3 className="font-semibold text-gray-900">
              {conversation.customerName}
            </h3>

            <p className="text-xs text-gray-500">
              {conversation.email}
            </p>

          </div>

        </div>

        <span
          className={`px-2.5 py-1 rounded-full text-xs font-medium ${priorityColor[conversation.priority]}`}
        >
          {conversation.priority}
        </span>

      </div>

      {/* Last Message */}

      <div className="mt-4">

        <p className="text-sm text-gray-600 line-clamp-2">
          {conversation.lastMessage}
        </p>

      </div>

      {/* Footer */}

      <div className="mt-5 flex justify-between items-center">

        <div className="flex items-center gap-2 text-sm">

          <span>
            {sentimentEmoji[conversation.sentiment]}
          </span>

          <span className="text-gray-600">
            {conversation.sentiment}
          </span>

        </div>

        <span className="text-xs text-gray-500">
          ⏱ {conversation.waitingTime}
        </span>

      </div>

      <div className="mt-4 flex justify-between items-center">

        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[conversation.status]}`}
        >
          {conversation.status}
        </span>

        {conversation.unreadCount > 0 && (
          <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full font-semibold">
            {conversation.unreadCount}
          </span>
        )}

      </div>

    </div>
  );
};

export default ConversationCard;