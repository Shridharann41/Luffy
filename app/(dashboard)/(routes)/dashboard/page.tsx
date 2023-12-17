"use client";
import { ArrowRight, LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music2Icon, CodeIcon, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { use } from "react";
import { useRouter } from "next/navigation";



const tools = [
  {
  label: "Conversation",
  icon: MessageSquare,
  color: "text-violet-500",
  bgColor: "bg-violet-500/10",
  href: "/conversation"
},

{
  label: "Image Generation",
  icon: ImageIcon,
  color: "text-pink-500",
  bgColor: "bg-pink-500/10",
  href: "/image"
},

{
  label: "Video Generation",
  icon: VideoIcon,
  color: "text-orange-500",
  bgColor: "bg-orange-500/10",
  href: "/video"
},

{
  label: "Music Generation",
  icon: Music2Icon,
  color: "text-green-500",
  bgColor: "bg-green-500/10",
  href: "/music"
},

{
  label: "Code Generation",
  icon: CodeIcon,
  color: "text-purple-500",
  bgColor: "bg-purple-500/10",
  href: "/code"
},

{
  label: "Settings",
  icon: Settings,
  color: "text-white-500",
  bgColor: "bg-white-500/10",
  href: "/settings"
},

]

const DashboardPage = () => {

  const router = useRouter();
  return (
    <><div className="mb-8 space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center">

        Explore the power of your own AI assistant


      </h2>
      <p className="text-muted-foreground font-light text-sm md:text-lg text-center"> Chat with the smartest tool in the Internet </p>
    </div><div className="px-4 md:px-20 lg:px-32 space-y-4">
      {tools.map((tool)=> (
        <Card 
        onClick={() => router.push(tool.href)}
        key={tool.href}
       
        
        className = "p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">

       <div className="flex items-center gap-x-4">
        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
          <tool.icon className={cn("w-8 h-8", tool.color)}/> </div>
          
          <div className="font-semibold">
            {tool.label}
          </div>
          
          </div>
          <ArrowRight className="h-5 w-5"/>   
        </Card>

      ))}</div></>
  )
}

export default DashboardPage;
