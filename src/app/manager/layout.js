
import ManagerLayout from "@/components/ManagerLayout";
import AdminLayout from "@/components/AdminLayout";

export const metadata = {
  title: "Trang quản lý",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
      <AdminLayout>{children}</AdminLayout>
  );
}
