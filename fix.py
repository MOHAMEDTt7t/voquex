import os

# fix index.html
with open('index.html','r',encoding='utf-8-sig') as f:
    c = f.read()
c = c.replace('href="dashboard.html"', 'href="login.html"')
with open('index.html','w',encoding='utf-8') as f:
    f.write(c)

# fix login.html  
with open('login.html','r',encoding='utf-16') as f:
    c = f.read()
c = c.replace("if(session)location.href='dashboard.html'", "// disabled")
with open('login.html','w',encoding='utf-8') as f:
    f.write(c)

print('Done!')