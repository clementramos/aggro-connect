import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { getServerSession } from "next-auth";
import SessionProvider from "./SessionProvider";
import Accueil from "../components/Accueil";
import Login from "./signUp/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aggro Connect - La connexion avec vos agriculteurs",
  description:
    "Aggro Connect est une plateforme de vente et de rencontre avec vos agriculteurs proches de chez vous.",
  icon: "/AGGRO CONNECT - LIGHT.svg",
};

export default async function RootLayout({ children }) {
  const session = getServerSession;
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/AGGRO CONNECT - LIGHT.svg" />
      </head>
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ): (
            <Accueil/>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
