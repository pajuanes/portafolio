import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { app_routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(app_routes),
    // provideRouter(app_routes, { useHash: true, scrollPositionRestoration: 'enabled' })
    provideRouter(
      app_routes,
      withHashLocation()
    )
  ]
};

