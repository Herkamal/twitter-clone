import Postfeed from "@/components/Postfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";


export default function Home() {
  return (
    <div className="bg-black min-h-screen text-[#E7E9EA] max-w-[1400] mx-auto flex ">
     <Sidebar/>
     <Postfeed/>
     <Trending/>
    </div>
  )
}
