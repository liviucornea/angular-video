import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then( ref => {
   // Ensure Angular destroys itself on hot reloads.
   const windowWithAngular:  {
    [key: string]: any;
  } = window;
  /* tslint:disable */
  if (windowWithAngular['ngRef']) {
    windowWithAngular['ngRef'].destroy();
  }
  windowWithAngular['ngRef'] = ref;
  /* tslint:enable */
  // Otherise, log the boot error
})
  .catch(err => console.error(err));
