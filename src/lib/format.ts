/**
 * Dates render as `2026.06.19` everywhere on the site — dotted, sortable,
 * tabular. Sliced from the ISO string rather than run through
 * `toLocaleDateString`, so a build on a machine in Berlin and a build on a
 * CI runner in UTC produce the same string. Notion emits Z-suffixed
 * timestamps, so UTC is also the correct reading.
 */
export const dotted = (iso: string) =>
    new Date(iso).toISOString().slice(0, 10).replace(/-/g, '.');
