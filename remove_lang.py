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
        continue
    c = open(f, encoding='utf-8').read()
    c = c.replace('<script src="./lang.js"></script>\n', '')
    c = c.replace('<script src="./lang.js"></script>', '')
    open(f, 'w', encoding='utf-8').write(c)
    print('تم:', f)