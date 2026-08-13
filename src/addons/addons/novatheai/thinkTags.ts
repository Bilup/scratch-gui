export interface ThinkParseResult {
  content: string;
  reasoning: string;
  hasThinkTag: boolean;
  isComplete: boolean;
}

const CLOSED_THINK_BLOCK = /<think\s*>([\s\S]*?)<\/think\s*>/gi;
const OPEN_THINK_TAIL = /<think\s*>([\s\S]*)$/i;

/**
 * Extract reasoning content wrapped in <think>...</think> tags from an AI
 * response. Some providers/gateways return reasoning as literal text tags
 * inside `content` instead of a structured reasoning field. This helper splits
 * that text so it can be rendered as a reasoning panel instead of raw markup.
 *
 * - Multiple think blocks are supported (reasoning is concatenated in order).
 * - Unclosed `<think>` (e.g. while the stream is still generating) is treated
 *   as in-progress reasoning and `isComplete` is set to false.
 * - All other text is preserved in `content`.
 */
export const parseThinkTags = (input: string): ThinkParseResult => {
  const raw = String(input || "");
  if (!/<think/i.test(raw)) {
    return { content: raw, reasoning: "", hasThinkTag: false, isComplete: false };
  }

  let reasoning = "";
  let content = raw.replace(CLOSED_THINK_BLOCK, (_whole, inner: string) => {
    reasoning += inner;
    return "";
  });

  let isComplete = true;
  const openMatch = OPEN_THINK_TAIL.exec(content);
  if (openMatch) {
    isComplete = false;
    reasoning += openMatch[1].replace(/<think\s*>/i, "");
    content = content.slice(0, openMatch.index);
  }

  return { content, reasoning, hasThinkTag: true, isComplete };
};
