import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import {CreateGoodsDto} from "./dto/create-goods.dto";
import {GoodsService} from "./goods.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('goods')
export class GoodsController {

  constructor(private goodsService: GoodsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createGoods(@Body() dto: CreateGoodsDto,
             @UploadedFile() image) {
    return this.goodsService.create(dto, image)
  }


  @Get()
  getAll() {
    return this.goodsService.getAllGoods();
  }

  @Delete('/:id')
  deleteGoods(@Param() {id}) {
    return this.goodsService.deleteGoods(id);
  }

}
