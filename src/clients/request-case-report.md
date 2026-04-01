---
title: Request Your Case Report
layout: layout.njk
noindex: true
---

# Request Your Case Report

`Your Case · My Strategy`

I'll assess your case and get back with a personalised plan for moving forwards — what can be done and what methods would be most effective, be it a reading/working, or distance influence.

No obligation.   
Simply fill out the form below.

Once received I will email back within three days.

<div class="card">
   
  <h3>Questionnaire</h3>
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
      <label>Phone Number<br>
        <input type="phone" name="phone" autocomplete="phone">
      </label>
    </p>

 <p>
      <label>Date of Birth<br>
        <input type="dob" name="dob" autocomplete="dob" placeholder="YYYY-MM-DD">
      </label>
    </p>

 <p>
      <label>Place of Birth<br>
        <input type="pob" name="pob" autocomplete="pob">
      </label>
    </p>


 <p>
      <label>Current Location<br>
        <input type="location" name="location" autocomplete="location">
      </label>
    </p>

<p>
      <label>Spiritual Beliefs (if any)<br>
        <input type="spiritual" name="spiritual" autocomplete="spiritual">
      </label>
    </p>

    <p>
      <label>Describe Your situation<br>
        <textarea name="situation" rows="7" required
          placeholder="What feels pressured, complex, unclear, or high-stakes?"></textarea>
      </label>
    </p>

    <p>
      <label>What outcome or change do you need?<br>
        <textarea name="outcome" rows="4" required
          placeholder="What would ‘better’ look like in concrete terms?"></textarea>
      </label>
    </p>

    <p>
      <label>Anything else important to know? (optional)<br>
        <textarea name="notes" rows="3"></textarea>
      </label>
    </p>

    <!-- Honeypot (spam trap) -->
    <input type="text" name="_gotcha" style="display:none">

    <!-- Useful metadata -->
    <input type="hidden" name="_subject" value="Case Report Request">

    <p style="margin-top:14px">
      <button class="btn" type="submit">Send →</button>
    </p>

    <p style="margin-top:10px">
      <em>Back to you within three days.</em>
    </p>
  </form>
</div>

