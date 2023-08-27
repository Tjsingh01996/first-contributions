import { Module } from "@nestjs/common";
import { TestttModuleBase } from "./base/testtt.module.base";
import { TestttService } from "./testtt.service";
import { TestttController } from "./testtt.controller";
import { TestttResolver } from "./testtt.resolver";

@Module({
  imports: [TestttModuleBase],
  controllers: [TestttController],
  providers: [TestttService, TestttResolver],
  exports: [TestttService],
})
export class TestttModule {}
