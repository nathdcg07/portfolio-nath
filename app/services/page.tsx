import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-images";
import { CoverParticles } from "@/components/cover-particles";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <CoverParticles/>
            <TransitionPage />
            <CircleImage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">My <span className="font-bold text-pink-300"> services.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">I offer front-end web development services specializing in the creation of attractive and functional websites and applications. Using the latest technologies, such as Python, Tailwind, and JavaScript. I design intuitive and responsive user interfaces that reflect my clients' brand identity and enhance their online presence.</p>
                    <button className="px-4 py-2 my-2 text-sm md:text-base text-pink-300 border border-pink-300 rounded-xl hover:shadow-lg hover:bg-pink-300/10">Contact me</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;