import { LegalShell } from '@/components/legal-shell';

export default function RefundPolicyPage() {
  return (
    <LegalShell
      title="Refund Policy"
      description="This page summarizes how subscription cancellations and refund requests are handled for platform access."
    >
      <section>
        <h2 className="text-xl font-medium text-text">Subscription cancellation</h2>
        <p>
          Users may cancel their subscription at any time. Cancellation stops future billing from the next billing cycle in accordance with the subscription terms presented at checkout.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-text">Refund review</h2>
        <p>
          Refund requests are reviewed individually based on payment status, timing, and access history. Submitting a request does not automatically guarantee a refund.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-text">Support channel</h2>
        <p>
          To request cancellation assistance or discuss a billing matter, contact support@robinhood.kz.
        </p>
      </section>
    </LegalShell>
  );
}
