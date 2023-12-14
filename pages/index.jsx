import BottomBanner from "@/components/BottomBanner";
import Comment from "@/components/Modals/Comment";
import Postfeed from "@/components/Postfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import { useSelector } from "react-redux";

export default function Home() {
  const username = useSelector((state) => state.user.username);
  console.log(username);
  return (
    <div>
      <div className="bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto flex ">
        <Sidebar />
        <Postfeed />
        <Trending />
      </div>
      <Comment/>
      {!username && <BottomBanner />}
    </div>
  );
}
