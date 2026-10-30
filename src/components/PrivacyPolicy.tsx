import React from 'react';
import LegalContact from './LegalContact';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="container legal-page">
      <h2>Privacy Policy</h2>
      <p><strong>Last Updated: October 2026</strong></p>
      <p>
        GNR Aditya School and GNR Institutions ("we", "our", or "the School") respect the privacy of students,
        parents, guardians, staff, visitors, and other users of our website. This Privacy Policy explains how we
        collect, use, store, and protect personal information submitted through our website and related services.
      </p>

      <h3>1. Information We Collect</h3>
      <p>We may collect information that you voluntarily provide to us, including:</p>
      <ul>
        <li>Student's name, age, class, and academic information.</li>
        <li>Parent/guardian name and contact details.</li>
        <li>Phone number and email address.</li>
        <li>Residential or correspondence address.</li>
        <li>Information submitted through admission or enquiry forms.</li>
        <li>Information relating to transportation requirements.</li>
        <li>Information required for school activities, programs, or services.</li>
        <li>Any other information voluntarily submitted through our website.</li>
      </ul>
      <p>
        We may also automatically collect limited technical information such as browser type, device information,
        IP address, pages visited, and website usage information.
      </p>

      <h3>2. How We Use Your Information</h3>
      <p>We may use the information collected to:</p>
      <ul>
        <li>Respond to admission and general enquiries.</li>
        <li>Process registration and admission-related requests.</li>
        <li>Communicate with parents, guardians, students, and applicants.</li>
        <li>Provide information about school programs, facilities, activities, and services.</li>
        <li>Send you notifications, reminders, and announcements by SMS, WhatsApp, email, or voice call (see "Communication With You" below).</li>
        <li>Manage transportation and other requested services.</li>
        <li>Improve our website and services.</li>
        <li>Maintain website security and prevent misuse.</li>
        <li>Comply with applicable legal and regulatory requirements.</li>
      </ul>

      <h3>3. Communication With You</h3>
      <p>
        By submitting your details through our website (including the Contact Us form) and accepting this Privacy
        Policy, you agree that the School may contact you on the phone number and email address you provide,
        through channels including but not limited to SMS, WhatsApp, email, and voice calls.
      </p>
      <p>We may use these channels to:</p>
      <ul>
        <li>Respond to your enquiries and provide admission and customer support.</li>
        <li>Send important information such as admission updates, fee reminders, circulars, holidays, events, and transportation notices.</li>
        <li>Send information about school programs, activities, and promotional or marketing messages, where you have given consent.</li>
      </ul>
      <p>
        You may withdraw your consent or opt out of non-essential messages at any time by replying "STOP" to a
        message or by contacting us using the details below. Standard message and data rates charged by your
        service provider may apply.
      </p>

      <h3>4. Children's Information</h3>
      <p>
        Our services may involve information relating to students and children. We request that parents or legal
        guardians provide information on behalf of minors wherever appropriate.
      </p>
      <p>
        We take reasonable steps to protect children's personal information and use such information only for
        legitimate educational, administrative, safety, or school-related purposes.
      </p>

      <h3>5. Sharing of Information</h3>
      <p>We do not sell or rent personal information to third parties.</p>
      <p>
        Information may be shared with authorized employees, service providers, educational partners, technology
        providers, transportation/service providers, or government and regulatory authorities where reasonably
        necessary for providing services, school administration, safety, or complying with legal obligations.
      </p>

      <h3>6. Data Security</h3>
      <p>
        We take reasonable administrative, technical, and organizational measures to protect personal information
        against unauthorized access, alteration, disclosure, misuse, or destruction.
      </p>
      <p>
        However, no method of transmission or storage over the internet can be guaranteed to be completely secure.
      </p>

      <h3>7. Cookies and Website Technologies</h3>
      <p>
        Our website may use cookies or similar technologies to improve functionality, understand website usage,
        remember preferences, and improve the user experience.
      </p>
      <p>Users may be able to control cookies through their browser settings.</p>

      <h3>8. Third-Party Links</h3>
      <p>
        Our website may contain links to third-party websites or services. We are not responsible for the privacy
        practices, content, or security of those third-party websites.
      </p>
      <p>We recommend reviewing their respective privacy policies before providing personal information.</p>

      <h3>9. Data Retention</h3>
      <p>
        We retain personal information only for as long as reasonably necessary for the purposes for which it was
        collected, including educational, administrative, legal, regulatory, and legitimate institutional
        requirements.
      </p>

      <h3>10. Your Rights</h3>
      <p>
        Subject to applicable law, you may request information regarding the personal data we hold about you and
        may request correction or updating of inaccurate information.
      </p>
      <p>
        For requests relating to personal information, please contact the School using the contact details
        provided below.
      </p>

      <h3>11. Changes to This Privacy Policy</h3>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our services, practices, or
        applicable laws.
      </p>
      <p>Any updated version will be published on this page with the revised "Last Updated" date.</p>

      <h3>12. Contact Us</h3>
      <LegalContact />
      <p>
        If you have questions regarding this Privacy Policy or the handling of your personal information, please
        contact us using the above details.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
