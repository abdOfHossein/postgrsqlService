import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, Transport, ClientGrpc } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable()
export class AppService {
  
}

