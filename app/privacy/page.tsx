import { LegalShell } from '@/components/legal-shell';

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      description="This policy explains the categories of information the platform may process to operate the educational analytics service."
    >
      <section>
        <h2 className="text-xl font-medium text-text">Information we process</h2>
        <p>
          The platform may process account details, subscription status, support requests, and product usage information that helps maintain platform functionality and improve user experience.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-text">Purpose of processing</h2>
        <p>
          Data is used to provide access to educational materials, support analytics features, communicate service updates, and maintain platform security.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-text">User requests</h2>
        <p>
          For privacy-related questions or requests, users may contact support at support@robinhood.kz.
        </p>
      </section>
    </LegalShell>
  );
}
