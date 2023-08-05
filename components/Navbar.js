import React from "react";
import Link from "next/link";

const navigation = [
  { name: "Accueil", href: "/", current: true },
  // { name: "Le concept", href: "#concept", current: false },
  { name: "Carte", href: "/map", current: false },
  { name: "Compte", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  return (
    <div className="w-full h-[75px] bg-orange-aggro uppercase">
      <div className="grid grid-cols-3 gap-4 flex items-center text-center h-full">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-white text-white"
                : "text-white font-semibold hover:bg-white hover:text-black",
              "px-3 py-2 rounded-md text-xl font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
