import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userprofile } from './userprofile';
import { Repository } from './repository';
import {Environment  } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username: string;
  private token = Environment['token'];
  private clientId = Environment.clientId;

  constructor(private http: HttpClient) { }
  getProfileData() {
    // return this.http.get(`https://api.github.com/users/${this.username}?access_token=${this.token}`);
    return this.http.get(`https://api.github.com/users/${this.username}?${this.clientId}`);
  }

  getRepoData() {
    // return this.http.get(`https://api.github.com/users/${this.username}/repos?access_token=${this.token}`);
    return this.http.get(`https://api.github.com/users/${this.username}/repos?${this.clientId}`);
  }

  getFollowers() {
    return this.http.get(`https://api.github.com/users/${this.username}/followers?${this.clientId}`)
  }

  getFollowing() {
    return this.http.get(`https://api.github.com/users/${this.username}/following?${this.clientId}`)
  }

  updateFields(username: string) {
    this.username = username;
  }

}
