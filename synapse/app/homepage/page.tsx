'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/compat/router';
import { Button } from '@/components/ui/button';
import Link from "next/link";
import Image from 'next/image'
import { About } from '../../components/About'
import Slider from "@/components/Slider";
import CircularSlider from "@/components/CircularSlider";
import CardsSection from "@/components/CardSecction";
import ContactUs from "@/components/ContactUs";
import SearchCard from "@/components/SearchBar";
import HomepageImage from '../assets/images/homepage.png'


export default function HomePage () {
  const router = useRouter();

// eslint-disable-next-line react-hooks/exhaustive-deps
async function handleRouteChange() {
  const token = localStorage.getItem('token');
  if (!token) {
    if (router) {
      await router.push('/auth');
    }
  }
}
  useEffect(() => {
    void handleRouteChange();
  }, [handleRouteChange, router]);


  return (
        <>
            <section className="bg-indigo-100 min-h-screen bg-background flex items-center">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8 relative">
                    <div className="flex flex-col justify-center">
                        <div className="space-y-6 mb-6">
                            <h2 className="h1-bold">Heal, Connect, Transform: Your Path to Wellness Begins Here!</h2>
                             <p className="text-lg md:text-24">Connect & Heal with 3,000+ Expert Therapists and empower your mental health journey today.</p>
                        </div>
                        <SearchCard className="p-6 bg-background/80 backdrop-blur-sm z-10 lg:w-[calc(100%+12rem)] lg:-mr-16"/>
                    </div>
                    <div className="relative lg:h-auto lg:-mt-24 lg:mb-24">
                        <Image
                            src={HomepageImage}
                            alt="Descriptive image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>
            <section className="wrapper my-18 flex flex-col gap-8 md:gap-12">
                <div className="w-full">
                    <h3>Learn more about your condition</h3>
                    <Slider/>
                </div>
            </section>
            <section className="wrapper my-18 flex flex-col gap-8 md:gap-12">
                <div className="w-full">
                    <h3>Search doctor by condition</h3>
                    <CircularSlider/>
                </div>
            </section>
            <section className="bg-indigo-100 bg-dotted-pattern bg-contain py-5 md:py-10">
                <div className="flex flex-col items-center">
                    <h1 className="h3-bold mb-4">Don't know where to go? Take quiz!</h1>
                    <Button size="lg" asChild className="button w-full sm:w-fit">
                        <Link href="#services">Take quiz</Link>
                    </Button>
                </div>
            </section>
            <section id="conditions" className="wrapper my-18 flex flex-col gap-8 md:gap-12">
                    <h3>Why Us?</h3>
                    <CardsSection/>
            </section>
            <section className="bd-indigo-100 flex justify-center">
                <ContactUs/>
            </section>
            <section>
                <div>
                    <About/>
                </div>
            </section>
        </>
    );
}
