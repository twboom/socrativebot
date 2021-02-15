function use(script) {
    const scriptsrc = document.createElement('script');
    scriptsrc.setAttribute('src', script);
    scriptsrc.setAttribute('type', 'text/javascript');
    document.head.appendChild(scriptsrc)
}
use('unkown')