import { show } from './views/message'

const supportedAPI = ['init', 'tag']; // supported (e.g. `mw('event', 'user-login');`)
var tid = 'well shit';

// Entry
function app(window) {
    console.log('JS-Widget starting');

    // set default configurations
    let configurations = {
        tenant: ''
    };

    // all methods that were called till now and stored in queue
    let globalObject = window[window['JS-Widget']];
    let queue = globalObject.q;
    if (queue) {
        for (var i = 0; i < queue.length; i++) {
            if (queue[i][0].toLowerCase() == 'init') {
                configurations = extendObject(configurations, queue[i][1]);
                console.log('JS-Widget started', configurations);
                tid = configurations.tenant;
            }
            else
                apiHandler(queue[i][0], queue[i][1]);
        }
    }

    // override temporary
    globalObject = apiHandler;
    globalObject.configurations = configurations;
}

/**
    Method that handles all API calls
    */
function apiHandler(api, params) {
    if (!api) throw Error('API method required');
    api = api.toLowerCase();

    if (supportedAPI.indexOf(api) === -1) throw Error(`Method ${api} is not supported`);
    
    console.log(`Handling API call ${api}`, params);

    switch (api) {
        // TODO: add API implementation
        case 'message':
            show(params, tid);
            break;
        case 'tag':
            show(params, tid);
            break;
        default:
            console.warn(`No handler defined for ${api}`);
    }
}

function extendObject(a, b) {
    for (var key in b)
        if (b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

app(window);