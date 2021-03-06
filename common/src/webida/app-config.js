/*
 * Copyright (c) 2012-2015 S-Core Co., Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([], function () {
    'use strict';

    var serverDomain = decodeURIComponent(
        document.cookie.replace(/(?:(?:^|.*;\s*)webida\.host\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    );

    return {
        clientId: 'CLIENT_ID_TO_BE_SET',
        appRoute: {
            site: 'apps/desktop/index.html'/*,
            desktop: 'apps/desktop/index.html',
            ide: 'apps/ide/src/index.html',
            dashboard: 'apps/dashboard/index.html',
            deploy: 'apps/deploy/index.html',
            default: 'apps/site/index.html'*/
        },
        redirectUrl: window.location.protocol + '//' + serverDomain + '/auth.html',
        guestMode: false
    };
});