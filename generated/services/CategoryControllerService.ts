/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseRes_int_ } from '../models/BaseRes_int_';
import type { BaseRes_List_Category_ } from '../models/BaseRes_List_Category_';
import type { BaseRes_List_string_ } from '../models/BaseRes_List_string_';
import type { CategoryAddRequest } from '../models/CategoryAddRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoryControllerService {

    /**
     * updateCategory
     * @param categoryId categoryId
     * @param categoryName categoryName
     * @returns BaseRes_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateCategoryUsingPut(
categoryId: number,
categoryName: string,
): CancelablePromise<BaseRes_int_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/category/api',
            query: {
                'categoryId': categoryId,
                'categoryName': categoryName,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteCategory
     * @param categoryId categoryId
     * @returns BaseRes_int_ OK
     * @throws ApiError
     */
    public static deleteCategoryUsingDelete(
categoryId: number,
): CancelablePromise<BaseRes_int_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/category/api',
            query: {
                'categoryId': categoryId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * addCategory
     * @param categoryAddRequest categoryAddRequest
     * @returns BaseRes_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addCategoryUsingPost(
categoryAddRequest: CategoryAddRequest,
): CancelablePromise<BaseRes_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/category/api/add',
            body: categoryAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getAllCategory
     * @returns BaseRes_List_Category_ OK
     * @throws ApiError
     */
    public static getAllCategoryUsingGet(): CancelablePromise<BaseRes_List_Category_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/category/api/all',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCategory
     * @returns BaseRes_List_string_ OK
     * @throws ApiError
     */
    public static getCategoryUsingGet(): CancelablePromise<BaseRes_List_string_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/category/api/get',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
