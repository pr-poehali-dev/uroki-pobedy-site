import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const lessonsData = [
  {
    id: 1,
    title: "Начало Великой Отечественной войны",
    description: "Изучение периода 1941-1942 гг., первые сражения и оборона Москвы.",
    duration: "45 минут",
    level: "Начальный"
  },
  {
    id: 2,
    title: "Коренной перелом в войне",
    description: "Сталинградская и Курская битвы, их значение для дальнейшего хода войны.",
    duration: "60 минут",
    level: "Средний"
  },
  {
    id: 3,
    title: "Освобождение Европы",
    description: "Наступательные операции Красной Армии в 1944-1945 годах.",
    duration: "50 минут", 
    level: "Продвинутый"
  }
];

const LessonsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-victory-dark mb-2">
              Популярные уроки
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Начните изучение с наших самых популярных материалов, подготовленных экспертами
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/lessons">
              Все уроки
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lessonsData.map((lesson) => (
            <div 
              key={lesson.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="/placeholder.svg" 
                  alt={lesson.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-victory-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                  {lesson.level}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-4">{lesson.duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-victory-dark">{lesson.title}</h3>
                <p className="text-gray-600 mb-4">{lesson.description}</p>
                <Button variant="default" className="w-full" asChild>
                  <Link to={`/lessons/${lesson.id}`}>
                    Начать урок
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
