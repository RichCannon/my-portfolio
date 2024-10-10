import Approach from "@/components/Approach";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero/Hero";
import RecentProjects from "@/components/RecentProjects";
// import Testimonials from "@/components/Testimonials";
// import WorkExperience from "@/components/WorkExperience";
import WorkTimeline from "@/components/WorkTimeline";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Testimonials /> */}
        <WorkTimeline />
        {/* <WorkExperience /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
