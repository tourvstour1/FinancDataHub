import { Module } from '@nestjs/common';
import { Edit16fService } from './edit-16f.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
    providers:[Edit16fService,PrismaFinance],
    exports:[Edit16fService]
})
export class Edit16fModule {}
