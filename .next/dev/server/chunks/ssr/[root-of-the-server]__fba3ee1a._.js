module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_JOBS",
    ()=>MOCK_JOBS
]);
const MOCK_JOBS = [
    {
        id: "senior-frontend-engineer",
        title: "Senior Frontend Engineer",
        department: "Engineering",
        location: "San Francisco, CA",
        locationType: "Hybrid",
        employmentType: "Full-time",
        experienceLevel: "Senior",
        description: "We're looking for a Senior Frontend Engineer to join our growing team and help build the next generation of our product. You'll work closely with designers and backend engineers to create exceptional user experiences.",
        responsibilities: [
            "Design and implement responsive, performant user interfaces using React and TypeScript",
            "Collaborate with designers to translate designs into high-quality code",
            "Optimize application performance and ensure cross-browser compatibility",
            "Mentor junior engineers and contribute to engineering best practices",
            "Participate in code reviews and architectural decisions"
        ],
        requirements: [
            "5+ years of experience in frontend development",
            "Expert knowledge of React, TypeScript, and modern CSS",
            "Strong understanding of web performance optimization",
            "Experience with state management libraries (Redux, Zustand, etc.)",
            "Excellent communication and collaboration skills"
        ],
        niceToHave: [
            "Experience with Next.js and server-side rendering",
            "Familiarity with design systems and component libraries",
            "Contributions to open-source projects",
            "Experience with testing frameworks (Jest, Playwright, Cypress)"
        ],
        salaryRange: {
            min: 150000,
            max: 200000,
            currency: "USD"
        },
        postedDate: new Date("2026-01-15"),
        applicationUrl: "/apply/senior-frontend-engineer"
    },
    {
        id: "product-designer",
        title: "Product Designer",
        department: "Design",
        location: "New York, NY",
        locationType: "Hybrid",
        employmentType: "Full-time",
        experienceLevel: "Mid",
        description: "Join our design team to create beautiful, intuitive products that delight our users. You'll own the end-to-end design process from research to final implementation.",
        responsibilities: [
            "Lead design projects from concept to delivery",
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Collaborate with engineers to ensure design implementation quality",
            "Maintain and evolve our design system"
        ],
        requirements: [
            "3+ years of product design experience",
            "Strong portfolio demonstrating UX/UI design skills",
            "Proficiency in Figma and other design tools",
            "Experience with user research methodologies",
            "Understanding of front-end development principles"
        ],
        niceToHave: [
            "Experience designing for B2B SaaS products",
            "Motion design and prototyping skills",
            "Familiarity with accessibility standards (WCAG)"
        ],
        salaryRange: {
            min: 110000,
            max: 150000,
            currency: "USD"
        },
        postedDate: new Date("2026-01-20"),
        applicationUrl: "/apply/product-designer"
    },
    {
        id: "backend-engineer",
        title: "Backend Engineer",
        department: "Engineering",
        location: "Remote",
        locationType: "Remote",
        employmentType: "Full-time",
        experienceLevel: "Mid",
        description: "We're seeking a talented Backend Engineer to help us scale our infrastructure and build robust APIs. You'll work on challenging problems involving distributed systems and data processing.",
        responsibilities: [
            "Design and implement scalable backend services and APIs",
            "Write clean, maintainable, and well-tested code",
            "Optimize database queries and improve system performance",
            "Collaborate with frontend engineers on API design",
            "Participate in on-call rotation and incident response"
        ],
        requirements: [
            "3+ years of backend development experience",
            "Strong proficiency in Node.js, Python, or Go",
            "Experience with relational databases (PostgreSQL, MySQL)",
            "Understanding of RESTful API design and GraphQL",
            "Familiarity with cloud platforms (AWS, GCP, or Azure)"
        ],
        niceToHave: [
            "Experience with microservices architecture",
            "Knowledge of containerization (Docker, Kubernetes)",
            "Experience with message queues and event-driven systems",
            "Understanding of DevOps practices and CI/CD"
        ],
        salaryRange: {
            min: 120000,
            max: 160000,
            currency: "USD"
        },
        postedDate: new Date("2026-01-25"),
        applicationUrl: "/apply/backend-engineer"
    },
    {
        id: "marketing-manager",
        title: "Marketing Manager",
        department: "Marketing",
        location: "Austin, TX",
        locationType: "On-site",
        employmentType: "Full-time",
        experienceLevel: "Senior",
        description: "Lead our marketing efforts and drive growth through strategic campaigns and brand initiatives. You'll manage a small team and work cross-functionally to achieve business goals.",
        responsibilities: [
            "Develop and execute comprehensive marketing strategies",
            "Manage marketing budget and ROI tracking",
            "Lead content creation and brand messaging",
            "Analyze campaign performance and optimize based on data",
            "Manage and mentor a team of marketing specialists"
        ],
        requirements: [
            "5+ years of marketing experience, preferably in tech",
            "Proven track record of successful campaign management",
            "Strong analytical skills and data-driven decision making",
            "Experience with marketing automation tools and CRM systems",
            "Excellent written and verbal communication skills"
        ],
        niceToHave: [
            "Experience in B2B SaaS marketing",
            "Knowledge of SEO and content marketing strategies",
            "Familiarity with growth marketing and experimentation"
        ],
        salaryRange: {
            min: 100000,
            max: 140000,
            currency: "USD"
        },
        postedDate: new Date("2026-01-28"),
        applicationUrl: "/apply/marketing-manager"
    },
    {
        id: "data-scientist-intern",
        title: "Data Science Intern",
        department: "Data",
        location: "Remote",
        locationType: "Remote",
        employmentType: "Internship",
        experienceLevel: "Entry",
        description: "Join our data team for a summer internship where you'll work on real projects involving machine learning and data analysis. This is a great opportunity to gain hands-on experience in a fast-paced startup environment.",
        responsibilities: [
            "Assist in building and improving machine learning models",
            "Analyze large datasets to extract actionable insights",
            "Create visualizations and reports for stakeholders",
            "Collaborate with engineers to deploy models to production",
            "Participate in team meetings and learning sessions"
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science, Statistics, or related field",
            "Strong foundation in statistics and machine learning concepts",
            "Proficiency in Python and data analysis libraries (pandas, numpy)",
            "Excellent problem-solving skills",
            "Ability to communicate technical concepts clearly"
        ],
        niceToHave: [
            "Experience with deep learning frameworks (PyTorch, TensorFlow)",
            "Familiarity with SQL and data warehousing",
            "Previous internship or research experience"
        ],
        postedDate: new Date("2026-02-01"),
        applicationUrl: "/apply/data-scientist-intern"
    }
];
}),
"[project]/app/jobs/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-rsc] (ecmascript)");
;
;
;
;
;
async function JobDetailsPage({ params }) {
    const { id } = await params;
    const job = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOCK_JOBS"].find((j)=>j.id === id);
    if (!job) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-zinc-50 dark:bg-zinc-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        "Back to Jobs"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/jobs/[id]/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4",
                            children: job.title
                        }, void 0, false, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4 text-zinc-600 dark:text-zinc-400 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-zinc-900 dark:text-zinc-50",
                                            children: "Department:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/jobs/[id]/page.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: job.department
                                        }, void 0, false, {
                                            fileName: "[project]/app/jobs/[id]/page.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/jobs/[id]/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-zinc-900 dark:text-zinc-50",
                                            children: "Location:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/jobs/[id]/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                job.location,
                                                " (",
                                                job.locationType,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/jobs/[id]/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/jobs/[id]/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-zinc-900 dark:text-zinc-50",
                                            children: "Type:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/jobs/[id]/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: job.employmentType
                                        }, void 0, false, {
                                            fileName: "[project]/app/jobs/[id]/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/jobs/[id]/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        job.salaryRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-semibold text-zinc-900 dark:text-zinc-50",
                            children: [
                                job.salaryRange.currency,
                                " ",
                                job.salaryRange.min.toLocaleString(),
                                " ",
                                "- ",
                                job.salaryRange.max.toLocaleString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/jobs/[id]/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4",
                            children: "Description"
                        }, void 0, false, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-600 dark:text-zinc-400 leading-relaxed",
                            children: job.description
                        }, void 0, false, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/jobs/[id]/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4",
                            children: "Responsibilities"
                        }, void 0, false, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400",
                            children: job.responsibilities.map((responsibility, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: responsibility
                                }, index, false, {
                                    fileName: "[project]/app/jobs/[id]/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/jobs/[id]/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4",
                            children: "Requirements"
                        }, void 0, false, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400",
                            children: job.requirements.map((requirement, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: requirement
                                }, index, false, {
                                    fileName: "[project]/app/jobs/[id]/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/jobs/[id]/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                job.niceToHave && job.niceToHave.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4",
                            children: "Nice to Have"
                        }, void 0, false, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400",
                            children: job.niceToHave.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: item
                                }, index, false, {
                                    fileName: "[project]/app/jobs/[id]/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/jobs/[id]/page.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/jobs/[id]/page.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold py-4 px-6 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors",
                        children: "Apply Now"
                    }, void 0, false, {
                        fileName: "[project]/app/jobs/[id]/page.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/jobs/[id]/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/jobs/[id]/page.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/jobs/[id]/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/jobs/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/jobs/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fba3ee1a._.js.map