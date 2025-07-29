import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [EmployeeModule, CategoryModule, UserModule],
  controllers: [UserController, ProductController],
  providers: [UserService, ProductService],
})
export class AppModule {}
