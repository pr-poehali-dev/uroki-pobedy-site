import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import FeaturesSection from "@/components/ui/features-section";
import LessonsSection from "@/components/ui/lessons-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <LessonsSection />
        <section className="py-20 bg-victory-red/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-victory-dark mb-6">
              Присоединяйтесь к проекту «Уроки Победы»
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Расширяйте свои знания о важнейших страницах истории нашей страны.
              Станьте частью сообщества увлеченных историей людей.
            </p>
            <div className="inline-block bg-white rounded-lg p-8 shadow-lg">
              <div className="text-5xl font-bold text-victory-red mb-4">75+</div>
              <p className="text-gray-600">интерактивных уроков и материалов по истории</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
