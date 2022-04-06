import smtplib

server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
server.login("ali_gulfaam@student.mahoningctc.com", "D00C9BAa1")
server.sendmail("ali_gulfaam@student.mahoningctc.com",
                "ali_gulfaam@student.mahoningctc.com",
                "Yo Whats up")
server.quit()