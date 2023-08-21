import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestttServiceBase } from "./base/testtt.service.base";

@Injectable()
export class TestttService extends TestttServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
