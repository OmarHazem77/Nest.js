import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
 // imports:[], //import other modules if we needed
 // exports:[] //export services if needed in other modules 
})
export class HelloModule {}
