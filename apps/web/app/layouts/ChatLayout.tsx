import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

export default function ChatLayout() {
  return (
    <div className="min-size-full size-full relative flex flex-col items-center justify-center">
      <Navbar />
      <div className="max-w-4xl  h-full w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
