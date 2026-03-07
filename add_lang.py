import os
import re

files = [
    'dashboard.html', 'trades.html', 'analytics.html', 'ai.html',
    'risk.html', 'calculator.html', 'journal.html', 'leaderboard.html',
    'subscription.html', 'settings.html'
]

lang_div = '      <div id="langSwitcherWrap"></div>\n'
lang_import = "import{LangManager,createLangSwitcher}from'./lang.js'\n"
lang_init = "LangManager.init()\ndocument.getElementById('langSwitcherWrap').appendChild(createLangSwitcher())\n"

ok = 0
skip = 0

for f in files:
    if not os.path.exists(f):
        print(f'❌ مش موجود: {f}')
        skip += 1
        continue

    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()

    if 'langSwitcherWrap' in content:
        print(f'⏭️  موجود بالفعل: {f}')
        skip += 1
        continue

    # إضافة div قبل زرار الخروج
    content = content.replace(
        '    <button class="btn-logout"',
        lang_div + '    <button class="btn-logout"'
    )

    # إضافة import بعد supabase import
    content = content.replace(
        "import{createClient}from'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'",
        "import{createClient}from'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'\n" + lang_import
    )

    # إضافة init بعد doLogout
    content = content.replace(
        "window.doLogout=async()=>{await sb.auth.signOut();location.href='index.html';}",
        "window.doLogout=async()=>{await sb.auth.signOut();location.href='index.html';}\n" + lang_init
    )

    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

    print(f'✅ تم: {f}')
    ok += 1

print(f'\n🎯 تم تعديل {ok} ملف — تخطي {skip} ملف')