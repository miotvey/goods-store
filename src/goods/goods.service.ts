import { Injectable } from '@nestjs/common';
import {CreateGoodsDto} from "./dto/create-goods.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Goods} from "./goods.model";
import {FilesService} from "../files/files.service";

@Injectable()
export class GoodsService {

  constructor(@InjectModel(Goods) private postRepository: typeof Goods,
              private fileService: FilesService) {}

  async create(dto: CreateGoodsDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const goods = await this.postRepository.create({...dto, image: fileName})
    return goods;
  }


  async getAllGoods() {
    const goods = await this.postRepository.findAll({ include: { all: true } });
    return goods;
  }

  async deleteGoods(id) {
    const goods = await this.postRepository.findAll(id);
    return goods;
  }
}