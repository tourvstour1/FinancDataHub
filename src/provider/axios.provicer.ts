import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";
import { AxiosProviderModel } from "./axios.entity";

@Injectable()
export class AxiosProvider {
    constructor(readonly httpService: HttpService) { }

    axiosPost = async (payload: AxiosProviderModel) => {
        return await firstValueFrom(
            this.httpService.post(payload.path, payload.data, payload.config).pipe(
                catchError((error: AxiosError) => {
                    // console.log(error);
                    throw error.code;
                }),
            ),
        );
    }

}