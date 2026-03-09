export type LessonContentSection = {
  heading: string;
  body: string;
};

export type Lesson = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  keyTakeaways: string[];
  content: LessonContentSection[];
};

export type LearningModule = {
  id: string;
  slug: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Domain = {
  id: string;
  slug: string;
  title: string;
  description: string;
  modules: LearningModule[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  examCode: string;
  domains: Domain[];
};

export const cloudPractitionerCourse: Course = {
  id: "course-clf-c02",
  slug: "aws-cloud-practitioner",
  title: "AWS Cloud Practitioner",
  examCode: "CLF-C02",
  domains: [
    {
      id: "domain-cloud-concepts",
      slug: "cloud-concepts",
      title: "Cloud Concepts",
      description: "Understand cloud value, deployment models, and AWS global infrastructure fundamentals.",
      modules: [
        {
          id: "module-cloud-value",
          slug: "cloud-value",
          title: "Cloud Value Fundamentals",
          description: "Why organizations choose cloud and what business outcomes AWS enables.",
          lessons: [
            {
              id: "lesson-cloud-value-proposition",
              slug: "cloud-value-proposition",
              title: "AWS Cloud Value Proposition",
              summary: "How cloud delivers agility, elasticity, and faster innovation cycles.",
              durationMinutes: 9,
              keyTakeaways: [
                "Cloud turns infrastructure into an on-demand utility.",
                "Elastic scaling reduces overprovisioning risk.",
                "Pay-as-you-go aligns cost with actual usage.",
              ],
              content: [
                {
                  heading: "Business agility",
                  body: "AWS enables teams to provision services in minutes, accelerating experimentation and product delivery.",
                },
                {
                  heading: "Operational efficiency",
                  body: "Managed services reduce undifferentiated heavy lifting, so teams can focus on business value.",
                },
              ],
            },
            {
              id: "lesson-shared-responsibility",
              slug: "shared-responsibility-model",
              title: "Shared Responsibility Model",
              summary: "Clarify which security responsibilities belong to AWS and which belong to the customer.",
              durationMinutes: 11,
              keyTakeaways: [
                "AWS secures the cloud infrastructure.",
                "Customers secure their data, identities, and configurations.",
                "Responsibility shifts by service model (IaaS/PaaS/SaaS).",
              ],
              content: [
                {
                  heading: "Security of the cloud",
                  body: "AWS manages facilities, hardware, networking, and virtualization layers.",
                },
                {
                  heading: "Security in the cloud",
                  body: "Customers own IAM policies, encryption choices, operating systems, and application controls.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "domain-security",
      slug: "security-and-compliance",
      title: "Security and Compliance",
      description: "Learn IAM, governance, and core security best practices for AWS workloads.",
      modules: [
        {
          id: "module-iam-basics",
          slug: "iam-basics",
          title: "Identity and Access Management",
          description: "Build least-privilege access patterns for users, roles, and workloads.",
          lessons: [
            {
              id: "lesson-iam-users-roles",
              slug: "iam-users-groups-roles",
              title: "IAM Users, Groups, and Roles",
              summary: "Understand when to use identities and temporary credentials.",
              durationMinutes: 10,
              keyTakeaways: [
                "Prefer IAM roles for workloads over long-lived keys.",
                "Use groups to manage policy at scale.",
                "Enable MFA for privileged users.",
              ],
              content: [
                {
                  heading: "Role-based access",
                  body: "IAM roles provide temporary credentials and are safer than static keys.",
                },
                {
                  heading: "Policy evaluation",
                  body: "Explicit deny overrides allow, and permissions are the sum of applicable policies.",
                },
              ],
            },
            {
              id: "lesson-compliance-services",
              slug: "compliance-and-audit-services",
              title: "Compliance and Audit Services",
              summary: "Use AWS tools to improve visibility, governance, and continuous compliance.",
              durationMinutes: 12,
              keyTakeaways: [
                "CloudTrail records API activity for auditability.",
                "AWS Config tracks resource state and compliance.",
                "Artifact provides on-demand compliance reports.",
              ],
              content: [
                {
                  heading: "Audit trail",
                  body: "CloudTrail events support security investigations and operational governance.",
                },
                {
                  heading: "Continuous compliance",
                  body: "Config rules help teams detect and remediate drift from required standards.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "domain-technology-services",
      slug: "cloud-technology-and-services",
      title: "Cloud Technology and Services",
      description: "Explore compute, storage, networking, and architectural design patterns on AWS.",
      modules: [
        {
          id: "module-core-services",
          slug: "core-aws-services",
          title: "Core AWS Services",
          description: "A practical survey of foundational AWS services used in real workloads.",
          lessons: [
            {
              id: "lesson-compute-options",
              slug: "compute-options-ec2-lambda",
              title: "Compute Options: EC2 and Lambda",
              summary: "Compare virtual servers and serverless execution for common use cases.",
              durationMinutes: 13,
              keyTakeaways: [
                "EC2 offers maximum control for configurable workloads.",
                "Lambda removes server management for event-driven code.",
                "Choose based on control, scale profile, and operational overhead.",
              ],
              content: [
                {
                  heading: "EC2 patterns",
                  body: "Use EC2 when you need operating system access, custom networking, or persistent processes.",
                },
                {
                  heading: "Lambda patterns",
                  body: "Use Lambda for short-lived, event-triggered functions with automatic scaling.",
                },
              ],
            },
            {
              id: "lesson-storage-databases",
              slug: "storage-and-database-basics",
              title: "Storage and Database Basics",
              summary: "Map workload needs to S3, EBS, EFS, RDS, and DynamoDB.",
              durationMinutes: 14,
              keyTakeaways: [
                "S3 is object storage for durability and scale.",
                "EBS is block storage attached to EC2.",
                "RDS is managed relational database; DynamoDB is managed NoSQL.",
              ],
              content: [
                {
                  heading: "Storage decisions",
                  body: "Choose storage type based on access pattern, latency requirements, and consistency needs.",
                },
                {
                  heading: "Database choices",
                  body: "Relational engines suit structured schemas; key-value NoSQL suits extreme scale and flexible models.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "domain-billing",
      slug: "billing-pricing-and-support",
      title: "Billing, Pricing, and Support",
      description: "Understand cloud cost models, support plans, and optimization strategies.",
      modules: [
        {
          id: "module-cost-optimization",
          slug: "cost-optimization-basics",
          title: "Cost Optimization Basics",
          description: "Learn billing tools and practical ways to optimize AWS spend.",
          lessons: [
            {
              id: "lesson-pricing-models",
              slug: "aws-pricing-models",
              title: "AWS Pricing Models",
              summary: "Interpret on-demand, reserved, and spot pricing tradeoffs.",
              durationMinutes: 10,
              keyTakeaways: [
                "On-Demand offers flexibility with no commitment.",
                "Savings Plans and Reserved options reduce cost for predictable usage.",
                "Spot pricing provides deep discounts for interruptible workloads.",
              ],
              content: [
                {
                  heading: "Cost commitment options",
                  body: "Longer commitments typically lower unit cost, but require stronger usage confidence.",
                },
                {
                  heading: "Workload fit",
                  body: "Match pricing model to workload criticality and interruption tolerance.",
                },
              ],
            },
            {
              id: "lesson-billing-tools",
              slug: "billing-and-cost-tools",
              title: "Billing and Cost Management Tools",
              summary: "Use AWS Budgets and Cost Explorer to monitor and improve spend.",
              durationMinutes: 11,
              keyTakeaways: [
                "Set budget thresholds and alerts to prevent surprises.",
                "Cost Explorer helps identify trends and anomalies.",
                "Tagging strategy improves cost allocation visibility.",
              ],
              content: [
                {
                  heading: "Forecasting",
                  body: "Use trend views in Cost Explorer to forecast monthly spend and evaluate optimization opportunities.",
                },
                {
                  heading: "Governance",
                  body: "Create budget alerts for teams and environments to drive cost accountability.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export function getAllLessons(course: Course) {
  return course.domains.flatMap((domain) =>
    domain.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({ domain, module, lesson })),
    ),
  );
}

export function findLessonBySlugs(course: Course, domainSlug: string, moduleSlug: string, lessonSlug: string) {
  const domain = course.domains.find((item) => item.slug === domainSlug);
  if (!domain) return null;

  const module = domain.modules.find((item) => item.slug === moduleSlug);
  if (!module) return null;

  const lesson = module.lessons.find((item) => item.slug === lessonSlug);
  if (!lesson) return null;

  return { domain, module, lesson };
}

export function getAdjacentLessons(course: Course, lessonId: string) {
  const lessons = getAllLessons(course);
  const currentIndex = lessons.findIndex((item) => item.lesson.id === lessonId);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex > 0 ? lessons[currentIndex - 1] : null,
    next: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null,
  };
}
