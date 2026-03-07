// VOQUEX Language System
const LANGS = {
  ar: {
    dir: 'rtl', font: 'Tajawal',
    nav: {
      dashboard: '📊 لوحة التحكم',
      trades: '📋 سجل الصفقات',
      analytics: '📈 الأداء',
      ai: '🤖 AI Coach',
      risk: '🛡️ إدارة المخاطر',
      calculator: '💹 الحاسبة',
      journal: '📝 اليومية',
      leaderboard: '🏆 المتصدرون',
      subscription: '👑 الاشتراك',
      settings: '⚙️ الإعدادات',
      logout: '🚪 تسجيل الخروج',
    },
    dashboard: {
      title: 'لوحة التحكم 📊',
      sub: 'مرحباً بك في Voquex',
      totalPnl: 'إجمالي P&L',
      winRate: 'Win Rate',
      profitFactor: 'Profit Factor',
      avgRR: 'متوسط RR',
      maxDD: 'Max Drawdown',
      totalTrades: 'إجمالي الصفقات',
      balanceCurve: 'منحنى الرصيد',
      recentTrades: 'آخر الصفقات',
      refresh: '🔄 تحديث',
    },
    trades: {
      title: 'سجل الصفقات 📋',
      addTrade: '+ إضافة صفقة',
      pair: 'الزوج',
      direction: 'الاتجاه',
      entry: 'الدخول',
      exit: 'الخروج',
      sl: 'Stop Loss',
      tp: 'Take Profit',
      lots: 'Lots',
      pnl: 'P&L',
      result: 'النتيجة',
      session: 'الجلسة',
      date: 'التاريخ',
      notes: 'الملاحظات',
      mood: 'الحالة',
      win: 'ربح',
      loss: 'خسارة',
      buy: 'شراء',
      sell: 'بيع',
      all: 'الكل',
      search: 'بحث...',
      noTrades: 'لا توجد صفقات بعد',
      delete: 'حذف',
      save: 'حفظ',
      cancel: 'إلغاء',
    },
    common: {
      loading: 'جارٍ التحميل...',
      save: 'حفظ',
      cancel: 'إلغاء',
      delete: 'حذف',
      edit: 'تعديل',
      close: 'إغلاق',
      confirm: 'تأكيد',
      yes: 'نعم',
      no: 'لا',
      search: 'بحث',
      filter: 'فلتر',
      sort: 'ترتيب',
      export: 'تصدير',
      import: 'استيراد',
      freePlan: '🆓 Free Plan',
      proPlan: '⚡ Pro Plan',
      elitePlan: '👑 Elite Plan',
    }
  },

  en: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard: '📊 Dashboard',
      trades: '📋 Trade Log',
      analytics: '📈 Analytics',
      ai: '🤖 AI Coach',
      risk: '🛡️ Risk Management',
      calculator: '💹 Calculator',
      journal: '📝 Journal',
      leaderboard: '🏆 Leaderboard',
      subscription: '👑 Subscription',
      settings: '⚙️ Settings',
      logout: '🚪 Logout',
    },
    dashboard: {
      title: 'Dashboard 📊',
      sub: 'Welcome to Voquex',
      totalPnl: 'Total P&L',
      winRate: 'Win Rate',
      profitFactor: 'Profit Factor',
      avgRR: 'Avg RR',
      maxDD: 'Max Drawdown',
      totalTrades: 'Total Trades',
      balanceCurve: 'Balance Curve',
      recentTrades: 'Recent Trades',
      refresh: '🔄 Refresh',
    },
    trades: {
      title: 'Trade Log 📋',
      addTrade: '+ Add Trade',
      pair: 'Pair',
      direction: 'Direction',
      entry: 'Entry',
      exit: 'Exit',
      sl: 'Stop Loss',
      tp: 'Take Profit',
      lots: 'Lots',
      pnl: 'P&L',
      result: 'Result',
      session: 'Session',
      date: 'Date',
      notes: 'Notes',
      mood: 'Mood',
      win: 'Win',
      loss: 'Loss',
      buy: 'Buy',
      sell: 'Sell',
      all: 'All',
      search: 'Search...',
      noTrades: 'No trades yet',
      delete: 'Delete',
      save: 'Save',
      cancel: 'Cancel',
    },
    common: {
      loading: 'Loading...',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      confirm: 'Confirm',
      yes: 'Yes',
      no: 'No',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      export: 'Export',
      import: 'Import',
      freePlan: '🆓 Free Plan',
      proPlan: '⚡ Pro Plan',
      elitePlan: '👑 Elite Plan',
    }
  },

  fr: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard: '📊 Tableau de bord',
      trades: '📋 Journal de trades',
      analytics: '📈 Analyses',
      ai: '🤖 Coach IA',
      risk: '🛡️ Gestion des risques',
      calculator: '💹 Calculatrice',
      journal: '📝 Journal',
      leaderboard: '🏆 Classement',
      subscription: '👑 Abonnement',
      settings: '⚙️ Paramètres',
      logout: '🚪 Déconnexion',
    },
    dashboard: {
      title: 'Tableau de bord 📊',
      sub: 'Bienvenue sur Voquex',
      totalPnl: 'P&L Total',
      winRate: 'Taux de gain',
      profitFactor: 'Facteur de profit',
      avgRR: 'RR Moyen',
      maxDD: 'Drawdown Max',
      totalTrades: 'Total des trades',
      balanceCurve: 'Courbe de solde',
      recentTrades: 'Derniers trades',
      refresh: '🔄 Actualiser',
    },
    trades: {
      title: 'Journal de trades 📋',
      addTrade: '+ Ajouter un trade',
      pair: 'Paire',direction:'Direction',entry:'Entrée',exit:'Sortie',
      sl:'Stop Loss',tp:'Take Profit',lots:'Lots',pnl:'P&L',
      result:'Résultat',session:'Session',date:'Date',notes:'Notes',mood:'Humeur',
      win:'Gain',loss:'Perte',buy:'Achat',sell:'Vente',all:'Tout',
      search:'Rechercher...',noTrades:'Aucun trade',delete:'Supprimer',save:'Sauvegarder',cancel:'Annuler',
    },
    common: {
      loading:'Chargement...',save:'Sauvegarder',cancel:'Annuler',delete:'Supprimer',
      edit:'Modifier',close:'Fermer',confirm:'Confirmer',yes:'Oui',no:'Non',
      search:'Rechercher',filter:'Filtrer',sort:'Trier',export:'Exporter',import:'Importer',
      freePlan:'🆓 Gratuit',proPlan:'⚡ Pro',elitePlan:'👑 Elite',
    }
  },

  es: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard:'📊 Panel',trades:'📋 Registro',analytics:'📈 Análisis',
      ai:'🤖 Coach IA',risk:'🛡️ Gestión de riesgo',calculator:'💹 Calculadora',
      journal:'📝 Diario',leaderboard:'🏆 Clasificación',subscription:'👑 Suscripción',
      settings:'⚙️ Configuración',logout:'🚪 Cerrar sesión',
    },
    dashboard:{title:'Panel 📊',sub:'Bienvenido a Voquex',totalPnl:'P&L Total',winRate:'Tasa de éxito',
      profitFactor:'Factor de beneficio',avgRR:'RR Promedio',maxDD:'Drawdown Máx',
      totalTrades:'Total de operaciones',balanceCurve:'Curva de balance',recentTrades:'Últimas operaciones',refresh:'🔄 Actualizar'},
    trades:{title:'Registro 📋',addTrade:'+ Agregar operación',pair:'Par',direction:'Dirección',
      entry:'Entrada',exit:'Salida',sl:'Stop Loss',tp:'Take Profit',lots:'Lotes',pnl:'P&L',
      result:'Resultado',session:'Sesión',date:'Fecha',notes:'Notas',mood:'Estado',
      win:'Ganancia',loss:'Pérdida',buy:'Compra',sell:'Venta',all:'Todo',
      search:'Buscar...',noTrades:'Sin operaciones',delete:'Eliminar',save:'Guardar',cancel:'Cancelar'},
    common:{loading:'Cargando...',save:'Guardar',cancel:'Cancelar',delete:'Eliminar',
      edit:'Editar',close:'Cerrar',confirm:'Confirmar',yes:'Sí',no:'No',
      search:'Buscar',filter:'Filtrar',sort:'Ordenar',export:'Exportar',import:'Importar',
      freePlan:'🆓 Gratis',proPlan:'⚡ Pro',elitePlan:'👑 Elite'}
  },

  tr: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard:'📊 Panel',trades:'📋 İşlem Günlüğü',analytics:'📈 Analiz',
      ai:'🤖 AI Koçu',risk:'🛡️ Risk Yönetimi',calculator:'💹 Hesap Makinesi',
      journal:'📝 Günlük',leaderboard:'🏆 Liderlik',subscription:'👑 Abonelik',
      settings:'⚙️ Ayarlar',logout:'🚪 Çıkış',
    },
    dashboard:{title:'Panel 📊',sub:"Voquex'e Hoş Geldiniz",totalPnl:'Toplam P&L',winRate:'Kazanma Oranı',
      profitFactor:'Kar Faktörü',avgRR:'Ort RR',maxDD:'Max Drawdown',
      totalTrades:'Toplam İşlem',balanceCurve:'Bakiye Eğrisi',recentTrades:'Son İşlemler',refresh:'🔄 Yenile'},
    trades:{title:'İşlem Günlüğü 📋',addTrade:'+ İşlem Ekle',pair:'Parite',direction:'Yön',
      entry:'Giriş',exit:'Çıkış',sl:'Stop Loss',tp:'Take Profit',lots:'Lot',pnl:'P&L',
      result:'Sonuç',session:'Seans',date:'Tarih',notes:'Notlar',mood:'Ruh Hali',
      win:'Kazanç',loss:'Kayıp',buy:'Alış',sell:'Satış',all:'Tümü',
      search:'Ara...',noTrades:'İşlem yok',delete:'Sil',save:'Kaydet',cancel:'İptal'},
    common:{loading:'Yükleniyor...',save:'Kaydet',cancel:'İptal',delete:'Sil',
      edit:'Düzenle',close:'Kapat',confirm:'Onayla',yes:'Evet',no:'Hayır',
      search:'Ara',filter:'Filtre',sort:'Sırala',export:'Dışa Aktar',import:'İçe Aktar',
      freePlan:'🆓 Ücretsiz',proPlan:'⚡ Pro',elitePlan:'👑 Elite'}
  },

  pt: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard:'📊 Painel',trades:'📋 Registro',analytics:'📈 Análises',
      ai:'🤖 Coach IA',risk:'🛡️ Gestão de Risco',calculator:'💹 Calculadora',
      journal:'📝 Diário',leaderboard:'🏆 Classificação',subscription:'👑 Assinatura',
      settings:'⚙️ Configurações',logout:'🚪 Sair',
    },
    dashboard:{title:'Painel 📊',sub:'Bem-vindo ao Voquex',totalPnl:'P&L Total',winRate:'Taxa de Acerto',
      profitFactor:'Fator de Lucro',avgRR:'RR Médio',maxDD:'Drawdown Máx',
      totalTrades:'Total de Trades',balanceCurve:'Curva de Saldo',recentTrades:'Últimos Trades',refresh:'🔄 Atualizar'},
    trades:{title:'Registro 📋',addTrade:'+ Adicionar Trade',pair:'Par',direction:'Direção',
      entry:'Entrada',exit:'Saída',sl:'Stop Loss',tp:'Take Profit',lots:'Lotes',pnl:'P&L',
      result:'Resultado',session:'Sessão',date:'Data',notes:'Notas',mood:'Humor',
      win:'Ganho',loss:'Perda',buy:'Compra',sell:'Venda',all:'Tudo',
      search:'Buscar...',noTrades:'Sem trades',delete:'Excluir',save:'Salvar',cancel:'Cancelar'},
    common:{loading:'Carregando...',save:'Salvar',cancel:'Cancelar',delete:'Excluir',
      edit:'Editar',close:'Fechar',confirm:'Confirmar',yes:'Sim',no:'Não',
      search:'Buscar',filter:'Filtrar',sort:'Ordenar',export:'Exportar',import:'Importar',
      freePlan:'🆓 Grátis',proPlan:'⚡ Pro',elitePlan:'👑 Elite'}
  },

  id: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard:'📊 Dasbor',trades:'📋 Log Trading',analytics:'📈 Analitik',
      ai:'🤖 Pelatih AI',risk:'🛡️ Manajemen Risiko',calculator:'💹 Kalkulator',
      journal:'📝 Jurnal',leaderboard:'🏆 Papan Peringkat',subscription:'👑 Langganan',
      settings:'⚙️ Pengaturan',logout:'🚪 Keluar',
    },
    dashboard:{title:'Dasbor 📊',sub:'Selamat datang di Voquex',totalPnl:'Total P&L',winRate:'Tingkat Menang',
      profitFactor:'Faktor Profit',avgRR:'RR Rata-rata',maxDD:'Drawdown Maks',
      totalTrades:'Total Trading',balanceCurve:'Kurva Saldo',recentTrades:'Trading Terbaru',refresh:'🔄 Segarkan'},
    trades:{title:'Log Trading 📋',addTrade:'+ Tambah Trade',pair:'Pasangan',direction:'Arah',
      entry:'Masuk',exit:'Keluar',sl:'Stop Loss',tp:'Take Profit',lots:'Lot',pnl:'P&L',
      result:'Hasil',session:'Sesi',date:'Tanggal',notes:'Catatan',mood:'Suasana Hati',
      win:'Menang',loss:'Kalah',buy:'Beli',sell:'Jual',all:'Semua',
      search:'Cari...',noTrades:'Belum ada trade',delete:'Hapus',save:'Simpan',cancel:'Batal'},
    common:{loading:'Memuat...',save:'Simpan',cancel:'Batal',delete:'Hapus',
      edit:'Edit',close:'Tutup',confirm:'Konfirmasi',yes:'Ya',no:'Tidak',
      search:'Cari',filter:'Filter',sort:'Urutkan',export:'Ekspor',import:'Impor',
      freePlan:'🆓 Gratis',proPlan:'⚡ Pro',elitePlan:'👑 Elite'}
  },

  ru: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard:'📊 Панель',trades:'📋 Журнал',analytics:'📈 Аналитика',
      ai:'🤖 AI Тренер',risk:'🛡️ Управление риском',calculator:'💹 Калькулятор',
      journal:'📝 Дневник',leaderboard:'🏆 Рейтинг',subscription:'👑 Подписка',
      settings:'⚙️ Настройки',logout:'🚪 Выйти',
    },
    dashboard:{title:'Панель 📊',sub:'Добро пожаловать в Voquex',totalPnl:'Общий P&L',winRate:'Процент побед',
      profitFactor:'Профит фактор',avgRR:'Средний RR',maxDD:'Макс просадка',
      totalTrades:'Всего сделок',balanceCurve:'Кривая баланса',recentTrades:'Последние сделки',refresh:'🔄 Обновить'},
    trades:{title:'Журнал сделок 📋',addTrade:'+ Добавить сделку',pair:'Пара',direction:'Направление',
      entry:'Вход',exit:'Выход',sl:'Стоп лосс',tp:'Тейк профит',lots:'Лоты',pnl:'P&L',
      result:'Результат',session:'Сессия',date:'Дата',notes:'Заметки',mood:'Настроение',
      win:'Прибыль',loss:'Убыток',buy:'Покупка',sell:'Продажа',all:'Все',
      search:'Поиск...',noTrades:'Нет сделок',delete:'Удалить',save:'Сохранить',cancel:'Отмена'},
    common:{loading:'Загрузка...',save:'Сохранить',cancel:'Отмена',delete:'Удалить',
      edit:'Изменить',close:'Закрыть',confirm:'Подтвердить',yes:'Да',no:'Нет',
      search:'Поиск',filter:'Фильтр',sort:'Сортировка',export:'Экспорт',import:'Импорт',
      freePlan:'🆓 Бесплатно',proPlan:'⚡ Pro',elitePlan:'👑 Elite'}
  },

  zh: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard:'📊 仪表板',trades:'📋 交易记录',analytics:'📈 分析',
      ai:'🤖 AI教练',risk:'🛡️ 风险管理',calculator:'💹 计算器',
      journal:'📝 日记',leaderboard:'🏆 排行榜',subscription:'👑 订阅',
      settings:'⚙️ 设置',logout:'🚪 退出',
    },
    dashboard:{title:'仪表板 📊',sub:'欢迎使用 Voquex',totalPnl:'总盈亏',winRate:'胜率',
      profitFactor:'盈利因子',avgRR:'平均RR',maxDD:'最大回撤',
      totalTrades:'总交易数',balanceCurve:'余额曲线',recentTrades:'最近交易',refresh:'🔄 刷新'},
    trades:{title:'交易记录 📋',addTrade:'+ 添加交易',pair:'货币对',direction:'方向',
      entry:'入场',exit:'出场',sl:'止损',tp:'止盈',lots:'手数',pnl:'盈亏',
      result:'结果',session:'交易时段',date:'日期',notes:'备注',mood:'情绪',
      win:'盈利',loss:'亏损',buy:'买入',sell:'卖出',all:'全部',
      search:'搜索...',noTrades:'暂无交易',delete:'删除',save:'保存',cancel:'取消'},
    common:{loading:'加载中...',save:'保存',cancel:'取消',delete:'删除',
      edit:'编辑',close:'关闭',confirm:'确认',yes:'是',no:'否',
      search:'搜索',filter:'筛选',sort:'排序',export:'导出',import:'导入',
      freePlan:'🆓 免费',proPlan:'⚡ Pro',elitePlan:'👑 精英'}
  },

  ja: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard:'📊 ダッシュボード',trades:'📋 取引ログ',analytics:'📈 分析',
      ai:'🤖 AIコーチ',risk:'🛡️ リスク管理',calculator:'💹 計算機',
      journal:'📝 日記',leaderboard:'🏆 ランキング',subscription:'👑 サブスクリプション',
      settings:'⚙️ 設定',logout:'🚪 ログアウト',
    },
    dashboard:{title:'ダッシュボード 📊',sub:'Voquexへようこそ',totalPnl:'合計P&L',winRate:'勝率',
      profitFactor:'プロフィットファクター',avgRR:'平均RR',maxDD:'最大ドローダウン',
      totalTrades:'総取引数',balanceCurve:'残高曲線',recentTrades:'最近の取引',refresh:'🔄 更新'},
    trades:{title:'取引ログ 📋',addTrade:'+ 取引追加',pair:'通貨ペア',direction:'方向',
      entry:'エントリー',exit:'イグジット',sl:'ストップロス',tp:'テイクプロフィット',lots:'ロット',pnl:'P&L',
      result:'結果',session:'セッション',date:'日付',notes:'メモ',mood:'気分',
      win:'勝ち',loss:'負け',buy:'買い',sell:'売り',all:'全て',
      search:'検索...',noTrades:'取引なし',delete:'削除',save:'保存',cancel:'キャンセル'},
    common:{loading:'読み込み中...',save:'保存',cancel:'キャンセル',delete:'削除',
      edit:'編集',close:'閉じる',confirm:'確認',yes:'はい',no:'いいえ',
      search:'検索',filter:'フィルター',sort:'並べ替え',export:'エクスポート',import:'インポート',
      freePlan:'🆓 無料',proPlan:'⚡ Pro',elitePlan:'👑 エリート'}
  },

  ko: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard:'📊 대시보드',trades:'📋 거래 기록',analytics:'📈 분석',
      ai:'🤖 AI 코치',risk:'🛡️ 리스크 관리',calculator:'💹 계산기',
      journal:'📝 일지',leaderboard:'🏆 리더보드',subscription:'👑 구독',
      settings:'⚙️ 설정',logout:'🚪 로그아웃',
    },
    dashboard:{title:'대시보드 📊',sub:'Voquex에 오신 것을 환영합니다',totalPnl:'총 P&L',winRate:'승률',
      profitFactor:'수익 팩터',avgRR:'평균 RR',maxDD:'최대 손실률',
      totalTrades:'총 거래',balanceCurve:'잔액 곡선',recentTrades:'최근 거래',refresh:'🔄 새로고침'},
    trades:{title:'거래 기록 📋',addTrade:'+ 거래 추가',pair:'통화쌍',direction:'방향',
      entry:'진입',exit:'청산',sl:'손절',tp:'익절',lots:'로트',pnl:'P&L',
      result:'결과',session:'세션',date:'날짜',notes:'메모',mood:'기분',
      win:'수익',loss:'손실',buy:'매수',sell:'매도',all:'전체',
      search:'검색...',noTrades:'거래 없음',delete:'삭제',save:'저장',cancel:'취소'},
    common:{loading:'로딩 중...',save:'저장',cancel:'취소',delete:'삭제',
      edit:'편집',close:'닫기',confirm:'확인',yes:'예',no:'아니오',
      search:'검색',filter:'필터',sort:'정렬',export:'내보내기',import:'가져오기',
      freePlan:'🆓 무료',proPlan:'⚡ Pro',elitePlan:'👑 엘리트'}
  },

  de: {
    dir: 'ltr', font: 'Inter',
    nav: {
      dashboard:'📊 Dashboard',trades:'📋 Handelsbuch',analytics:'📈 Analysen',
      ai:'🤖 KI-Coach',risk:'🛡️ Risikomanagement',calculator:'💹 Rechner',
      journal:'📝 Tagebuch',leaderboard:'🏆 Rangliste',subscription:'👑 Abonnement',
      settings:'⚙️ Einstellungen',logout:'🚪 Abmelden',
    },
    dashboard:{title:'Dashboard 📊',sub:'Willkommen bei Voquex',totalPnl:'Gesamt P&L',winRate:'Gewinnrate',
      profitFactor:'Gewinnfaktor',avgRR:'Durchschn. RR',maxDD:'Max Drawdown',
      totalTrades:'Gesamte Trades',balanceCurve:'Bilanzkurve',recentTrades:'Letzte Trades',refresh:'🔄 Aktualisieren'},
    trades:{title:'Handelsbuch 📋',addTrade:'+ Trade hinzufügen',pair:'Paar',direction:'Richtung',
      entry:'Einstieg',exit:'Ausstieg',sl:'Stop Loss',tp:'Take Profit',lots:'Lots',pnl:'P&L',
      result:'Ergebnis',session:'Sitzung',date:'Datum',notes:'Notizen',mood:'Stimmung',
      win:'Gewinn',loss:'Verlust',buy:'Kauf',sell:'Verkauf',all:'Alle',
      search:'Suchen...',noTrades:'Keine Trades',delete:'Löschen',save:'Speichern',cancel:'Abbrechen'},
    common:{loading:'Wird geladen...',save:'Speichern',cancel:'Abbrechen',delete:'Löschen',
      edit:'Bearbeiten',close:'Schließen',confirm:'Bestätigen',yes:'Ja',no:'Nein',
      search:'Suchen',filter:'Filter',sort:'Sortieren',export:'Exportieren',import:'Importieren',
      freePlan:'🆓 Kostenlos',proPlan:'⚡ Pro',elitePlan:'👑 Elite'}
  }
}

