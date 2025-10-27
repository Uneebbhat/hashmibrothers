import PageLayout from "@/src/layout/PageLayout";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <PageLayout>{children}</PageLayout>;
}
