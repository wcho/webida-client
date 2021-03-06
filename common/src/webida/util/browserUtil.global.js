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

/**
 * @BrowserUtil global version independent of AMD define
 *
 * @version: 1.0.0
 * @since: 2014.08.25
 *
 * Src:
 *   util/browserUtil.global.js
 */

'use strict';

// constructor
var BrowserUtil = function () {
};

BrowserUtil.getLocationOrigin = function () {
    if (!window.location.origin) { // in case of Internet Explorer
        console.log('location.origin is undefined');
        window.location.origin = window.location.protocol + '//' +
            window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    return window.location.origin;
};
