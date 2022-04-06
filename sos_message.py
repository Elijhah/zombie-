import smtplib

server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
server.login('ali_gulfaam@student.mahoningctc.com', '******')

server.sendmail('ali_gulfaam@student.mahoningctc.com','jones_elijhah@student.mahoningctc.com',
                'wassup')
