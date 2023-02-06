import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { laravel } from 'src/app/models/laravel.model';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    readonly baseUrl = 'https://127.0.0.1:8000';

    constructor(
        private http: HttpClient
    ) { }

    getCats(amount?: number) {

        let url: string = this.baseUrl;

        if (amount) {
            url += '?' + '&limit=' + amount;
        }
        return this.http.get<laravel[]>(url);
    }
}