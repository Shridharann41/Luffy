import { Menu } from "lucide-react";
import {Button} from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar"

const NavBar = () => {
    return(
      <div className="flex items-center p-4"> 
        <Button variant = "ghost" size="icon" className = "md:hidden">
            <MobileSidebar/>
        </Button>

        <div className = "flex w-full justify-end">
            <UserButton afterSignOutUrl="/" />

        </div>
        
        </div>
    );
}

export default NavBar;