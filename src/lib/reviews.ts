import { readdirSync } from "fs";
import { join } from "path";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

/**
 * Reads `public/reviews` at build/request time and returns public URLs for
 * every image found. Drop new files into that folder and they appear
 * automatically — prefix names (01-, 02-, …) to control the order.
 *
 * Server-only: relies on the filesystem, so call it from a Server Component.
 */
export function getReviewImages(): string[] {
  try {
    const dir = join(process.cwd(), "public", "reviews");
    return readdirSync(dir)
      .filter((file) => IMAGE_EXT.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/reviews/${encodeURIComponent(file)}`);
  } catch {
    return [];
  }
}
