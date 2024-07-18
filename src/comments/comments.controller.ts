import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

import { GetUser } from '../users/decorators/user.decorator';
import { User } from '../users/interfaces/user.interface';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(new ValidationPipe())
  async create(
    @GetUser() user: User,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    const { id: userId } = user;
    return this.commentsService.create(userId, createCommentDto.content);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.commentsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.commentsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body('content') content: string) {
    return this.commentsService.update(id, content);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.commentsService.delete(id);
  }
}
