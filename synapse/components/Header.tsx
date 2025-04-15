import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import NavItems from "./NavItems";
// import MobileNav from "MobileNav";

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <Image src="/assets/images/logo.svg" width={128} height={38} alt="Synapse logo"/>
                </Link>
                    <nav className="md:flex-between hidden w-full max-w-xs">
                        <NavItems/>
                    </nav>

                <div className="flex w-32 justify-end gap-3">
                        {/*<MobileNav/>*/}
                        <Button asChild className="rounded-full" size="lg">
                            <Link href={"/login"}>
                                Log In
                            </Link>
                        </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;