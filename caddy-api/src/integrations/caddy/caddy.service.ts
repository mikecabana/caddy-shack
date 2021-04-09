import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class CaddyService {
  baseUrl = 'http://caddy:2019';

  constructor(private http: HttpService) {}

  async getConfig(): Promise<any> {
    try {
      console.log(`trying to get caddy config`);
      const config = await this.http.get(`${this.baseUrl}/config`).toPromise();
      return config.data;
    } catch (e) {
      throw e;
    }
  }

  async updateConfig(config: any): Promise<any> {
    try {
      console.log(`trying to update caddy config`, config);
      await this.http.post(`${this.baseUrl}/load`, config).toPromise();
      return await this.getConfig();
    } catch (e) {
      throw e;
    }
  }
}
