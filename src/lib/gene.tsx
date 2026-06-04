import React from "react";

/**
 * Italicizes gene/mRNA symbols according to HGNC/MGI nomenclature.
 * - Human gene: RARB (uppercase) → italic
 * - Mouse gene: Rarb (capitalized) → italic
 *
 * Protein references (e.g. "RARβ", "RARB protein", "RARB-Protein") are NOT
 * touched here — they should remain upright. We deliberately skip wrapping
 * when the gene symbol is immediately followed by " protein" / "-Protein".
 */
export function geneFmt(text: string): React.ReactNode {
  if (!text) return text;
  const parts: React.ReactNode[] = [];
  // Match RARB or Rarb as whole word, NOT followed by " protein" or "-Protein"/"-protein"
  const re = /\b(RARB|Rarb)\b(?!\s*[- ]?[Pp]rotein)/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
    parts.push(<em key={key++}>{m[1]}</em>);
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}
