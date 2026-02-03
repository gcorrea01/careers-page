import { JobCard } from "@/components/JobCard";
import { MOCK_JOBS } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Join Our Team
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Explore open positions and find your next opportunity
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="mb-8">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">
              {MOCK_JOBS.length}
            </span>{" "}
            open positions
          </p>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
            © 2026 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
