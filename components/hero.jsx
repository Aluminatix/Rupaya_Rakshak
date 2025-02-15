import React from 'react'
import { Button } from './ui/button'
import Link from "next/link";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="pb-40 px-40 py-40">
      <div className='container mx-auto text-center'>
        <h1 className='text-5xl md:text-8xl lg:text-[60px] pb-6'>
        Take Control of Your Expenses. Save More, Stress Less!
        </h1>
        <p className='text-xl mb-8 max-w-2xl mx-auto'>
        Tired of losing track of where your money goes? With our AI-driven expense tracker, you get personalized budget recommendations, automatic categorization, and insightful reports – all in one place.
        </p>
        <div className='flex justify-center space-x-4'>
            <Link href="/dashboard">
            <Button size="lg"  className="px-8">
                Get Started
            </Button>
            </Link>
            <Link href="/dashboard">
            <Button size="lg" variant="outline" className="px-8">
                Watch Demo
            </Button>
            </Link>
        </div>
        <div>
            <div>
                <Image
                src="/AI-Hero-img.jpg"
                width={1280}
                height={720}
                alt="Dashboard"
                className="rounded-lg shadow-2xl border mx-auto"
                priority
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

