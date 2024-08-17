import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Prisma } from '@prisma/client';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async createTodo(@Body() data: Prisma.TodoCreateInput) {
    return this.todoService.createTodo(data);
  }

  @Get()
  async getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  async getTodoById(@Param('id') id: string) {
    return this.todoService.getTodoById(Number(id));
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() data: Prisma.TodoUpdateInput,
  ) {
    return this.todoService.updateTodo(Number(id), data);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(Number(id));
  }
}
