/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleVO } from './ArticleVO';
import type { OrderItem } from './OrderItem';

export type Page_ArticleVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: Array<OrderItem>;
    pages?: number;
    records?: Array<ArticleVO>;
    searchCount?: boolean;
    size?: number;
    total?: number;
};
