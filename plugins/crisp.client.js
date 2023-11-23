export default defineNuxtPlugin(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "37ffbbb6-0334-4868-8476-a784b2d42995";

    (function () {
        var d = document;
        var s = d.createElement("script");

        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
    })();
});