/**
 * Swagger First Rest Api 鏂囨。
 * user 妯″潡api鏂囨。
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Token } from '../model/token';
import { TokenInfo } from '../model/tokenInfo';
import { User } from '../model/user';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AuthControllerService {

    protected basePath = 'http://localhost:8001';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * wx interfaxe
     * token
     * @param appid appid
     * @param secret secret
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTokenUsingGET(appid: string, secret: string, observe?: 'body', reportProgress?: boolean): Observable<Token>;
    public getTokenUsingGET(appid: string, secret: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Token>>;
    public getTokenUsingGET(appid: string, secret: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Token>>;
    public getTokenUsingGET(appid: string, secret: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (appid === null || appid === undefined) {
            throw new Error('Required parameter appid was null or undefined when calling getTokenUsingGET.');
        }

        if (secret === null || secret === undefined) {
            throw new Error('Required parameter secret was null or undefined when calling getTokenUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (appid !== undefined && appid !== null) {
            queryParameters = queryParameters.set('appid', <any>appid);
        }
        if (secret !== undefined && secret !== null) {
            queryParameters = queryParameters.set('secret', <any>secret);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Token>(`${this.basePath}/auth/getToken`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * login
     * 
     * @param user user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loginUsingPOST(user: User, observe?: 'body', reportProgress?: boolean): Observable<TokenInfo>;
    public loginUsingPOST(user: User, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TokenInfo>>;
    public loginUsingPOST(user: User, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenInfo>>;
    public loginUsingPOST(user: User, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling loginUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TokenInfo>(`${this.basePath}/auth/login`,
            user,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * wechatLogin
     * 
     * @param user user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wechatLoginUsingPOST(user: User, observe?: 'body', reportProgress?: boolean): Observable<TokenInfo>;
    public wechatLoginUsingPOST(user: User, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TokenInfo>>;
    public wechatLoginUsingPOST(user: User, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenInfo>>;
    public wechatLoginUsingPOST(user: User, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling wechatLoginUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TokenInfo>(`${this.basePath}/auth/wechat_login`,
            user,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
