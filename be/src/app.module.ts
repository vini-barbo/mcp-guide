import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './presentation/controllers/user/user.module';
import { PrismaModule } from './infrastructure/database/prisma/prisma.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swagger.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly swaggerModule: SwaggerModule) {}

  configureSwagger(app) {
    const options = swaggerConfig();
    const document = this.swaggerModule.createDocument(app, options);
    this.swaggerModule.setup('api', app, document);
  }
}