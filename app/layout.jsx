import "./globals.css";

export const metadata = {
  title: "Dr. Ahmed Rahman - General Physician Portfolio",
  description: "Trusted Medical Care for a Healthier Life. Professional doctor with over 8 years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}