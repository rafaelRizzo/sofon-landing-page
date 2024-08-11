import { CarouselPlugin } from "@/components/CarouselComponent";
import Container from "@/components/Container";
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      {/* Slogan */}

      <div className="min-w-screen border-b p-2">
        <div className="max-w-sm mx-auto">
          <Navbar />
        </div>
      </div>

      <div className="flex items-center justify-center text-center h-[600px] p-10">
        <Container>
          <h1 className="text-5xl lg:text-7xl font-bold">Automação que melhora a eficiência e a satisfação!</h1>
          <h1 className="text-md lg:text-lg text-muted-foreground p-5 -mt-2">Respostas rápidas, clientes satisfeitos</h1>
          <Button className="my-2">Quero o melhor atendimento para seus clientes</Button>
        </Container>
      </div>

      <CarouselPlugin />

      <div className="p-10 my-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            <div className="flex items-center justify-center">
              <h2 className="text-center font-semibold text-3xl">Integração com os ERP's mais utilizados de provedores</h2>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <Card className="flex items-center justify-center lg:min-h-40 p-5 bg-sky-600">
                <h1 className="text-2xl font-medium">IXC Soft</h1>
              </Card>
              <Card className="flex items-center justify-center lg:min-h-40 p-5 bg-zinc-600">
                <h1 className="text-2xl font-medium">SGP</h1>
              </Card>
              <Card className="flex items-center justify-center lg:min-h-40 p-5 bg-cyan-600">
                <h1 className="text-2xl font-medium">Hubsoft</h1>
              </Card>
              <Card className="flex items-center justify-center lg:min-h-40 p-5 bg-blue-600">
                <h1 className="text-2xl font-medium">MK Auth</h1>
              </Card>
            </div>

          </div>
        </Container>

      </div>

      <div className="px-10 mb-10 max-w-7xl mx-auto">

        <div className="grid grid-cols-1">

          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-center text-3xl font-semibold my-5">Escolha o plano ideal para você</h2>
            <p className="text-muted-foreground">
              Comece com o pé direito. Oferecemos 30 dias para pedir reembolso, ou seja, risco zero para você.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <Card className="p-5">
              <CardContent>
                <CardTitle>
                  <h3 className="text-center">Integração In-server</h3>
                </CardTitle>
              </CardContent>
            </Card>
            <Card className="p-5 bg-violet-600 scale-105">
              <CardContent>
                <CardTitle>
                  <h3 className="text-center">Integração mensal</h3>
                </CardTitle>
                <ul>
                  <li>Áudios customizados da sua empresa</li>
                  <li>Localizar cadastro pelo telefone</li>
                  <li>Localizar cadastro pelo CPF ou CNPJ</li>
                  <li>Detecção de clientes inadimplentes</li>
                  <li>Envio de boletos</li>
                  <li>Status de conexão do cliente</li>
                  <li>Condições de tempo</li>
                  <li>Gerenciar manutenções</li>
                  <li>Abertura de atendimentos</li>
                  <li>Protocolo do atendimento aberto</li>
                  <li>Relatórios uso da URA</li>
                  <li>Monitoramento de ligações em tempo real</li>
                  <li>Localizar cadastro pelo telefone</li>
                  <li>Localizar cadastro pelo telefone</li>
                  <li>Localizar cadastro pelo telefone</li>
                  <li>Localizar cadastro pelo telefone</li>
                  <li>Localizar cadastro pelo telefone</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-5">
              <CardContent>
                <CardTitle>
                  <h1>Suporte PABX</h1>
                </CardTitle>
              </CardContent>
            </Card>
          </div>

        </div>


      </div>

      {/* "Atenda seus clientes com inteligência e rapidez."
      "Respostas rápidas, clientes satisfeitos." */}

      {/* Reutilizável no restante 
      "A URA inteligente que resolve problemas."
      "Atendimento automatizado, sem perder o toque humano."
      "Automação que melhora a eficiência e a satisfação." */}

    </div>
  );
}
