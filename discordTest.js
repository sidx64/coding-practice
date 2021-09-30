function sendMessage() {
    var XMLHttpRequest = require('xhr2');
    const request = new XMLHttpRequest();
    request.open(
        'POST',
        'https://discord.com/api/webhooks/888733439149346816/PL-wExQ82yj43o8CN4taD1ew2AdISO5cyvtVXblJV8JefDVImjpiGpsXdRFMGNIRP60W'
    );

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: 'aws-bot',
        avatar_url: '',
        content: 'TestMessage',
    };

    request.send(JSON.stringify(params));
}

sendMessage();
