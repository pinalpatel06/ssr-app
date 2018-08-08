// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD22Cyh6jVO-Q_mWfzEKxnXhIdApKsJ4K8",
    authDomain: "ssr-app-2d96a.firebaseapp.com",
    databaseURL: "https://ssr-app-2d96a.firebaseio.com",
    projectId: "ssr-app-2d96a",
    storageBucket: "ssr-app-2d96a.appspot.com",
    messagingSenderId: "687251673841"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
