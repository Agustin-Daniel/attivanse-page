import { addonsData } from "./addonsData";

export function getAddonBySlug(slug: string) {
    return addonsData.find(addon => addon.slug === slug);
  }