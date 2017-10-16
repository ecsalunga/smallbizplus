// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD-s_u46bVO4jiDPKPaKX-X1OjVWXrRPkY",
    authDomain: "morong-star.firebaseapp.com",
    databaseURL: "https://morong-star.firebaseio.com",
    projectId: "morong-star",
    storageBucket: "morong-star.appspot.com",
    messagingSenderId: "144114537200"
  }
};
