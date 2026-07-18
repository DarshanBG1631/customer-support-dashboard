export interface Message {
  id: number;
  sender: "customer" | "bot";
  text: string;
  time: string;
}

export interface Conversation {
  id: number;
  customerName: string;
  email: string;
  avatar: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "Pending" | "Resolved";
  waitingTime: string;
  unreadCount: number;
  sentiment: "Happy" | "Neutral" | "Angry";
  lastMessage: string;
  assignedTo?: string;
  messages: Message[];
  escalated?: boolean;
}