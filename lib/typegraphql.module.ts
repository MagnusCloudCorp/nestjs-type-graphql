import { DynamicModule, Module, Provider } from '@nestjs/common';
import { BuildSchemaOptions } from 'type-graphql';
import { GraphQlBridge, SCHEMA_OPTIONS } from './graphql-bridge.service';

@Module({})
export class TypeGQLModule {
  static forSchema(options?: BuildSchemaOptions): DynamicModule {
    const optionsProvider: Provider = {
      provide: SCHEMA_OPTIONS,
      useValue: options,
    };

    const wrapperProviders: Provider = {
      provide: GraphQlBridge,
      useClass: GraphQlBridge,
    };

    return {
      module: TypeGQLModule,
      providers: [optionsProvider, wrapperProviders],
      exports: [optionsProvider, wrapperProviders],
    };
  }
}
