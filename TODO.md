# Todo

## Todos

* Add license
* Configure GitHub Actions to automatically build and host the website on GitHub Pages
* Audit NPM vulnerabilities
* Add an About page
* Add snippet and link to the algorithms visualization program
  * Eventually, create a post about this


## Issues


## Improvements

### Fixes

* Summaries for posts include headers, etc.
  * How to implement a summary paragraph?
* Categories list page groups posts and projects together
* Rename Categories to Subects, and Tags to Topics
* Don't display ToC when there are no headings.


### Content additions

* An About page
* A Projects page about the algorithms visualization program


### Styling

* General
  * Need spacing between main area and navbar

* Posts 
  * Content
    * Make narrower?
  * Table of Contents
    * Make wider
  * Taxonomies
    * Fix the conversion to lowercase?

* Lists
  * Keep case of taxonomy keywords?
  * Indent posts under taxonomy terms?

* Links
  * Dotted underline for title links?

## Refactor


### Tweaks

* Don't collapse left column when switching to tablet mode.


## Features and functionality

### Components

* Toggle light/dark in navbar
* Articles and blog vs. posts


### Functionality

* Make responsive
* List featured projects/articles/posts before all other content
* On home page, include a link view more content


### Features

* Navbar
  * After clicking a menu item, keep it selected
    * So that Categories only apples e.g. to Posts
  * Add links to GitHub and LinkedIn

* Posts
  * Highlight taxonomies pertaining to the post?
    * Or List taxonomies beneath the title of the post
  * Click the Categories title in the right sidebar and list all posts by category.
    * Same for tags.
  * Show categories and tags in the right sidebar on the Posts page.
  * Related posts

* Posts list
  * Featured posts first, then all posts

* Categories and tags
  * For Category/Tag lists, highlight the selected item

* ToC
  * Display the ToC in the article when the ToC sidebar is hidden.
  * Include an option in content front matter for enabling/disabling the ToC (the ToC will be enabled by default).
  * Make the ToC sidebar static


## Bundling, building and deployment

* Bundle scripts with Hugo's js.Bundle function.
* Integrate NPM audits into the workflow