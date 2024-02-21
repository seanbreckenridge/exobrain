import join from "./join";

export default function url_for(path: string): string {
  // remove leading . and /
  if (path.startsWith(".")) {
    path = path.slice(1);
  }
  if (path.startsWith("/")) {
    path = path.slice(1);
  }
  return join(import.meta.env.BASE_URL, path);
}
