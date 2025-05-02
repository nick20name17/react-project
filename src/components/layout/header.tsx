import { Button } from "@/components/ui/button";
import { Atom } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export const Header = () => {
  return (
    <header className="rounded-full h-14 sticky top-4 flex items-center justify-center  border bg-gray-200/10  mx-auto max-w-3xl   bg-clip-padding backdrop-filter backdrop-blur-sm  ">
      <Button size="sm">
        <Atom />
        <span>Header</span>
      </Button>
      <ModeToggle />
    </header>
  );
};
