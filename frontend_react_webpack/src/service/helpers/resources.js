

export const info = {

    mobileInfo: {
        // brands: navigator.userAgentData.brands,
        // isMobile: navigator.userAgentData.mobile,
        // platform: navigator.userAgentData.platform
    },
    timeOpened: new Date(),
    timezone: (new Date()).getTimezoneOffset() / 60,

    pageon: window.location.pathname,
    referrer: document.referrer,
    previousSites: history.length,
    browserName: navigator.appName,
    browserEngine: navigator.product,
    browserVersion1a: navigator.appVersion,
    browserVersion1b: navigator.userAgent,
    browserLanguage: navigator.language,
    browserOnline: navigator.onLine,
    browserPlatform: navigator.platform,
    javaEnabled: navigator.javaEnabled(),
    dataCookiesEnabled: navigator.cookieEnabled,
    dataCookies1: document.cookie,
    dataCookies2: decodeURIComponent(document.cookie.split(";")),
    dataStorage: localStorage,

    sizeScreenW: screen.width,
    sizeScreenH: screen.height,
    sizeDocW: document.width,
    sizeDocH: document.height,
    sizeInW: innerWidth,
    sizeInH: innerHeight,
    sizeAvailW: screen.availWidth,
    sizeAvailH: screen.availHeight,
    scrColorDepth: screen.colorDepth,
    scrPixelDepth: screen.pixelDepth,

};