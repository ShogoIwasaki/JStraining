export function reverse(str) {
  const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
  const segments = [...segmenter.segment(str)];
  return segments
    .map((segment) => segment.segment)
    .reverse()
    .join("");
}
