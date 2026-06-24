import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
import { payment } from "@/lib/actions/payment";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const {
    status,
    metadata,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    await payment({ ...metadata, sessionId: session_id , });

    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 py-20">
        <div className="w-full max-w-xl">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-8 md:p-10 text-center">
            {/* Success Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-500/20">
              <svg
                className="h-10 w-10 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
              Payment Successful 🎉
            </h1>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Thank you for upgrading your StartupForge account.
            </p>

            {/* Email Box */}
            <div className="mt-6 rounded-2xl bg-slate-100 dark:bg-slate-800 p-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Confirmation sent to
              </p>

              <p className="mt-1 font-semibold text-slate-900 dark:text-white break-all">
                {customerEmail}
              </p>
            </div>

            {/* Success Message */}
            <div className="mt-6 rounded-2xl border border-green-200 dark:border-green-500/20 bg-green-50 dark:bg-green-500/10 p-4">
              <p className="text-sm text-green-700 dark:text-green-400">
                Your payment has been processed successfully and your account
                will be updated shortly.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition"
              >
                Back to Home
              </Link>
            </div>

            {/* Footer */}
            <p className="mt-8 text-xs text-slate-500 dark:text-slate-500">
              Need help? Contact{" "}
              <span className="font-medium">support@startupforge.com</span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
