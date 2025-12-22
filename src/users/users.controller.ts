import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */
    @Get() // GET /users or users?role=admin
    findAll(@Query('role') role?: 'INTERN' | 'ADMIN', @Query('active') active?: boolean, @Query('age') age?: number) {
        return role ? `All users with role: ${role}, active: ${active}, age: ${age}` : 'All users';
    }

    @Get('interns') // GET /users/interns => order matters
    findInterns() {
        return [];
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return { id };
    }

    @Post() // POST /users
    create(@Body() user: {}) {
        return { user };
    }

    @Patch(':id') // PATCH /users/:id
    findOneAndUpdate(@Param('id') id: string, @Body() userUpdate: {}) {
        return { ...userUpdate, id };
    }

    @Delete(':id') // DELETE /users/:id
    findOneAndDelete(@Param('id') id: string) {
        return { id };
    }


}
