# A simple app for the PWA Workshop

## Prerequisites
1. Latest stable versions of `node`, `npm` installed.

2. Any simple web server od browser extension. Recommended:
- [http-server](https://www.npmjs.com/package/http-server
).

## Install
1. Clone the repo
2. 

```bash
npm install
```

## Install/update Angular CLI
```bash
npm uninstall -g angular-cli
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest
```

Check the version:
```bash
npm list @angular/cli version -g
```
The output should be at least `1.4.9`

## Checking the app
1. In the terminal
```bash
ng serve
```
2. Open [http://localhost:4200/](http://localhost:4200/).
3. "Ctrl-C" to stop the app.

## Creating a production build and serving it via external web server
```bash
ng build --prod
```
The `dist` folder should be created.

- If you use `http-server`: Run `http-server dist -p 8080` and open `http://127.0.0.1:8080` in your browser.
