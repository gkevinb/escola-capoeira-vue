# escola-capoeira-vue

## Project setup

Make sure you use an older version of Node, for example `Node v16.8.0`, as this Vue project hasn't been migrated to a newer Node.

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles for staging
```
npm run build-staging
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Pushing master to Azure Devops
```
git push devops master
```

### Pushing master to Github
```
git push github master
```

### Deploy to Github Pages
Deploy frontend to Github pages to showcase how it looks so far.
```
npm run deploy-gh
```

Note, this command executes a `git` commit and pushes to the Github repository.

### Deploy Frontend to Wordpress
```
npm run deploy-wp
```

This command builds the production version of the frontend. It changes `index.html` to `index.php` and adds the appropriate `php` tags to work on the Wordpress website.

Then the contents of the `dist` directory are copied into `wp-content/themes/vuefrontend` in the `escola-capoeira-staging` repo. As long as the Escola Capoeira repos are organized in the following way:


```
EscolaCapoeira
├── escola-capoeira-releases
├── escola-capoeira-vue
└── escola-capoeira-staging
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
