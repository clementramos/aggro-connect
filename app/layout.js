"use client"
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aggro Connect - La connexion avec vos agriculteurs",
  description:
    "Aggro Connect est une plateforme de vente et de rencontre avec vos agriculteurs proches de chez vous.",
  icon: "/AGGRO CONNECT - LIGHT.svg",
};

export default function RootLayout({ children }) {

  const [loading, setLoading] = React.useState(true);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/AGGRO CONNECT - LIGHT.svg" />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>{children}
        {loading ? <div classname="text-4xl text-center">Chargement...</div> : children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
