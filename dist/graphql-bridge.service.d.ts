import { GraphQLSchema } from 'graphql';
import { BuildSchemaOptions } from 'type-graphql';
export declare const SCHEMA_OPTIONS = "SCHEMA_OPTIONS";
export declare class GraphQlBridge {
    private readonly options;
    constructor(options: BuildSchemaOptions);
    setContainer(c: any): void;
    buildSchema(): GraphQLSchema;
}
