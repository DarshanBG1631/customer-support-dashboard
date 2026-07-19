# 🟨 Yellow.ai Customer Support Dashboard

A modern and responsive Customer Support Dashboard built as part of the **Yellow.ai Frontend Engineer Internship Assignment**.

# 📌 Project Overview

This project is a Customer Support Dashboard inspired by the Yellow.ai support inbox.

The dashboard helps support agents efficiently manage customer conversations through a clean and intuitive interface.

### Key Functionalities

- View customer conversations
- Search conversations
- Filter conversations by status
- View complete chat history
- Send replies
- Assign conversations
- Resolve conversations
- Escalate conversations
- View customer profile

---

# 🎯 Assignment Understanding

Before starting development, I carefully analyzed the assignment requirements to understand both the UI and functionality.

The dashboard was divided into the following modules:

- Sidebar Navigation
- Conversation List
- Conversation Details
- Customer Profile
- Search Functionality
- Status Filters
- Conversation Actions
- Responsive Layout

After identifying these requirements, I planned the folder structure and reusable component architecture before implementation.

---

# 🚀 Development Approach

The project was developed incrementally.

### Step 1 – Project Setup

- Created project using Vite + React + TypeScript
- Configured Tailwind CSS
- Installed dependencies
- Planned folder structure

---

### Step 2 – UI Layout

Built the overall dashboard layout:

- Sidebar
- Top Navigation
- Conversation List
- Conversation Details

---

### Step 3 – Mock Data

- Created conversation interfaces
- Added mock conversation data
- Connected UI with data

---

### Step 4 – Conversation Selection

Implemented conversation selection.

Selecting a conversation updates the chat window dynamically.

---

### Step 5 – Search Feature

Implemented search functionality using:

- Customer Name
- Email Address

---

### Step 6 – Status Filters

Implemented filters for:

- All
- Open
- Pending
- Resolved

---

### Step 7 – Conversation Actions

Implemented:

- Assign Conversation
- Resolve Conversation
- Escalate Conversation

UI updates immediately after every action.

---

### Step 8 – Chat Reply

Implemented message reply functionality.

New replies are instantly added to the conversation.

---

### Step 9 – Customer Profile

Displays:

- Customer Name
- Email
- Waiting Time
- Sentiment
- Assigned Agent
- Escalation Status

---

### Step 10 – UI Enhancements

Improved the overall user experience by adding:

- Better spacing
- Rounded cards
- Hover effects
- Toast notifications
- Status badges
- Priority badges
- Responsive layout
- Improved typography

---

# 🏗️ Architecture Overview

```
src
│
├── components
│   ├── conversation
│   ├── customer
│   ├── dashboard
│   ├── navbar
│   └── sidebar
│
├── layouts
│
├── mock
│
├── pages
│
├── types
│
└── App.tsx
```

### State Management

The application uses React's **useState** hook for managing:

- Conversation list
- Selected conversation
- Search state
- Status filter
- Chat replies
- Ticket actions

---

# 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React
- React Toastify

---

# ✨ Features

- Responsive Dashboard
- Sidebar Navigation
- Search Conversations
- Status Filters
- Conversation List
- Customer Chat Window
- Customer Profile
- Assign Conversation
- Resolve Conversation
- Escalate Conversation
- Reply to Customer
- Toast Notifications

---

# ⚙️ Setup Instructions

### Clone Repository

```bash
git clone https://github.com/DarshanBG1631/customer-support-dashboard.git
```

### Navigate to Project

```bash
cd customer-support-dashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

---

# 📂 Folder Structure

```
src
│
├── components
├── layouts
├── mock
├── pages
├── types
└── App.tsx
```

---

# ⚠️ Known Limitations

- Uses mock data instead of backend APIs.
- No authentication.
- Chat messages are not persisted after refresh.
- No real-time messaging.
- Analytics are static.
- No pagination.

---

# 📚 Challenges Faced

During development, I encountered the following challenges:

- Managing state between components
- Combining search and filters
- Updating conversations after actions
- Designing reusable components
- Building a responsive dashboard

These challenges helped strengthen my understanding of React architecture and state management.

---

# 📖 Learning Outcomes

Through this assignment I improved my understanding of:

- React Component Architecture
- TypeScript Interfaces
- React State Management
- Component Reusability
- Tailwind CSS
- Responsive Design
- Event Handling
- Conditional Rendering

---

# 🚀 Future Improvements

Given additional development time, I would like to add:

- Backend Integration
- REST APIs
- Authentication
- Dark Mode
- Real-time Chat
- Notifications
- Analytics Dashboard
- Pagination
- User Roles
- Theme Switching

---

# ⏱️ Approximate Time Spent

| Task | Time |
|------|------|
| Requirement Analysis | 1 Hour |
| Project Setup | 30 Minutes |
| UI Development | 5 Hours |
| Feature Implementation | 4 Hours |
| UI Improvements | 2 Hours |
| Testing & Bug Fixing | 2 Hours |
| Documentation | 1 Hour |

**Total Time Spent:** **15–16 Hours**

---

# 🙏 Thank You

Thank you for reviewing my submission.

This assignment provided an excellent opportunity to strengthen my React, TypeScript, and frontend development skills. I focused on building a clean, modular, and maintainable solution while following the assignment requirements.
