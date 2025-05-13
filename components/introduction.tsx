"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { Avatar } from "./avatar";

const Introduction = () => {
    return (
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <div className="flex flex-col justify-right max-w-md text-white">
                   {/* <Image
                            src="/avatar1.png"
                            width={320}
                            height={320}
                            alt="Avatar de Nath"
                            className="rounded-2xl object-cover"
                            priority
                            /> */}

                    <Avatar/>
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Every line of code can tell your story. <br />
                        <TypeAnimation
                            sequence={[
                                "Let's make it visual.",
                                1000,
                                "Let's make it functional.",
                                1000,
                                "Let's make it unique",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-pink-300"
                        />
                    </h1>

                    <p className="mx-auto mb-4 text-base md:text-lg text-purple-200 md:mx-0 md:mb-8">
                        Like a developer and digital creative, I love combining design and functionality to create beautiful, accessible, and intuitive experiences.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-8">
                        <a
                            href="/portfolio"
                            className="px-4 py-2 my-2 text-sm md:text-base transition-all border border-white rounded-xl hover:shadow-lg hover:bg-white/10"
                        >
                            See proyects
                        </a>
                        <a
                            href="https://www.upwork.com/freelancers/~014c01afae4a063838?mp_source=share"
                            className="px-4 py-2 my-2 text-sm md:text-base text-pink-300 border border-pink-300 rounded-xl hover:shadow-lg hover:bg-pink-300/10"
                        >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
    );
};

export default Introduction;
