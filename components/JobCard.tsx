import type { Job } from "@/types/job";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={job.applicationUrl || `/jobs/${job.id}`}
      className="block group"
    >
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
              {job.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              {job.department}
            </p>
          </div>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
            {job.experienceLevel}
          </span>
        </div>

        {/* Job Details */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>{job.employmentType}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>{job.locationType}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4">
          {job.description}
        </p>

        {/* Salary Range (if available) */}
        {job.salaryRange && (
          <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {job.salaryRange.currency}{" "}
            {job.salaryRange.min.toLocaleString()} -{" "}
            {job.salaryRange.max.toLocaleString()}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors inline-flex items-center gap-1">
            View Details
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
