function mandrillSendMail()
{
  var name = document.getElementById("inputName").value;
  var sender = document.getElementById("inputEmail").value;
  var message = document.getElementById("inputMessage").value;

var email = 
{
    "message": {
        "html": "<p>Example HTML content</p>",
        "text": message,
        "subject": "Enquiry/Feedback",
        "from_email": sender,
        "from_name": name,
        "to": [
            {
                "email": "er.soundararajan@hotmail.com",
                "name": "Recipient Name",
                "type": "to"
            }
        ],
        "headers": {
            "Reply-To": "message.reply@example.com"
        },
        "important": false,
        "track_opens": null,
        "track_clicks": null,
        "auto_text": null,
        "auto_html": null,
        "inline_css": null,
        "url_strip_qs": null,
        "preserve_recipients": null,
        "view_content_link": null,
        "bcc_address": "message.bcc_address@example.com",
        "tracking_domain": null,
        "signing_domain": null,
        "return_path_domain": null,
        "merge": true,
        "global_merge_vars": [
            {
                "name": "merge1",
                "content": "merge1 content"
            }
        ],
        "merge_vars": [
            {
                "rcpt": "er.soundararajan@hotmail.com",
                "vars": [
                    {
                        "name": "merge2",
                        "content": "merge2 content"
                    }
                ]
            }
        ],
        "tags": [
            "password-resets"
        ],
        "subaccount": "customer-123",
        "google_analytics_domains": [
            "example.com"
        ],
        "google_analytics_campaign": sender,
        "metadata": {
            "website": "www.example.com"
        },
        "recipient_metadata": [
            {
                "rcpt": "er.soundararajan@hotmail.com",
                "values": {
                    "user_id": 123456
                }
            }
        ],
        "attachments": [
            {
                "type": "text/plain",
                "name": "myfile.txt",
                "content": "ZXhhbXBsZSBmaWxl"
            }
        ],
        "images": [
            {
                "type": "image/png",
                "name": "IMAGECID",
                "content": "ZXhhbXBsZSBmaWxl"
            }
        ]
    },
    "async": false,
    "ip_pool": "Main Pool",
    "send_at": null,
    "key": "Duoki9YGFKcodX7PB1W6GQ"
};

  var post_url = "https://mandrillapp.com/api/1.0/messages/send.json";
  
  var request = new XMLHttpRequest();
  request.open("POST",post_url,false);
  request.setRequestHeader:"Content-Type","application/json;charset:utf-8");
  request.send(JSON.stringify(email));


}
