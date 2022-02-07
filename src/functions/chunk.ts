export function chunk(array: any, chunkSize: number) {
  let chunks = [];

  let arrayCopy = [...array];

  while (arrayCopy.length > 0) {
    chunks.push(arrayCopy.splice(0, chunkSize));
  }
  if (!chunks) return [array];
  return chunks;
}
