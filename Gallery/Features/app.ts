// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { PLATFORM } from 'aurelia-pal';
export class app {
    // tslint:disable-next-line: no-empty
    constructor() {}
    router: any;
    configureRouter(config: any, router: any) {
        config.options.pushState = true;
        config.map([{ route: ['', 'components'], name: 'Index', moduleId: PLATFORM.moduleName('index') }]);

        this.router = router;
    }
}
