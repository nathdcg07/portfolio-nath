"use client"

import Image from "next/image"
import { MotionTransition } from "./transition-components"

export function Avatar() {
    return (
        <MotionTransition
            position="bottom"
            className="hidden md:block md:absolute bottom-0 right-10"
        >
            <div className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-secondary shadow-lg shadow-black/30">
                <Image
                    src="/avatar1.png"
                    fill
                    alt="Avatar"
                    className="object-cover"
                    priority
                />
            </div>
        </MotionTransition>
    )
}
