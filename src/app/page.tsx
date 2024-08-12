import { CarouselPlugin } from "@/components/CarouselComponent";
import Container from "@/components/Container";
import { Navbar } from "@/components/Navbar"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { FaCheck } from "react-icons/fa6";

export default function Home() {
    return (
        <div>

            {/* Navbar */}
            <div className="min-w-screen border-b p-2">
                <div className="flex items-center justify-center">
                    <Navbar />
                </div>
            </div>

            {/* Slogan */}
            <main className="flex items-center justify-center text-center h-[600px] p-10">
                <Container>
                    <div className="relative">
                        <h1 className="text-5xl lg:text-7xl font-bold">
                            Automação que melhora a eficiência e a satisfação!
                        </h1>
                        <h1 className="text-md lg:text-lg text-muted-foreground p-5 -mt-2">Respostas rápidas, clientes satisfeitos</h1>
                        <Button className="my-2 hover:scale-105 transition">Quero o melhor atendimento para meus clientes</Button>

                        <img className="-z-30 absolute -top-36 -right-32 max-w-[200px] sm:-top-36 sm:-right-52 sm:max-w-[300px]" src="/star.png" alt="" />
                    </div>

                </Container>
            </main>

            {/* Carousel funcionalidades */}
            <section className="flex items-center justify-center border-t border-b min-h-20 bg-zinc-900 dark:bg-violet-700 text-zinc-50">
                <CarouselPlugin />
            </section>

            {/* Integrações com ERPs */}
            <section className="p-10 my-10">
                <Container>
                    <aside className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                        <div className="flex items-center justify-center">
                            <h2 className="text-center font-semibold text-3xl">Integração com os ERP's mais utilizados de provedores</h2>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <Card className="flex items-center justify-center lg:min-h-32 p-5">
                                <h1 className="text-2xl font-medium">IXC Soft</h1>
                            </Card>
                            <Card className="flex items-center justify-center lg:min-h-32 p-5">
                                <h1 className="text-2xl font-medium">SGP</h1>
                            </Card>
                            <Card className="flex items-center justify-center lg:min-h-32 p-5">
                                <h1 className="text-2xl font-medium">Hubsoft</h1>
                            </Card>
                            <Card className="flex items-center justify-center lg:min-h-32 p-5">
                                <h1 className="text-2xl font-medium">MK Auth</h1>
                            </Card>
                        </div>

                    </aside>
                </Container>

            </section>

            <section className="p-10 my-10">
                <Container>

                    <div className="mb-5">
                        <h2 className="text-center text-4xl font-semibold my-2">Chega de passar raiva!</h2>
                        <p className="text-muted-foreground max-w-2xl m-auto text-center">
                            Pare de ficar no vaco para BOT's que não funcionam
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 relative">

                        <img className="absolute -top-14 -left-48 -rotate-12 hidden lg:flex" src="/angry.png" alt="Emoji com expressão de raiva" width={200} />

                        <div className="p-5">
                            <h2 className="flex flex-col items-center justify-center text-center font-normal text-lg">
                                <img className="-rotate-12 flex lg:hidden" src="/angry.png" alt="Emoji com expressão de raiva" width={100} />
                                Todos já experimentamos a frustração de ficar preso em um atendimento automatizado, sem a ajuda que realmente precisamos. Isso é estressante e desgastante.
                            </h2>
                        </div>

                        <div className="p-5">
                            <h2 className="flex flex-col items-center justify-center text-center font-normal text-lg">
                                Com nossa integração, asseguramos que seus clientes nunca terão que lidar com esse tipo de problema. Eles vão valorizar o atendimento rápido e eficaz que sua empresa proporcionará.
                                <img className="rotate-12 flex lg:hidden" src="/happy.png" alt="Emoji com expressão encantada" width={100} />
                            </h2>
                        </div>

                        <img className="absolute top-14 -right-48 rotate-12 hidden lg:flex" src="/happy.png" alt="Emoji com expressão encantada" width={200} />

                    </div>
                </Container>
            </section>

            {/* Planos */}
            <section className="px-10 mb-10 max-w-7xl mx-auto">

                <div className="grid grid-cols-1">

                    <div className="flex flex-col items-center justify-center mb-20">
                        <h2 className="text-center text-4xl font-semibold my-2">Escolha o plano ideal para você</h2>
                        <p className="text-muted-foreground max-w-2xl m-auto text-center">
                            Comece com o pé direito. Oferecemos 30 dias de teste gratis, ou seja, risco zero para você.
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-10">

                        <div>
                            <Card className="overflow-hidden scale-105 border-violet-500 dark:border-violet-700 bg-violet-50/30 dark:bg-transparent">
                                <h1 className="p-2 text-center text-zinc-100 bg-violet-500 dark:bg-violet-700"></h1>
                                <CardContent className="p-5">
                                    <CardTitle className="text-center text-3xl my-2">
                                        <p>Integração mensal</p>
                                        <p className="font-medium text-muted-foreground">1 mês gratis!</p>

                                        {/* Valores */}
                                        <div className="flex flex-col items-center justify-center gap-4 my-5">

                                            <div>
                                                <span className="flex items-center gap-2">
                                                    <s className="text-muted-foreground text-sm">de R$399,90</s>
                                                    <Badge className="bg-green-500 text-green-900 hover:bg-green500 dark:bg-lime-500 dark:text-lime-900">ECONOMIZE 75%</Badge>
                                                </span>
                                            </div>

                                            <div className="flex">
                                                <p className="text-md">R$119,90</p>
                                            </div>
                                        </div>

                                    </CardTitle>
                                    <ul className="flex items-start justify-center text-start flex-col mt-10 text-md gap-2">
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Áudios customizados da sua empresa</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Localizar cliente pelo telefone</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Localizar cliente pelo CPF ou CNPJ</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Detecção de clientes inadimplentes</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Envio de boletos</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Liberação em confiança</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Status da conexão</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Condições de tempo</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Gerenciar manutenções</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Abertura de atendimentos</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Protocolo do atendimento</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Relatórios uso da URA</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Monitoramento em tempo real</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Voz humanizada feminina e masculina</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Aúdios informativos</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Instância gerenciável</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCheck className="text-sm text-green-500" />
                                            <span className="text-zinc-800 dark:text-zinc-100">Suporte incluso</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}
