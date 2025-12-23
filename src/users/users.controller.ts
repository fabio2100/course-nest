import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {

    // Dependency Injection
    constructor(private readonly usersService: UsersService) {}

    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */
    @Get() // GET /users or users?role=admin
    findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER', @Query('active') active?: boolean, @Query('age') age?: number) {
        return this.usersService.findAll(role);
    }

    @Get('interns') // GET /users/interns => order matters
    findInterns() {
        return [];
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Post() // POST /users
    create(@Body() user: {name: string; role: 'INTERN' | 'ADMIN' | 'ENGINEER'; email: string; username?: string; phone?: string; website?: string;}) {
        return this.usersService.create(user);
    }

    @Patch(':id') // PATCH /users/:id
    findOneAndUpdate(@Param('id') id: string, @Body() userUpdate: {}) {
        return this.usersService.update(+id, userUpdate);
    }

    @Delete(':id') // DELETE /users/:id
    findOneAndDelete(@Param('id') id: string) {
        return this.usersService.delete(+id);
    }


}
