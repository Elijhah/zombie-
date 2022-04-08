import smtplib
import urllib2
import mako
from bs4 import BeautifulSoup as BS

html = urllib2.urlopen("http://127.0.0.1:5500/zombie.html")
soup = BS(html)
data = []


for each_course in soup.findAll('li',{'class':'<class-name>'}):
    inner_text = each_course.text
    data.append(inner_text)


for i in data:
    print (i+"\n")
server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
server.login('ali_gulfaam@student.mahoningctc.com', '******')

server.sendmail('ali_gulfaam@student.mahoningctc.com','jones_elijhah@student.mahoningctc.com',
                'wassup')
