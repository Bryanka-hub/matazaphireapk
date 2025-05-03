import React from "react";
import Header from "@/app/components/header/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#EEF7FF]">
      {/* Header Area - Nanti akan dipisah jadi komponen tersendiri */}
      <Header/>
      
      {/* Main Content */}
      <main className="flex-1 p-6 max-w-screen-2xl mx-auto w-full">
          {children}
      </main>
    </div>
  );
}