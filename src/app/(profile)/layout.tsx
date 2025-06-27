import Navbar from "@/components/profile/Navbar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <Navbar />
    {children}
    </div>;
}