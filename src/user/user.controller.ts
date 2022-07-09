import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreatUserDto } from './userDto';
interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
}
interface IUserInfo {
  firstName: string;
  lastName: string;
  phoneNumber: number;
}

interface IId {
  id: number;
}

interface IReqBodyUpdateUSer {
  id: number;
  info: IUserInfo;
}
interface IUsers{
  data:Array<IUserInfo>
}
@Controller('user')
export default class UserController {
  constructor(private userService: UserService) {}

  @GrpcMethod()
  async findAll(): Promise<IUsers| object> {
    try {
      const result = await this.userService.findAll();

      console.log(`result of findAll in api-gateway service:${JSON.stringify(result)}`);
      return {data:result};
    } catch (error) {
      console.log(`err of findOne in api-gateway controller:${error}`);
    }
  }

  @GrpcMethod()
  async findOne(id: string): Promise<IUserInfo | object> {
    try {
      console.log(`param in postqrSql service is===>${id}`);
      console.log(id['id']);
      const result = await this.userService.findOne(id['id']);
      console.log(result);

      return result;
    } catch (error) {
      console.log(`err of findOne in api-gateway controller:${error}`);
    }
  }

  @GrpcMethod()
  async addUser(userInfo: CreatUserDto): Promise<object> {
    try {
      console.log(`userInfo addUser postqrSql:${userInfo}`);

      return this.userService.addUser(userInfo);
    } catch (error) {
      console.log(`err of findOne in api-gateway controller:${error}`);
    }
  }

  //update user
  @GrpcMethod()
  async updateUser(reqBodyUpdateUSer: IReqBodyUpdateUSer): Promise<object> {
    try {
      console.log(reqBodyUpdateUSer);
      console.log(JSON.stringify(reqBodyUpdateUSer));

      return this.userService.updateUser(reqBodyUpdateUSer);
    } catch (error) {
      console.log(`err of findOne in api-gateway controller:${error}`);
    }
  }

  //delete user
  @GrpcMethod()
  async deleteUser(id:number): Promise<object> {
    try {

      return this.userService.deleteUser(id);
    } catch (error) {
      console.log(`err of deleteUser in controller in postgrSqlService:${error}`);
    }
  }
}
