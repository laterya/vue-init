/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleAddRequest } from '../models/ArticleAddRequest';
import type { ArticleQueryRequest } from '../models/ArticleQueryRequest';
import type { ArticleUpdateRequest } from '../models/ArticleUpdateRequest';
import type { BaseRes_ArticleVO_ } from '../models/BaseRes_ArticleVO_';
import type { BaseRes_boolean_ } from '../models/BaseRes_boolean_';
import type { BaseRes_long_ } from '../models/BaseRes_long_';
import type { BaseRes_Page_ArticleVO_ } from '../models/BaseRes_Page_ArticleVO_';
import type { DeleteRequest } from '../models/DeleteRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ArticleControllerService {

    /**
     * addArticle
     * @param articleAddRequest ArticleAddRequest
     * @returns BaseRes_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addArticleUsingPost(
articleAddRequest: ArticleAddRequest,
): CancelablePromise<BaseRes_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/article/api/add',
            body: articleAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteArticle
     * @param deleteRequest deleteRequest
     * @returns BaseRes_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteArticleUsingPost(
deleteRequest: DeleteRequest,
): CancelablePromise<BaseRes_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/article/api/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getArticleVOById
     * @param id id
     * @returns BaseRes_ArticleVO_ OK
     * @throws ApiError
     */
    public static getArticleVoByIdUsingGet(
id: number,
): CancelablePromise<BaseRes_ArticleVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/article/api/get/vo',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listArticleVOByPage
     * @param articleQueryRequest ArticleQueryRequest
     * @returns BaseRes_Page_ArticleVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listArticleVoByPageUsingPost(
articleQueryRequest: ArticleQueryRequest,
): CancelablePromise<BaseRes_Page_ArticleVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/article/api/list/page/vo',
            body: articleQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listMyArticleVOByPage
     * @param articleQueryRequest ArticleQueryRequest
     * @returns BaseRes_Page_ArticleVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listMyArticleVoByPageUsingPost(
articleQueryRequest: ArticleQueryRequest,
): CancelablePromise<BaseRes_Page_ArticleVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/article/api/my/list/page/vo',
            body: articleQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * editArticle
     * @param articleUpdateRequest articleUpdateRequest
     * @returns BaseRes_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static editArticleUsingPost(
articleUpdateRequest: ArticleUpdateRequest,
): CancelablePromise<BaseRes_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/article/api/update',
            body: articleUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
