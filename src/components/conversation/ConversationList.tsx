import { Search } from "lucide-react";
import ConversationCard from "./ConversationCard";
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
    <section className="bg-[#F8FAFC] border-r h-screen flex flex-col">

      {/* Header */}

      <div className="p-5 bg-white border-b shadow-sm">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Conversations
          </h2>

          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
            {filteredConversations.length}
          </span>

        </div>

        {/* Search */}

        <div className="relative mt-4">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search customer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
          />

        </div>

        {/* Filters */}

        <div className="flex gap-2 mt-4 flex-wrap">

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
              className={`px-4 py-2 rounded-xl text-sm transition-all ${
                statusFilter === status
                  ? "bg-yellow-400 text-white shadow"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              {status}
            </button>

          ))}

        </div>

      </div>

      {/* Conversation List */}

      <div className="flex-1 overflow-y-auto p-4 space-y-3">

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

          <div className="flex items-center justify-center h-full text-gray-500">

            No conversations found.

          </div>

        )}

      </div>

    </section>
  );
};

export default ConversationList;