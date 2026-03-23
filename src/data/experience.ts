/**
 * =============================================================================
 * EXPERIENCE DATA - Work History
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains work history displayed in the Experience section.
 *
 * TO CUSTOMIZE:
 * 1. Replace the example entries with your actual work history
 * 2. List positions in reverse chronological order (newest first)
 * 3. Use action verbs for achievements (Led, Built, Increased, Reduced, etc.)
 * 4. Include metrics when possible (numbers, percentages, dollar amounts)
 * 5. List relevant technologies used at each position
 *
 * TO ADD A NEW EXPERIENCE:
 * Copy an existing entry and modify all fields. Example:
 * {
 *   id: 'exp-4',  // Unique identifier
 *   title: 'Your Job Title',
 *   company: 'Company Name',
 *   location: 'City, State/Country',
 *   type: 'full-time',  // Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
 *   startDate: '2023-01',  // Format: YYYY-MM
 *   endDate: '2024-01',    // Format: YYYY-MM or omit for current position
 *   current: false,        // Set to true if this is your current job
 *   description: 'Brief description of your role...',
 *   achievements: ['Achievement 1', 'Achievement 2'],
 *   technologies: ['Tech 1', 'Tech 2'],
 * }
 *
 * TO REMOVE AN EXPERIENCE:
 * Delete the entire object from the array including its curly braces and comma.
 * =============================================================================
 */

/**
 * Experience entry type definition
 */
export interface Experience {
  /** Unique identifier (e.g., 'exp-1', 'exp-2') */
  id: string;

  /** Job title (e.g., "Senior Software Engineer", "Product Manager") */
  title: string;

  /** Company name */
  company: string;

  /**
   * Company logo path (optional)
   * - Use '/logos/company.png' for local image in public/logos/
   * - Use full URL for external image
   * - Omit or use undefined for no logo
   */
  companyLogo?: string;

  /**
   * Location
   * Format: "City, State/Country" or "Remote"
   */
  location: string;

  /**
   * Employment type
   * Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
   */
  type: "full-time" | "part-time" | "contract" | "freelance";

  /**
   * Start date in YYYY-MM format
   * Example: '2023-01' for January 2023
   */
  startDate: string;

  /**
   * End date in YYYY-MM format (optional)
   * - Omit for current position
   * - Example: '2024-06' for June 2024
   */
  endDate?: string;

  /**
   * Is this your current position?
   * Set to true if still working here
   */
  current: boolean;

  /**
   * Brief description of the role
   * 1-2 sentences about what you did
   */
  description: string;

  /**
   * Key achievements/accomplishments in this role
   * - Use action verbs (Led, Built, Increased, Reduced, etc.)
   * - Include metrics when possible
   * - 3-5 bullet points recommended
   */
  achievements: string[];

  /**
   * Technologies/tools used in this role
   * List programming languages, frameworks, tools, etc.
   */
  technologies: string[];
}

/**
 * =============================================================================
 * YOUR WORK EXPERIENCE - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example entries with your actual work history.
 * Keep positions in reverse chronological order (newest first).
 */
