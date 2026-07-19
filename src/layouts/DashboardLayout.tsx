import { useState } from "react";
import { toast } from "react-toastify";

import Sidebar from "../components/sidebar/Sidebar";
import TopNavbar from "../components/navbar/TopNavbar";
import ConversationList from "../components/conversation/ConversationList";
import ConversationDetails from "../components/conversation/ConversationDetails";

import { conversations } from "../mock/conversations";
import type { Conversation } from "../types/conversation";

const DashboardLayout = () => {
  // All conversations
  const [conversationList, setConversationList] =
    useState<Conversation[]>(conversations);

  // Selected conversation
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(conversationList[0]);

  const [searchQuery, setSearchQuery] = useState("");

  const [statusFilter, setStatusFilter] = useState<
    "All" | "Open" | "Pending" | "Resolved"
  >("All");

  // Resolve conversation
  const handleResolveConversation = () => {
    if (!selectedConversation) return;

    const updated = conversationList.map((conversation) =>
      conversation.id === selectedConversation.id
        ? {
            ...conversation,
            status: "Resolved" as const,
          }
        : conversation
    );

    setConversationList(updated);

    setSelectedConversation({
      ...selectedConversation,
      status: "Resolved",
    });

    toast.success("Conversation resolved successfully");
  };

  // Assign conversation
  const handleAssignConversation = () => {
    if (!selectedConversation) return;

    const updated = conversationList.map((conversation) =>
      conversation.id === selectedConversation.id
        ? {
            ...conversation,
            assignedTo: "Darshan BG",
          }
        : conversation
    );

    setConversationList(updated);

    setSelectedConversation({
      ...selectedConversation,
      assignedTo: "Darshan BG",
    });

    toast.success("Conversation assigned successfully");
  };

  // Escalate conversation
  const handleEscalateConversation = () => {
    if (!selectedConversation) return;

    const updated = conversationList.map((conversation) =>
      conversation.id === selectedConversation.id
        ? {
            ...conversation,
            status: "Pending" as const,
            priority: "High" as const,
            escalated: true,
          }
        : conversation
    );

    setConversationList(updated);

    setSelectedConversation({
      ...selectedConversation,
      status: "Pending",
      priority: "High",
      escalated: true,
    });

    toast.warning("Conversation escalated");
  };

  // Send message
  const handleSendMessage = (text: string) => {
    if (!selectedConversation || text.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      sender: "bot" as const,
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updated = conversationList.map((conversation) =>
      conversation.id === selectedConversation.id
        ? {
            ...conversation,
            messages: [...conversation.messages, newMessage],
            lastMessage: text,
          }
        : conversation
    );

    setConversationList(updated);

    setSelectedConversation({
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMessage],
      lastMessage: text,
    });

    toast.info("Reply sent");
  };

  return (
    <div className="grid grid-cols-[260px_380px_1fr] h-screen bg-[#F5F7FB]">
      <Sidebar />

      <div className="col-span-2 flex flex-col">

        <TopNavbar />

        <div className="flex flex-1 overflow-hidden">

          <ConversationList
            conversations={conversationList}
            selectedConversation={selectedConversation}
            setSelectedConversation={setSelectedConversation}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

          <ConversationDetails
            conversation={selectedConversation}
            onResolve={handleResolveConversation}
            onAssign={handleAssignConversation}
            onEscalate={handleEscalateConversation}
            onSendMessage={handleSendMessage}
          />

        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;