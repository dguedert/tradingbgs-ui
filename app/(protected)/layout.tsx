// app/(protected)/layout.tsx
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

export default function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
