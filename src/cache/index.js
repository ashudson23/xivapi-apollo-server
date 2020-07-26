import NodeCache from 'node-cache';
const cache = new NodeCache();

export default {
  async get(key) {
    const value = cache.get(key);
    if (value) {
      return value;
    }
  },
  async delete(key) {
    return !!cache.take(key)
  },
  async set(key, value, { ttl }) {
    cache.set(key, value, ttl)
  },
};
