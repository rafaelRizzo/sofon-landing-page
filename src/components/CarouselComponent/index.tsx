"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    const items = [
        "Localizar cliente pelo telefone",
        "Detecção de cliente inadimplentes",
        "Envio de boletos",
        "Status da conexão",
        "Orientação de procedimentos",
        "Abertura de atendimentos",
        "Gerenciar instabilidades",
        "Informativos",
        "Protocolo do atendimento",
        "E muito mais"
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="cursor-grab active:cursor-grabbing">
                {items.map((text, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                       <h2 className="text-md lg:text-lg text-center select-none">{text}</h2>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel >
    )
}
