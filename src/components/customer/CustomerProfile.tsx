import {
  Mail,
  Clock,
  User,
  AlertTriangle,
  Smile,
  CheckCircle,
} from "lucide-react";

import type { Conversation } from "../../types/conversation";

interface Props {
  conversation: Conversation;
}

const CustomerProfile = ({ conversation }: Props) => {
  const sentimentColor = {
    Happy: "text-green-600",
    Neutral: "text-yellow-600",
    Angry: "text-red-600",
  };

  return (
    <aside className="h-full bg-white p-6 overflow-y-auto">

      <h2 className="text-xl font-bold mb-6">
        Customer Profile
      </h2>

      {/* Avatar */}

      <div className="flex flex-col items-center">

        <img
          src={conversation.avatar}
          alt={conversation.customerName}
          className="w-24 h-24 rounded-full border-4 border-yellow-300"
        />

        <h3 className="mt-4 text-lg font-semibold">
          {conversation.customerName}
        </h3>

        <p className="text-sm text-gray-500">
          Customer
        </p>

      </div>

      {/* Information */}

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <Mail className="text-yellow-500" size={20} />
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="font-medium">{conversation.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <Clock className="text-blue-500" size={20} />
          <div>
            <p className="text-xs text-gray-500">Waiting Time</p>
            <p className="font-medium">{conversation.waitingTime}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <Smile
            className={sentimentColor[conversation.sentiment]}
            size={20}
          />
          <div>
            <p className="text-xs text-gray-500">Sentiment</p>
            <p className="font-medium">
              {conversation.sentiment}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <User className="text-purple-500" size={20} />
          <div>
            <p className="text-xs text-gray-500">Assigned To</p>
            <p className="font-medium">
              {conversation.assignedTo || "Unassigned"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <AlertTriangle
            className={
              conversation.escalated
                ? "text-red-600"
                : "text-gray-400"
            }
            size={20}
          />
          <div>
            <p className="text-xs text-gray-500">
              Escalated
            </p>
            <p className="font-medium">
              {conversation.escalated ? "Yes" : "No"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <CheckCircle className="text-green-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">
              Status
            </p>
            <p className="font-medium">
              {conversation.status}
            </p>
          </div>
        </div>

      </div>

      {/* Ticket Summary */}

      <div className="mt-8 bg-yellow-50 rounded-xl p-4">

        <h4 className="font-semibold mb-3">
          Ticket Summary
        </h4>

        <div className="space-y-2 text-sm">

          <div className="flex justify-between">
            <span>Priority</span>
            <span className="font-semibold">
              {conversation.priority}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Unread</span>
            <span className="font-semibold">
              {conversation.unreadCount}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Messages</span>
            <span className="font-semibold">
              {conversation.messages.length}
            </span>
          </div>

        </div>

      </div>

    </aside>
  );
};

export default CustomerProfile;