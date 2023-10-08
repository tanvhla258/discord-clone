import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="flex ">
      <UserButton afterSignOutUrl="/"></UserButton>
      <ModeToggle></ModeToggle>
    </div>
  );
}
