export function rotateGallery(items, index) {
  if (!items.length) {
    return null;
  }

  const safeIndex = ((index % items.length) + items.length) % items.length;
  return items[safeIndex];
}

export function featuredListings(items) {
  return items.filter((item) => item.featured);
}