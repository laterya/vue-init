/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseRes_boolean_ } from '../models/BaseRes_boolean_';
import type { BaseRes_UserLoginDto_ } from '../models/BaseRes_UserLoginDto_';
import type { BaseRes_UserVo_ } from '../models/BaseRes_UserVo_';
import type { UserLoginPwdRequest } from '../models/UserLoginPwdRequest';
import type { UserLoginRequest } from '../models/UserLoginRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * sendCode
     * @param phone phone
     * @returns BaseRes_boolean_ OK
     * @throws ApiError
     */
    public static sendCodeUsingGet(
phone: string,
): CancelablePromise<BaseRes_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/api/getCode',
            query: {
                'phone': phone,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getLoginUser
     * @returns BaseRes_UserVo_ OK
     * @throws ApiError
     */
    public static getLoginUserUsingGet(): CancelablePromise<BaseRes_UserVo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/api/getMsg',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userLogin
     * @param userLoginRequest userLoginRequest
     * @returns BaseRes_UserLoginDto_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLoginUsingPost(
userLoginRequest: UserLoginRequest,
): CancelablePromise<BaseRes_UserLoginDto_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/api/login/code',
            body: userLoginRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userLoginWithPassword
     * @param userLoginPwdRequest userLoginPwdRequest
     * @returns BaseRes_UserLoginDto_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLoginWithPasswordUsingPost(
userLoginPwdRequest: UserLoginPwdRequest,
): CancelablePromise<BaseRes_UserLoginDto_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/api/login/password',
            body: userLoginPwdRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * setPassword
     * @param checkPassword checkPassword
     * @param password password
     * @returns BaseRes_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static setPasswordUsingPost(
checkPassword: string,
password: string,
): CancelablePromise<BaseRes_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/api/setPsw',
            query: {
                'checkPassword': checkPassword,
                'password': password,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
