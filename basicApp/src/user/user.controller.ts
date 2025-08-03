/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user') // Decorator and route 'user'
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() // Get decorator
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: { name: string; email: string }) {
    return this.userService.createUser(user);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: { name: string; email: string },
  ) {
    return this.userService.updateUser(id, data);
  }
  @Patch(':id')
  patchUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<{ name: string; email: string }>,
  ) {
    return this.userService.patchUser(id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
