import { BookOpen, Medal, Video, Users } from "lucide-react";

const featuresData = [
  {
    icon: <BookOpen className="h-8 w-8 text-victory-blue" />,
    title: "Интерактивные уроки",
    description: "Увлекательные занятия с использованием современных методик обучения."
  },
  {
    icon: <Medal className="h-8 w-8 text-victory-red" />,
    title: "Исторические материалы",
    description: "Богатая коллекция документов, фотографий и архивных материалов."
  },
  {
    icon: <Video className="h-8 w-8 text-victory-gold" />,
    title: "Видеолекции",
    description: "Документальные фильмы и видеозаписи с комментариями историков."
  },
  {
    icon: <Users className="h-8 w-8 text-victory-blue" />,
    title: "Сообщество",
    description: "Возможность общаться с единомышленниками и делиться знаниями."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-victory-dark mb-4">
            Почему выбирают наш проект
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            «Уроки Победы» — это современный образовательный ресурс, 
            разработанный специально для тех, кто интересуется историей.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 p-3 inline-block bg-white rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-victory-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
