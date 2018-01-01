// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyCDWBNoWhEUPEokNbtKfajTsyycsSzy3_Y",
    authDomain: "todo-bf5ff.firebaseapp.com",
    databaseURL: "https://todo-bf5ff.firebaseio.com",
    projectId: "todo-bf5ff",
    storageBucket: "todo-bf5ff.appspot.com",
    messagingSenderId: "172201926736"
  }
};
