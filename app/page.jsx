import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
    
      <div className="container h-full mx-auto">
        
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-20">
          
          {/*TEXT*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            
            <span className="text-xl">SAP Developer</span>
            
            <h1 className="mb-6 h1">
              Hello I'm <br /> 
              <span className="text-accent">Buhle Ngqongwa</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80 ">
            I specialize in developing efficient, user-focused SAP solutions that streamline business processes and enhance operational performance. With expertise in SAP technologies, software development, and data analysis, I deliver innovative solutions that combine technical precision, analytical insights, and business needs to drive impactful results.
            </p>

            {/*BUTTON AND SOCIALS*/}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              
              <a href="/2025@Resume.pdf" download="2025@Resume.pdf">
                <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 flex gap-6 border border-accent rounded-full text-accent flex justify-center items-center text-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
              
            </div>
            
          </div>
          
          {/*PHOTO*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
          
        </div>
        
      </div>
      <Stats />

  </section>
  );
};

export default Home;
