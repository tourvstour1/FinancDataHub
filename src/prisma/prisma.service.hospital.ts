import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as Hosapital } from '../../prisma/generated/hospital-client';

@Injectable()
export class PrismaHospital extends Hosapital implements OnModuleInit {
  async onModuleInit() {}
}
