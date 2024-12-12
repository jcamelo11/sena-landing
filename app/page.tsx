import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { FormatCard } from "@/components/format-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="grid gap-4 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              {/* <p className="text-sm font-semibold text-primary">
                ¡Bienvenido aprendriz a este nuevo sitio web!
              </p> */}
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-text-color">
                ¿Cómo diligenciar los formatos de seguimiento de<span className="text-primary"> etapa productiva</span> ?{" "}
                
              </h1>
              <p className="text-xl text-text-color">
                ¿No sabes diligenciar los formatos de seguimiento de etapa productiva? ¡No te preocupes! Aquí te explicaremos cómo diligenciarlos.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4  border-primary transition-all duration-200 transform hover:scale-105">
                Cómo diligenciar 023|147
              </Button>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/images/home.svg"
                alt="Ilustración de formato"
                width={400}
                height={400}
                priority
                className="w-full h-auto object-cover rounded-lg   "
              />
            </div>
          </div>
        </section>

        <section className="container py-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-color">
            Elige el formato que quieres <span className="text-primary">diligenciar</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FormatCard
              subtitle="Formato F023 Planeación (Concertación)"
              description="Aprende a diligenciar los formatos F023 de planeación"
              imageSrc="/images/concertacion.png"
              buttonText="Ver tutorial"
            />
            <FormatCard
              subtitle="Formato F023 Seguimiento (Parcial)"
              description="Aprende a diligenciar los formatos F023 de seguimiento"
              imageSrc="/images/parcial.png"
              buttonText="Ver tutorial"
            />
            <FormatCard
              subtitle="Formato F023 Evaluación (Final)"
              description="Aprende a diligenciar los formatos F023 de evaluación"
              imageSrc="/images/final.png"
              buttonText="Ver tutorial"
            />
            <FormatCard
              subtitle="Formato F147 (Bitácoras)"
              description="Aprende a diligenciar el formato F147 de bitácoras"
              imageSrc="/images/bitacoras.png"
              buttonText="Ver tutorial"
            />
          </div>
        </section>
        
        <section className="container py-12 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold tracking-tight">
              Requisitos de{" "}
              <span className="text-primary">Certificación</span>
            </h2>
            <p className="text-xl text-text-color">
              Estás a punto de alcanzar la certificación.
              Descubre qué documentos necesitas presentar
              para obtener tu certificado.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6  transition-all duration-200 transform hover:scale-105">
              Conocer requisitos
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/images/ilustacion-certificacion.svg"
              alt="Ilustración de certificación SENA"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

