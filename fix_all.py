import os

files = [
    'dashboard.html', 'trades.html', 'analytics.html', 'ai.html',
    'risk.html', 'calculator.html', 'journal.html', 'leaderboard.html',
    'subscription.html', 'settings.html'
]

for f in files:
    if not os.path.exists(f):
        print('مش موجود:', f)
        continue
    
    c = open(f, encoding='utf-8').read()
    
    # شيل كل حاجة متعلقة بـ lang
    c = c.replace('<script src="./lang.js"></script>', '')
    c = c.replace('<script src="./lang.js"></script>\n', '')
    c = c.replace("import{LangManager,createLangSwitcher}from'./lang.js'\n", '')
    c = c.replace("import{LangManager,createLangSwitcher}from'./lang.js'", '')
    c = c.replace("LangManager.init()\n", '')
    c = c.replace("LangManager.init()", '')
    c = c.replace("document.getElementById('langSwitcherWrap').appendChild(createLangSwitcher())\n", '')
    c = c.replace("document.getElementById('langSwitcherWrap').appendChild(createLangSwitcher())", '')
    c = c.replace('<div id="langSwitcherWrap"></div>\n', '')
    c = c.replace('<div id="langSwitcherWrap"></div>', '')
    
    open(f, 'w', encoding='utf-8').write(c)
    print('تم:', f)

print('خلص!')