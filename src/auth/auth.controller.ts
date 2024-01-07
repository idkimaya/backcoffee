import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/loginDto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authservice :AuthService){
    }

    @Post("signup")
    signup(@Body() loginDto: loginDto ) {
        return this.authservice.signup(loginDto)
    }
}
