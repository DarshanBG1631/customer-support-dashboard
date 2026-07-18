import { useState } from "react";
import CustomerProfile from "../customer/CustomerProfile";
import type { Conversation } from "../../types/conversation";

interface Props {
  conversation: Conversation | null;
  onResolve: () => void;
  onAssign: () => void;
  onEscalate: () => void;
  onSendMessage: (text: string) => void;
}

const ConversationDetails = ({
  conversation,
  onResolve,
  onAssign,
  onEscalate,
  onSendMessage,
}: Props) => {

  const [reply, setReply] = useState("");

  if (!conversation) {
    return (
      <section className="flex items-center justify-center h-screen bg-gray-50">
        <h2 className="text-xl text-gray-500">
          Select a Conversation
        </h2>
      </section>
    );
  }

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

  return (

    <section className="flex flex-1 h-screen">

      {/* Chat Area */}

      <div className="flex flex-col flex-1 bg-white">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <div className="flex items-center gap-4">

            <div className="relative">

              <img
                src={conversation.avatar}
                alt={conversation.customerName}
                className="w-14 h-14 rounded-full"
              />

              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>

            </div>

            <div>

              <h2 className="text-2xl font-bold">
                {conversation.customerName}
              </h2>

              <p className="text-gray-500">
                {conversation.email}
              </p>

              <p className="text-sm mt-1">
                Assigned to:
                <span className="font-semibold ml-1">
                  {conversation.assignedTo || "Unassigned"}
                </span>
              </p>

            </div>

          </div>

          <div className="flex gap-2 flex-wrap">

            <span
              className={`px-3 py-1 rounded-full text-sm ${priorityColor[conversation.priority]}`}
            >
              {conversation.priority}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-sm ${statusColor[conversation.status]}`}
            >
              {conversation.status}
            </span>

            {conversation.escalated && (
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">
                🚩 Escalated
              </span>
            )}

          </div>

        </div>

        {/* Messages */}

        <div className="flex-1 overflow-y-auto bg-gray-50 p-6 space-y-4">

          {conversation.messages.map((message) => (

            <div
              key={message.id}
              className={`flex ${
                message.sender === "customer"
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              <div
                className={`max-w-md rounded-2xl px-5 py-3 shadow-sm ${
                  message.sender === "customer"
                    ? "bg-white border"
                    : "bg-yellow-400 text-white"
                }`}
              >

                <p>{message.text}</p>

                <p className="text-xs mt-2 opacity-70">
                  {message.time}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Action Buttons */}

        <div className="border-t p-4 flex gap-3 bg-white">

          <button
            onClick={onAssign}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Assign
          </button>

          <button
            onClick={onResolve}
            className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Resolve
          </button>

          <button
            onClick={onEscalate}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Escalate
          </button>

        </div>

        {/* Reply */}

        <div className="border-t p-5 bg-white">

          <div className="flex gap-3">

            <input
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your reply..."
              className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              onClick={() => {
                if (reply.trim() !== "") {
                  onSendMessage(reply);
                  setReply("");
                }
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 rounded-xl transition"
            >
              Send
            </button>

          </div>

        </div>

      </div>

      {/* Customer Profile */}

      <div className="w-80 border-l bg-white">

        <CustomerProfile conversation={conversation} />

      </div>

    </section>

  );
};

export default ConversationDetails;