import { IsString } from 'class-validator';

export class CommonParamDto {
  @IsString()
  orgId: string;

  @IsString()
  projectId: string;
}
