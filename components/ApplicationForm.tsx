"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

interface ApplicationFormProps {
  jobTitle: string;
}

export function ApplicationForm({ jobTitle }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Extract form data
      const formData = new FormData(e.currentTarget);
      const fullName = formData.get("fullName") as string;
      const email = formData.get("email") as string;
      const linkedin = formData.get("linkedin") as string;
      const whySunnyHub = formData.get("whySunnyHub") as string;

      // Prepare data for Supabase (matching user's requested column names)
      const applicationData = {
        name: fullName.trim(),
        email: email.trim().toLowerCase(),
        linkedin: linkedin.trim(),
        cover_letter: whySunnyHub.trim(),
        job_title: jobTitle,
      };

      // Insert into Supabase
      const { error: supabaseError } = await supabase
        .from("applications")
        .insert([applicationData]);

      if (supabaseError) {
        console.error("Supabase error details:", {
          message: supabaseError.message,
          details: supabaseError.details,
          hint: supabaseError.hint,
          code: supabaseError.code,
        });

        // Check for common error types
        if (supabaseError.code === "42501") {
          throw new Error("Database permission error. Please contact support.");
        } else if (supabaseError.message) {
          throw new Error(`Submission failed: ${supabaseError.message}`);
        } else {
          throw new Error("Failed to submit application. Please try again.");
        }
      }

      // Success
      setIsSuccess(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-lg">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
            Application Sent!
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Thank you for applying to the {jobTitle} position. We'll review your
            application and get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-lg">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
            Submission Failed
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {error}
          </p>
          <button
            onClick={() => setError(null)}
            className="bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold py-3 px-6 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Apply for this Position
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 focus:border-transparent transition-colors"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 focus:border-transparent transition-colors"
            placeholder="john@example.com"
          />
        </div>

        {/* LinkedIn URL */}
        <div>
          <label
            htmlFor="linkedin"
            className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
          >
            LinkedIn URL
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            required
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 focus:border-transparent transition-colors"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>

        {/* Why SunnyHUB? */}
        <div>
          <label
            htmlFor="whySunnyHub"
            className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
          >
            Why SunnyHUB?
          </label>
          <textarea
            id="whySunnyHub"
            name="whySunnyHub"
            required
            rows={5}
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 focus:border-transparent transition-colors resize-none"
            placeholder="Tell us why you want to join SunnyHUB and what makes you a great fit for this role..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold py-4 px-6 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </form>
    </div>
  );
}