import { Search } from "lucide-react";
import ConversationCard from "./ConversationCard";
import AnalyticsCards from "../dashboard/AnalyticsCards";
import type { Conversation } from "../../types/conversation";

interface Props {
  conversations: Conversation[];
  selectedConversation: Conversation | null;
  setSelectedConversation: (conversation: Conversation) => void;

  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

  statusFilter: "All" | "Open" | "Pending" | "Resolved";
  setStatusFilter: React.Dispatch<
    React.SetStateAction<"All" | "Open" | "Pending" | "Resolved">
  >;
}

const ConversationList = ({
  conversations,
  selectedConversation,
  setSelectedConversation,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
}: Props) => {
  const filteredConversations = conversations.filter((conversation) => {
    const matchesSearch =
      conversation.customerName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      conversation.email
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      conversation.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <section className="w-[420px] bg-slate-50 border-r flex flex-col">

      {/* Header */}
      <div className="sticky top-0 bg-white z-10 border-b shadow-sm p-5">

        <div className="flex justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Conversations
            </h2>

            <p className="text-sm text-gray-500">
              Manage customer tickets
            </p>
          </div>

          <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-bold">
            {filteredConversations.length}
          </span>

        </div>

        {/* Analytics */}

        <div className="mt-5">
          <AnalyticsCards conversations={conversations} />
        </div>

        {/* Search */}

        <div className="relative mt-5">

          <Search
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search customer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-yellow-400"
          />

        </div>

        {/* Filters */}

        <div className="flex gap-2 mt-5 flex-wrap">

          {["All", "Open", "Pending", "Resolved"].map((status) => (

            <button
              key={status}
              onClick={() =>
                setStatusFilter(
                  status as
                    | "All"
                    | "Open"
                    | "Pending"
                    | "Resolved"
                )
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                statusFilter === status
                  ? "bg-yellow-400 text-white shadow-md"
                  : "bg-white border border-gray-200 hover:bg-yellow-50 hover:border-yellow-400"
              }`}
            >
              {status}
            </button>

          ))}

        </div>

      </div>

      {/* Conversation Cards */}

      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">

        {filteredConversations.length > 0 ? (

          filteredConversations.map((conversation) => (

            <ConversationCard
              key={conversation.id}
              conversation={conversation}
              isSelected={
                selectedConversation?.id === conversation.id
              }
              onClick={() =>
                setSelectedConversation(conversation)
              }
            />

          ))

        ) : (

          <div className="flex h-full items-center justify-center text-gray-500">
            No conversations found
          </div>

        )}

      </div>

    </section>
  );
};

export default ConversationList;