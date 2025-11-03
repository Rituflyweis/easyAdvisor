import Logo from '../components/Logo.jsx'

export default function Refund() {
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
          <span className="text-xs tracking-widest uppercase text-[var(--brand-primary)]">Refund & Cancellation Policy</span>
          <h1 className="mt-2 text-3xl font-bold text-zinc-900">Easy Advising</h1>
        </div>

        <div className="prose prose-zinc max-w-none">
          <h2>Easy Advising – Refund and Cancellation Policy</h2>
          <ol>
            <li><strong>No Refund after Consultant Is Assigned:</strong> Once your order reaches “processing” status, no refund is issued as consultant time has been committed.</li>
            <li><strong>Pre-Execution Cancellations:</strong> Cancellations made within 1 hour before service initiation may be considered, at our sole discretion.</li>
            <li><strong>Incorrect Information by User:</strong> If you provide incorrect data (wrong phone number, issue description), no refund will be issued.</li>
            <li><strong>Product Damages (Physical Items Only):</strong> We do not accept returns of damaged products unless it was damaged during shipment. Verification is required within 72 hours.</li>
            <li><strong>Subscription Delays:</strong> If activation of a subscription is delayed without user fault, a partial refund may apply.</li>
            <li><strong>Missed Calls or Wrong Contact Info:</strong> Missed sessions due to unreachable phone number or poor network from the user’s side will not qualify for a refund.</li>
            <li><strong>Payment Gateway Deductions:</strong> Refunds (if granted) will be subject to deductions for transaction charges, bank fees, and gateway commissions.</li>
            <li><strong>Server Errors:</strong> If payment is deducted multiple times due to technical issues, the extra amount will be refunded within 72 hours.</li>
            <li><strong>Platform-Initiated Cancellations:</strong> If Easy Advising cancels a booking due to consultant unavailability or pricing error, a full refund will be processed.</li>
            <li><strong>Quality Complaints:</strong> If the session was disrupted (e.g., poor network) we will audit the session and may issue a refund to your Easy Advising wallet.</li>
            <li><strong>Valid Refund Situations Include:</strong> Consultant delays session.</li>
            <li><strong>No Refund for Subjective Dissatisfaction:</strong> No refunds for reasons such as: you did not like the advice, you disagreed with the opinion given, or you expected guaranteed results.</li>
            <li><strong>Refund Timeline:</strong> All approved refunds will be processed to your Easy Advising wallet within 72 hours.</li>
          </ol>
        </div>
      </main>
    </div>
  )
}


