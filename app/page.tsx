import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative dark:bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}