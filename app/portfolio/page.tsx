import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import CircleImage from "@/components/circle-images";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import { CoverParticles } from "@/components/cover-particles";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />¿
            <CircleImage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">My last <span className="font-bold text-secondary">works done</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4 full">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
            
        <CoverParticles/>
        </ContainerPage>
    );
}

export default PortfolioPage;