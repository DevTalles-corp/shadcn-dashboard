"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log("Hola Mundo")}>Click Me</Button>
      <Button variant="success">success</Button>
      <Button capitalize={false}>capitalize false</Button>

      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>

      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
