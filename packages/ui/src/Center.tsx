import React from "react";

export const Center = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex justify-center flex-col h-full">
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
};
