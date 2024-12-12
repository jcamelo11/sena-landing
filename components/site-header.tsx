'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'

const navItems = ["Formatos de Seguimiento", "Generador", "Requisitos de certificación", "Caprendizaje"]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="transition-transform hover:scale-105">
            <Image 
              src="/images/seguimiento-logo.svg" 
              alt="SENA Logo" 
              width={300} 
              height={60}
              className="aspect-square"
            />
          </Link>
          <nav className="hidden md:flex justify-center items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                className="relative font-medium text-text-color before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-primary before:transition-all before:duration-200 hover:text-primary hover:before:scale-x-100"
              >
                {item}
              </Link>
            ))}
          </nav>
          <button 
            className="md:hidden text-text-color"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-text-color hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

