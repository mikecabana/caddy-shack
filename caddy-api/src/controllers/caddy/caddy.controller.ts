import { Body, Controller, Get, Post } from '@nestjs/common';
import { CaddyService } from '../../integrations/caddy/caddy.service';

@Controller('caddy')
export class CaddyController {
  constructor(private readonly appService: CaddyService) {}

  @Get()
  async getConfig(): Promise<any> {
    return await this.appService.getConfig();
  }

  @Post()
  async getHello(@Body() config: any): Promise<any> {
    return await this.appService.updateConfig(config);
  }
}
