/* eslint-disable no-unused-vars, no-var */

var config = {

    hosts: {
        domain: 'meet.voxo.co',
        muc: 'conference.meet.voxo.co'
    },
    bosh: '//meet.voxo.co/http-bind',
    clientNode: 'http://jitsi.org/jitsimeet',
    testing: {
        enableFirefoxSimulcast: false,
        p2pTestMode: false
    },
    disableSuspendVideo: true,
    desktopSharingChromeExtId: 'enbobpnfcaohmdnjcpdjphkemkaemlil',
    desktopSharingChromeDisabled: false,
    desktopSharingChromeSources: [ 'screen', 'window', 'tab' ],
    desktopSharingChromeMinExtVersion: '0.1',
    desktopSharingFirefoxDisabled: false,
    channelLastN: -1,
    enableWelcomePage: false,
    minHDHeight: 540,
    enableUserRolesdOnToken: false,
    p2p: {
        enabled: true,
        stunServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
            { urls: 'stun:stun2.l.google.com:19302' }
        ],
        preferH264: true
    },
    dialInNumbersUrl: 'https://api.myjson.com/bins/kt2we',
    dialOutCodesUrl: 'https://api.myjson.com/bins/zfxsq',
    dialInConfCodeUrl: 'https://jitsi-api.jitsi.net/conferenceMapper',
    analyticsScriptUrls: [
        'libs/analytics-ga.js'
    ],
    googleAnalyticsTrackingId: 'UA-119823589-1',
    deploymentInfo: {
    }
};

/* eslint-enable no-unused-vars, no-var */
