import { IsNotEmpty } from 'class-validator';

export class CreatUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
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
