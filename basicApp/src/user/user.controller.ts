/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
}
