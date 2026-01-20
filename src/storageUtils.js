const mockStorage = {
  data: {},
  async get(key) {
    const value = localStorage.getItem(key);
    return value ? { key, value } : null;
  },
  async set(key, value) {
    localStorage.setItem(key, value);
    return { key, value };
  },
  async delete(key) {
    localStorage.removeItem(key);
    return { key, deleted: true };
  }
};

if (typeof window !== 'undefined' && !window.storage) {
  window.storage = mockStorage;
}

export default mockStorage;