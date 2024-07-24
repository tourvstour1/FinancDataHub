import { Injectable } from '@nestjs/common';
import { ConnectMophService } from 'src/connect-moph/connect-moph.service';

@Injectable()
export class ScheduleService {
constructor(readonly fdh:ConnectMophService){}
    timer = () => {
        
     }

    updateOpdFdhStatus = () => { 

        
    }

    updateIpdFdhStatus = () => { }
}
