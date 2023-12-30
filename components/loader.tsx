import { Image } from "lucide-react";
import { boolean } from "zod";

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            loading...
            <div className="w-8 h-8 relative animate-spin">
                <Image 
                alt="logo"
                fill=""
                src = "/logo.jpeg"  
                />
            </div>
            <p className="text-sm text-muted-foreground">
                 is thinking.....
            </p>
        </div>
    );


};
