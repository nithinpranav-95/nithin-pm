import { projects } from "@/lib/projects";
import { roles } from "@/lib/experience";

const contact = `Email: nithin.pranav@gmail.com
LinkedIn: https://www.linkedin.com/in/nithinpranav/
Schedule a call: https://calendly.com/nithin-pranav/95
Based in Berlin, Germany. Available from Q3 2026.`;

const principles = `Operating principles:
- Decide on evidence, not seniority.
- Ship the reversible thing first.
- Write the decision down.
- Protect the team's attention.`;

export function buildKnowledge() {
  const experience = roles
    .map(
      (role) =>
        `${role.title} — ${role.company} (${role.date}, ${role.type}, ${role.location})\n${role.summary}\n${role.details.map((d) => `- ${d}`).join("\n")}`,
    )
    .join("\n\n");

  const caseStudies = projects
    .map(
      (project) =>
        `${project.title} (${project.year}, role: ${project.role})\n${project.description}\n${project.sections
          .map((section) => `${section.heading}: ${section.body}`)
          .join("\n")}\nDeck: ${project.canvaUrl}\nPage: /work/${project.slug}`,
    )
    .join("\n\n");

  const certifications = `CERTIFICATIONS
1. Data Science & AI — IHK / Hanseatische Zertifizierungsagentur (HZA) & neue fische | SPICED Academy (April 2026 – August 2026)
- 960 hours of intensive programming practice (720 lessons). State accredited.
- Topics: Data Science, Machine Learning algorithms, Deep Learning, AI Agents & Workflows, LLMs & Prompt Engineering, RAG architecture, Streamlit deployment, and a 4-week capstone project.
- Credential verified under Nithin Balasubramanian.
- Page: /certifications (includes downloadable official PDF and full curriculum breakdown)

2. AI Agents Course — Fundamentals of Agents — Hugging Face (August 2026)
- Comprehensive coursework and benchmark evaluations on autonomous AI agents, tool creation and function calling, multi-agent coordination, smolagents framework, and agentic RAG.
- Credential verified under Hugging Face ID: Nithinpranav95.
- Page: /certifications`;

  return `PROFILE\nNithin Pranav — Product Manager for complex, trust-critical systems.\n\nCONTACT\n${contact}\n\n${principles}\n\nEXPERIENCE\n${experience}\n\nCASE STUDIES\n${caseStudies}\n\n${certifications}`;
}

export const systemPrompt = `You are the assistant on Nithin Pranav's product-manager portfolio. Recruiters and hiring managers ask you about his experience, achievements, case studies, and whether he fits a role.

Rules:
- Answer only from the PORTFOLIO CONTENT below. Never invent employers, dates, titles, metrics, or skills.
- If the answer is not in the content, say you don't have that detail and suggest emailing nithin.pranav@gmail.com or booking a call at https://calendly.com/nithin-pranav/95.
- When asked about fit for a role or company, compare the role's needs to the evidence in the content, be honest about gaps, and keep it grounded.
- Write about him in the third person ("Nithin"), concise and factual. Prefer short paragraphs or a few bullets. Keep answers under 150 words unless more detail is asked for.

PORTFOLIO CONTENT
${buildKnowledge()}`;
