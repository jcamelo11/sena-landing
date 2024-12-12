import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

interface FormatCardProps {
  subtitle: string
  description: string
  imageSrc: string
  buttonText: string
}

export function FormatCard({ subtitle, description, imageSrc, buttonText }: FormatCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={subtitle}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-200 hover:scale-105"
        />
      </div>
      <CardContent className="flex-1 p-4 space-y-4">
        <h3 className="text-lg font-semibold text-text-color">{subtitle}</h3>
        <p className="text-text-color">{description}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4  border-primary transition-all duration-200 transform hover:scale-105">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}

