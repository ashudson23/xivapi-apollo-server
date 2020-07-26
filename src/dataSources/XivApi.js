import { RESTDataSource } from 'apollo-datasource-rest';

class XivApi extends RESTDataSource {
  get baseURL() {
    if (this.context.env === 'production') {
      return 'https://xivapi.com/';
    }
    return 'https://staging.xivapi.com/';
  }

  async search(endpoint, params) {
    const qs = Object.entries(params)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    if (!qs) {
      return null;
    }

    return this.get(`${endpoint}/search?${qs}`);
  }
}

export default XivApi;
