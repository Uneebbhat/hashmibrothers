interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={`px-5 md:px-10 py-10 ${className}`}>{children}</section>
  );
}
