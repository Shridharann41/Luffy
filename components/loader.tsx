import { Image } from "lucide-react";
import { boolean } from "zod";

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            loading...
            <div className="w-10 h-10 relative animate-spin">

                

            </div>
            <p className="text-sm text-muted-foreground">
                Luffy is thinking.....
            </p>
        </div>
    );


};
