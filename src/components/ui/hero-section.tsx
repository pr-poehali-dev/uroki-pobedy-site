import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-pattern py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-victory-dark leading-tight">
              Образовательный проект<br />
              <span className="text-victory-red">«Уроки Победы»</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Интерактивные материалы и уроки, посвященные героическим страницам 
              истории нашей страны. Изучайте, помните, гордитесь!
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/lessons">
                  Начать обучение
                  <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  О проекте
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 animate-zoom-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-victory-blue/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-victory-red/10 rounded-full"></div>
              <img 
                src="/placeholder.svg" 
                alt="Уроки Победы" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
