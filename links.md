---
layout: links
permalink: /links/
---

{% for links in site.links %}
  <div class="col-12 col-xs-12 col-sm-12	col-md-6	col-lg-4	col-xl-4">
<div class="post-card">
  <a href="{{ links.url | prepend: site.baseurl }}" class="catalogue-item">
    <h1 class="catalogue-title">{{ links.title }}</h1>
  <div class="catalogue-line"></div>
  <p>
    {{ links.excerpt | strip_html | truncatewords: 30 }}
  </p>
</a>
</div>

</div>

{% endfor %}
