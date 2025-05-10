import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Learning Next",
  description: "The path of Iggy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
        style={{
          backgroundColor: "green",
          padding:"2rem"
        }}>
          <p>I am a King</p>
        </header>
        {children}
        <footer 
        style = {{
          backgroundColor: "greenyellow",
          padding: "1rem"
        }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
