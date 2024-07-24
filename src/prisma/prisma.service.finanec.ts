import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as Finance } from '../../prisma/generated/finanace-client';

@Injectable()
export class PrismaFinance extends Finance implements OnModuleInit {
  async onModuleInit() {
  
  }
}
