"use server"
import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid"
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach"
import Footer from "@/components/Footer";
import { FaNewspaper, FaUser, FaUsers } from "react-icons/fa6";
export default async function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={[
          {name: "Home", link: "/", icon: <FaHome/>},
          {name:"About",link:"/#about",icon:<FaUser/>},
          {name:"Projects",link:"/#projects",icon:<FaNewspaper/>},
          {name:"Reviews",link:"/#testimonials",icon:<FaUsers/>}
        ]}
        />
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Approach/>
        <Footer/>
        </div>
    </main>
  );
}
