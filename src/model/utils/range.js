export default function range(min, max) {
  return Array.from(new Array(max - min), (value, index) => index + min);
}
