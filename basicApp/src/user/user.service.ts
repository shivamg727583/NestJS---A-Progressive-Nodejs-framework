import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Shivam',
      email: 's@s.com',
    },
    {
      id: 2,
      name: 'Sohan',
      email: 'sohan@s.com',
    },
    {
      id: 3,
      name: 'Rohan',
      email: 'rohan@s.com',
    },
    {
      id: 4,
      name: 'Shyam',
      email: 'shyam@s.com',
    },
]



 getAllUser(){
    return this.users;
 }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
 }

 

}
