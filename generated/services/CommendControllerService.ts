/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseRes_int_ } from '../models/BaseRes_int_';
import type { CommendAddRequest } from '../models/CommendAddRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommendControllerService {

    /**
     * doThumb
     * @param commendAddRequest commendAddRequest
     * @returns BaseRes_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static doThumbUsingPost(
commendAddRequest: CommendAddRequest,
): CancelablePromise<BaseRes_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/commend/api/',
            body: commendAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
