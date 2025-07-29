/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {


  getCategory():string[]{
    return ["Electronic", "Electric", "Mobile", 'Fashion']
  }

}
