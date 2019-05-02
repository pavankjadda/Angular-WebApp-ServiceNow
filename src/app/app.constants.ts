export const SERVER_API_URL = "http://localhost:8090/";
export const BASIC_AUTH = btoa('admin:admin');

export const OAUTH2_CLIENT_ID= 'spring-security-oauth2-read-write-client';
export const OAUTH2_CLIENT_SECRET= 'spring-security-oauth2-read-write-client-password1234';
export const OAUTH2_ACCESS_TOKEN_URI = SERVER_API_URL + "oauth/token";
export const OAUTH2_USER_AUTHORIZATION_URI = SERVER_API_URL + "oauth/authorize";
