import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Link href="https://collabora-hub.vercel.app/" className="flex gap-x-2">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <p className={cn("text-2xl font-semibold", font.className)}>Notes</p>
      </Link>
    </div>
  );
};
