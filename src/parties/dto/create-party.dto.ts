import { IsDateString } from "class-validator";

export class CreatePartyDto{
    @IsDateString()
    Date: string;
    }