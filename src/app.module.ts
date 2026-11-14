import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsignaturaController } from './asignatura/asignatura.controller';
import { DocenteController } from './docente/docente.controller';


@Module({
  imports: [],
  controllers: [AppController, DocenteController, AsignaturaController],
  providers: [AppService],
})
export class AppModule {}
