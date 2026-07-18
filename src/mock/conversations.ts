import type { Conversation } from "../types/conversation";

export const conversations: Conversation[] = [
  {
    id: 1,
    customerName: "John Doe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    priority: "High",
    status: "Open",
    waitingTime: "32 min",
    unreadCount: 2,
    sentiment: "Angry",
    lastMessage: "My payment failed.",
    assignedTo: "",
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "My payment failed.",
        time: "10:30 AM",
      },
      {
        id: 2,
        sender: "bot",
        text: "Can you try again?",
        time: "10:31 AM",
      },
    ],
  },

  {
    id: 2,
    customerName: "Emma Watson",
    email: "emma@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    priority: "Medium",
    status: "Pending",
    waitingTime: "15 min",
    unreadCount: 1,
    sentiment: "Neutral",
    lastMessage: "Need refund status.",
    assignedTo: "",
    messages: [],
  },

  {
    id: 3,
    customerName: "Michael Lee",
    email: "michael@example.com",
    avatar: "https://i.pravatar.cc/150?img=8",
    priority: "Low",
    status: "Open",
    waitingTime: "5 min",
    unreadCount: 0,
    sentiment: "Happy",
    lastMessage: "Thank you.",
    assignedTo: "",
    messages: [],
    escalated: false,
  },
];