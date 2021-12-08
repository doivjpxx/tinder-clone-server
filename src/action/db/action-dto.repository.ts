import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { ActionSchema } from "./action.schema";

@Injectable()
export class ActionDtoRepository {
  constructor(
    @InjectModel(ActionSchema.name)
    private readonly ActionModel: Model<ActionSchema>,
  ) { }

  async findByIndex(index: number): Promise<any> {
    return await this.ActionModel.find({ ActionWith: index } as FilterQuery<ActionSchema>);
  }
}