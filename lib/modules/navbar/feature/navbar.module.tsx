//@Core
import Image from "next/image";
import Link from "next/link";

//@Dev
//#Module
import { ThemeModule } from "./theme.module";
import { MobileNavModule } from "./mobile-nav.module";
import { GlobalSearchModule } from "../../search";
import { IsSignInProvider } from "@/lib/providers/auth/is-sign-in.provider";
import { UserAvatarModule } from "./user-avatar.module";

export const NavbarModule = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"/assets/images/site-logo.svg"}
          width={23}
          height={23}
          alt="DevFlow"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          3rab <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <GlobalSearchModule />
      <div className="flex-between gap-5">
        <ThemeModule />
        <IsSignInProvider control>
          <UserAvatarModule />
        </IsSignInProvider>
        <MobileNavModule />
      </div>
    </nav>
  );
};
