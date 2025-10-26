import { Spinner } from "@/src/components/ui/spinner";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner className="w-14 h-14" />
    </div>
  );
}
