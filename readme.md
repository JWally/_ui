#_ui: My UI Build Environment

This is my preferred user interface development environment. 

There are many like it, but this one is mine.

Without me, it is nothing. 

Without it; I usually waste 2 days trying to remember how to set everything up or ripping out components from prior projects making a mess. *barf* 

##Wait...what?
To make my projects as easy and repeatable as possible, I'm putting a development environment in git that I can use whenever I want to start up a new project. In the past, this meant going to the last successful project, trying to dismantle it, and cobble it together to fit the next project. Yuck city. This is a living project and document, so it will probably evolve over time, and branch as things come in / go out of vogue.

##What's Assumed
Here's what I'm using for my projects-du-jour

### Front - End

1. [Backbone.js](backbonejs.org) - MV.* Front End JavaScript Library
2. [RequireJS](requirejs.org) - JavaScript file loader for modularity
3. [Twitter - Bootstrap](getbootstrap.com) - Its reputation precedes it...such wow!
4. [Hogan.js](http://twitter.github.io/hogan.js/) - JavaScript templating from Twitter

### Back - End

1. [Node.js](https://github.com/joyent/node) - Server Side JavaScript and Emcee
2. [GRUNT](gruntjs.com) - Node.js project build automation
3. [Bower - By Twitter](bower.io) - front-end package management

## How do I use this
Before anything else, you have to have both [git](http://git-scm.com/) and [Node.js](https://github.com/joyent/node) installed. The latest version of each ought to do fine, but whatever works with the other packages entangled within is good with me. After this, it ought to be pretty smoothe sailing:

```shell
$git clone https://github.com/JWally/_ui.git
$cd _ui
$npm install
$bower install
```

At this point, all necessary dependencies *should* be loaded. In the grunt file I created, there are two environments that you can build into `prod` and `dev`. 

### prod
To build your project out in `prod`, do the following in the shell
```shell
$grunt prod
```
This option does the following
1. Concatenates *and* minifies all JavaScript files into 1 (src/main.min.js)
2. Concatenates *and* minifies all SASS files into 1 css (src/main.min.css)
3. gzip's copies of the prod files into the `prod` directory


