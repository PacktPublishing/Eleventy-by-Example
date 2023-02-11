---
layout: "base.html"
---

# Eleventy Plugin Hygraph Data Test

{% for episode in hygraph.episodes %}
    {{ episode.title }}
{% endfor %}