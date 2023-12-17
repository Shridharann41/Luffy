"use client";

import { Menu, Sidebar } from "lucide-react";
import { Button } from "./ui/button";
import {Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";


const MobileSidebar = () => {
    const [isMounted, setisMounted] = useState(false);
    useEffect(() => {
        setisMounted(true);


    }, []);

    if (!isMounted){
        return null;
    }
    return (
    <Sheet>
      <SheetTrigger>
        <Button variant = "ghost" size = "icon" className="md:hidden">
            <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side = "left" className="p-0"> 
      <Sidebar /></SheetContent>
    </Sheet>


    );
}

export default MobileSidebar;