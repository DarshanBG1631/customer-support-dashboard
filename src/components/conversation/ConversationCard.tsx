import {
  Clock3,
  Mail,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
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
    Resolved: "bg-gray-100 text-gray-700",
  };

  const sentimentEmoji = {
    Happy: "😊",
    Neutral: "😐",
    Angry: "😡",
  };

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isSelected
          ? "border-yellow-400 bg-yellow-50 shadow-lg"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="p-4">

        {/* Header */}
        <div className="flex justify-between items-start">

          <div className="flex gap-3">

            <img
              src={conversation.avatar}
              alt={conversation.customerName}
              className="w-12 h-12 rounded-full ring-2 ring-yellow-300"
            />

            <div>

              <h3 className="font-semibold text-gray-800">
                {conversation.customerName}
              </h3>

              <p className="text-xs text-gray-500 flex items-center gap-1">
                <Mail size={12} />
                {conversation.email}
              </p>

            </div>

          </div>

          <span
            className={`text-xs px-3 py-1 rounded-full font-semibold ${priorityColor[conversation.priority]}`}
          >
            {conversation.priority}
          </span>

        </div>

        {/* Last Message */}
        <p className="text-sm text-gray-600 mt-4 line-clamp-2">
          {conversation.lastMessage}
        </p>

        {/* Bottom Row */}
        <div className="flex justify-between items-center mt-5">

          <span className="flex items-center gap-1 text-sm">

            {conversation.sentiment === "Happy" && "😊"}
            {conversation.sentiment === "Neutral" && "😐"}
            {conversation.sentiment === "Angry" && "😡"}

            {conversation.sentiment}

          </span>

          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Clock3 size={13} />
            {conversation.waitingTime}
          </span>

        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">

          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[conversation.status]}`}
          >
            {conversation.status}
          </span>

          <div className="flex items-center gap-2">

            {conversation.escalated && (
              <AlertTriangle
                size={16}
                className="text-red-500"
              />
            )}

            {conversation.status === "Resolved" && (
              <CheckCircle
                size={16}
                className="text-green-600"
              />
            )}

            <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full">
              {conversation.unreadCount}
            </span>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ConversationCard;