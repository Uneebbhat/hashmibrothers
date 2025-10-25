import PageLayout from "@/layout/PageLayout";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <PageLayout>{children}</PageLayout>;
}
