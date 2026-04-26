import { LegalShell } from '@/components/legal-shell';

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      description="These terms outline the educational and analytical nature of the Robinhood platform and the boundaries of service usage."
    >
      <section>
        <h2 className="text-xl font-medium text-text">Service scope</h2>
        <p>
          Robinhood provides access to educational materials, analytical dashboards, market observation tools, and supporting platform updates. The service is intended to support learning and structured market analysis.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-text">No investment advice</h2>
        <p>
          Robinhood does not provide individualized investment advice, portfolio management, brokerage execution, or fiduciary services. Users remain solely responsible for any financial or trading decisions they make.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-text">Account responsibility</h2>
        <p>
          Users are responsible for maintaining the confidentiality of their credentials and for all activity associated with their account.
        </p>
      </section>
    </LegalShell>
  );
}
