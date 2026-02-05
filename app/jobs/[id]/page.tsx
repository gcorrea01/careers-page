import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MOCK_JOBS } from "@/lib/data";
import { ApplicationForm } from "@/components/ApplicationForm";

interface JobDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetailsPage({ params }: JobDetailsPageProps) {
  const { id } = await params;
  const job = MOCK_JOBS.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Jobs
        </Link>

        {/* Job Header */}
        <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-zinc-600 dark:text-zinc-400 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                Department:
              </span>
              <span>{job.department}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                Location:
              </span>
              <span>
                {job.location} ({job.locationType})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                Type:
              </span>
              <span>{job.employmentType}</span>
            </div>
          </div>

          {job.salaryRange && (
            <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {job.salaryRange.currency} {job.salaryRange.min.toLocaleString()}{" "}
              - {job.salaryRange.max.toLocaleString()}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Description
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Requirements
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>

        {/* Nice to Have */}
        {job.niceToHave && job.niceToHave.length > 0 && (
          <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Nice to Have
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
              {job.niceToHave.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Application Form */}
        <ApplicationForm jobTitle={job.title} />
      </div>
    </div>
  );
}
