import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import { loginDto } from './dto/loginDto';


//logique metier de auth
@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService) {}
    async signup(login: loginDto) {
        // Restructuration du login
        const { email , password, username } = login;
    
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
}