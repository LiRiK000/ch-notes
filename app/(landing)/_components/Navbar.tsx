"use client";

import { SignInButton, UserButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "./Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react";
import { useScrollTop } from "@/hooks/useScrollTop";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        "z-50 bg-[#eee]/50 backdrop-blur-[8px] fixed top-0 dark:bg-[#191919]/60 flex items-center w-full p-6 transition-all duration-300",
        scrolled && "border-b-sm shadow-md"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner size="lg" />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Notes free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <div className="flex items-center gap-4 mr-4">
            <Button asChild>
              <Link href="/docs">Enter Notes</Link>
            </Button>
          </div>
        )}
        <div className="flex items-center gap-x-2">
          <UserButton afterSignOutUrl="/" />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
