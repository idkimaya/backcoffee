import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import { signupDto } from './dto/signupDto';
import { loginDto } from './dto/loginDto';
import { JwtService } from '@nestjs/jwt';



//logique metier de creation d'un compte
@Injectable()
export class AuthService {
    
    constructor(private readonly prismaService: PrismaService,
        private readonly JwtService: JwtService,
        ) {} 

    async signup(signup: signupDto) {
        // Restructuration du sigup
        const { email , password, username } = signup;
        // Vérifier si l'utilisateur existe déjà en recherchant par email
        const user = await this.prismaService.users.findUnique({ where: { email } });
        if (user) {
            throw new ConflictException("User already exists");
        }
        // Hasher le mot de passe
        const hash = await argon2.hash(password);
        // Enregistrer le nouvel utilisateur dans la base de données
        await this.prismaService.users.create({
            data: {
                email,
                username, // Assurez-vous d'inclure username dans les données à enregistrer
                password: hash // Enregistrement du mot de passe hashé
            }
        });
        // Autres traitements : envoi d'email, etc.
        // Retourner un message de succès
        return { data: 'User successfully registered' };
    }

    async login(loginDto: loginDto) {
      const { email, password } = loginDto;
      //voir si user est a déjà un compte
      const user = await this.prismaService.users.findUnique({
        where: { email },
      });
      if (!user) throw new NotFoundException('User not found');
      //verify password avec argon 2 (authHelper dans tracker)
      const isMatch = await this.verifyPassword(password, user.password);
      if (!isMatch) {
        throw new UnauthorizedException('Email or password incorrect');
      }
      //retourner un token jwt
      const payload = {
        sub: user.userID,
        email: user.email,
      };
      const access_token = this.JwtService.sign(payload, {
        expiresIn: '60s',
      });

     return {
        access_token
      }
    }
    async verifyPassword(userPassword: string, hashedPasswordFromDB: string): Promise<boolean> {
        try {
            return await argon2.verify(hashedPasswordFromDB, userPassword);
        } catch (error) {
            console.error('Error during verification:', error);
            return false;
        }
    }
}