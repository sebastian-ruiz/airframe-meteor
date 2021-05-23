# Airframe Meteor (FORK)

***This is a fork of the [Airframe React](https://github.com/0wczar/airframe-react) project by [Tomasz Owczarczyk](https://github.com/0wczar)**.

# Installation

Run `npm ci`. 

I also had the problem of _includePaths is not iterable (https://github.com/Meteor-Community-Packages/meteor-scss/issues/273)

What I did is as follows to fix it:

1. got to `imports/ui/packages` and symlink all the node_modules that have scss:

```
ln -s ../../../node_modules/ag-grid-community
ln -s ../../../node_modules/bootstrap        
ln -s ../../../node_modules/@owczar/dashboard-style--airframe 
ln -s ../../../node_modules/font-awesome
ln -s ../../../node_modules/rc-slider   
ln -s ../../../node_modules/react-big-calendar  
ln -s ../../../node_modules/react-bootstrap-table-next 
ln -s ../../../node_modules/react-bootstrap-typeahead 
ln -s ../../../node_modules/react-datepicker         
ln -s ../../../node_modules/react-grid-layout 
ln -s ../../../node_modules/react-image-crop 
ln -s ../../../node_modules/react-quill     
ln -s ../../../node_modules/react-toastify 
ln -s ../../../node_modules/react-toggle
```

2. For me react-toastify was especially broken and I had to do the following.
In `node_modules/react-toastify/scss/main.scss` make the following change:

```
@import "{}/node_modules/react-toastify/scss/_variables.scss"; 
// @import "variables";
```

3. In the root of your app:
```
mkdir packages
cd packages
git clone https://github.com/sebastian-ruiz/meteor-scss
```
This is a fork of meteor-scss I wrote that fixes this issue.


Run `meteor`.

## Notes

Importing .scss files from .js files will add the css as an inline style and the sourcemap won't work.

# Original README:

High Quality **Dashboard / Admin / Analytics template** that works great on any smartphone, tablet or desktop. Available as **Open Source as MIT license.**

- [**View Demo**](http://dashboards.webkom.co/react/airframe/)
- [jQuery Version](http://dashboards.webkom.co/jquery/airframe) 
- [**Next Version**](https://github.com/webkom-co/airframe-next) - Now is available
- [Angular Version](http://dashboards.webkom.co/angular/airframe) - _Documentation in preparation_
- [Vue Version](http://dashboards.webkom.co/vue/airframe) - _Documentation in preparation_
- [MVC.Net Version](http://dashboards.webkom.co/net-mvc/airframe) - _Documentation in preparation_
- *Sketch Files (Soon)*

![aiframe-2019-light-primary-ExchangeTrading2x-bfc026c1-0477-45c8-ba55-f6dd43141e4c](https://user-images.githubusercontent.com/2330394/63061353-20ea4600-bef5-11e9-84c8-000a6dceea4d.png)

# Introduction

**Airframe Dashboard** with a minimalist design and innovative Light UI will let you build an amazing and powerful application with great UI. Perfectly designed for large scale applications, with detailed step by step documentation.

This **Airframe** project is a typical Webpack based React app, [React Router](https://reacttraining.com/react-router/web/guides/quick-start) also included together with customised [Reacstrap](https://reactstrap.github.io). This project has all of it's few dependencies up to date and it will be updated on a regular basis. This project doesn't support SSR. If you need it - use the [NextJs](https://github.com/zeit/next.js/) based version.

# Features

**Airframe Dashboard** has a huge collection of components that can be used in a great number of combinations and variations. It can be used in all types of custom web applications such as **CRMs**, **CMSs**, **Admin Panels**, **Admin Dashboards**, **Analytics**, etc.

- **10+ Layout Variations** - a multitude of possibilities to rearrange the layout, allows to customize the look of your application just as you imagined.
- **Applications** - applications ready, allows you to save time and focus on project development.
- **UI Components** - we offer you a large number of UI components; fully ready for changes that will customize them for your needs.
- **Responsive Design** - fully adapted to your application, exactly well presented on the desktop, a tablet or smartphone.
- **120+ Unique Pages** designed to make use of them directly in your application.
- **2 Starters** so that you can immediately work with the components that are necessary for your application.
