import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CaddyController } from './controllers/caddy/caddy.controller';
import { CaddyService } from './integrations/caddy/caddy.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CaddyController],
  providers: [CaddyService],
})
export class AppModule {}
