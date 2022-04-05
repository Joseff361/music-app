export interface Deezer {
  init: (obj: unknown) => void | null;
  api: (endpoint: string, callback: (res: unknown) => void) => void;
}
