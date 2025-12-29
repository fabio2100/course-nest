import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user.dto';



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
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post() // POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Patch(':id') // PATCH /users/:id
    findOneAndUpdate(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id') // DELETE /users/:id
    findOneAndDelete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    }


}
