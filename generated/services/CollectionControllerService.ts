/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleCollectAddRequest } from '../models/ArticleCollectAddRequest';
import type { ArticleCollectQueryRequest } from '../models/ArticleCollectQueryRequest';
import type { ArticleQueryRequest } from '../models/ArticleQueryRequest';
import type { BaseRes_int_ } from '../models/BaseRes_int_';
import type { BaseRes_Page_ArticleVO_ } from '../models/BaseRes_Page_ArticleVO_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollectionControllerService {

    /**
     * doArticleCollect
     * @param articleCollectAddRequest articleCollectAddRequest
     * @returns BaseRes_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static doArticleCollectUsingPost(
articleCollectAddRequest: ArticleCollectAddRequest,
): CancelablePromise<BaseRes_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/collection/api/',
            body: articleCollectAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listCollectArticleByPage
     * @param articleCollectQueryRequest articleCollectQueryRequest
     * @returns BaseRes_Page_ArticleVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listCollectArticleByPageUsingPost(
articleCollectQueryRequest: ArticleCollectQueryRequest,
): CancelablePromise<BaseRes_Page_ArticleVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/collection/api/list/page',
            body: articleCollectQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listMyCollectArticleByPage
     * @param articleQueryRequest articleQueryRequest
     * @returns BaseRes_Page_ArticleVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listMyCollectArticleByPageUsingPost(
articleQueryRequest: ArticleQueryRequest,
): CancelablePromise<BaseRes_Page_ArticleVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/collection/api/my/list/page',
            body: articleQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
