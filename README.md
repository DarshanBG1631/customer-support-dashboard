# Yellow.ai Frontend Engineer Internship Assignment

## Candidate

**Name:** Darshan B G

---

# Project Overview

This project is a Customer Support Dashboard inspired by the Yellow.ai support inbox.

The goal was to build a clean and responsive dashboard where support agents can:

- View customer conversations
- Search conversations
- Filter conversations based on status
- Read chat history
- Reply to customers
- Assign conversations
- Resolve conversations
- Escalate conversations
- View customer information

The application is completely built using React, TypeScript and Tailwind CSS.

---

# Assignment Understanding

Before writing code, I first analyzed the assignment document carefully.

I identified the major sections required in the dashboard.

- Sidebar Navigation
- Conversation List
- Conversation Details
- Customer Profile
- Search functionality
- Status Filters
- Responsive Layout
- Clean UI

After understanding the requirements, I planned the folder structure and component hierarchy before starting development.

---

# Development Approach

I developed the project in small steps instead of building everything together.

### Step 1

Created the React project using Vite.

Installed the required dependencies.

Configured Tailwind CSS.

Created the basic folder structure.

---

### Step 2

Created reusable components.

- Sidebar
- Conversation List
- Conversation Card
- Conversation Details

---

### Step 3

Created mock conversation data.

Designed the conversation interface using TypeScript.

Connected the UI with mock data.

---

### Step 4

Implemented conversation selection.

Selecting a conversation updates the right-side chat window.

---

### Step 5

Implemented search functionality.

Users can search conversations using:

- Customer Name
- Email Address

---

### Step 6

Implemented conversation filtering.

Added filters for:

- All
- Open
- Pending
- Resolved

---

### Step 7

Implemented conversation actions.

Added buttons for:

- Assign
- Resolve
- Escalate

The UI updates immediately after each action.

---

### Step 8

Implemented chat reply.

Support agents can type a reply.

The message appears instantly in the chat window.

---

### Step 9

Added Customer Profile section.

Displays:

- Customer Name
- Email
- Waiting Time
- Sentiment
- Assigned Agent
- Escalation Status

---

### Step 10

Improved the overall UI.

Made several design improvements including:

- Better spacing
- Rounded cards
- Better shadows
- Hover animations
- Status badges
- Priority badges
- Cleaner typography
- Improved conversation cards

---

# Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons
- React Toastify

---

# Folder Structure

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
├── types
│
└── App.tsx
```

---

# Features

✔ Sidebar Navigation

✔ Search Conversations

✔ Status Filters

✔ Conversation List

✔ Chat Window

✔ Customer Profile

✔ Assign Conversation

✔ Resolve Conversation

✔ Escalate Conversation

✔ Send Reply

✔ Responsive Layout

✔ Modern UI

---

# Challenges Faced

While developing this assignment I faced several challenges:

- Managing component communication
- Updating conversation state correctly
- Handling filters and search together
- Designing a responsive layout
- Maintaining reusable components

These challenges helped improve my understanding of React state management and component architecture.

---

# Learning Outcomes

Through this assignment I improved my understanding of:

- React Component Architecture
- TypeScript Interfaces
- State Management using useState
- Component Reusability
- Tailwind CSS
- Responsive UI Design
- Conditional Rendering
- Event Handling

---

# Future Improvements

If given more time, I would like to add:

- Backend Integration
- API Calls
- Authentication
- Dark Mode
- Real-time Messaging
- Charts & Analytics
- Notifications
- Pagination
- User Roles
- Theme Switching

---

# Run Project

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Build project

```bash
npm run build
```

---

# Thank You

Thank you for reviewing my submission.

I enjoyed working on this assignment and learned a lot while building it.
