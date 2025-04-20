import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, ExternalLink, Film, Lightbulb, LockIcon, Play, ShieldCheck, Star, Trophy, Video } from "lucide-react";

const Lessons = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-victory-blue/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-victory-dark mb-4">
              Уроки Победы
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Интерактивные уроки истории о событиях Великой Отечественной войны, основанные на подлинных исторических материалах
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="modules" className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
              <TabsTrigger value="modules" className="text-lg">Учебные модули</TabsTrigger>
              <TabsTrigger value="chronicles" className="text-lg">Видеохроника</TabsTrigger>
              <TabsTrigger value="interactive" className="text-lg">Интерактивные задания</TabsTrigger>
            </TabsList>
            
            <TabsContent value="modules" className="animate-fade-in">
              <LearningModules />
            </TabsContent>
            
            <TabsContent value="chronicles" className="animate-fade-in">
              <VideoChronicles />
            </TabsContent>
            
            <TabsContent value="interactive" className="animate-fade-in">
              <InteractiveTasks />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const LearningModules = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      id: 1,
      title: "Начало войны: 1941 год",
      description: "История первого года войны, от вторжения до битвы за Москву",
      lessons: 6,
      duration: "4 часа",
      progress: 100,
      completed: true,
      image: "/images/feature-1.svg"
    },
    {
      id: 2,
      title: "Коренной перелом: 1942-1943",
      description: "Сталинградская битва, Курская дуга и перелом в ходе войны",
      lessons: 8,
      duration: "5 часов",
      progress: 65,
      completed: false,
      image: "/images/feature-2.svg"
    },
    {
      id: 3,
      title: "Освобождение: 1944-1945",
      description: "Изгнание врага с территории СССР, освобождение Европы и победа",
      lessons: 7,
      duration: "4.5 часа",
      progress: 0,
      completed: false,
      image: "/images/feature-3.svg"
    },
    {
      id: 4,
      title: "Тыл в годы войны",
      description: "Жизнь советских людей в тылу, работа промышленности и сельского хозяйства",
      lessons: 5,
      duration: "3 часа",
      progress: 0,
      completed: false,
      image: "/images/medal.svg"
    },
    {
      id: 5,
      title: "Культура и искусство",
      description: "Роль культуры и искусства в поддержании боевого духа народа",
      lessons: 4,
      duration: "2.5 часа",
      progress: 0,
      completed: false,
      image: "/images/ribbon.svg"
    },
    {
      id: 6,
      title: "Союзники и международные отношения",
      description: "Взаимодействие СССР с союзниками, международная дипломатия",
      lessons: 6,
      duration: "3.5 часа",
      progress: 0,
      completed: false,
      image: "/images/feature-1.svg"
    }
  ];

  const [selectedModule, setSelectedModule] = useState(modules[0]);
  
  const lessonsList = [
    {
      id: 1,
      moduleId: 1,
      title: "22 июня 1941 года",
      description: "Начало войны, первые дни вторжения",
      duration: "45 минут",
      completed: true
    },
    {
      id: 2,
      moduleId: 1,
      title: "Оборона Брестской крепости",
      description: "Героическая оборона пограничной крепости",
      duration: "40 минут",
      completed: true
    },
    {
      id: 3,
      moduleId: 1,
      title: "Смоленское сражение",
      description: "Бои за Смоленск летом 1941 года",
      duration: "35 минут",
      completed: true
    },
    {
      id: 4,
      moduleId: 1,
      title: "Киевская операция",
      description: "Оборона Киева и окружение советских войск",
      duration: "40 минут",
      completed: true
    },
    {
      id: 5,
      moduleId: 1,
      title: "Блокада Ленинграда",
      description: "Начало блокады города на Неве",
      duration: "50 минут",
      completed: true
    },
    {
      id: 6,
      moduleId: 1,
      title: "Битва за Москву",
      description: "Оборона столицы и контрнаступление Красной Армии",
      duration: "50 минут",
      completed: true
    },
    {
      id: 7,
      moduleId: 2,
      title: "Весна-лето 1942 года",
      description: "Харьковская операция и наступление немецких войск",
      duration: "40 минут",
      completed: true
    },
    {
      id: 8,
      moduleId: 2,
      title: "Начало Сталинградской битвы",
      description: "Оборонительный этап Сталинградской битвы",
      duration: "45 минут",
      completed: true
    },
    {
      id: 9,
      moduleId: 2,
      title: "Операция «Уран»",
      description: "Контрнаступление под Сталинградом",
      duration: "40 минут",
      completed: true
    },
    {
      id: 10,
      moduleId: 2,
      title: "Кавказская операция",
      description: "Бои на кавказском направлении",
      duration: "35 минут",
      completed: false
    },
    {
      id: 11,
      moduleId: 2,
      title: "Прорыв блокады Ленинграда",
      description: "Операция «Искра» и прорыв блокады",
      duration: "35 минут",
      completed: false
    },
    {
      id: 12,
      moduleId: 2,
      title: "Подготовка к Курской битве",
      description: "Планирование и подготовка к сражению на Курской дуге",
      duration: "30 минут",
      completed: false
    },
    {
      id: 13,
      moduleId: 2,
      title: "Курская битва",
      description: "Оборонительная фаза Курской битвы",
      duration: "45 минут",
      completed: false
    },
    {
      id: 14,
      moduleId: 2,
      title: "Операция «Кутузов»",
      description: "Контрнаступление советских войск",
      duration: "40 минут",
      completed: false
    }
  ];
  
  const filteredLessons = lessonsList.filter(lesson => lesson.moduleId === selectedModule.id);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <h3 className="text-xl font-bold mb-4">Учебные модули</h3>
        <ScrollArea className="h-[600px] rounded-md pr-4">
          <div className="space-y-4">
            {modules.map(module => (
              <Card 
                key={module.id} 
                className={`cursor-pointer transition-all ${selectedModule.id === module.id ? 'border-victory-red shadow-md' : 'hover:shadow-sm'}`}
                onClick={() => setSelectedModule(module)}
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-1">{module.description}</CardDescription>
                    </div>
                    <div className="flex-shrink-0 ml-3">
                      <img src={module.image} alt="" className="w-10 h-10" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex text-sm text-gray-600 space-x-4 mt-2">
                    <div className="flex items-center">
                      <Lightbulb className="h-4 w-4 mr-1" />
                      {module.lessons} уроков
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {module.duration}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Прогресс</span>
                      <span>{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>
                  {module.completed && (
                    <div className="mt-2 text-xs flex items-center text-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Модуль завершен
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{selectedModule.title}</CardTitle>
                <CardDescription className="mt-1">{selectedModule.description}</CardDescription>
              </div>
              {selectedModule.progress > 0 && (
                <div className="flex items-center bg-victory-blue/10 text-victory-blue px-3 py-1 rounded-full text-sm">
                  <span className="font-semibold">{selectedModule.progress}%</span>
                  <span className="ml-1">выполнено</span>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-lg mb-4">Содержание модуля</h4>
            <div className="space-y-3">
              {filteredLessons.map(lesson => (
                <div 
                  key={lesson.id} 
                  className={`p-4 border rounded-lg ${lesson.completed ? 'bg-gray-50' : ''} hover:bg-gray-50 transition-colors`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h5 className="font-medium">{lesson.title}</h5>
                      <p className="text-gray-600 text-sm">{lesson.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {lesson.duration}
                      </div>
                    </div>
                    <div className="ml-4">
                      {lesson.completed ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center"
                          onClick={() => navigate('/lesson/'+lesson.id)}
                        >
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          Повторить
                        </Button>
                      ) : (
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="bg-victory-red hover:bg-victory-red/90"
                          onClick={() => navigate('/lesson/'+lesson.id)}
                        >
                          <Play className="h-4 w-4 mr-1" />
                          Начать
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-gray-600 flex items-center">
              <Trophy className="h-4 w-4 mr-1 text-victory-gold" />
              Завершите все уроки, чтобы получить сертификат
            </div>
            <Button 
              onClick={() => navigate('/materials')}
              variant="outline"
            >
              К материалам
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

const VideoChronicles = () => {
  const chronicles = [
    {
      id: 1,
      title: "Начало войны. Июнь 1941",
      description: "Подлинные кадры первых дней войны",
      duration: "7:52",
      thumbnail: "/placeholder.svg",
      viewCount: "18.4K",
      featured: true
    },
    {
      id: 2,
      title: "Битва за Москву. Декабрь 1941",
      description: "Оборона Москвы и контрнаступление советских войск",
      duration: "12:36",
      thumbnail: "/placeholder.svg",
      viewCount: "15.2K",
      featured: true
    },
    {
      id: 3,
      title: "Сталинградская битва. 1942-1943",
      description: "Хроника боев в городе на Волге",
      duration: "14:18",
      thumbnail: "/placeholder.svg",
      viewCount: "21.5K",
      featured: true
    },
    {
      id: 4,
      title: "Блокада Ленинграда",
      description: "Жизнь и борьба блокадного города",
      duration: "15:42",
      thumbnail: "/placeholder.svg",
      viewCount: "16.8K",
      featured: false
    },
    {
      id: 5,
      title: "Курская дуга. Июль 1943",
      description: "Крупнейшее танковое сражение Второй мировой войны",
      duration: "9:24",
      thumbnail: "/placeholder.svg",
      viewCount: "12.3K",
      featured: false
    },
    {
      id: 6,
      title: "Операция Багратион. Лето 1944",
      description: "Освобождение Белоруссии от фашистских захватчиков",
      duration: "11:37",
      thumbnail: "/placeholder.svg",
      viewCount: "9.7K",
      featured: false
    },
    {
      id: 7,
      title: "Взятие Берлина. Апрель-май 1945",
      description: "Штурм Берлина и водружение Знамени Победы над Рейхстагом",
      duration: "16:25",
      thumbnail: "/placeholder.svg",
      viewCount: "25.6K",
      featured: false
    },
    {
      id: 8,
      title: "День Победы. 9 мая 1945",
      description: "Праздник Победы в Москве и других городах СССР",
      duration: "8:45",
      thumbnail: "/placeholder.svg",
      viewCount: "31.2K",
      featured: false
    },
    {
      id: 9,
      title: "Парад Победы. 24 июня 1945",
      description: "Исторический парад советских войск на Красной площади",
      duration: "19:28",
      thumbnail: "/placeholder.svg",
      viewCount: "27.8K",
      featured: false
    }
  ];
  
  const documentaries = [
    {
      id: 1,
      title: "Тыл фронту",
      description: "О работе советской промышленности в годы войны",
      duration: "45:17",
      thumbnail: "/placeholder.svg",
      year: "1985"
    },
    {
      id: 2,
      title: "Дети войны",
      description: "Истории детей, чье детство пришлось на военные годы",
      duration: "52:43",
      thumbnail: "/placeholder.svg",
      year: "2005"
    },
    {
      id: 3,
      title: "Партизаны против Вермахта",
      description: "Документальный сериал о партизанском движении",
      duration: "6 серий",
      thumbnail: "/placeholder.svg",
      year: "2010"
    }
  ];
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  return (
    <div className="space-y-8">
      <div className="bg-victory-gold/10 p-6 rounded-lg">
        <div className="flex items-center text-victory-dark text-lg font-semibold mb-2">
          <Film className="h-5 w-5 mr-2" />
          Видеохроника Великой Отечественной войны
        </div>
        <p className="text-gray-700">
          Этот раздел содержит аутентичные кинохроники, снятые военными операторами в 1941-1945 годах. 
          Кадры сохранены в архивах и предоставляют уникальную возможность увидеть события военных лет.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4">Рекомендуемые видеохроники</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chronicles.filter(c => c.featured).map(video => (
              <Card 
                key={video.id}
                className="overflow-hidden hover:shadow-md transition-all cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="aspect-video relative bg-gray-200">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 rounded-full p-3 hover:bg-victory-red/90 transition-colors">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 text-sm text-gray-500">
                  {video.viewCount} просмотров
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mt-10 mb-4">Все архивные видео</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chronicles.filter(c => !c.featured).map(video => (
              <Card 
                key={video.id}
                className="overflow-hidden hover:shadow-sm transition-all cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="aspect-video relative bg-gray-200">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 rounded-full p-2 hover:bg-victory-red/90 transition-colors">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-1.5 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader className="p-3">
                  <CardTitle className="text-base">{video.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{video.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Документальные фильмы</h3>
          <div className="space-y-4">
            {documentaries.map(doc => (
              <Card 
                key={doc.id}
                className="overflow-hidden hover:shadow-sm transition-all cursor-pointer"
                onClick={() => setSelectedVideo(doc)}
              >
                <div className="aspect-video relative bg-gray-200">
                  <img 
                    src={doc.thumbnail} 
                    alt={doc.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 rounded-full p-2 hover:bg-victory-red/90 transition-colors">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader className="p-3">
                  <CardTitle className="text-base">{doc.title} ({doc.year})</CardTitle>
                  <CardDescription className="text-xs">{doc.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-3 pt-0 text-xs text-gray-500">
                  Продолжительность: {doc.duration}
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h4 className="font-semibold mb-2">Архивные источники</h4>
            <p className="text-sm text-gray-600 mb-4">
              Все видеоматериалы предоставлены Российским государственным архивом кинофотодокументов и Музеем Победы.
            </p>
            <Button variant="outline" className="w-full" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              Посетить сайт архива
            </Button>
          </div>
        </div>
      </div>
      
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-lg">
                  <div className="flex flex-col items-center">
                    <Video className="h-16 w-16 mb-2 text-victory-red" />
                    <p>Здесь будет воспроизводиться видео:</p>
                    <p className="font-bold mt-2">{selectedVideo.title}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedVideo.title}</h3>
              <p className="text-gray-600 mt-2">{selectedVideo.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">
                  Продолжительность: {selectedVideo.duration}
                </span>
                <Button variant="outline" size="sm" onClick={() => setSelectedVideo(null)}>
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const InteractiveTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Хронология войны",
      description: "Расположите события в правильном порядке",
      type: "timeline",
      difficulty: "средняя",
      completed: false,
      locked: false
    },
    {
      id: 2,
      title: "Полководцы Победы",
      description: "Угадайте военачальников по портретам и биографиям",
      type: "matching",
      difficulty: "легкая",
      completed: true,
      locked: false
    },
    {
      id: 3,
      title: "География сражений",
      description: "Отметьте места ключевых сражений на карте",
      type: "map",
      difficulty: "сложная",
      completed: false,
      locked: false
    },
    {
      id: 4,
      title: "Военная техника",
      description: "Распознайте советские и немецкие танки, самолеты и артиллерию",
      type: "quiz",
      difficulty: "средняя",
      completed: false,
      locked: false
    },
    {
      id: 5,
      title: "Шифровальщик",
      description: "Расшифруйте военные донесения",
      type: "puzzle",
      difficulty: "сложная",
      completed: false,
      locked: true
    },
    {
      id: 6,
      title: "Ордена и медали",
      description: "Узнайте историю наград Великой Отечественной войны",
      type: "memory",
      difficulty: "легкая",
      completed: false,
      locked: true
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map(task => (
          <Card 
            key={task.id}
            className={`overflow-hidden ${task.locked ? 'opacity-70' : 'hover:shadow-md'} transition-all`}
          >
            <CardHeader className={`p-4 ${task.locked ? '' : 'cursor-pointer'}`}>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{task.title}</CardTitle>
                {task.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                {task.locked && <LockIcon className="h-5 w-5 text-gray-400" />}
              </div>
              <CardDescription>{task.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">Сложность:</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    task.difficulty === 'легкая' ? 'bg-green-100 text-green-700' :
                    task.difficulty === 'средняя' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {task.difficulty}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{task.type}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              {task.locked ? (
                <Button variant="outline" className="w-full" disabled>
                  <LockIcon className="h-4 w-4 mr-2" />
                  Разблокируется после предыдущих заданий
                </Button>
              ) : (
                <Button 
                  variant={task.completed ? "outline" : "default"}
                  className={task.completed ? "" : "bg-victory-blue"}
                  size="sm"
                  className="w-full"
                >
                  {task.completed ? 'Пройти снова' : 'Начать задание'}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Separator className="my-10" />
      
      <div className="bg-victory-gold/10 rounded-lg p-6 max-w-3xl mx-auto">
        <div className="flex items-center mb-4">
          <ShieldCheck className="h-8 w-8 text-victory-gold mr-3" />
          <h3 className="text-xl font-bold">Заработайте медаль "Знаток истории"</h3>
        </div>
        <p className="text-gray-700 mb-4">
          Пройдите все интерактивные задания, чтобы получить цифровую медаль "Знаток истории" и сертификат о прохождении курса. 
          Вы сможете поделиться своими достижениями в социальных сетях.
        </p>
        <div className="bg-white rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Ваш прогресс:</p>
            <div className="flex items-center mt-1">
              <Progress value={16} className="w-40 h-2 mr-3" />
              <span className="text-sm">1 из 6 заданий</span>
            </div>
          </div>
          <Button>Продолжить обучение</Button>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
