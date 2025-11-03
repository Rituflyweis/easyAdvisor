import Logo from '../components/Logo.jsx'

export default function Privacy() {
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
          <span className="text-xs tracking-widest uppercase text-[var(--brand-primary)]">Privacy Policy</span>
          <h1 className="mt-2 text-3xl font-bold text-zinc-900">Easy Advising</h1>
        </div>

        <div className="prose prose-zinc max-w-none">
            <h2>Introduction</h2>
            <p>Welcome to <strong>Easy Advising</strong>. Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our consultancy services. By accessing or using Easy Advising, you agree to the terms of this Privacy Policy.</p>

            <h2>Information We Collect</h2>
            <p><strong>Personal Information:</strong> When you register on Easy Advising, we collect personal information such as your name, email address, phone number, and other contact details. This information is necessary to create your account and provide you with our services.</p>
            <p><strong>Payment Information:</strong> To facilitate transactions, we collect payment information, including credit/debit card details or other financial account information. This information is processed securely through our third-party payment processors.</p>
            <p><strong>Consultation Data:</strong> We collect information related to your consultations, including the content of chats, voice calls, and video calls. This information is used solely to provide and improve our services.</p>
            <p><strong>Usage Data:</strong> We collect information about your interactions with Easy Advising, such as the pages you visit, the features you use, and the time and duration of your sessions. This helps us understand how you use our platform and improve your experience.</p>
            <p><strong>Device Information:</strong> We may collect information about the device you use to access Easy Advising, including the device type, operating system, and browser type.</p>

            <h2>How We Use Your Information</h2>
            <p><strong>To Provide Services:</strong> We use your personal and payment information to create your account, process transactions, and connect you with consultants.</p>
            <p><strong>To Improve Services:</strong> We analyze usage data and feedback to enhance our platform, develop new features, and improve the overall user experience.</p>
            <p><strong>To Communicate:</strong> We use your contact information to send you updates, notifications, and promotional materials. You can opt-out of these communications at any time.</p>
            <p><strong>To Ensure Security:</strong> We use your information to protect against fraud, unauthorized access, and other security issues.</p>
            <p><strong>To Comply with Legal Obligations:</strong> We may use your information to comply with applicable laws, regulations, and legal processes.</p>

            <h2>Sharing Your Information</h2>
            <p><strong>With Consultants:</strong> We share your consultation data with the consultants you connect with to provide you with the requested services.</p>
            <p><strong>With Third-Party Service Providers:</strong> We may share your information with third-party service providers who assist us in providing our services, such as payment processors and IT service providers. These third parties are bound by confidentiality agreements and are not permitted to use your information for any other purpose.</p>
            <p><strong>For Legal Reasons:</strong> We may disclose your information if required by law or in response to legal processes, such as court orders or subpoenas.</p>
            <p><strong>With Your Consent:</strong> We may share your information with third parties if you give us explicit consent to do so.</p>

            <h2>Data Security</h2>
            <p>We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, firewalls, and secure server environments. However, please note that no method of transmission over the internet or electronic storage is completely secure.</p>

            <h2>Your Rights</h2>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information and obtain a copy of the data we hold about you.</li>
              <li><strong>Rectify:</strong> Correct any inaccuracies in your personal information.</li>
              <li><strong>Delete:</strong> Request the deletion of your personal information, subject to certain legal obligations.</li>
              <li><strong>Object:</strong> Object to the processing of your personal information in certain circumstances.</li>
              <li><strong>Withdraw Consent:</strong> Withdraw your consent to the processing of your personal information at any time.</li>
            </ul>
        </div>
      </main>
    </div>
  )
}


