import { Inject,  Controller, Post, Body, HttpStatus, HttpException, UseInterceptors, ClassSerializerInterceptor, Res } from '@nestjs/common';
import { AuthService } from './../../service/auth.service';
import { CreateUserDto, User } from '../../../user';
import { LoginCredential } from './../../dto/login-credential.dto';
import { TokenDto } from './../../dto/token.dto';
import { RefreshTokenDto } from './../../dto/refresh-token.dto';
import { Logger } from 'winston';
import { Response } from 'express';

/**
 * Auth controller
 */
@Controller()
export class AuthController {

  /**
   * @ignore
   */
  constructor(
    @Inject('winston')
    private readonly logger: Logger,
    private readonly service: AuthService,
  ) { }

  /**
   * Create new user
   */
  @Post('register') 
  @UseInterceptors(ClassSerializerInterceptor)
  async register(
    @Body() userDto: CreateUserDto,
    @Res() res: Response
  ): Promise<any> {
    try {
      const result = await this.service.registerUser(userDto);
      res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        message: 'success',
        data: result
      });
      
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * Login users
   */
  @Post('login')
  async login(
    @Body() credential: LoginCredential,
    @Res() res: Response
  ): Promise<any> {
    try {
      const result =  await this.service.login(credential);
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'success',
        data: result
      });
    } catch (error) {
      this.logger.warn('Login attempt failed', credential);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * Access token generation using refresh token
   */
  @Post('refresh-token')
  async refreshToken(
    @Body() token: RefreshTokenDto,
    @Res() res
  ): Promise<TokenDto> {
    try {
      const result =  this.service.refreshToken(token);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'success',
        data: result
      });
    } catch (error) {
      this.logger.warn('Refresh token attempt failed', token);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
