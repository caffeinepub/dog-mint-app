import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function TermsPage() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen py-14 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-8"
          data-ocid="terms.back.link"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-display font-extrabold text-foreground tracking-tight">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mt-2">Last updated: {year}</p>
          <div className="mt-4 bg-primary/10 border border-primary/20 rounded-2xl px-5 py-3">
            <p className="text-sm text-primary font-semibold">
              📋 This is a placeholder terms of service. Please consult a legal
              professional before publishing a live product.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Galactic Dogs, you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please
              do not use the platform. We reserve the right to update these
              terms at any time, and continued use of the platform constitutes
              acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              2. Use of the Platform
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use Galactic Dogs only for lawful purposes. You may
              not use the platform to violate any applicable laws, infringe on
              the rights of others, or engage in any activity that interferes
              with the proper functioning of the Internet Computer Protocol or
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              3. Minted Assets
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When you mint a dog on Galactic Dogs, the resulting asset is
              associated with your Internet Identity principal and stored on the
              Internet Computer blockchain. Minting is permanent and
              irreversible. We do not guarantee the value, transferability, or
              future availability of minted assets.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              4. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All visual assets, designs, and branding associated with Galactic
              Dogs are the intellectual property of their respective owners. By
              minting a dog, you do not acquire ownership of the underlying
              artwork or software. You receive a unique on-chain record
              associated with your principal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              5. Disclaimer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Galactic Dogs is provided "as is" without warranties of any kind,
              express or implied. We are not responsible for any losses,
              damages, or issues arising from your use of the platform,
              including blockchain transactions, smart contract behavior, or
              Internet Computer downtime.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              6. Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us through our community channels. We are happy to clarify
              any points or address concerns you may have.
            </p>
          </section>
        </div>

        {/* Bottom nav */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="terms.bottom.back.link"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
