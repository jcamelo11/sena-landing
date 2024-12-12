'use client'

import { useState } from "react"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"

export default function GeneratorPage() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const handleGenerate = () => {
    if (startDate && endDate) {
      // Aquí iría la lógica para generar los periodos
      console.log('Fecha inicio:', startDate)
      console.log('Fecha fin:', endDate)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="container py-12">
          <h1 className="text-3xl font-bold text-center mb-12 text-text-color">
            Generar periodos de <span className="text-primary">Informes</span>
          </h1>
          
          <div className="max-w-md mx-auto space-y-8">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Ingrese fecha inicio de Etapa Productiva
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? (
                      format(startDate, "dd/MM/yyyy", { locale: es })
                    ) : (
                      "dd/mm/aaaa"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Ingrese fecha final de Etapa Productiva
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? (
                      format(endDate, "dd/MM/yyyy", { locale: es })
                    ) : (
                      "dd/mm/aaaa"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4  border-primary transition-all duration-200 transform hover:scale-105"
              onClick={handleGenerate}
              disabled={!startDate || !endDate}
            >
              Generar
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

