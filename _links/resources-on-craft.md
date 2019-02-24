---
layout: post
title: "RESOURCES ON CRAFT"
author: "Andy"
collections: links
permalink: /craft/
excerpt: There's your discipline, and there's your craft—whats the difference and why am I so attracted to learning things as a craft instead of a discipline?

---

STILL UPDATING THIS SECTION

###### ARTISTS I FOLLOW
---

Jacob Robichaux

Regine Schumann — [http://www.regineschumann.de/](http://www.regineschumann.de/)

Max Lamb

Sabine Marcelis [http://sabinemarcelis.com/](http://sabinemarcelis.com/)

pamela rosenkranz

<br>
<br>


###### PRESENTATIONS
---

See my post on

{% assign counter = '0' %}
{% for page in site.pages %}
{% for tag in page.tags %}
{% if tag == "news" and counter < '5' %}
    {% capture counter %}{{ counter | plus:'1' }}{% endcapture %}
<li><a href="{{ page.permalink | prepend: site.baseurl }}">{{page.title}}
</a> ({{ counter }})</li>
<div class="summary">{{page.summary}}</div>

{% endif %}
{% endfor %}
{% endfor %}
