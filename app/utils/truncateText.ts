export function truncateText(text: string, length: number): string {
  if (text.length <= length) {
    return text + '..';
  }

  // Encuentra el último espacio dentro del límite de longitud
  const lastSpace = text.lastIndexOf(' ', length);
  return text.slice(0, lastSpace) + '...';
}