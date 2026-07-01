---
title: SnakeWood Rite Intention Form
layout: layout.njk
noindex: true
---

# Your SnakeWood Rite Intention Form

Write your intention in the box below   
There's an optional "context" box too should you need to add more.

<div class="card">
   
  <h3>Submit Your Intention</h3>
  <p>Everything you submit is treated as strictly confidential and is used only for your SnakeWood Rite.</p>

  <!-- Replace XXXXYYYY with your Formspree form ID -->
  <form action="https://formspree.io/f/xjgeveba" method="POST" enctype="multipart/form-data">
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
    
   <label>Date of Birth (optional)<br>
    <small>Some clients choose to include this as part of the symbolic record for their working.</small><br>
  <input type="date" name="dob">
   </label>

    <p>
      <label>Describe the outcome you'd like the sigil to represent.<br>
       <small>One or two paragraphs is usually enough.</small><br>
        <textarea name="intention" rows="7" required></textarea>
      </label>
    </p>

    <p>
      <label>Background (optional)<br>
        <small>Add any details that will help me understand your situation.</small><br>
        <textarea name="context" rows="3"></textarea>
      </label>
    </p>
    
   <p>
     <label>
     Upload any relevant photographs or documents (optional)<br>
      <small>E.g. yourself, another person involved, a property, a document, anything directly connected with the intention</small><br>
     <small>You can upload more than one file if needed.</small><br>
          <input multiple type="file" name="attachment[]" accept="image/*,.pdf,.doc,.docx">
     </label>
   </p>


    <!-- Honeypot (spam trap) -->
    <input type="text" name="_gotcha" style="display:none">

    <!-- Useful metadata -->
    <input type="hidden" name="_subject" value="SnakeWood Rite Intention Form">

    <p style="margin-top:14px">
      <button class="btn" type="submit">Send →</button>
    </p>

    <p style="margin-top:10px">
      <em>All Power!</em>
    </p>
  </form>
</div>

