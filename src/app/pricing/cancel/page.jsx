import Link from "next/link";

export default function CancelPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 py-20">
      <div className="w-full max-w-xl">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-8 md:p-10 text-center">
          {/* Cancel Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/20">
            <svg
              className="h-10 w-10 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
            Payment Cancelled
          </h1>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Your payment was not completed and no charges were made to your
            account.
          </p>

          {/* Info Box */}
          <div className="mt-6 rounded-2xl bg-slate-100 dark:bg-slate-800 p-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              You can return to the pricing page at any time and try again.
            </p>
          </div>

          {/* Warning Box */}
          <div className="mt-6 rounded-2xl border border-yellow-200 dark:border-yellow-500/20 bg-yellow-50 dark:bg-yellow-500/10 p-4">
            <p className="text-sm text-yellow-700 dark:text-yellow-400">
              Your account remains on its current plan. Upgrade anytime to
              unlock premium features.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition"
            >
              Try Again
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-slate-300 dark:border-slate-700 px-5 py-3 font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Back to Home
            </Link>
          </div>

          {/* Footer */}
          <p className="mt-8 text-xs text-slate-500 dark:text-slate-500">
            If you experienced an issue during checkout, please contact{" "}
            <span className="font-medium">support@startupforge.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
