import * as graphql from "@nestjs/graphql";
import { TestttResolverBase } from "./base/testtt.resolver.base";
import { Testtt } from "./base/Testtt";
import { TestttService } from "./testtt.service";

@graphql.Resolver(() => Testtt)
export class TestttResolver extends TestttResolverBase {
  constructor(protected readonly service: TestttService) {
    super(service);
  }
}
