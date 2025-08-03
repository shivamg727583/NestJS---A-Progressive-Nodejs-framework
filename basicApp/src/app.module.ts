import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesService } from './user-roles/user-roles.service';
import { UserRolesController } from './user-roles/user-roles.controller';
import { UserRolesModule } from './user-roles/user-roles.module';

@Module({
  imports: [
    EmployeeModule,
    CategoryModule,
    UserModule,
    CustomerModule,
    UserRolesModule,
  ],
  controllers: [
    UserController,
    ProductController,
    MynameController,
    UserRolesController,
  ],
  providers: [UserService, ProductService, UserRolesService],
})
export class AppModule {}
