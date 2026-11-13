import categories from "@/data/store/categories.json";

/** Store category tree (snapshot of the live catalog structure; refreshed by scripts/store/snapshot-categories). */
export type Category = {
  entity_id: string;
  parent_id: string;
  position: string;
  level: string;
  name: string;
  display_mode: string;
  url_key: string;
  include_in_menu: string;
  icon_url: string | null;
  image_url: string | null;
};

const all = categories as Category[];
const byId = new Map(all.map((c) => [c.entity_id, c]));
const byKey = new Map(all.map((c) => [c.url_key, c]));

export const ROOT_KEY = "default-category";

export function categoryById(id: string) {
  return byId.get(String(id));
}

export function categoryByKey(key: string) {
  return byKey.get(key);
}

export function categoryHref(c: Pick<Category, "url_key">) {
  return `/catalog/${c.url_key}`;
}

/** Ancestors from the catalog root down to (not including) the category itself. */
export function ancestors(c: Category): Category[] {
  const out: Category[] = [];
  let p = byId.get(c.parent_id);
  while (p && Number(p.level) >= 1) {
    out.unshift(p);
    p = byId.get(p.parent_id);
  }
  return out;
}

export function children(c: Category): Category[] {
  return all
    .filter((x) => x.parent_id === c.entity_id && x.include_in_menu === "1")
    .sort((a, b) => Number(a.position) - Number(b.position));
}

/** Every category URL, for sitemap.xml. */
export function allCategoryKeys(): string[] {
  return all.filter((c) => Number(c.level) >= 2).map((c) => c.url_key);
}
