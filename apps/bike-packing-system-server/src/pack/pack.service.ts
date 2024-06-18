import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PackServiceBase } from "./base/pack.service.base";

@Injectable()
export class PackService extends PackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
