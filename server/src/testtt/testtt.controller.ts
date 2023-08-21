import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestttService } from "./testtt.service";
import { TestttControllerBase } from "./base/testtt.controller.base";

@swagger.ApiTags("testtts")
@common.Controller("testtts")
export class TestttController extends TestttControllerBase {
  constructor(protected readonly service: TestttService) {
    super(service);
  }
}
