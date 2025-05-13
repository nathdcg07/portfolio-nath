"use client"

import ContainerPage from "@/components/container-page";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import Hero from "../../components/hero";
import { Avatar } from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import { CoverParticles } from "@/components/cover-particles";

const AboutMePage = () => {
    return (
        <>
            <CoverParticles/>
            <TransitionPage />
            <ContainerPage>
                <Avatar/>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    My entire{' '}
                    <span className="font-bold text-pink-300">
                        professional career
                    </span>
                </h1>

                <CounterServices/>

                <TimeLine />
                                
            </ContainerPage>
        </>
    );
}

export default AboutMePage;