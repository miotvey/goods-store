import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
// import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {ValidationPipe} from "./pipes/validation.pipe";


async function start() {
  const PORT = process.env.PORT || 8000;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('store')
    .setDescription('Documentation API')
    .setVersion('23')
    .addTag('shot')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()