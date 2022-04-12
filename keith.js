<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zombie</title>
    <link rel="stylesheet" href="zombie.css">
</head>
<body>
    <div id="mailBody">
        Hello
    </div>
    <input type="button" onclick="sendMail();">





    <script src="zombie.js"></script>
</body>
</html>
<!-- CSS -->
body{
    background-color: blueviolet;
    
}
<!-- Javascript -->
function sendMail()
{
   var mailBody=document.getElementById('mailBody').innerHTML;
   window.location="mailto:?subject=hii&body="+mailBody;
}
// function SendEmail()
// {
//     var outlookApp = new ActiveXObject("Outlook.Application");
//     var nameSpace = outlookApp.getNameSpace("MAPI");
//     mailFolder = nameSpace.getDefaultFolder(6);
//     mailItem = mailFolder.Items.add('IPM.Note.FormA');
//     mailItem.Subject = "Me";
//     mailItem.To = ".mchughkeith2@gmail.com";
//     mailItem.HTMLBody = "<table border=1> <tr><td><input></td></tr> </table>";
//     mailItem.display(0);
// }
// function sendEmail() {
//     Email.send({
//         Host : "smtp.mailtrap.io",
//         Username : "<Mailtrap username>",
//         Password : "<Mailtrap password>",
//         To : 'recipient@example6.com',
//         From : "sender@example.com",
//         Subject : "Test email",
//         Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//     }).then(
//       message => alert(message)
//     );
//     }
