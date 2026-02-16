---
layout: layout.njk
title: Contact
---

# Contact

Send a short description of what’s happening and what outcome you want. I’ll reply personally.

<div class="card">
  <form action="https://formspree.io/f/xjgeveba" method="POST">
  <input type="hidden" name="_redirect" value="https://www.doktorsnake.com/thanks/">
    <p>
      <label>Your name<br>
      <input type="text" name="name" required></label>
    </p>

    <p>
      <label>Your email<br>
      <input type="email" name="email" required></label>
    </p>

    <p>
      <label>What do you want to shift?<br>
      <textarea name="message" rows="8" required></textarea></label>
    </p>

    <p>
      <label>Deadline (if any)<br>
      <input type="text" name="deadline" placeholder="e.g. next Friday / no deadline"></label>
    </p>

    <p>
      <label>Preferred entry point<br>
      <select name="service">
        <option value="Not sure">Not sure (recommend)</option>
        <option value="Reading">Reading</option>
        <option value="Dokology">Dokology</option>
        <option value="EtherBlast">EtherBlast</option>
        <option value="MegaBlast">MegaBlast</option>
        <option value="GigaBlast">GigaBlast</option>
      </select></label>
    </p>

    <!-- Honeypot (spam trap) -->
    <input type="text" name="_gotcha" style="display:none">

    <!-- Optional: subject line -->
    <input type="hidden" name="_subject" value="DoktorSnake.com enquiry">

    <p style="margin-top:14px">
      <button class="btn" type="submit">Send →</button>
    </p>
  </form>

  <p style="margin-top:12px"><em>Payment is handled by invoice/link after we confirm the right tier and timeline.</em></p>
</div>

