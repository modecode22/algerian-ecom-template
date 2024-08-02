export function slugify(text: string): string {
  // Trim to first 5 words
  let trimmedText = text.split(/\s+/).slice(0, 5).join(' ');
  
  // Convert to lowercase
  let slug = trimmedText.toLowerCase();

  // Replace Arabic diacritics with empty string
  slug = slug.replace(/[\u064B-\u065F]/g, "");

  // Replace spaces and underscores with hyphens
  slug = slug.replace(/[\s_]+/g, "-");

  // Remove all characters that are not alphanumeric, Arabic, or hyphens
  slug = slug.replace(/[^a-z0-9\u0600-\u06FF-]+/g, "");

  // Replace multiple consecutive hyphens with a single hyphen
  slug = slug.replace(/-+/g, "-");

  // Remove leading and trailing hyphens
  slug = slug.replace(/^-+|-+$/g, "");

  // Transliterate common Arabic characters that have Latin equivalents
  const arabicToLatinMap: { [key: string]: string } = {
    'أ': 'a', 'إ': 'e', 'آ': 'a', 'ؤ': 'o', 'ئ': 'e', 'ا': 'a',
    'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': 'h', 'خ': 'kh',
    'د': 'd', 'ذ': 'th', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh',
    'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z', 'ع': 'a', 'غ': 'gh',
    'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
    'ه': 'h', 'و': 'w', 'ي': 'y', 'ة': 'a', 'ى': 'a'
  };

  slug = slug
    .split("")
    .map((char) => arabicToLatinMap[char] || char)
    .join("");

  // Ensure the slug is not empty
  if (slug.length === 0) {
    slug = "untitled";
  }

  return slug;
}