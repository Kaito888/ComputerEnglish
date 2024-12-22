export const TOPICS = [
    {
        topic: 'Аппаратное обеспечение'
    }, {
        topic: 'Программное обеспечение'
    }, {
        topic: 'Сеть'
    }, {
        topic: 'Данные'
    }, {
        topic: 'Неисправности'
    }, {
        topic: 'Защита данных'
    }
];

const WORDS = [
    //  TOPIC 0
    {
        EnglishWord: 'Computer',
        RussianWord: 'Компьютер',
        topic: 0,
        sentences: [
            {
                part1English: 'I work on the ',
                part2English: '.',
                part1Russian: 'Я работаю на ',
                part2Russian: '.',
                word: {
                    EnglishWord: 'computer',
                    RussianWord: 'компьютере',
                },
            }
        ],
    }, {
        EnglishWord: 'Central processing unit',
        RussianWord: 'Процессор',
        topic: 0,
        sentences: [
            {
                part1English: '',
                part2English: ' is the primary component of a computer that acts as its "control center".',
                part1Russian: '',
                part2Russian: ' это основной компонент компьютера, который действует как его "центр управления".',
                word: {
                    EnglishWord: 'CPU',
                    RussianWord: 'Процессор',
                },
            }
        ],
    }, {
        EnglishWord: 'Random access memory',
        RussianWord: 'Оперативная память',
        topic: 0,
        sentences: [
            {
                part1English: '',
                part2English: ' is a temporary memory bank where computer stores data it needs to retrieve quickly.',
                part1Russian: '',
                part2Russian: ' это банк временной памяти, в котором компьютер хранит данные, необходимые для быстрого извлечения.',
                word: {
                    EnglishWord: 'RAM',
                    RussianWord: 'Оперативная память',
                },
            }
        ],
    }, {
        EnglishWord: 'Graphics processing unit',
        RussianWord: 'Графический процессор',
        topic: 0,
        sentences: [
            {
                part1English: '',
                part2English: ' is an electronic circuit that can perform mathematical calculations at high speed.',
                part1Russian: '',
                part2Russian: ' это электронная схема, которая может выполнять математический вычисления на высокой скорости.',
                word: {
                    EnglishWord: 'GPU',
                    RussianWord: 'Графический процессор',
                },
            }
        ],
    }, {
        EnglishWord: 'Motherboard',
        RussianWord: 'Материнская плата',
        topic: 0,
        sentences: [
            {
                part1English: '',
                part2English: ' is a printed circuit board containing the principal components of a computer or other device, with connectors for other circuit boards to be slotted into.',
                part1Russian: '',
                part2Russian: ' это печатная плата, содержащая основные компоненты компьютера или другого устройства, с разъемами для подключения других плат.',
                word: {
                    EnglishWord: 'Motherboard',
                    RussianWord: 'Материнская плата',
                },
            }
        ],
    }, {
        EnglishWord: 'Hard drive',
        RussianWord: 'Жёсткий диск',
        topic: 0,
        sentences: [
            {
                part1English: '',
                part2English: ' is a type of data storage device that is used in laptops and desktop computers.',
                part1Russian: '',
                part2Russian: ' это тип устройства хранения данных, которое используется в ноутбуках и настольных компьютерах.',
                word: {
                    EnglishWord: 'Hard drive',
                    RussianWord: 'Жёсткий диск',
                },
            }
        ],
    }, {
        EnglishWord: 'Monitor',
        RussianWord: 'Монитор',
        topic: 0,
        sentences: [
            {
                part1English: 'You can watch videos on the ',
                part2English: '.',
                part1Russian: 'Видео можно смотреть на ',
                part2Russian: '.',
                word: {
                    EnglishWord: 'monitor',
                    RussianWord: 'мониторе',
                },
            }
        ],
    },
    // TOPIC 1
    {
        EnglishWord: 'Operating system',
        RussianWord: 'Операционная система',
        topic: 1,
        sentences: [
            {
                part1English: '',
                part2English: ' is the low-level software that supports a computers basic functions, such as scheduling tasks and controlling peripherals.',
                part1Russian: '',
                part2Russian: ' это программное обеспечение низкого уровня, которое поддерживает основные функции компьютера, такие как планирование задач и управление периферийными устройствами.',
                word: {
                    EnglishWord: 'Operatin system',
                    RussianWord: 'Операционная система',
                },
            }
        ],
    }, {
        EnglishWord: 'Application',
        RussianWord: 'Приложение',
        topic: 1,
        sentences: [
            {
                part1English: 'There are a lt of different ',
                part2English: ' available for computers.',
                part1Russian: 'Для компьютеров доступно множество разных ',
                part2Russian: '.',
                word: {
                    EnglishWord: 'applications',
                    RussianWord: 'приложений',
                },
            }
        ],
    }, {
        EnglishWord: 'Browser',
        RussianWord: 'Браузер',
        topic: 1,
        sentences: [
            {
                part1English: 'You can find information from the Internet in a ',
                part2English: '.',
                part1Russian: 'В ',
                part2Russian: ' можно найти информацию из Интернета.',
                word: {
                    EnglishWord: 'browser',
                    RussianWord: 'браузере',
                },
            }
        ],
    }, {
        EnglishWord: 'Antivirus',
        RussianWord: 'Антивирус',
        topic: 1,
        sentences: [
            {
                part1English: '',
                part2English: ' protects your computer from viruses.',
                part1Russian: '',
                part2Russian: ' защищает ваш компьютер от вирусов.',
                word: {
                    EnglishWord: 'Antivirus',
                    RussianWord: 'Антивирус',
                },
            }
        ],
    }, {
        EnglishWord: 'Software update',
        RussianWord: 'Обновление ПО',
        topic: 1,
        sentences: [
            {
                part1English: 'A ',
                part2English: ' is typically a release containing enhancements to the current version.',
                part1Russian: '',
                part2Russian: ' обычно представляет собой выпуск, содержащий улучшения текущей версии.',
                word: {
                    EnglishWord: 'software update',
                    RussianWord: 'Обновление программного обеспечения',
                },
            }
        ],
    },
    // TOPIC 2
    {
        EnglishWord: 'Internet',
        RussianWord: 'Интернет',
        topic: 2,
        sentences: [
            {
                part1English: '',
                part2English: ' is a global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.',
                part1Russian: '',
                part2Russian: ' это глобальная компьютерная сеть, предоставляющая разнообразные средства информации и связи, состоящая из взаимосвязанных сетей, использующих стандартизированные протоколы связи.',
                word: {
                    EnglishWord: 'Internet',
                    RussianWord: 'Интернет',
                },
            }
        ],
    }, {
        EnglishWord: 'Network protocol',
        RussianWord: 'Сетевой протокол',
        topic: 2,
        sentences: [
            {
                part1English: '',
                part2English: ' are a set of rules outlining how connected devices communicate across a network to exchange information easily and safely.',
                part1Russian: '',
                part2Russian: ' это набор правил, описывающих, как подключенные устройства взаимодействуют по сети для простого и безопасного обмена информацией.',
                word: {
                    EnglishWord: 'Network protocols',
                    RussianWord: 'Сетевые протоколы',
                },
            }
        ],
    }, {
        EnglishWord: 'Router',
        RussianWord: 'Роутер',
        topic: 2,
        sentences: [
            {
                part1English: '',
                part2English: ' is a device that forwards data packets to the appropriate parts of a computer network.',
                part1Russian: '',
                part2Russian: ' это устройство, которое пересылает пакеты данных в соответствующие части компьютерной сети.',
                word: {
                    EnglishWord: 'Router',
                    RussianWord: 'Роутер',
                },
            }
        ],
    }, {
        EnglishWord: 'Modem',
        RussianWord: 'Модем',
        topic: 2,
        sentences: [
            {
                part1English: '',
                part2English: ' is a combined device for modulation and demodulation, for example, between the digital data of a computer and the analogue signal of a phone line.',
                part1Russian: '',
                part2Russian: ' это комбинированное устройство для модуляции и демодуляции, например, цифровых данных компьютера и аналогового сигнала телефонной линии.',
                word: {
                    EnglishWord: 'Modem',
                    RussianWord: 'Модем',
                },
            }
        ],
    }, {
        EnglishWord: 'Virtual private network',
        RussianWord: 'Виртуальная частная сеть',
        topic: 2,
        sentences: [
            {
                part1English: '',
                part2English: ' protects its users by encrypting their data and masking their IP addresses.',
                part1Russian: '',
                part2Russian: ' защищает своих пользователей, шифруя их данные и маскируя их IP-адреса.',
                word: {
                    EnglishWord: 'Virtual private network',
                    RussianWord: 'Виртуальная частная сеть',
                },
            }
        ],
    },
    // TOPIC 3
    {
        EnglishWord: 'Cloud storage',
        RussianWord: 'Облачное хранилище',
        topic: 3,
        sentences: [
            {
                part1English: '',
                part2English: ' uses remote servers to save data, such as files, business data, videos, or images.',
                part1Russian: '',
                part2Russian: ' использует удаленные серверы для сохранения данных, таких как файлы, бизнес-данные, видео или изображения.',
                word: {
                    EnglishWord: 'Cloud storage',
                    RussianWord: 'Облачное хранилище',
                },
            }
        ],
    }, {
        EnglishWord: 'Backup',
        RussianWord: 'Резервное копирование',
        topic: 3,
        sentences: [
            {
                part1English: '',
                part2English: ' is a copy of computer data (such as a file or the contents of a hard drive).',
                part1Russian: '',
                part2Russian: ' это копия компьютерных данных (например, файла или содержимого жесткого диска).',
                word: {
                    EnglishWord: 'Backup',
                    RussianWord: 'Резервное копирование',
                },
            }
        ],
    }, {
        EnglishWord: 'File compression',
        RussianWord: 'Сжатие файлов',
        topic: 3,
        sentences: [
            {
                part1English: '',
                part2English: ' is a technique that reduces the size of files and folders on a disk, saving space and improving performance.',
                part1Russian: '',
                part2Russian: ' это метод, который уменьшает размер файлов и папок на диске, экономя место и повышая производительность.',
                word: {
                    EnglishWord: 'File compression',
                    RussianWord: 'Сжатие файлов',
                },
            }
        ],
    }, {
        EnglishWord: 'File encryption',
        RussianWord: 'Шифрование файлов',
        topic: 3,
        sentences: [
            {
                part1English: '',
                part2English: ' transforms data into code that only intended recipients can decipher, preventing unauthorized users from being able to access, view, and understand sensitive information.',
                part1Russian: '',
                part2Russian: ' преобразует данные в код, который могут расшифровать только предполагаемые получатели, предотвращая доступ неавторизованных пользователей к конфиденциальной информации, ее просмотру и пониманию.',
                word: {
                    EnglishWord: 'File encryption',
                    RussianWord: 'Шифрование файлов',
                },
            }
        ],
    }, {
        EnglishWord: 'File sharing',
        RussianWord: 'Общий доступ к файлам',
        topic: 3,
        sentences: [
            {
                part1English: '',
                part2English: ' is the public or private sharing of files or folders on a computer connected to a network.',
                part1Russian: '',
                part2Russian: ' это публичный или частный обмен файлами или папками на компьютере, подключенном к сети.',
                word: {
                    EnglishWord: 'File sharing',
                    RussianWord: 'Общий доступ к файлам',
                },
            }
        ],
    },
    // TOPIC 4
    {
        EnglishWord: 'Error message',
        RussianWord: 'Сообщение об ошибке',
        topic: 4,
        sentences: [
            {
                part1English: 'An ',
                part2English: ' is the information displayed when an unforeseen problem occurs, usually on a computer or other device.',
                part1Russian: '',
                part2Russian: ' это информация, отображаемая при возникновении непредвиденной проблемы, обычно на компьютере или другом устройстве.',
                word: {
                    EnglishWord: 'error message',
                    RussianWord: 'Сообщение об ошибке',
                },
            }
        ],
    }, {
        EnglishWord: 'Blue screen of death',
        RussianWord: 'Синий экран смерти',
        topic: 4,
        sentences: [
            {
                part1English: '',
                part2English: ' is a warning you see when your computer interrupts operations.',
                part1Russian: '',
                part2Russian: ' это предупреждение, которое вы видите, когда ваш компьютер прерывает работу.',
                word: {
                    EnglishWord: 'Blue screen of death',
                    RussianWord: 'Синий экран смерти',
                },
            }
        ],
    }, {
        EnglishWord: 'Reboot',
        RussianWord: 'Перезагрузка',
        topic: 4,
        sentences: [
            {
                part1English: 'To ',
                part2English: ' is to reload the operating system of a computer.',
                part1Russian: '',
                part2Russian: ' означает перезапуск операционной системы компьютера.',
                word: {
                    EnglishWord: 'reboot',
                    RussianWord: 'Перезагрузка',
                },
            }
        ],
    }, {
        EnglishWord: 'Freeze',
        RussianWord: 'Зависание',
        topic: 4,
        sentences: [
            {
                part1English: 'Computer ',
                part2English: ' occurs when either a process or system ceases to respond to inputs.',
                part1Russian: '',
                part2Russian: ' компьютера происходит, когда процесс или система перестают реагировать на входные данные.',
                word: {
                    EnglishWord: 'freeze',
                    RussianWord: 'зависание',
                },
            }
        ],
    }, {
        EnglishWord: 'Troubleshoot',
        RussianWord: 'Устранение неполадок',
        topic: 4,
        sentences: [
            {
                part1English: '',
                part2English: 'ing is a systematic approach to solving a problem.',
                part1Russian: '',
                part2Russian: ' это системный подход к решению проблемы.',
                word: {
                    EnglishWord: 'Troubleshoot',
                    RussianWord: 'Устранение неполадок',
                },
            }
        ],
    }, {
        EnglishWord: 'Crash',
        RussianWord: 'Сбой',
        topic: 4,
        sentences: [
            {
                part1English: 'A computer ',
                part2English: ' occurs when a computer program such as a software application or an operating system stops functioning properly and exits.',
                part1Russian: 'Компьютерный ',
                part2Russian: ' происходит, когда компьютерная программа, такая как программное приложение или операционная система, перестает работать должным образом и завершает работу.',
                word: {
                    EnglishWord: 'crash',
                    RussianWord: 'сбой',
                },
            }
        ],
    }, {
        EnglishWord: 'Malicious software',
        RussianWord: 'Вредоносное ПО',
        topic: 5,
        sentences: [
            {
                part1English: '',
                part2English: ' refers to any intrusive software developed by cybercriminals (often called hackers) to steal data and damage or destroy computers and computer systems.',
                part1Russian: '',
                part2Russian: ' относится к любому навязчивому программному обеспечению, разработанному киберпреступниками (часто называемыми хакерами) для кражи данных и повреждения или уничтожения компьютеров и компьютерных систем.',
                word: {
                    EnglishWord: 'Malicious software',
                    RussianWord: 'Вредоносное ПО',
                },
            }
        ],
    },
    // TOPIC 5
    {
        EnglishWord: 'Password',
        RussianWord: 'Пароль',
        topic: 5,
        sentences: [
            {
                part1English: '',
                part2English: ' is a secret word or phrase that must be used to gain admission to a place.',
                part1Russian: '',
                part2Russian: ' это секретное слово или фраза, которую необходимо использовать, чтобы получить доступ в определенное место.',
                word: {
                    EnglishWord: 'Password',
                    RussianWord: 'Пароль',
                },
            }
        ],
    },  {
        EnglishWord: 'Username',
        RussianWord: 'Имя пользователя',
        topic: 5,
        sentences: [
            {
                part1English: '',
                part2English: ' is an identification used by a person with access to a computer, network, or online service.',
                part1Russian: '',
                part2Russian: ' это идентификатор, используемый лицом, имеющим доступ к компьютеру, сети или онлайн-сервису.',
                word: {
                    EnglishWord: 'Username',
                    RussianWord: 'Имя пользователя',
                },
            }
        ],
    },  {
        EnglishWord: 'Login',
        RussianWord: 'Вход',
        topic: 5,
        sentences: [
            {
                part1English: '',
                part2English: ' is a procedure that enables an entity to access a secure system',
                part1Russian: '',
                part2Russian: ' это процедура, которая позволяет объекту получить доступ к защищенной системе.',
                word: {
                    EnglishWord: 'Login',
                    RussianWord: 'Вход',
                },
            }
        ],
    },  {
        EnglishWord: 'Logout',
        RussianWord: 'Выход',
        topic: 5,
        sentences: [
            {
                part1English: '',
                part2English: ' is an action to end access to a computer system or a website.',
                part1Russian: '',
                part2Russian: ' это действие по прекращению доступа к компьютерной системе или веб-сайту.',
                word: {
                    EnglishWord: 'Logout',
                    RussianWord: 'Выход',
                },
            }
        ],
    },  {
        EnglishWord: 'Authentication',
        RussianWord: 'Аутентификация',
        topic: 5,
        sentences: [
            {
                part1English: '',
                part2English: ' is the process or action of proving or showing something to be true, genuine, or valid.',
                part1Russian: '',
                part2Russian: ' это процесс или действие, направленное на доказательство или демонстрацию того, что что-то является правдивым, подлинным или действительным.',
                word: {
                    EnglishWord: 'Authentication',
                    RussianWord: 'Аутентификация',
                },
            }
        ],
    },  {
        EnglishWord: 'Hacking',
        RussianWord: 'Хакерство',
        topic: 5,
        sentences: [
            {
                part1English: '',
                part2English: ' is the act of compromising digital devices and networks by gaining unauthorized access to an account or computer system.',
                part1Russian: '',
                part2Russian: ' это взлом цифровых устройств и сетей путем получения несанкционированного доступа к учетной записи или компьютерной системе.',
                word: {
                    EnglishWord: '',
                    RussianWord: 'Хакерство',
                },
            }
        ],
    },  {
        EnglishWord: 'Data breach',
        RussianWord: 'Утечка данных',
        topic: 5,
        sentences: [
            {
                part1English: '',
                part2English: ' is a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data.',
                part1Russian: '',
                part2Russian: ' это нарушение безопасности, ведущее к случайному или незаконному уничтожению, потере, изменению, несанкционированному раскрытию персональных данных или доступу к ним.',
                word: {
                    EnglishWord: 'Data breach',
                    RussianWord: 'Утечка данных',
                },
            }
        ],
    },
];

export default WORDS;

/*

 {
        EnglishWord: '',
        RussianWord: '',
        topic: 5,
        sentences: [
            {
                part1English: '',
                part2English: '',
                part1Russian: '',
                part2Russian: '',
                word: {
                    EnglishWord: '',
                    RussianWord: '',
                },
            }
        ],
    },

*/