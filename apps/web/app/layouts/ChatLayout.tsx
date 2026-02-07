import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

export default function ChatLayout() {
  return (
    <div className="size-full overflow-hidden relative flex flex-col items-center">
      <Navbar />
      <div className="max-w-4xl h-full w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
