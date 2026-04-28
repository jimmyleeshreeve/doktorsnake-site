---
title: Your Sigil Intention Form
layout: layout.njk
noindex: true
---

# Your Sigil Intention Form

Write your intention in one or two clear sentences.   
Avoid long backstories. Precision improves results.   
But there's an optional "context" box below if you do need to add more.

<div class="card">
   
  <h3>Submit Your Intention</h3>
  <p>All information you submit is kept 100% confidential.</p>

  <!-- Replace XXXXYYYY with your Formspree form ID -->
  <form action="https://formspree.io/f/xjgeveba" method="POST">
  <input type="hidden" name="_redirect" value="https://www.doktorsnake.com/thanks/">

    <p>
      <label>Your Name<br>
        <input type="text" name="name" autocomplete="name" required>
      </label>
    </p>

    <p>
      <label>Email Address<br>
        <input type="email" name="email" autocomplete="email" required>
      </label>
    </p>

 <p>
      <label>Date of Birth<br>
        <input type="dob" name="dob" autocomplete="dob" placeholder="YYYY-MM-DD">
      </label>
    </p>

    <p>
      <label>Your Intention<br>
        <textarea name="intention" rows="7" required
          placeholder="Keep it simple and direct."></textarea>
      </label>
    </p>

    <p>
      <label>Any extra context I should know (optional)<br>
        <textarea name="context" rows="3"></textarea>
      </label>
    </p>

    <!-- Honeypot (spam trap) -->
    <input type="text" name="_gotcha" style="display:none">

    <!-- Useful metadata -->
    <input type="hidden" name="_subject" value="Sigil Intention Form">

    <p style="margin-top:14px">
      <button class="btn" type="submit">Send →</button>
    </p>

    <p style="margin-top:10px">
      <em>All Power!</em>
    </p>
  </form>
</div>

