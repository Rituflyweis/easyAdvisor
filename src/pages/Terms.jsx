import Logo from '../components/Logo.jsx'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[color-mix(in_oklab,var(--brand-primary)_8%,white)]">
      <header className="sticky top-0 z-30 border-b border-zinc-100 bg-gradient-to-r from-[var(--ui-gradient-start)] to-[var(--ui-gradient-end)] text-white">
        <div className="mx-auto max-w-7xl inner h-14 flex items-center gap-3">
          <Logo size={28} />
          <span className="text-base font-semibold">Easy Advising</span>
          <a href="/" className="ml-auto inline-flex items-center rounded-md bg-white/15 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/25">Home</a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl inner py-10">
        <div className="mb-6">
          <span className="text-xs tracking-widest uppercase text-[var(--brand-primary)]">Terms and Conditions</span>
          <h1 className="mt-2 text-3xl font-bold text-zinc-900">Easy Advising</h1>
        </div>

        <div className="prose prose-zinc max-w-none">
          <h2>Disclaimer – Please Read Before Booking a Session</h2>
          <p>Easy Advising is a second-opinion advisory platform designed to help users make more informed choices by connecting them with verified professionals across various domains such as career, health, legal, finance, tourism, and astrology.</p>
          <p>Before proceeding, please understand the following:</p>
          <ul>
            <li>All consultations are advisory in nature and represent non-binding opinions based solely on the information you, the user, choose to provide.</li>
            <li>This platform does not offer: medical diagnosis or prescriptions; legal representation or filing; financial investment recommendations or trading advice.</li>
            <li>This is not a replacement for in-person or emergency professional services. If you are facing a critical issue or emergency, please contact appropriate licensed professionals or emergency responders.</li>
          </ul>
          <p>By continuing to use Easy Advising:</p>
          <ul>
            <li>You confirm you are voluntarily seeking a second opinion to assist in your personal decision-making.</li>
            <li>You accept full responsibility for any decisions or actions taken based on the advice received.</li>
            <li>You agree not to share sensitive personal or financial data, including passwords, bank details, or OTPs, during any consultation.</li>
          </ul>

          <h2>1. Introduction</h2>
          <p>Welcome to Easy Advising. By accessing our mobile app or website, you agree to these comprehensive Terms and Conditions. These terms outline your rights, responsibilities, and the limitations of the services we offer. If you do not agree to be legally bound by these Terms, we respectfully ask that you do not use our services.</p>

          <h2>2. Definitions</h2>
          <ul>
            <li>“Easy Advising”, “we”, “us”, or “our” refers to the platform, its owners, employees, and affiliates.</li>
            <li>“User”, “you”, or “your” refers to any individual or organization accessing or using our services.</li>
            <li>“Consultant” means a professional listed on our platform offering their expertise and advisory services through chat, voice, or video.</li>
            <li>“Services” encompass all the offerings on the Easy Advising platform including communication features, scheduling, and profile viewing.</li>
          </ul>

          <h2>3. Nature of Services Provided</h2>
          <p>Easy Advising is an informational and educational platform, offering second opinions through qualified advisors across multiple fields. The platform facilitates informed decision-making and clarity in life, career, health, legal, and finance matters — but with strict limitations:</p>
          <ul>
            <li>We do not provide emergency care, legally binding counsel, investment guarantees, or medical treatments.</li>
            <li>Our advisors do not prescribe medicine, handle legal paperwork, or provide investment instruments.</li>
            <li>Our goal is to provide clarity, not solutions. Users are expected to follow up with relevant licensed professionals before acting on any advice.</li>
          </ul>

          <h2>4. Eligibility to Use Services</h2>
          <ul>
            <li>Be at least 18 years of age.</li>
            <li>Be legally competent to enter into a binding agreement as per Indian Contract Law.</li>
            <li>Agree to abide by all terms, policies, and applicable laws.</li>
          </ul>
          <p>Use by minors is strictly prohibited unless accompanied by legal guardians or via a parent-managed account (future implementation may apply).</p>

          <h2>5. Account Creation and Responsibilities</h2>
          <p>To access consultant services, you must register an account. By doing so, you agree to:</p>
          <ul>
            <li>Provide true, current, and complete information at the time of registration.</li>
            <li>Keep your login credentials confidential and secure.</li>
            <li>Promptly report any unauthorized access or suspicious activity.</li>
            <li>Take full accountability for all actions taken under your account.</li>
          </ul>
          <p>Note: Misuse or impersonation may result in immediate account suspension or legal action.</p>

          <h2>6. Appropriate Use and Restrictions</h2>
          <p>You agree to use Easy Advising ethically and responsibly. You may not:</p>
          <ul>
            <li>Use our platform for fraudulent, unlawful, or malicious activities.</li>
            <li>Disrupt the experience of other users through spamming, offensive behavior, or harassment.</li>
            <li>Attempt to gain unauthorized access to consultants’ profiles or session data.</li>
            <li>Share confidential personal, financial, or security-sensitive data during any session.</li>
          </ul>
          <p>Failure to comply may lead to account termination, reporting to authorities, and possible legal recourse.</p>

          <h2>7. Payment, Wallet Recharge & Billing Process</h2>
          <p>Easy Advising follows a wallet-based, minute-wise billing model. To use any paid service, users must recharge their in-app wallet in advance. This ensures a smooth, uninterrupted experience during live consultations.</p>
          <h3>Wallet Recharge Requirement</h3>
          <ul>
            <li>Users must recharge their Easy Advising wallet using valid payment methods.</li>
            <li>Funds in the wallet are used to pay for consultations based on actual usage (minutes spent).</li>
          </ul>

          <h3>How Billing Works – Example 1: Instant Session</h3>
          <ul>
            <li>Per-minute rate × minutes connected = wallet deduction.</li>
          </ul>

          <h3>Scheduling a Session – Example 2: Advance Booking Requirement</h3>
          <p>A minimum balance equal to 30 minutes of the advisor’s rate must be present to confirm a scheduled session. This amount is held (frozen) and released after the session ends, charging only actual minutes used.</p>

          <h2>8. Refund and Cancellation Policy</h2>
          <ol>
            <li>No refund after consultant is assigned (processing status).</li>
            <li>Pre-execution cancellations within 1 hour may be considered at our discretion.</li>
            <li>No refund for incorrect user information.</li>
            <li>Damaged physical products accepted only if damaged in shipment (report within 72 hours).</li>
            <li>Subscription delays without user fault may qualify for partial refund.</li>
            <li>Missed calls or wrong contact info do not qualify for refund.</li>
            <li>Refunds may be subject to gateway/bank charges.</li>
            <li>Server errors (duplicate charges) refunded within 72 hours.</li>
            <li>Platform-initiated cancellations: full refund.</li>
            <li>Quality complaints may be refunded to wallet after audit.</li>
            <li>Valid refund includes consultant delay.</li>
            <li>No refund for subjective dissatisfaction.</li>
            <li>Approved refunds processed to wallet within 72 hours.</li>
          </ol>

          <h2>9. Consultant Roles and Responsibilities</h2>
          <ul>
            <li>Consultants are independent professionals, not employees of Easy Advising.</li>
            <li>We verify profiles initially but cannot guarantee outcomes.</li>
            <li>Users must evaluate consultant profiles before sessions.</li>
          </ul>

          <h2>10. Privacy Commitment</h2>
          <p>We handle personal data per our Privacy Policy, describing collection, storage, sharing (if applicable), and user rights.</p>

          <h2>11. Intellectual Property Rights</h2>
          <ul>
            <li>All logos, content, text, scripts, code, and branding are owned by Easy Advising or licensors.</li>
            <li>Unauthorized use or duplication is prohibited.</li>
            <li>Use is limited to personal, non-commercial purposes.</li>
          </ul>

          <h2>12. Disclaimers and Liability Limitations</h2>
          <ul>
            <li>Services are provided “as-is” and “as available”.</li>
            <li>No guarantees on accuracy, outcomes, or effectiveness of advice.</li>
            <li>We are not liable for loss of data/revenue/time, decisions made based on advice, or delays due to external factors.</li>
          </ul>

          <h2>13. Emergency & Legal Warning</h2>
          <ul>
            <li>Not for emergencies or urgent mental health crises.</li>
            <li>Not for filing legal cases or government documents.</li>
            <li>Not for prescribing medicines or initiating treatments.</li>
            <li>Not for real-time trading or investment actions.</li>
          </ul>

          <h2>14. Governing Law and Jurisdiction</h2>
          <p>These terms are governed by the laws of the Republic of India. All disputes shall be resolved exclusively by the courts located in Delhi.</p>
        </div>
      </main>
    </div>
  )
}


