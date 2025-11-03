import DashboardLayout from "@/src/layout/DashboardLayout";
import PageLayout from "@/src/layout/PageLayout";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
