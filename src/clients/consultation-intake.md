---
title: Your Consultation Questionnaire
layout: layout.njk
noindex: true
---

# Your Consultation Questionnaire

Thanks for ordering a consultation.  
Below is where you can supply details and lay down what you would like to discuss.

<div class="card">
   
  <h3>Questionnaire</h3>
  <p>All information you submit is kept 100% confidential.</p>

  <!-- Replace XXXXYYYY with your Formspree form ID -->
  <form action="https://formspree.io/f/xjgeveba" method="POST" enctype="multipart/form-data">

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
      <label>What you'd like to discuss<br>
      <small>What outcome or change your are trying to move toward.</small><br>
      <textarea name="situation" rows="7" required></textarea>
      </label>
    </p>


   <p>
     <label>
     Upload any relevant photographs or documents (optional)<br>
      <small>E.g. yourself, another person involved, a property, a document, anything directly connected with what you wish to discuss.</small><br>
     <small>You can upload more than one file if needed.</small><br>
          <input multiple type="file" name="attachment[]" accept="image/*,.pdf,.doc,.docx">
     </label>
   </p>

    <!-- Honeypot (spam trap) -->
    <input type="text" name="_gotcha" style="display:none">

    <!-- Useful metadata -->
    <input type="hidden" name="_subject" value="Questionnaire — Consultation">

    <p style="margin-top:14px">
      <button class="btn" type="submit">Send →</button>
    </p>

    <p style="margin-top:10px">
      <em>Once Doktor Snake has evaluated your information, he will be in touch to arrange a day and time for your consultation.</em>
    </p>
  </form>
</div>
