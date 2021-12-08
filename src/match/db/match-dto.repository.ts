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

  async findByRecId(recId: number): Promise<any> {
    return await this.matchModel.find({ userRecId: recId } as FilterQuery<MatchSchema>);
  }
}