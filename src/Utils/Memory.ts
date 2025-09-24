export class Memory {
  private static readonly store = new Map<string, any>();

  static remember<T>(key: string, value: T): void {
    this.store.set(key, value);
  }

  static recall<T>(key: string): T | undefined {
    return this.store.get(key);
  }

  static clear(): void {
    this.store.clear();
  }
}
