/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Pack as PrismaPack, Trip as PrismaTrip } from "@prisma/client";

export class PackServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PackCountArgs, "select">): Promise<number> {
    return this.prisma.pack.count(args);
  }

  async packs(args: Prisma.PackFindManyArgs): Promise<PrismaPack[]> {
    return this.prisma.pack.findMany(args);
  }
  async pack(args: Prisma.PackFindUniqueArgs): Promise<PrismaPack | null> {
    return this.prisma.pack.findUnique(args);
  }
  async createPack(args: Prisma.PackCreateArgs): Promise<PrismaPack> {
    return this.prisma.pack.create(args);
  }
  async updatePack(args: Prisma.PackUpdateArgs): Promise<PrismaPack> {
    return this.prisma.pack.update(args);
  }
  async deletePack(args: Prisma.PackDeleteArgs): Promise<PrismaPack> {
    return this.prisma.pack.delete(args);
  }

  async findTrips(
    parentId: string,
    args: Prisma.TripFindManyArgs
  ): Promise<PrismaTrip[]> {
    return this.prisma.pack
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .trips(args);
  }
}