// Language Manager
const LangManager = {
  current: 'ar',

  init() {
    const saved = localStorage.getItem('voquex_lang') || 'ar'
    this.apply(saved)
  },

  apply(lang) {
    if (!LANGS[lang]) lang = 'ar'
    this.current = lang
    localStorage.setItem('voquex_lang', lang)
    const L = LANGS[lang]
    // اتجاه الصفحة
    document.documentElement.lang = lang
    document.documentElement.dir = L.dir
    // تحديث السايدبار
    this.updateNav(L)
  },

  get(section, key) {
    const L = LANGS[this.current]
    return L?.[section]?.[key] || key
  },

  updateNav(L) {
    const map = {
      'nav-dashboard': L.nav.dashboard,
      'nav-trades': L.nav.trades,
      'nav-analytics': L.nav.analytics,
      'nav-ai': L.nav.ai,
      'nav-risk': L.nav.risk,
      'nav-calculator': L.nav.calculator,
      'nav-journal': L.nav.journal,
      'nav-leaderboard': L.nav.leaderboard,
      'nav-subscription': L.nav.subscription,
      'nav-settings': L.nav.settings,
      'nav-logout': L.nav.logout,
    }
    Object.entries(map).forEach(([id, text]) => {
      const el = document.getElementById(id)
      if (el) el.textContent = text
    })
  }
}

