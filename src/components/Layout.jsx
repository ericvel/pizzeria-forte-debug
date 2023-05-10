import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-stone-50">
      <Header />
      <div className="flex h-full overflow-y-hidden">{children}</div>
    </div>
  );
}
