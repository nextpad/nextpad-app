import ChevronRightIcon from "./components/icons/ChevronRightIcon";
import Overview from "./Overview";
import UpcomingLaunchpad from "./UpcomingLaunchpad";
import FundedProject from "./launchpad/FundedProject";
import LatestToken from "./LatestToken";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
   return (
      <main className="min-h-screen">
         <div className="flex">
            <Overview />
         </div>
         <div className="text-2xl mt-16 mb-7">
            <h1 className="font-bold">Upcoming Launchpad</h1>
            <p className="text-purple-600 text-base mt-1">
               <a href="#">
                  Explore More <ChevronRightIcon classList="size-4 inline" />
               </a>
            </p>
         </div>
         <div className="flex flex-wrap mt-5">
            <UpcomingLaunchpad />
         </div>
         <div className="pt-10 text-center">
            <Link
               href="/launchpad"
               className="btn px-10 hover:bg-purple-700 bg-purple-600 text-white"
            >
               More Launchpad
            </Link>
         </div>
         <div className="flex mt-16 mb-5">
            <div className="flex-1 mr-7">
               <FundedProject />
            </div>
            <div className="flex-1">
               <LatestToken />
            </div>
         </div>
      </main>
   );
}
