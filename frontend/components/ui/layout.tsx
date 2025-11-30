import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/landing/theme-switcher";

interface HeaderProps {
  showThemeSwitcher?: boolean;
}

export function Header({ showThemeSwitcher = true }: HeaderProps) {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-1 items-center font-semibold">
          <div className="relative w-8 h-8 flex items-center justify-center logo-transparent">
            <Image
              src="/images/logo.png"
              alt="thinker logo"
              width={32}
              height={32}
              className="object-contain"
              unoptimized
            />
          </div>
          <Link href={"/"}>
            <span className="font-black text-[#124559] dark:text-[#EFF6E0]">thinker</span>
          </Link>
        </div>
        {showThemeSwitcher && (
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
      <p>
        Created by {" "}
        <a
          href="https://shreyasprasad.github.io"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Shreyas Prasad
        </a>
      </p>
    </footer>
  );
}

