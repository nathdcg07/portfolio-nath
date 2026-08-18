import CircleImage from "@/components/circle-images";
import { CoverParticles } from "@/components/cover-particles";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page"; // Importamos tu contenedor arreglado

const ServicesPage = () => {
    return (
        <ContainerPage>
            <CoverParticles/>
            <TransitionPage />
            <CircleImage />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center w-full min-h-[60vh]">
                <div className="max-w-[450px] text-center md:text-left mx-auto md:mx-0">
                    <h1 className="text-3xl leading-tight md:text-5xl mb-5">
                        My <span className="font-bold text-pink-300">services</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                        I offer frontend web development services specializing in the creation of attractive and functional websites and applications. Using the latest technologies, such as Python, Tailwind CSS, and JavaScript. I design intuitive and responsive user interfaces that reflect my clients' brand identity and enhance their online presence.
                    </p>
                </div>

                <div className="w-full min-w-0"> 
                    <SliderServices />
                </div> 
            </div>
        </ContainerPage>
    );
}

export default ServicesPage;
