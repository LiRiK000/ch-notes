"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { useUser } from "@clerk/clerk-react";
const DocsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const handleClick = () => {
    const promise = create({ title: "New Note" });
    toast.promise(promise, {
      loading: "Creating note...",
      success: "Note created successfully",
      error: "Failed to create note",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        alt="empty"
        height={300}
        width={300}
        className="dark:hidden pointer-events-none"
      />
      <Image
        src="/empty-dark.png"
        alt="empty"
        height={300}
        width={300}
        className="hidden dark:block pointer-events-none"
      />
      <h1 className="text-2xl font-medium">
        Welcome <span className="font-bold font">{user?.firstName}</span> to
        Notes
      </h1>
      <Button onClick={handleClick}>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocsPage;
