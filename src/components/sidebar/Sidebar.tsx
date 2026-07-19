import {
  LayoutDashboard,
  Inbox,
  User,
  CheckCircle,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const menus = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      count: null,
    },
    {
      name: "Inbox",
      icon: <Inbox size={20} />,
      count: 12,
    },
    {
      name: "Assigned",
      icon: <User size={20} />,
      count: 5,
    },
    {
      name: "Resolved",
      icon: <CheckCircle size={20} />,
      count: 18,
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      count: null,
    },
  ];

  return (
    <aside className="bg-white border-r h-screen flex flex-col justify-between">

      {/* Logo */}
      <div>

        <div className="p-6 border-b">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center text-white font-bold text-xl shadow">
              Y
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                Yellow.ai
              </h1>

              <p className="text-sm text-gray-500">
                Customer Support
              </p>
            </div>

          </div>

        </div>

        {/* Menu */}

        <nav className="mt-4 px-3">

          {menus.map((menu) => (

            <div
              key={menu.name}
              className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 mb-2
              ${
                menu.name === "Inbox"
                  ? "bg-yellow-100 text-yellow-700 font-semibold"
                  : "hover:bg-yellow-50 hover:text-yellow-700 hover:translate-x-2"
              }`}
            >

              <div className="flex items-center gap-3">

                {menu.icon}

                <span>{menu.name}</span>

              </div>

              {menu.count !== null && (
                <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                  {menu.count}
                </span>
              )}

            </div>

          ))}

        </nav>

      </div>

      {/* User */}

      <div className="border-t p-5">

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100?img=8"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />

          <div className="flex-1">

            <h3 className="font-semibold">
              Darshan BG
            </h3>

            <p className="text-sm text-gray-500">
              Frontend Intern
            </p>

          </div>

          <div className="w-3 h-3 bg-green-500 rounded-full"></div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;