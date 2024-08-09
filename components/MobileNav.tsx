'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import Image from 'next/image';

const MobileNav = ({user}: MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
        <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent></SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
