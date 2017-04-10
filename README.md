# Custom Boostrap Starter

This project provide you a starter for a custom boostrap using sass.

All **scss, js, fonts** files are placed in `src` directory.   

Gulp generate **css, minify js, and copy fonts** files in the `dest` directory define in the `gulp/config.json`


## Requirements

- You need `npm` to be install
- You need `gulp` to be install


## Installation

1. `Git clone` the project

2. Start install with `npm install`

3. Configure the destination folder in `gulp/config.json`. Default folder is set to `dist`

4. Your are ready to start !

## Watchers

- `gulp` default task initiate js and scss files watchers.   
- All task are define in `gulp/tasks` folder

## Customize components

1. If you want to select the boostrap components you want to include. Copy `node_modules/boostrap-sass/assets/stylesheets/_bootstrap.scss` file to `src/scss/vendors/bootstrap/_custom-boostrap.scss`.  
```bash
cp node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss ./src/scss/vendors/bootstrap/_bootstrap-custom.scss
```

2. You can comment in this file all the components your don't want to use.

3. Change in your `src/scss/main.scss` file your `@import bootstrap` import by `@import ./vendors/boostrap/bootstrap-custom`


## Override variables

1. If you want to override the boostrap variables.
Copy `node_modules/boostrap-sass/assets/stylesheets/boostrap/_variables.scss` file to `src/scss/vendors/bootstrap/_override-variables.scss`.  
```bash
cp node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss ./src/scss/vendors/bootstrap/_override-variables.scss
```

2. You can override bootstrap variables in this file.
```scss
$link-color: pink;
$font-size-base: 18px;
```

3. Dont forget to `@import ./vendors/boostrap/variables-override` in your `main.scss` before importing `boostrap`
