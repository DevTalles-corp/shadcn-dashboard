"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export default function Page() {
  const { toast } = useToast();

  return (
    <div className="grid grid-cols-4 gap-3">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          });
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: (
              <ToastAction
                altText="Try again"
                onClick={() => console.log("Try again")}
              >
                Try again
              </ToastAction>
            ),
          });
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Destructive
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "success",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Success
      </Button>
    </div>
  );
}
