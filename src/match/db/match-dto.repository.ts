import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { MatchSchema } from "./match.schema";

@Injectable()
export class MatchDtoRepository {
  constructor(
    @InjectModel(MatchSchema.name)
    private readonly matchModel: Model<MatchSchema>,
  ) { }

  async findByIndex(index: number): Promise<any> {
    return await this.matchModel.find({ matchWith: index } as FilterQuery<MatchSchema>);
  }
}