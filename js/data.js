/**
 * Конфигурация сайта Spiteful Creation.
 * Здесь можно поменять контакты, статус доступности для заказов
 * или вставить ссылку на страницу LightGiver в Steam, когда она появится.
 */
window.SITE_CONFIG = {
  availableForWork: true,
  defaultLang: "ru",
  contacts: {
    telegramUrl: "https://t.me/Frickmad",
    telegramHandle: "@Frickmad",
    email: "info.corpofevil@gmail.com"
  },
  links: {
    // Как только появится страница в Steam — вставьте сюда ссылку (например, "https://store.steampowered.com/app/...")
    // Кнопка на сайте автоматически переключится из режима "Скоро в Steam" в активную кнопку вишлиста.
    steamUrl: ""
  }
};

window.I18N = {
  ru: {
    metaTitle: "Spiteful Creation — Инди-студия (Mitrey & Rozzar) | LightGiver и заказы",
    nav: {
      teamServices: "Кто мы и Услуги",
      game: "Превью LightGiver",
      order: "Заказать работу",
      statusOpen: "Открыты к заказам",
      statusBusy: "Заняты на проекте",
      ctaBtn: "Обсудить задачу"
    },
    hero: {
      badge: "Инди-студия разработки игр",
      title: "Делаем свою игру. Помогаем делать вашу.",
      subtitle:
        "Привет! Мы — Дмитрий (Mitrey) и Виктор (Rozzar), вдвоём стоим за студией Spiteful Creation. Сейчас мы разрабатываем атмосферный симулятор от первого лица LightGiver.\nТакже мы открыты для заказов: поможем вам с разработкой игровых механик, сценарием, 3D-моделями и левел-дизайном.",
      ctaOrder: "Поручить нам задачу",
      ctaGame: "Превью LightGiver",
      quickFacts: [
        { label: "Движок и код", value: "Unity (C#)" },
        { label: "3D и окружение", value: "Blender" },
        { label: "Тексты и диалоги", value: "RU / EN" },
        { label: "Стоимость", value: "Индивидуально" }
      ],
      telemetryStudio: "СТУДИЯ // SPITEFUL CREATION",
      telemetryProject: "ПРОЕКТ // LIGHTGIVER",
      previewCaption: "Кадры из нашей игры LightGiver — нажмите на экран, чтобы открыть в полном размере",
      previewSwitchNight: "Вечер у камина",
      previewSwitchDay: "Консоль сонара",
      previewSwitchDialogue: "Диалоги"
    },
    team: {
      eyebrow: "01 // КТО МЫ И ЧЕМ МОЖЕМ ПОМОЧЬ",
      title: "Два разработчика — четыре направления",
      subtitle:
        "Нас можно позвать на проект по отдельности (например, если вам нужен только программист и нарративщик или только 3D-художник и левел-дизайнер) либо нанять вдвоём, чтобы мы собрали фичу или локацию под ключ.",
      pricingNote:
        "Стоимость рассчитывается индивидуально под задачу. Напишите, что нужно сделать, и мы оценим сроки и бюджет напрямую в переписке.",
      orderFromBtn: "Выбрать в заявке →",
      members: [
        {
          id: "mitrey",
          name: "Дмитрий Шуваев",
          nick: "Mitrey",
          role: "Геймдизайн · Программирование · Сценарий и Диалоги",
          avatar: "assets/avatars/Mitrey.png",
          accent: "amber",
          quote:
            "«Отвечаю за то, чтобы мир работал по понятным (или намеренно странным) правилам, тумблеры на приборах приятно щёлкали в коде, а персонажи разговаривали как живые личности, а не как википедия».",
          tags: ["Unity", "C#", "Геймдизайн", "Диегетический UI", "Сценарий и лор", "Диалоги (RU/EN)"],
          servicesTitle: "С какими задачами ко мне приходить:",
          services: [
            "Программирование игровых механик и систем: интерактивные приборы, верстаки, физика инструментов, рыбалка, крафт, инвентарь",
            "Диегетический и пространственный интерфейс: работающие экраны радаров и датчиков прямо на 3D-объектах в мире игры",
            "Геймдизайн: продумывание кор-лупа, проектирование систем с нуля, написание понятных диздоков",
            "Сценарии, лор и нелинейные диалоги с характером, условиями и живой иронией (на русском и английском)"
          ]
        },
        {
          id: "rozzar",
          name: "Виктор Белоцкий",
          nick: "Rozzar",
          role: "3D-графика · Окружение · Левел-дизайн и Свет",
          avatar: "assets/avatars/Rozzar.png",
          accent: "cyan",
          quote:
            "«Моделирую всё, что можно потрогать в кадре — от шестерёнок маяка и медных баков до архитектуры, — и собираю из этого обжитые локации с правильным светом и атмосферой».",
          tags: ["Blender", "3D-модели и механизмы", "Левел-дизайн", "Освещение", "Окружение"],
          servicesTitle: "С какими задачами ко мне приходить:",
          services: [
            "3D-моделирование: пропсы, ретро-приборы, механизмы, оружие, инструменты, мебель и модульная архитектура",
            "Левел-дизайн: от блокаута и геометрии маршрутов до финальной сборки локаций и расстановки деталей",
            "Художественный свет и атмосфера: контраст уютных интерьеров (камин, свечи) и ночного экстерьера, туман, погода",
            "Оптимизация моделей, аккуратная топология, настройка материалов и готовых префабов под движок"
          ]
        }
      ],
      duo: {
        badge: "СОВМЕСТНЫЙ РЕЖИМ // MITREY + ROZZAR",
        title: "Нужна готовая фича, локация или прототип «под ключ»?",
        desc:
          "Когда мы работаем в паре, вы не тратите время на попытки подружить код одного специалиста с 3D-моделями другого. Виктор моделирует объекты и выставляет сцену со светом, а Дмитрий сразу оживляет её скриптами, интерфейсами и диалогами.",
        cta: "Заказать работу дуэтом"
      }
    },
    game: {
      eyebrow: "02 // НАША ИГРА",
      title: "Превью LightGiver",
      genreChip: "Атмосферный симулятор от первого лица",
      platformChip: "ПК / Steam",
      statusBadge: "В разработке",
      steamSoon: "Страница в Steam — скоро",
      steamWishlist: "Добавить в желаемое в Steam",
      description:
        "Ухаживайте за маяком, наслаждайтесь безмятежными днями и ищите благосклонности богини солнца. А когда опустится ночь — садитесь за пульт управления, считывайте данные приборов, ведите заблудшие души сквозь тьму и не позвольте прошлому смотрителю сломать вам жизнь.",
      devlogLabel: "Дневники разработки",
      devlogNote:
        "Подробные дневники разработки и заметки о процессе создания игры мы публикуем на площадках вроде Boosty.",
      tabScreenshots: "Скриншоты",
      tabGifs: "Гифки",
      openFullscreenHint: "Нажмите на кадр для просмотра во весь экран"
    },
    order: {
      eyebrow: "03 // ЗАКАЗАТЬ РАБОТУ ИЛИ ОБСУДИТЬ ПРОЕКТ",
      title: "Выберите реплику — начнём диалог",
      subtitle:
        "Отметьте нужные направления (в стиле диалоговых табличек из нашей игры), опишите задачу своими словами и отправьте нам в Telegram или на почту.",
      step1Label: "1. Что нужно сделать? (можно выбрать несколько вариантов):",
      options: [
        {
          id: "code",
          who: "Mitrey",
          color: "amber",
          title: "Программирование и игровые механики",
          sub: "Интерактивные приборы, системы, физика, диегетический интерфейс"
        },
        {
          id: "gd-narrative",
          who: "Mitrey",
          color: "amber",
          title: "Геймдизайн, сценарий или диалоги",
          sub: "Диздок, баланс, лор, нелинейные диалоги (RU / EN)"
        },
        {
          id: "3d-blender",
          who: "Rozzar",
          color: "cyan",
          title: "3D-моделирование и ассеты",
          sub: "Пропсы, механизмы, ретро-техника, оружие, окружение"
        },
        {
          id: "level-light",
          who: "Rozzar",
          color: "cyan",
          title: "Левел-дизайн и освещение",
          sub: "Блокаут, сборка сцены, интерьерный и ночной свет"
        },
        {
          id: "duo-turnkey",
          who: "Mitrey + Rozzar",
          color: "red",
          title: "Задача «под ключ» от вас обоих",
          sub: "Готовая локация, вертикальный срез или комплексная фича"
        },
        {
          id: "cipher",
          who: "???",
          color: "cipher",
          title: "EAT 6WC ZLI /3DS 0Y 017T BL5VVGK",
          sub: "Расшифровать и просто поздороваться / спросить про LightGiver"
        }
      ],
      step2Label: "2. Расскажите в паре предложений о вашей задаче:",
      messagePlaceholder:
        "Например: привет! Делаем инди-игру, нужно смоделировать 5 ретро-приборов и запрограммировать им рабочие экраны и тумблеры. По срокам хотим уложиться в 2–3 недели...",
      noPdNote:
        "🔒 Сайт не собирает и не хранит персональные данные. Текст заявки формируется локально в вашем браузере — не указывайте здесь ФИО, телефон или паспортные данные, мы увидим ваш контакт, когда вы напишете нам в Telegram или на почту.",
      previewBoxLabel: "Сформированное сообщение (готово к отправке):",
      previewBoxTag: "ТЕКСТ // ГОТОВО",
      btnTelegram: "Скопировать и открыть Telegram",
      btnEmail: "Отправить по Email",
      btnCopyOnly: "Скопировать текст заявки",
      copiedToast: "Текст заявки скопирован в буфер обмена! Теперь просто вставьте его в чат.",
      legalLinkText: "Правовая информация и Политика конфиденциальности (152-ФЗ)",
      directTitle: "Прямые контакты без форм:",
      directSub: "Если не хотите заполнять поля — пишите нам напрямую. Стоимость обсуждаем индивидуально по задаче.",
      directRoleMitrey: "Дмитрий Шуваев (Mitrey) — Код, Геймдизайн, Сценарий",
      directRoleRozzar: "Виктор Белоцкий (Rozzar) — 3D-графика, Левел-дизайн"
    },
    footer: {
      motto: "Spiteful Creation — игры, код, 3D и живые истории.",
      copyright: "© 2026 Spiteful Creation (Дмитрий «Mitrey» Шуваев & Виктор «Rozzar» Белоцкий).",
      easterEgg: "СОНАР МК II // ЧАСТОТА 2.60 КГЦ // ДАЛЬНОСТЬ 50 КМ",
      legalLinkText: "Правовая информация и 152-ФЗ"
    },
    legal: {
      title: "Правовая информация и защита данных",
      badge: "152-ФЗ · 38-ФЗ · 53-ФЗ",
      sections: [
        {
          heading: "1. Отсутствие сбора и обработки персональных данных (152-ФЗ)",
          body: "Настоящий сайт является информационным портфолио независимых разработчиков Spiteful Creation (Дмитрия Шуваева и Виктора Белоцкого). Сайт полностью статический, не имеет серверной базы данных, форм регистрации или форм обратной связи с отправкой данных на сервер. Мы не собираем, не храним, не передаём третьим лицам и не осуществляем трансграничную передачу персональных данных — на сайте отсутствуют сторонние счётчики аналитики (Google Analytics, Яндекс.Метрика и т.п.) и внешняя подгрузка шрифтов с зарубежных серверов. Нажимая кнопки Telegram или Email, вы самостоятельно переходите в выбранный мессенджер или почтовый клиент."
        },
        {
          heading: "2. Техническое хранилище браузера (localStorage)",
          body: "Сайт не использует рекламные или отслеживающие cookie-файлы. Единственная техническая запись sc_lang_manual сохраняется локально в вашем браузере только в том случае, если вы вручную переключили язык интерфейса (RU / EN). По умолчанию язык определяется автоматически локальными средствами браузера без запросов к внешним серверам."
        },
        {
          heading: "3. Информационный характер материалов (38-ФЗ «О рекламе»)",
          body: "Все описания навыков, примеры работ и материалы по разрабатываемой игре LightGiver размещены исключительно в справочно-информационных целях для ознакомления с деятельностью авторов. Размещённая информация не является рекламой и не является публичной офертой в смысле ст. 437 Гражданского кодекса РФ."
        }
      ]
    }
  },

  en: {
    metaTitle: "Spiteful Creation — Indie Studio (Mitrey & Rozzar) | LightGiver & Commissions",
    nav: {
      teamServices: "Team & Services",
      game: "LightGiver Preview",
      order: "Hire Us",
      statusOpen: "Available for Commissions",
      statusBusy: "Currently Booked",
      ctaBtn: "Discuss a Task"
    },
    hero: {
      badge: "Indie Game Development Studio",
      title: "Building our own game. Ready to help build yours.",
      subtitle:
        "Hi! We are Dmitry (Mitrey) and Viktor (Rozzar), the two developers behind Spiteful Creation. Right now we are developing LightGiver, a first-person atmospheric simulator.\nWe are also open for commissions: ready to help you with gameplay mechanics, writing, 3D models, and level design.",
      ctaOrder: "Commission Us",
      ctaGame: "LightGiver Preview",
      quickFacts: [
        { label: "Engine & Code", value: "Unity (C#)" },
        { label: "3D & Environments", value: "Blender" },
        { label: "Writing & Dialogues", value: "EN / RU" },
        { label: "Pricing", value: "Per task" }
      ],
      telemetryStudio: "STUDIO // SPITEFUL CREATION",
      telemetryProject: "PROJECT // LIGHTGIVER",
      previewCaption: "In-game shots from LightGiver — click the display to open fullscreen",
      previewSwitchNight: "Evening by the Fire",
      previewSwitchDay: "Sonar Console",
      previewSwitchDialogue: "Dialogues"
    },
    team: {
      eyebrow: "01 // WHO WE ARE & WHAT WE DO",
      title: "Two developers — four disciplines",
      subtitle:
        "You can hire either of us individually (if you only need a programmer/writer or a 3D/level artist) or bring both of us on board as a duo to build a complete feature or playable location.",
      pricingNote:
        "Pricing is calculated individually per task. Tell us what you need built, and we'll estimate the timeline and budget directly in chat.",
      orderFromBtn: "Select in brief builder →",
      members: [
        {
          id: "mitrey",
          name: "Dmitry Shuvaev",
          nick: "Mitrey",
          role: "Game Design · Programming · Script & Dialogues",
          avatar: "assets/avatars/Mitrey.png",
          accent: "amber",
          quote:
            "\"I make sure the game world runs on clear (or deliberately strange) rules, switches on instruments feel satisfying to flip in code, and characters talk like actual personalities instead of walking encyclopedias.\"",
          tags: ["Unity", "C#", "Game Design", "Diegetic UI", "Narrative", "Dialogues (EN/RU)"],
          servicesTitle: "What you can commission me for:",
          services: [
            "Gameplay mechanics & systems: interactive instruments, workbenches, tool physics, fishing, crafting, inventory systems",
            "Diegetic & world-space UI: live radar sweeps, oscilloscopes, and telemetry displays rendered directly on 3D objects",
            "Game design: core loop architecture, system design from scratch, and clear, practical GDDs",
            "Scripts, worldbuilding, and branching dialogues with sharp character voice and conditional logic (in English and Russian)"
          ]
        },
        {
          id: "rozzar",
          name: "Viktor Belotsky",
          nick: "Rozzar",
          role: "3D Art · Environments · Level Design & Lighting",
          avatar: "assets/avatars/Rozzar.png",
          accent: "cyan",
          quote:
            "\"I model everything you can touch on screen — from lighthouse gears and copper brewery tanks to architecture — and assemble lived-in scenes with atmospheric lighting.\"",
          tags: ["Blender", "3D Props & Hard-Surface", "Level Design", "Lighting", "Environment Art"],
          servicesTitle: "What you can commission me for:",
          services: [
            "3D modeling: stylized & semi-realistic props, retro-industrial machines, weapons, tools, furniture, and modular architecture",
            "Level design: from greybox blockouts and player flow to final scene assembly and environmental storytelling",
            "Lighting & mood: warm interior lighting (fireplaces, candles) contrasted against moody night exteriors, fog, and weather",
            "Game-ready optimization: clean topology, UV unwrapping, materials, colliders, and engine-ready prefabs"
          ]
        }
      ],
      duo: {
        badge: "CO-OP PRODUCTION // MITREY + ROZZAR",
        title: "Need a complete feature, location, or prototype built turnkey?",
        desc:
          "When you hire both of us together, you don't waste time bridging the gap between separate freelancers. Viktor models the assets and lights the scene while Dmitry wires up the mechanics, diegetic screens, and dialogue systems.",
        cta: "Hire Us as a Duo"
      }
    },
    game: {
      eyebrow: "02 // OUR GAME",
      title: "LightGiver Preview",
      genreChip: "First-Person Atmospheric Simulator",
      platformChip: "PC / Steam",
      statusBadge: "In Development",
      steamSoon: "Steam Page — Coming Soon",
      steamWishlist: "Wishlist on Steam",
      description:
        "Tend to the lighthouse, enjoy tranquil days, and seek the favor of the Sun Goddess. And when night falls — take your seat at the control console, read the instruments, guide lost souls through the darkness, and don't let the previous keeper ruin your life.",
      devlogLabel: "Development Diaries",
      devlogNote:
        "We publish detailed dev logs and behind-the-scenes updates on platforms like Boosty.",
      tabScreenshots: "Screenshots",
      tabGifs: "GIFs",
      openFullscreenHint: "Click to view fullscreen"
    },
    order: {
      eyebrow: "03 // COMMISSION US OR DISCUSS A PROJECT",
      title: "Pick a dialogue line — let's talk",
      subtitle:
        "Click the dialogue plaques that match what you need (styled after our in-game dialogue system), describe your task in your own words, and send it via Telegram or Email.",
      step1Label: "1. What do you need help with? (select one or more):",
      options: [
        {
          id: "code",
          who: "Mitrey",
          color: "amber",
          title: "Gameplay Code & Mechanics",
          sub: "Interactive instruments, systems, tool physics, diegetic UI"
        },
        {
          id: "gd-narrative",
          who: "Mitrey",
          color: "amber",
          title: "Game Design, Script, or Dialogues",
          sub: "GDDs, system balance, lore, branching dialogues (EN / RU)"
        },
        {
          id: "3d-blender",
          who: "Rozzar",
          color: "cyan",
          title: "3D Modeling & Assets",
          sub: "Props, mechanisms, retro-tech, weapons, environment assets"
        },
        {
          id: "level-light",
          who: "Rozzar",
          color: "cyan",
          title: "Level Design & Lighting",
          sub: "Blockouts, scene assembly, cozy interior & moody night lighting"
        },
        {
          id: "duo-turnkey",
          who: "Mitrey + Rozzar",
          color: "red",
          title: "Turnkey Feature or Scene from Both of Us",
          sub: "Playable slice, interactive room, or complete mechanic + 3D"
        },
        {
          id: "cipher",
          who: "???",
          color: "cipher",
          title: "EAT 6WC ZLI /3DS 0Y 017T BL5VVGK",
          sub: "Decrypt & just say hi / ask about LightGiver"
        }
      ],
      step2Label: "2. Tell us a bit about your task:",
      messagePlaceholder:
        "Example: Hey guys! We're working on a first-person indie game and need 5 retro-industrial machines modeled and wired up with working gauges and switches. Hoping to get it done within 2-3 weeks...",
      noPdNote:
        "🔒 This website does not collect or store personal data. Your brief is generated locally in your browser — you don't need to enter personal details here, as we will see your handle or address when you message us via Telegram or Email.",
      previewBoxLabel: "Generated brief (ready to send):",
      previewBoxTag: "UTF-8 // READY",
      btnTelegram: "Copy & Open Telegram",
      btnEmail: "Send via Email",
      btnCopyOnly: "Copy Brief Text",
      copiedToast: "Brief copied to clipboard! Just paste it into our chat.",
      legalLinkText: "Legal Notice & Privacy Policy",
      directTitle: "Direct contacts (skip the form):",
      directSub: "Prefer messaging straight away? Reach out directly. Pricing is individual per task, and we reply fast.",
      directRoleMitrey: "Dmitry Shuvaev (Mitrey) — Code, Game Design, Narrative",
      directRoleRozzar: "Viktor Belotsky (Rozzar) — 3D Art, Level Design"
    },
    footer: {
      motto: "Spiteful Creation — games, code, 3D, and living stories.",
      copyright: "© 2026 Spiteful Creation (Dmitry 'Mitrey' Shuvaev & Viktor 'Rozzar' Belotsky).",
      easterEgg: "SONAR MK II // FREQ 2.60 KHZ // ACTIVE 50 KM",
      legalLinkText: "Legal Notice & Privacy"
    },
    legal: {
      title: "Legal Notice & Privacy Policy",
      badge: "Zero Data Collection · Privacy",
      sections: [
        {
          heading: "1. Zero Personal Data Collection",
          body: "This website is a static portfolio showcasing the independent work of Spiteful Creation (Dmitry Shuvaev & Viktor Belotsky). There is no backend database, user registration, analytics tracking, or third-party font/CDN tracking requests. Your task brief is generated locally inside your browser and is only sent when you open your own Telegram or Email client."
        },
        {
          heading: "2. Browser Storage (localStorage)",
          body: "We do not set advertising or tracking cookies. A single local browser entry (sc_lang_manual) is stored only if you manually toggle the RU / EN language button. Initial language detection runs locally in your browser based on locale and timezone without contacting external IP servers."
        },
        {
          heading: "3. Informational Scope",
          body: "All materials, skill descriptions, and LightGiver previews are provided for informational purposes about our work and do not constitute a binding public offer."
        }
      ]
    }
  }
};

