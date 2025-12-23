import { Injectable } from '@nestjs/common';
import { create } from 'domain';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      role: 'ENGINEER',
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      role: 'ADMIN',
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      role: 'INTERN',
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      role: 'ENGINEER',
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      role: 'ADMIN',
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      role: 'INTERN',
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      role: 'ENGINEER',
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      role: 'ADMIN',
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      role: 'INTERN',
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      role: 'ENGINEER',
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
    },
  ];

  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER'): any[] {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number): any {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    email: string;
    username?: string;
    phone?: string;
    website?: string;
  }) {
    const highestId = this.users
      ? this.users.reduce((max, user) => (user.id > max ? user.id : max), 0)
      : 0;
    const newUser = {
      id: highestId + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    userUpdate: Partial<{
      name: string;
      role: 'INTERN' | 'ADMIN' | 'ENGINEER';
      email: string;
    }>,
  ) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    const updatedUser = {
      ...this.users[userIndex],
      ...userUpdate,
    };
    this.users[userIndex] = updatedUser;
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    if (removedUser === -1) {
      return null;
    }
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
