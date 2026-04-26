import { LegalShell } from '@/components/legal-shell';

export default function RiskDisclaimerPage() {
  return (
    <LegalShell
      title="Risk Disclaimer"
      description="A clear statement about the limits of the platform and the risks associated with market activity."
    >
      <section>
        <h2 className="text-xl font-medium text-text">Educational and analytical use only</h2>
        <p>
          Robinhood provides educational materials and analytical tools only. The platform does not offer individualized investment recommendations and does not execute trades on behalf of users.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-text">Financial risk remains with the user</h2>
        <p>
          Trading and investing involve risk, including the potential loss of capital. Any decisions based on market analysis, education, or self-directed research are made solely by the user.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-text">No guarantee of results</h2>
        <p>
          Robinhood does not guarantee profitability, future performance, or any specific financial outcome.
        </p>
      </section>
    </LegalShell>
  );
}
