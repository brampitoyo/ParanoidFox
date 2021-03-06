const {classes: Cc, interfaces: Ci, utils: Cu} = Components;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

var config = {
  "cckVersion": "2.1.1.7",
  "name": "ParanoidFox",
  "description": "A Firefox designed for maximum privacy and security",
  "version": "0.1",
  "homePage": "about:home",
  "titlemodifier": "ParanoidFox",
  "extension": {
    "id": "mozillalabs-cck@paranoidfox.mozilla.org",
    "name": "ParanoidFox",
    "description": "A Firefox designed for maximum privacy and security",
    "filename": "paranoidfox",
    "hide": true
  },
  "lockHomePage": true,
  "noWelcomePage": true,
  "noUpgradePage": true,
  "removeDeveloperTools": true,
  "removeSetDesktopBackground": true,
  "removeSafeModeMenu": true,
  "noAddons": true,
  "noAddonCompatibilityCheck": true,
  "removeSmartBookmarks": true,
  "removeDefaultBookmarks": true,
  "dontCheckDefaultBrowser": true,
  "dontUseDownloadDir": true,
  "disableFormFill": true,
  "dontRememberPasswords": true,
  "disableSync": true,
  "removeSnippets": true,
  "disableWebApps": true,
  "disableHello": true,
  "disableSharePage": true,
  "disableForget": true,
  "disableHeartbeat": true,
  "disablePocket": true,
  "id": "paranoidfox",
  "persona": {
    "username": "MaDonna",
    "description": null,
    "detailURL": "https://addons.mozilla.org/en-US/addon/black-15433/",
    "accentcolor": "#000000",
    "iconURL": "https://addons.cdn.mozilla.net/user-media/addons/15433/preview_small.jpg?1422312059",
    "previewURL": "https://addons.cdn.mozilla.net/user-media/addons/15433/preview.jpg?1422312059",
    "textcolor": "#ffffff",
    "id": "15433",
    "headerURL": "https://addons.cdn.mozilla.net/user-media/addons/15433/BlackH.jpg?1422312059",
    "dataurl": "",
    "name": "Black by MaDonna",
    "author": "MaDonna",
    "updateURL": "https://versioncheck.addons.mozilla.org/en-US/themes/update-check/15433",
    "version": "0",
    "footerURL": "https://addons.cdn.mozilla.net/user-media/addons/15433/BlackF.jpg?1422312059"
  },
  "addons": [
    "https://addons.mozilla.org/firefox/downloads/latest/607454/addon-607454-latest.xpi"
  ],
  "defaultSearchEngine": "DuckDuckGo",
  "preferences": {
    "browser.newtabpage.enabled": {
      "value": false
    },
    "browser.newtabpage.enhanced": {
      "value": false
    },
    "browser.privatebrowsing.autostart": {
      "value": true
    },
    "browser.urlbar.trimURLs": {
      "value": false
    },
    "network.cookie.cookieBehavior": {
      "value": 2
    },
    "network.cookie.life": {
      "value": 2
    },
    "network.http.referer.spoofSource": {
      "value": true
    },
    "network.http.referer.trimmingPolicy": {
      "value": 2
    },
    "privacy.clearOnShutdown.cache": {
      "value": true
    },
    "privacy.clearOnShutdown.cookies": {
      "value": true
    },
    "privacy.clearOnShutdown.downloads": {
      "value": true
    },
    "privacy.clearOnShutdown.formdata": {
      "value": true
    },
    "privacy.clearOnShutdown.history": {
      "value": true
    },
    "privacy.clearOnShutdown.offlineApps": {
      "value": true
    },
    "privacy.clearOnShutdown.openWindows": {
      "value": true
    },
    "privacy.clearOnShutdown.sessions": {
      "value": true
    },
    "privacy.clearOnShutdown.siteSettings": {
      "value": true
    },
    "privacy.donottrackheader.enabled": {
      "value": true
    },
    "privacy.sanitize.sanitizeOnShutdown": {
      "value": true
    },
    "privacy.trackingprotection.enabled": {
      "value": true
    },
    "privacy.trackingprotection.pbmode.enabled": {
      "value": true
    },
    "privacy.trackingprotection.ui.enabled": {
      "value": true
    },
    "security.mixed_content.block_display_content": {
      "value": true
    },
    "security.ssl.treat_unsafe_negotiation_as_broken": {
      "value": true
    },
    "signon.autofillForms": {
      "value": false
    },
    "urlclassifier.trackingWhitelistTable": {
      "value": "test-trackwhite-simple"
    }
  }
};

function CCK2paranoidfoxService() {}

CCK2paranoidfoxService.prototype = {
  observe: function(aSubject, aTopic, aData) {
    switch(aTopic) {
      case "profile-after-change":
        Components.utils.import("resource://cck2/CCK2.jsm");
        CCK2.init(config);
        break;
    }
  },
  classDescription: "CCK2 paranoidfox Service",
  contractID: "@kaply.com/cck2-paranoidfox-service;1",
  classID: Components.ID("{6ea5b831-5cdc-d044-abef-87876d261d2a}"),
  QueryInterface: XPCOMUtils.generateQI([Ci.nsIObserver]),
  _xpcom_categories: [{category: "profile-after-change"}]
}

var NSGetFactory = XPCOMUtils.generateNSGetFactory([CCK2paranoidfoxService]);
