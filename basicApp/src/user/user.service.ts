/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

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
  ];

  getAllUser() {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  // post
  createUser(user: { name: string; email: string }) {
    const newUser = {
      id: Date.now(),
      name: user.name,
      email: user.email,
    };
    this.users.push(newUser);
    return newUser;
  }

  // put
  updateUser(id: number, data: { name: string; email: string }) {
    const idx = this.users.findIndex((user) => user.id === id);
    if (idx == -1) {
      throw new NotFoundException('User not found');
    }
    this.users[idx] = { ...this.users[idx], ...data };
    return this.users[idx];
  }

  // patch
  patchUser(id: number, data: Partial<{ name: string; email: string }>) {
    // const idx = this.users.findIndex((user)=> user.id === id);

    // if(idx==-1) throw new NotFoundException("User not found")

    // this.users[idx] = {...this.users[idx],...data};
    // return this.users[idx];
    const user = this.getUserById(id);
    if (!user) throw new NotFoundException('User not found');
    Object.assign(user, data);
    return user;
  }

  // delete
  deleteUser(id: number) {
    const idx = this.users.findIndex((user) => user.id === id);
    if (idx == -1) throw new NotFoundException('User not found');
    this.users.splice(idx, 1);
    return this.users;
  }
}
