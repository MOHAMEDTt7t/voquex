import os

f = 'trades.html'
c = open(f, encoding='utf-8').read()

# شوف إيه الموجود
if 'lang.js' in c:
    print('❌ lang.js لسه موجود')
else:
    print('✅ lang.js اتشال')

if 'addTrade' in c:
    print('✅ addTrade موجود')
else:
    print('❌ addTrade مش موجود')

if 'supabase' in c:
    print('✅ supabase موجود')
else:
    print('❌ supabase مش موجود')

# شوف آخر 500 حرف
print('\n--- آخر الملف ---')
print(c[-500:])