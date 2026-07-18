import {
  Bell,
  Search,
  Moon,
  Sun,
} from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="bg-white border-b h-16 px-6 flex items-center justify-between">

      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold">
          Inbox
        </h1>

        <p className="text-sm text-gray-500">
          Manage customer conversations
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search..."
            className="border rounded-xl pl-10 pr-4 py-2 outline-none w-64"
          />

        </div>

        {/* Notification */}

        <button className="relative">

          <Bell size={22} />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>

        </button>

        {/* Theme */}

        <button>
          <Moon size={20} />
        </button>

        {/* Profile */}

        <img
          src="https://i.pravatar.cc/45"
          className="rounded-full"
          alt="profile"
        />

      </div>

    </header>
  );
};

export default TopNavbar;