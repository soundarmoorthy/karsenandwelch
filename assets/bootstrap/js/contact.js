function mandrillSendMail()
{
  var name = document.getElementById("inputName").value;
  var sender = document.getElementById("inputEmail").value;
  var message = document.getElementById("inputMessage").value;

var email = 
{
    "message": {
        "text": message,
        "subject": "[beta] Enquiry/Feedback , please ignore",
        "from_email": sender,
        "from_name": name,
        "to": [
            {
                "email": "karsenandwelch@yahoo.com",
                "name": "Archanaa",
                "type": "to"
            }
        ],
        "important": false,
    },
    "async": false,
    "ip_pool": "Main Pool",
    "send_at": null,
    "key": "Duoki9YGFKcodX7PB1W6GQ"
};

  var post_url = "https://mandrillapp.com/api/1.0/messages/send.json";
  
  var request = new XMLHttpRequest();
  request.open("POST",post_url,false);
  request.setRequestHeader("Content-Type","application/json;charset:utf-8");
  request.send(JSON.stringify(email));


}

  window.onload=function () {
            Recaptcha.create("6LflpfISAAAAAHk9uFJs3fwf8Vb9oKFB-XSerGQ4", 'captchadiv', {
                tabindex: 1,
                theme: "clean",
                callback: Recaptcha.focus_response_field
            });
          };
