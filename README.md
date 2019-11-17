# escola-capoeira-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy to Github Pages
Deploy frontend to Github pages to showcase how it looks so far.
```
npm run deploy-gh
```

Note, this command executes a `git` commit and pushes to the Github repository.

### Deploy Frontend to Wordpress

Run the following command
```
npm run deploy-wp
```

This command builds the production version of the frontend. It changes `index.html` to `index.php` and adds the appropriate `php` tags to work on the Wordpress website.

Then the contents of the `dist` directory are copied into `wp-content/themes/vuefrontend` in the `escola-capoeira` repo. As long as the Escola Capoeira repos are organized in the following way:


```
EscolaCapoeira
├── escola-capoeira
├── escola-capoeira-releases
├── escola-capoeira-vue
└── escola-capoeira-staging
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
