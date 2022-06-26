---
title: "Sitemap"
layout: archive
permalink: /sitemap/
author_profile: false
---

Here is a map of my site.

## Pages
{% for page in site.pages %}
	{% include archive-single.html %}
{% endfor %}

## Posts
{% for post in site.posts %}
	{% include archive-single.html %}
{% endfor %}