// Language Switcher Widget
function createLangSwitcher() {
  const flags = {
    ar:'🇸🇦',en:'🇺🇸',fr:'🇫🇷',es:'🇪🇸',tr:'🇹🇷',
    pt:'🇧🇷',id:'🇮🇩',ru:'🇷🇺',zh:'🇨🇳',ja:'🇯🇵',ko:'🇰🇷',de:'🇩🇪'
  }
  const names = {
    ar:'العربية',en:'English',fr:'Français',es:'Español',tr:'Türkçe',
    pt:'Português',id:'Indonesia',ru:'Русский',zh:'中文',ja:'日本語',ko:'한국어',de:'Deutsch'
  }

  const wrap = document.createElement('div')
  wrap.id = 'langSwitcher'
  wrap.style.cssText = 'position:relative;margin-bottom:8px;'

  wrap.innerHTML = `
    <button id="langBtn" style="width:100%;padding:8px 12px;background:rgba(15,21,37,.6);border:1px solid rgba(26,37,64,.6);border-radius:10px;color:#6b84a8;font-family:Tajawal,sans-serif;font-size:.78rem;cursor:pointer;display:flex;align-items:center;gap:8px;transition:all .2s;" onmouseover="this.style.borderColor='rgba(0,245,212,.2)'" onmouseout="this.style.borderColor='rgba(26,37,64,.6)'">
      <span id="langBtnFlag">${flags[LangManager.current]}</span>
      <span id="langBtnName">${names[LangManager.current]}</span>
      <span style="margin-right:auto;font-size:.6rem">▼</span>
    </button>
    <div id="langDropdown" style="display:none;position:absolute;bottom:calc(100% + 6px);right:0;left:0;background:#0a0d1a;border:1px solid rgba(0,245,212,.12);border-radius:12px;padding:8px;z-index:999;max-height:260px;overflow-y:auto;">
      ${Object.entries(flags).map(([code,flag])=>`
        <div onclick="switchLang('${code}')" style="padding:8px 10px;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:8px;font-size:.78rem;color:#6b84a8;transition:all .2s;" onmouseover="this.style.background='rgba(0,245,212,.04)';this.style.color='#e8f0fe'" onmouseout="this.style.background='';this.style.color='#6b84a8'">
          <span>${flag}</span><span>${names[code]}</span>
        </div>`).join('')}
    </div>`

  document.getElementById('langBtn').addEventListener('click', () => {
    const dd = document.getElementById('langDropdown')
    dd.style.display = dd.style.display === 'none' ? 'block' : 'none'
  })

  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) {
      const dd = document.getElementById('langDropdown')
      if (dd) dd.style.display = 'none'
    }
  })

  return wrap
}

window.switchLang = function(lang) {
  LangManager.apply(lang)
  const flags = {ar:'🇸🇦',en:'🇺🇸',fr:'🇫🇷',es:'🇪🇸',tr:'🇹🇷',pt:'🇧🇷',id:'🇮🇩',ru:'🇷🇺',zh:'🇨🇳',ja:'🇯🇵',ko:'🇰🇷',de:'🇩🇪'}
  const names = {ar:'العربية',en:'English',fr:'Français',es:'Español',tr:'Türkçe',pt:'Português',id:'Indonesia',ru:'Русский',zh:'中文',ja:'日本語',ko:'한국어',de:'Deutsch'}
  document.getElementById('langBtnFlag').textContent = flags[lang]
  document.getElementById('langBtnName').textContent = names[lang]
  document.getElementById('langDropdown').style.display = 'none'
  // reload لتطبيق اللغة على الصفحة
  setTimeout(() => location.reload(), 300)
}

window.LangManager = LangManager
window.createLangSwitcher = createLangSwitcher

window.LANGS=LANGS
window.LangManager=LangManager
window.createLangSwitcher=createLangSwitcher