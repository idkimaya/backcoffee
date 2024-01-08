import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signupDto } from './dto/signupDto';
import { loginDto } from './dto/loginDto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authservice :AuthService){
    }

    @Post("signup")
    signup(@Body() signupDto: signupDto ) {
        return this.authservice.signup(signupDto)
    }
    @Post("login")
    login(@Body() loginDto: loginDto ) {
        return this.authservice.login(loginDto)
    }
}
