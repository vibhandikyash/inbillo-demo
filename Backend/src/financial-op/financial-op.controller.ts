import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FinancialOpService } from './financial-op.service';
import { CreateFinancialOpDto } from './dto/create-financial-op.dto';

@Controller('operations')
export class FinancialOpController {
  constructor(private readonly financialOpService: FinancialOpService) {}

  @Post()
  create(@Body() createFinancialOpDto: CreateFinancialOpDto) {
    return this.financialOpService.create(createFinancialOpDto);
  }

  @Get()
  findAll() {
    return this.financialOpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financialOpService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFinancialOpDto: UpdateFinancialOpDto) {
  //   return this.financialOpService.update(+id, updateFinancialOpDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.financialOpService.remove(+id);
  // }
}
