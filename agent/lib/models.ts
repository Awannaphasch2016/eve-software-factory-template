// One place to change every agent's model. Ids are Vercel AI Gateway strings (<provider>/<model>),
// so routing, credentials, and fallbacks stay on the gateway and no provider SDK is wired in.
// Each agent.ts reads its entry here (model: MODELS.<agent>) instead of hardcoding a string.
// Every station uses the same gateway id so factory runs share the Anthropic BYOK key.
export const MODELS = {
  analyst: "anthropic/claude-opus-5.5",
  classifier: "anthropic/claude-opus-5.5",
  implementer: "anthropic/claude-opus-5.5",
  orchestrator: "anthropic/claude-opus-5.5",
  researcher: "anthropic/claude-opus-5.5",
  reviewer: "anthropic/claude-opus-5.5",
} as const;

export type FactoryAgent = keyof typeof MODELS;
