import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, Star, BookOpen, GraduationCap, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-victory-red" />
            <span className="text-2xl font-playfair font-bold text-victory-dark">Уроки Победы</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`text-gray-700 hover:text-victory-red font-medium transition-colors ${location.pathname === '/' ? 'text-victory-red' : ''}`}>
              Главная
            </Link>
            <Link to="/lessons" className={`text-gray-700 hover:text-victory-red font-medium transition-colors ${location.pathname === '/lessons' ? 'text-victory-red' : ''}`}>
              Уроки
            </Link>
            <Link to="/materials" className={`text-gray-700 hover:text-victory-red font-medium transition-colors ${location.pathname === '/materials' ? 'text-victory-red' : ''}`}>
              Материалы
            </Link>
            <Link to="/about" className={`text-gray-700 hover:text-victory-red font-medium transition-colors ${location.pathname === '/about' ? 'text-victory-red' : ''}`}>
              О проекте
            </Link>
            <Button variant="default" className="bg-victory-red hover:bg-victory-red/90 ml-2">
              <BookOpen className="mr-1" />
              Начать обучение
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-gray-700 hover:text-victory-red py-2 px-4 font-medium ${location.pathname === '/' ? 'text-victory-red' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/lessons" 
                className={`text-gray-700 hover:text-victory-red py-2 px-4 font-medium ${location.pathname === '/lessons' ? 'text-victory-red' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Уроки
              </Link>
              <Link 
                to="/materials" 
                className={`text-gray-700 hover:text-victory-red py-2 px-4 font-medium ${location.pathname === '/materials' ? 'text-victory-red' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Материалы
              </Link>
              <Link 
                to="/about" 
                className={`text-gray-700 hover:text-victory-red py-2 px-4 font-medium ${location.pathname === '/about' ? 'text-victory-red' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                О проекте
              </Link>
              <Button 
                variant="default" 
                className="bg-victory-red hover:bg-victory-red/90 mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="mr-1" />
                Начать обучение
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
