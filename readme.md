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
5. [Sass](http://sass-lang.com/) - Syntactically Awesome Style Sheets (css compiler)

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

This option squeezes everything down as small as possible, and in the case of the `prod` directory allows your project to be hosted on a CDN with no server. On the downside, because everything is minified, concatenated, and scrambled; debugging and other development related tasks become nightmarish. Thus, we get our second grunt option...`dev`

### dev
To build your project out in `prod`, do the following in the shell
```shell
$grunt dev
```
This option does the following

1. Concatenates ~~*and* minifies~~ all JavaScript files into 1 (src/main.min.js)
2. Concatenates ~~*and* minifies~~ all SASS files into 1 css (src/main.min.css)
3. ~~gzip's copies of the prod files into the `prod` directory~~

FYI (and this probably needs a bigger section header); all changes have to be processed through grunt. This is because `src/index.html` is aiming at 1 javascript file, and 1 local css file; which are build through grunt. If you're changing things, and they're not changing in your browser, check here first.

### s3
Not 100% sure where to put this or how to incorporate, but wanted to have it in here. What this option will do is move all of the files from the `prod` folder into a folder on Amazon Web Services `s3`. What's cool about this option is that you can link your s3 bucket to Amazon's cloudfront services and have your minified / gzipped files sitting on a CDN.

This requires a 


## Super!...How do I see what I'm working on?
Not much point in developing a web ~~site~~ application if you can't see what's going on. Fortunately, because we're running on node, we can use some libraries geared towards it's server applications to build out a skeleton server. This is awesome because it means we don't have to worry about configuring apache/nginx/lighthttpd/etc. Instead, do the following in a seperate shell:

```shell
$node etc/server.js
```

This should open up a static file server at localhost:1337. If you want to see the site you're working on, aim your browser at [localhost:1337/src](localhost:1337/src). Any changes you make to your application (again, through grunt'n) ought to show up immediately.

## Template Cloning
Given that we're dealing with AMD and backbone, we're probably going to end up re-using the same little snippets of code over and over again...

To make this a little less tedious, the grunt file has a pretty simple (see modifiable) function in it that allows you to clone templates. Because it's so maliable (see also undocumented / poorly implemented) I'm not going to spend a ton of time on it. Essentially, the steps to implement go like this:

1. Create a hogan style template (ending in txt) in `etc/templates`
2. In a shell, run `grunt hogan:hero` (get it?) which preps the templates
3. cd into a directory where you want to clone a template
4. In shell, type out `grunt clone:{{template}}:{{what to name it}}:{{path}}`

Where `{{template}}` is the name of the file of the template you created; `{{what to name it}}` is what you want to name the new file you're creating; and `{{path}}` is the directory you want the file to go into, relative to the root of your project (sounds harder than it really is...watch this!).

So say I've got a template named `hello.txt`; I could cd into `where/it/goes` and shell the following: 
```shell
grunt clone:hello:something:`pwd`
```

This clones the template hello, renaming it `something.js` in the directory where the shell currently is.

