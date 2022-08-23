import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  private buildLoginUrl() {
    return `${environment.API_URL}/user/login`
  }

  private loginRequest(user_name: string, password: string) {
    const loginUrl = this.buildLoginUrl()

    return this.httpClient.post(
      loginUrl,
      { user_name, password },
      { observe: "response"}
    )
  }

  login(user_name: string, password: string) {
    return this.loginRequest(user_name, password)
  }
}