window.LIGHTGIVER_SCREENSHOTS = [
  {
    id: "sonar",
    src: "assets/screenshots/LightGiver_01_sonar_station.png",
    title: { ru: "Консоль сонара SONAR MK II", en: "SONAR MK II Console" }
  },
  {
    id: "console",
    src: "assets/screenshots/LightGiver_02_amaterasu_at_the_console.png",
    title: { ru: "Аматэрасу у пульта управления", en: "Amaterasu at the Control Console" }
  },
  {
    id: "shrine",
    src: "assets/screenshots/LightGiver_03_Shrine.png",
    title: { ru: "Ночное святилище у моря", en: "Coastal Shrine at Night" }
  },
  {
    id: "dialogue",
    src: "assets/screenshots/Amaterasu_Dialogue.png",
    title: { ru: "Диалоги с Аматэрасу", en: "Dialogues with Amaterasu" }
  },
  {
    id: "lantern",
    src: "assets/screenshots/LightGiver_04_lantern_lit.png",
    title: { ru: "Башня маяка и линза Френеля", en: "Lighthouse Lantern & Fresnel Lens" }
  },
  {
    id: "fishing",
    src: "assets/screenshots/LightGiver_06_fishing.png",
    title: { ru: "Рыбалка с датчиком улова", en: "Fishing with Catch Telemetry" }
  },
  {
    id: "cooking",
    src: "assets/screenshots/LightGiver_07_cooking.png",
    title: { ru: "Готовка на маячной кухне", en: "Cooking in the Lighthouse Kitchen" }
  },
  {
    id: "heart",
    src: "assets/screenshots/LightGiver_09_lighthouse_heart.png",
    title: { ru: "Механическое «Сердце маяка»", en: "Mechanical Heart of the Lighthouse" }
  },
  {
    id: "pistol",
    src: "assets/screenshots/LightGiver_10_light_pistol_at_night.png",
    title: { ru: "Световой пистолет в ночной дождь", en: "Light Pistol in the Night Rain" }
  },
  {
    id: "washer",
    src: "assets/screenshots/LightGiver_11_pressure_washer.png",
    title: { ru: "Мойка стен под давлением", en: "High-Pressure Wall Washing" }
  },
  {
    id: "brewery",
    src: "assets/screenshots/LightGiver_12_Brewery.png",
    title: { ru: "Островная пивоварня", en: "Island Brewery" }
  },
  {
    id: "upgrade",
    src: "assets/screenshots/LightGiver_13_Upgrade.png",
    title: { ru: "Верстак модификации снастей", en: "Equipment Upgrade Workbench" }
  },
  {
    id: "fireplace",
    src: "assets/screenshots/LightGiver_15_evening_by_the_fire.png",
    title: { ru: "Вечер у камина", en: "Evening by the Fire" }
  }
];

