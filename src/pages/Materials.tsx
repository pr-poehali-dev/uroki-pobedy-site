import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronRight, Download, Image } from "lucide-react";

const Materials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-victory-red/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-victory-dark mb-4">
              Материалы о Великой Отечественной войне
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Исторические материалы, рассказы, фотографии и интерактивные задания для изучения истории Великой Отечественной войны
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="stories" className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
              <TabsTrigger value="stories" className="text-lg">Рассказы</TabsTrigger>
              <TabsTrigger value="quiz" className="text-lg">Викторина</TabsTrigger>
              <TabsTrigger value="photos" className="text-lg">Фотогалерея</TabsTrigger>
              <TabsTrigger value="documents" className="text-lg">Документы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="stories" className="animate-fade-in">
              <HistoricalStories />
            </TabsContent>
            
            <TabsContent value="quiz" className="animate-fade-in">
              <WarQuiz />
            </TabsContent>
            
            <TabsContent value="photos" className="animate-fade-in">
              <PhotoGallery />
            </TabsContent>
            
            <TabsContent value="documents" className="animate-fade-in">
              <HistoricalDocuments />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const HistoricalStories = () => {
  const stories = [
    {
      id: 1,
      title: "Блокада Ленинграда",
      excerpt: "872 дня героической обороны и страданий города на Неве",
      content: `Блокада Ленинграда, длившаяся с 8 сентября 1941 года по 27 января 1944 года, стала одним из самых трагических эпизодов Великой Отечественной войны. В течение 872 дней город находился в кольце фашистской блокады.

Зимой 1941-1942 годов в городе не было топлива, электричества, не работал водопровод. Нормы выдачи хлеба для рабочих опускались до 250 граммов в день, для служащих, иждивенцев и детей — до 125 граммов.

Несмотря на голод, холод и бомбежки, ленинградцы продолжали трудиться на заводах, выпуская военную продукцию. Работали театры, школы, библиотеки. Дмитрий Шостакович написал свою знаменитую Седьмую «Ленинградскую» симфонию, которая стала символом стойкости города.

За время блокады от голода и лишений погибло, по разным данным, от 600 тысяч до 1,5 миллиона человек. Подвиг ленинградцев навсегда останется в памяти народа как пример беспримерного мужества и стойкости.`,
      date: "8 сентября 1941 — 27 января 1944"
    },
    {
      id: 2,
      title: "Битва за Москву",
      excerpt: "Первое крупное поражение немецкой армии во Второй мировой войне",
      content: `Битва за Москву (30 сентября 1941 — 20 апреля 1942) стала первым стратегическим поражением вермахта во Второй мировой войне. План молниеносного захвата столицы СССР, операция «Тайфун», был сорван героическим сопротивлением советских войск.

К началу декабря 1941 года немецкие войска подошли к Москве на расстояние 25-30 км, но были остановлены. 5-6 декабря 1941 года началось контрнаступление советских войск. В результате ожесточённых боёв противник был отброшен на 100-250 км от столицы.

В битве участвовало более 7 миллионов человек с обеих сторон. Потери советских войск составили около 2 миллионов человек. Немецкие потери — более 500 тысяч солдат и офицеров.

Победа под Москвой имела огромное политическое, стратегическое и международное значение — впервые во Второй мировой войне доселе непобедимая немецкая армия потерпела серьёзное поражение.`,
      date: "30 сентября 1941 — 20 апреля 1942"
    },
    {
      id: 3,
      title: "Сталинградская битва",
      excerpt: "Коренной перелом в ходе Великой Отечественной войны",
      content: `Сталинградская битва (17 июля 1942 — 2 февраля 1943) — одно из крупнейших сражений в истории человечества. Советские войска в ходе оборонительного этапа сражения (с 17 июля по 18 ноября 1942) остановили наступление немецкой армии.

19 ноября 1942 года советские войска перешли в контрнаступление. 2 февраля 1943 года окружённая в Сталинграде группировка немецких войск капитулировала. В плен попали 24 генерала, 2500 офицеров и более 90 тысяч солдат противника.

Сталинградская битва внесла решающий вклад в достижение коренного перелома в ходе Великой Отечественной войны. После Сталинградской битвы немецкое командование было вынуждено перейти к стратегической обороне на всем Восточном фронте.

Героизм защитников Сталинграда был высоко оценен: 125 человек получили звание Героя Советского Союза, более 750 тысяч участников сражения были награждены медалью «За оборону Сталинграда».`,
      date: "17 июля 1942 — 2 февраля 1943"
    }
  ];
  
  const [selectedStory, setSelectedStory] = useState(stories[0]);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <h3 className="text-xl font-bold mb-4">Исторические рассказы</h3>
        <div className="space-y-4">
          {stories.map(story => (
            <Card 
              key={story.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${selectedStory.id === story.id ? 'border-victory-red' : ''}`}
              onClick={() => setSelectedStory(story)}
            >
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{story.title}</CardTitle>
                <CardDescription>{story.excerpt}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-2xl">{selectedStory.title}</CardTitle>
            <CardDescription>
              <span className="bg-victory-blue/10 text-victory-blue px-3 py-1 rounded-full text-sm">
                {selectedStory.date}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] rounded-md border p-4">
              <div className="space-y-4">
                {selectedStory.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Скачать полную версию материала
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

const WarQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const questions = [
    {
      question: "Когда началась Великая Отечественная война?",
      options: [
        "1 сентября 1939 года",
        "22 июня 1941 года",
        "9 мая 1945 года",
        "5 декабря 1941 года"
      ],
      correctAnswer: 1
    },
    {
      question: "Кто был Верховным Главнокомандующим Вооруженными Силами СССР в годы Великой Отечественной войны?",
      options: [
        "Г.К. Жуков",
        "К.К. Рокоссовский",
        "И.В. Сталин",
        "В.М. Молотов"
      ],
      correctAnswer: 2
    },
    {
      question: "Какая битва стала коренным переломом в ходе Великой Отечественной войны?",
      options: [
        "Битва за Москву",
        "Ржевская битва",
        "Сталинградская битва",
        "Битва за Берлин"
      ],
      correctAnswer: 2
    },
    {
      question: "Сколько дней длилась блокада Ленинграда?",
      options: [
        "300 дней",
        "600 дней",
        "872 дня",
        "900 дней"
      ],
      correctAnswer: 2
    },
    {
      question: "Когда был подписан акт о безоговорочной капитуляции Германии?",
      options: [
        "9 мая 1945 года",
        "8 мая 1945 года",
        "2 мая 1945 года",
        "1 мая 1945 года"
      ],
      correctAnswer: 1
    }
  ];
  
  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border-2 border-victory-blue/20">
        <CardHeader className="bg-victory-blue/5">
          <CardTitle className="text-2xl text-center">Викторина по истории Великой Отечественной войны</CardTitle>
          <CardDescription className="text-center">
            Проверьте свои знания о ключевых событиях и фактах войны
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-8">
          {!quizCompleted ? (
            <div className="space-y-6">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Вопрос {currentQuestion + 1} из {questions.length}</span>
                <span>Правильных ответов: {score}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-6">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, idx) => (
                  <div
                    key={idx}
                    className={`
                      p-4 border rounded-lg cursor-pointer transition-all flex items-center
                      ${selectedAnswer === idx ? 
                        (idx === questions[currentQuestion].correctAnswer ? 
                          'bg-green-50 border-green-500' : 
                          'bg-red-50 border-red-500') : 
                        'hover:bg-gray-50'}
                    `}
                    onClick={() => selectedAnswer === null && handleAnswerSelect(idx)}
                  >
                    <div className="mr-3 flex-shrink-0">
                      {selectedAnswer === idx && idx === questions[currentQuestion].correctAnswer && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                      {selectedAnswer === idx && idx !== questions[currentQuestion].correctAnswer && (
                        <span className="h-5 w-5 text-red-500 flex items-center justify-center">✕</span>
                      )}
                      {selectedAnswer !== idx && (
                        <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                          {String.fromCharCode(65 + idx)}
                        </div>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                ))}
              </div>
              
              {selectedAnswer !== null && (
                <div className="mt-6 flex justify-end">
                  <Button onClick={handleNextQuestion}>
                    {currentQuestion + 1 < questions.length ? (
                      <>Следующий вопрос <ChevronRight className="ml-1 h-4 w-4" /></>
                    ) : (
                      'Завершить викторину'
                    )}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center space-y-6 py-8">
              <h3 className="text-2xl font-bold">Викторина завершена!</h3>
              <div className="text-5xl font-bold text-victory-blue py-6">
                {score} / {questions.length}
              </div>
              <p className="text-lg">
                {score === questions.length ? 
                  'Отлично! Вы ответили на все вопросы правильно!' : 
                  score >= questions.length / 2 ? 
                    'Хороший результат! Вы знаете историю, но есть к чему стремиться.' : 
                    'Рекомендуем изучить наши материалы более внимательно.'}
              </p>
              <Button onClick={restartQuiz} className="mt-4">
                Пройти викторину заново
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      title: "Брестская крепость",
      description: "Защитники Брестской крепости во время обороны, июнь 1941",
      category: "1941",
      src: "/images/brest-fortress.jpg"
    },
    {
      id: 2,
      title: "Битва за Москву",
      description: "Советские войска на марше к Москве, декабрь 1941",
      category: "1941",
      src: "/images/moscow-defense.jpg"
    },
    {
      id: 3,
      title: "Блокада Ленинграда",
      description: "Жители блокадного Ленинграда набирают воду из проруби на Неве, зима 1942",
      category: "1942",
      src: "/images/leningrad-blockade.jpg"
    },
    {
      id: 4,
      title: "Сталинградская битва",
      description: "Снайпер Василий Зайцев на позиции в разрушенном Сталинграде, 1942",
      category: "1942",
      src: "/images/stalingrad-1942.jpg"
    },
    {
      id: 5,
      title: "Курская дуга",
      description: "Танковое сражение на Курской дуге, июль 1943",
      category: "1943",
      src: "/images/kursk-battle.jpg"
    },
    {
      id: 6,
      title: "Операция 'Багратион'",
      description: "Советские солдаты во время наступления в Белоруссии, лето 1944",
      category: "1944",
      src: "/images/operation-bagration.jpg"
    },
    {
      id: 7,
      title: "Взятие Берлина",
      description: "Знамя Победы над Рейхстагом, 1 мая 1945",
      category: "1945",
      src: "/images/reichstag-flag.jpg"
    },
    {
      id: 8,
      title: "День Победы",
      description: "Празднование Дня Победы на Красной площади, 9 мая 1945",
      category: "1945",
      src: "/images/victory-day-1945.jpg"
    }
  ];
  
  const categories = ["Все", "1941", "1942", "1943", "1944", "1945"];
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  const filteredPhotos = selectedCategory === "Все" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(category => (
          <Button 
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={selectedCategory === category ? "bg-victory-red" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map(photo => (
          <Card 
            key={photo.id}
            className="overflow-hidden cursor-pointer hover:shadow-md transition-all"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-w-4 aspect-h-3 relative bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image className="h-12 w-12 text-gray-400" />
              </div>
              <img 
                src={photo.src}
                alt={photo.title}
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.src = "/placeholder.svg";
                }}
              />
            </div>
            <CardHeader className="p-3">
              <CardTitle className="text-base">{photo.title}</CardTitle>
              <CardDescription className="text-xs line-clamp-2">{photo.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPhoto(null)}>
          <div className="max-w-5xl w-full bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-w-16 aspect-h-9 bg-black">
              <img 
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="object-contain w-full h-full"
                onError={(e) => {
                  e.target.src = "/placeholder.svg";
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedPhoto.title}</h3>
              <p className="text-gray-600 mt-2">{selectedPhoto.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="bg-victory-blue/10 text-victory-blue px-3 py-1 rounded-full text-sm">
                  {selectedPhoto.category} год
                </span>
                <Button variant="outline" size="sm" onClick={() => setSelectedPhoto(null)}>
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="text-center text-gray-500 italic">
        <p>Примечание: Фотографии представлены в качестве заглушек. В реальном проекте необходимо добавить подлинные исторические фотографии.</p>
      </div>
    </div>
  );
};

const HistoricalDocuments = () => {
  const documents = [
    {
      id: 1,
      title: "Акт о безоговорочной капитуляции Германии",
      description: "Подписан 8 мая 1945 года в Карлсхорсте (Берлин)",
      type: "Официальный документ",
      size: "2.3 MB",
      format: "PDF"
    },
    {
      id: 2,
      title: "Приказ № 227 («Ни шагу назад!»)",
      description: "Издан 28 июля 1942 года",
      type: "Приказ",
      size: "1.8 MB",
      format: "PDF"
    },
    {
      id: 3,
      title: "Дневник Тани Савичевой",
      description: "Дневник школьницы, пережившей начало блокады Ленинграда",
      type: "Личный дневник",
      size: "3.5 MB",
      format: "PDF"
    },
    {
      id: 4,
      title: "Листовки «Окна ТАСС»",
      description: "Коллекция агитационных плакатов времен войны",
      type: "Агитматериалы",
      size: "5.2 MB",
      format: "ZIP"
    },
    {
      id: 5,
      title: "Сообщение Совинформбюро о начале войны",
      description: "22 июня 1941 года",
      type: "Радиосообщение",
      size: "1.2 MB",
      format: "MP3"
    },
    {
      id: 6,
      title: "План «Барбаросса»",
      description: "Директива немецкого командования о нападении на СССР",
      type: "Военный документ",
      size: "2.7 MB",
      format: "PDF"
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="bg-victory-blue/5 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold mb-2">Исторические документы</h3>
        <p className="text-gray-600">
          В этом разделе собраны важнейшие документы, связанные с историей Великой Отечественной войны. 
          Материалы доступны для скачивания в учебных и исследовательских целях.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map(doc => (
          <Card key={doc.id} className="flex">
            <div className="bg-victory-red/10 flex items-center justify-center w-20 flex-shrink-0">
              <span className="text-victory-red font-bold">{doc.format}</span>
            </div>
            <div className="flex-grow p-4">
              <h4 className="font-semibold text-lg">{doc.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{doc.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{doc.type} • {doc.size}</span>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Скачать
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <Separator className="my-8" />
      
      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">Запросить дополнительные материалы</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Если вы не нашли нужный документ или материал, вы можете отправить запрос нашим историкам. 
          Мы постараемся добавить запрашиваемые материалы в нашу коллекцию.
        </p>
        <Button variant="default" className="bg-victory-blue">
          Отправить запрос на материалы
        </Button>
      </div>
    </div>
  );
};

export default Materials;