export const experience: Experience[] = [
  // ---------------------------------------------------------------------------
  // CURRENT POSITION (or most recent)
  // ---------------------------------------------------------------------------
  {
    id: "exp-1",
    title: "Software Engineer",
    company: "CapitalOne",
    // companyLogo: '/logos/techcorp.png',  // Uncomment and add logo if you have one
    location: "Vienna, VA",
    type: "contract",
    startDate: "2023",
    // endDate: undefined,  // Omit or undefined for current position
    current: true,
    description:
      "Lead development of serverless applications and small account migration.",
    achievements: [
      "Led the zero-downtime migration of a DynamoDB table containing over 100 million records (~9 TB of data).",
      "Led the migration of serverless applications to AWS Lambda and containerized workloads on Fargate.",
      "Led the upgrade of applications to Java 17 and Spring Boot 3, improving performance and maintainability."
    ],
    technologies: ["Java", "Spring Boot", "Docker", "AWS", "Jenkins"],
  },

  // ---------------------------------------------------------------------------
  // PREVIOUS POSITION
  // ---------------------------------------------------------------------------
  {
    id: "exp-2",
    title: "Software Engineer",
    company: "E*TRADE Financial Corporation ",
    location: "Arlington, VA",
    type: "contract",
    startDate: "2022",
    endDate: "2023",
    current: false,
    description:
      "Led development of cloud migration of on-premises big data to cloud database like Snowflake.",
    achievements: [
      "Designed, built, and maintained data pipelines to migrate over 5 GB of Hadoop data daily into Snowflake.",
      "Developed a monitoring and alerting system to ensure reliability and performance of data pipelines.",
      "Contributed to the migration of Spark jobs to Databricks, improving scalability and processing efficiency.",
    ],
    technologies: [
      "Python",
      "Java",
      "Spring",
      "Streamlit",
      "Apache Airflow",
      "Data bricks",
      "Snowflake",
      "Azure",
    ],
  },

  // ---------------------------------------------------------------------------
  // EARLIER POSITION
  // ---------------------------------------------------------------------------
  {
    id: "exp-3",
    title: "Software Engineer",
    company: "CapitalOne ",
    location: "Vienna, Virginia",
    type: "contract",
    startDate: "2020",
    endDate: "2022",
    current: false,
    description:
      "Led the migration of 5+ TB (around 80 million documents) of data from LDAP to DynamoDB. Implemented automated api driven testing framework using Karate.",
    achievements: [
      "Led the migration of over 5 TB of data (approximately 80 million records) from LDAP to DynamoDB, achieving millions of dollars in licensing cost savings.",
      "Implemented an automated API-driven testing framework using Karate, developing over 300 test cases covering diverse business scenarios and edge cases.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "DynamoDB",
      "Karate",
      "AWS",
      "LDAP",
      "Jenkins",
    ],
  },
  {
    id: "exp-4",
    title: "Software Engineer",
    company: "E*TRADE Financial Corporation ",
    location: "Arlington, VA",
    type: "contract",
    startDate: "2019",
    endDate: "2020",
    current: false,
    description:
      "Led the development of the integration of the Ariba procurement system with internal systems. Led development of procurement workflows with a streamlined approval process.",
    achievements: [
      "Led the development and integration of the Ariba procurement system with internal enterprise systems.",
      "Implemented a custom MuleSoft connector to enable seamless integration between Workday and internal systems.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Mulesoft",
      "TestNG",
      "Azure",
      "Jenkins",
    ],
  },
  {
    id: "exp-5",
    title: "Java Developer",
    company: "The Cellular Connection (TCC)",
    location: "Carmel, Indiana",
    type: "contract",
    startDate: "2017",
    endDate: "2019",
    current: false,
    description:
      "Led the development and support of the launch of the Point of Sales (POS) system - FILIS to 575+ stores nationwide. Led development of internal tools for inventory management and reporting.",
    achievements: [
      "Deployed the FILIS POS system to over 575 stores nationwide, enabling store associates to access customer information and perform actions on their behalf, significantly improving customer satisfaction.",
      "Provided ongoing support and enhancements for the FILIS POS system to ensure reliability and continuous improvement.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "Oracle ATG",
      "Oracle DB",
      "Jenkins",
    ],
  },
  {
    id: "exp-6",
    title: "Java Developer",
    company: "ConnectYourCare (CYC)",
    location: "Hunt Valley, MD",
    type: "contract",
    startDate: "2015",
    endDate: "2017",
    current: false,
    description:
      "Implemented multifactor authentication for the web application. Led development of the call center application for the customer support team.",
    achievements: [
      "Implemented multi-factor authentication (MFA) for a web application supporting 25,000+ daily users, significantly reducing account takeovers and fraud.",
      "Led the development of a call center application for customer support teams, enabling agents to access customer information and perform actions on behalf of customers, resulting in improved customer satisfaction and reduced call handling time.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Jackrabbit",
      "TestNG",
      "OracleDB",
      "Apache CXF",
      "Jenkins",
    ],
  },
  // ---------------------------------------------------------------------------
  // ADD MORE POSITIONS HERE
  // Copy the template below and fill in your details
  // ---------------------------------------------------------------------------
  // {
  //   id: 'exp-4',
  //   title: 'Your Job Title',
  //   company: 'Company Name',
  //   companyLogo: '/logos/company.png',  // Optional
  //   location: 'City, Country',
  //   type: 'full-time',
  //   startDate: 'YYYY-MM',
  //   endDate: 'YYYY-MM',  // Remove for current position
  //   current: false,
  //   description: 'Brief description of your role and responsibilities.',
  //   achievements: [
  //     'Achievement with metrics...',
  //     'Another achievement...',
  //   ],
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  // },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get total years of professional experience
 */
export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;

  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  );

  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) =>
            exp.endDate ? new Date(exp.endDate).getTime() : 0,
          ),
        ),
      );

  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) /
      (1000 * 60 * 60 * 24 * 365),
  );
  return years;
}

/**
 * Get current position (if any)
 */
export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

/**
 * Get all unique technologies across all experience
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Format date string (YYYY-MM) to readable format
 */
export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + "-01");
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/**
 * Get experience duration as string
 */
export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date(exp.endDate + "-01");

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}
