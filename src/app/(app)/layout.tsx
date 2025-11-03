import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#E5E0D8]">{children}</main>
      <Footer />
    </>
  );
}