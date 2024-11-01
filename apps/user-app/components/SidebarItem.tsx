"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Ensure pathname is defined before comparing
  const selected = pathname ? pathname === href : false;

  return (
    <div>
      <div
        className={`flex items-center cursor-pointer p-2 pl-8 ${
          selected ? "text-[#6a51a6] font-bold" : "text-slate-500"
        }`}
        onClick={() => router.push(href)}
      >
        <div className="pr-2">{icon}</div>
        <div>{title}</div>
      </div>
    </div>
  );
};
