---
layout: layout.njk
title: Updates
description: Occult Fixer. Spiritual Outlaw. Results Magician.
permalink: /clients/updates/
noindex: true
---

<section class="whats-new">

  <h2>Field Updates</h2>

  <h3>Latest Dispatches</h3>

  <ul class="terminal-log">
    {% for post in collections.latestDispatches %}
      <li>
        <span class="log-date">[{{ post.date | htmlDateString }}]</span>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
      </li>
    {% endfor %}
  </ul>

  <h3>Site Updates</h3>

  <ul class="terminal-log">
    {% for update in siteUpdates %}
      <li>
        <span class="log-date">[{{ update.date }}]</span>
        <a href="{{ update.url }}">{{ update.title }}</a>
      </li>
    {% endfor %}
  </ul>

</section>

---
