---
layout: splash
title: Contact
permalink: /contact/
---

## Contact Us

#### For questions or to get in contact with us about scheduling services, you can reach us at {{site.phone_number}} or fill out the form below.

<section>
<form class="contact-form" method="POST" action="https://formspree.io/f/xjvploge">
    <div class="field">
        <label for="name">Name</label>
        <input class="contact-input" type="text" name="name" id="name" />
    </div>
    <div class="field">
        <label for="email">Email</label>
        <input class="contact-input" type="email" name="email" id="email" />
    </div>
    <div class="field">
        <label for="phone">Phone Number</label>
        <input class="contact-input" type="tel" name="phone" id="phone" />
    </div>
    <div class="field">
        <label for="service-type">Service</label>
        <select class="contact-dropdown" name="service-type" id="service-type">
            <option value="landscaping">Landscaping</option>
            <option value="mowing">Mowing</option>
            <option value="excavation">Excavation</option>
            <option value="irrigation">Irrigation</option>
        </select>
    </div>
    <div class="field budget">
        <label for="budget">Approximate Budget</label>
        <span>$</span>
        <input class="contact-input" type="number" name="budget" id="budget" step="any" min="0" max="25000" />
    </div>
    <div class="field">
        <label for="message">Message</label>
        <textarea class="contact-input" name="message" id="message" rows="3"></textarea>
    </div>
    <ul class="actions">
        <li><input class="contact-submit" type="submit" value="Send Message" /></li>
    </ul>
    </form>
</section>