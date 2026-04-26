import Link from 'next/link';
import { LegalShell } from '@/components/legal-shell';

export default function ContactPage() {
  return (
    <LegalShell
      title="Contact"
      description="For access questions, support, subscriptions, or compliance-related requests, use the contact details below."
    >
      <section>
        <h2 className="text-xl font-medium text-text">Support email</h2>
        <p>
          <Link href="mailto:support@robinhood.kz" className="text-primary transition hover:text-[#00B875]">
            support@robinhood.kz
          </Link>
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-text">Request categories</h2>
        <p>
          Users may contact support regarding platform access, educational content, billing questions, subscription cancellation, or policy clarifications.
        </p>
      </section>
    </LegalShell>
  );
}
