import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function PrivacyPage() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen py-14 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-8"
          data-ocid="privacy.back.link"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-display font-extrabold text-foreground tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mt-2">Last updated: {year}</p>
          <div className="mt-4 bg-primary/10 border border-primary/20 rounded-2xl px-5 py-3">
            <p className="text-sm text-primary font-semibold">
              📋 This is a placeholder privacy policy. Please consult a legal
              professional before publishing a live product.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When you use Galactic Dogs, we may collect information you provide
              directly, such as the name you assign to a dog you mint. We also
              collect information automatically through your use of the Internet
              Computer Protocol, including your Internet Identity principal,
              which serves as your unique identifier on-chain.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to provide, maintain, and
              improve our services — specifically to mint, store, and display
              your custom dog collection. We do not sell or share your
              information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              3. Data Storage on the Internet Computer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All minted dog data is stored on the Internet Computer (ICP)
              blockchain. Because this data is stored on a decentralized,
              immutable ledger, certain data (such as minted dogs associated
              with your principal) may be permanently stored and cannot be
              deleted by us or by you. Please be aware of this before minting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              4. Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your jurisdiction, you may have rights regarding your
              personal data including the right to access, correct, or request
              deletion of personal information. Due to the nature of blockchain
              storage, some data may not be fully deletable. Contact us to
              discuss any privacy requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              5. Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or how your
              data is handled, please reach out via our community channels. We
              are committed to addressing your concerns in a timely manner.
            </p>
          </section>
        </div>

        {/* Bottom nav */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="privacy.bottom.back.link"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
