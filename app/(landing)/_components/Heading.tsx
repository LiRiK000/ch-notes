"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, your notes and plans Unified. Welcome to{" "}
        <span className="underline">Notes</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notes is a service provided by CollaboraHub, using it you will become
        more productive
      </h3>
      {isLoading ? (
        <div className="flex w-full justify-center items-center">
          <Spinner size="lg" />
        </div>
      ) : null}
      {isAuthenticated && (
        <Button asChild className={cn("", isLoading && "hidden")}>
          <Link href="/docs">
            Enter Notes
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && (
        <SignInButton mode="modal">
          <Button className={cn("", isLoading && "hidden")}>
            Get Notes free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
