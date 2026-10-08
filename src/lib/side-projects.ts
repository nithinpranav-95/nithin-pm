export interface SideProject {
  name: string;
  status: string;
  summary: string;
  stack: string;
  repo: string;
}

export const githubProfile = "https://github.com/nithinpranav-95";

export const agentProjects: SideProject[] = [
  {
    name: "Aiva",
    status: "IN PROGRESS",
    summary:
      "An AI assistant agent I'm building to handle multi-step user requests end to end — understanding intent, calling the right tools, and knowing when to hand back to a human.",
    stack: "LLM · TOOL CALLING",
    repo: "https://github.com/nithinpranav-95/Aiva",
  },
  {
    name: "TroopConnect",
    status: "IN PROGRESS",
    summary:
      "A game score-tracking web app for friend groups to manage live sessions, record rounds, auto-calculate running totals, and view persistent leaderboards across games.",
    stack: "REACT · TYPESCRIPT · TAILWIND",
    repo: "https://github.com/nithinpranav-95/TroopConnect",
  },
];

export const mlProjects: SideProject[] = [
  {
    name: "ReviewIQ",
    status: "IN PROGRESS",
    summary:
      "An NLP tool that aggregates customer reviews and surfaces aspect-level sentiment insights — pros, cons, and trending complaints — using traditional ML.",
    stack: "PYTHON · NLP",
    repo: "https://github.com/nithinpranav-95/reviewiq",
  },
  {
    name: "Tanzania Tourism Price Predictor",
    status: "SHIPPED",
    summary:
      "A regression model that predicts the total cost of a tourist's visit to Tanzania from trip and traveller attributes.",
    stack: "PYTHON · SCIKIT-LEARN",
    repo: "https://github.com/nithinpranav-95/Tanzania_ML_Project",
  },
];
