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


  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/AGGRO CONNECT - LIGHT.svg" />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>{children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