window.LIGHTGIVER_GIFS = [
  {
    id: "gif_sonar",
    src: "assets/gifs/LightGiver_sonar_watch.gif",
    title: { ru: "Ночная смена за сонаром", en: "Night Watch at the Sonar Console" }
  },
  {
    id: "gif_fire",
    src: "assets/gifs/LightGiver_amaterasu_by_the_fire.gif",
    title: { ru: "Аматэрасу у камина", en: "Amaterasu by the Fireplace" }
  },
  {
    id: "gif_lantern",
    src: "assets/gifs/LightGiver_lighting_the_lantern.gif",
    title: { ru: "Запуск фонаря маяка", en: "Lighting the Lighthouse Lantern" }
  },
  {
    id: "gif_fishing",
    src: "assets/gifs/LightGiver_fishing.gif",
    title: { ru: "Рыбалка у пристани", en: "Fishing by the Pier" }
  },
  {
    id: "gif_cooking",
    src: "assets/gifs/LightGiver_cooking.gif",
    title: { ru: "Приготовление еды на плите", en: "Cooking on the Stove" }
  },
  {
    id: "gif_washer",
    src: "assets/gifs/LightGiver_pressure_washer.gif",
    title: { ru: "Очистка фасада мойкой", en: "Cleaning Walls with the Pressure Washer" }
  }
];
