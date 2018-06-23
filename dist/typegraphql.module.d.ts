import { DynamicModule } from '@nestjs/common';
import { BuildSchemaOptions } from 'type-graphql';
export declare class TypeGQLModule {
    static forSchema(options?: BuildSchemaOptions): DynamicModule;
}
