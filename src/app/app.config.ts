import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Hash-based routing keeps deep links (e.g. #/wiki) working on
    // GitHub Pages, which has no server-side route fallback.
    provideRouter(routes, withHashLocation())
  ]
};
