import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio créé avec Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
