import HeroSection from "@/components/hero";
import { featuresData, howItWorksData } from "@/data/landing";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
       <HeroSection/>
       <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Analytics to Keep Your Budget on Track!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature,index)=>(
              <Card key={index} className="p-6">
              <CardContent className="space-y-4 pt-4 ">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
            
            ))}
          </div>
        </div>
       </section>

       <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step,index)=>(
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            
            ))}
          </div>
        </div>
       </section>

       <section className="py-20 bg-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
          Say goodbye to manual calculations and hello to smarter financial decisions!
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Let AI do the hard work while you focus on achieving your financial goals!
          </p>
          
          <Link href="/dashboard">
          <Button size="lg" className="bg-white text-blue-500 hover:bg-blue-50 animate-bounce">
             Let's Start
           </Button>
          </Link>
        </div>
       </section>

       
    </div>
  );
}
