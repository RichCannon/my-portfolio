// import Approach from "@/components/Approach";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import RecentProjects from "@/components/RecentProjects";
// import WorkExperience from "@/components/WorkExperience";
// import WorkTimeline from "@/components/WorkTimeline";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("@/components/Hero"));
const DynamicGrid = dynamic(() => import("@/components/Grid"));
const DynamicRecentProjects = dynamic(
  () => import("@/components/RecentProjects")
);
const DynamicWorkTimeline = dynamic(() => import("@/components/WorkTimeline"));
const DynamicApproach = dynamic(() => import("@/components/Approach"));

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <DynamicHero />
        <DynamicGrid />
        <DynamicRecentProjects />
        <DynamicWorkTimeline />
        {/* <WorkExperience /> */}
        <DynamicApproach />
        <Footer />
      </div>
    </main>
  );
}
