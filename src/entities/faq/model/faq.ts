export interface Question {
  question: string
  answer: string
}

export interface FaqGroup {
  title: string
  count: number
  questions: Question[]
}

export const POPULAR: Question[] = [
  {
    question: 'Почему круглую пиццу ставят в квадратную коробку, а нарезают треугольниками?',
    answer: 'Так проще хранить и перевозить. А треугольники получаются, когда делят круг на равные части.',
  },
  {
    question: 'Почему после ремонта дорога опять проваливается?',
    answer: 'Потому что делают её без соблюдения технологического процесса.',
  },
  { question: 'Почему вода мокрая?', answer: 'Потому что она смачивает поверхности, с которыми соприкасается.' },
  { question: 'Видят ли микробы друг друга?', answer: 'Нет, у большинства микробов нет органов зрения.' },
  { question: 'Почему кровь красная, а вены синие?', answer: 'Вены кажутся синими из-за того, как кожа рассеивает свет. Кровь в них тоже красная.' },
  { question: 'Из чего сделана радуга?', answer: 'Из солнечного света, который преломляется в каплях воды.' },
]

const SAMPLE: Question[] = [
  { question: 'Где найти инструкцию?', answer: 'Все инструкции есть в разделе «Видео».' },
  { question: 'Как связаться с поддержкой?', answer: 'Напиши нам через форму на странице контактов.' },
]

export const GROUPS: FaqGroup[] = [
  { title: 'Популярные вопросы', count: POPULAR.length, questions: POPULAR },
  { title: 'Настройка работы в Signy', count: 25, questions: SAMPLE },
  { title: 'Работа с документами', count: 15, questions: SAMPLE },
  { title: 'Информация по безопасности', count: 17, questions: SAMPLE },
  { title: 'Технические вопросы', count: 16, questions: SAMPLE },
  { title: 'Интеграция', count: 15, questions: SAMPLE },
  { title: 'Общие вопросы', count: 57, questions: SAMPLE },
]
