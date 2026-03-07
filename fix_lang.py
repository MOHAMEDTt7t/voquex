import os

files = [
    'dashboard.html',
    'trades.html',
    'analytics.html',
    'ai.html',
    'risk.html',
    'calculator.html',
    'journal.html',
    'leaderboard.html',
    'subscription.html',
    'settings.html'
]

for f in files:
    if not os.path.exists(f):
        print('مش موجود:', f)
        continue
    c = open(f, encoding='utf-8').read()
    c = c.replace("import{LangManager,createLangSwitcher}from'./lang.js'", '')
    if '<script src="./lang.js">' not in c:
        c = c.replace('<script type="module">', '<script src="./lang.js"></script>\n<script type="module">', 1)
    open(f, 'w', encoding='utf-8').write(c)
    print('تم:', f)