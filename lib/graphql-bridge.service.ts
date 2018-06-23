import { Injectable, Inject } from '@nestjs/common';
import { GraphQLSchema } from 'graphql';
import {
  BuildSchemaOptions,
  buildSchemaSync,
  useContainer,
} from 'type-graphql';

export const SCHEMA_OPTIONS = 'SCHEMA_OPTIONS';

@Injectable()
export class GraphQlBridge {
  constructor(
    @Inject(SCHEMA_OPTIONS) private readonly options: BuildSchemaOptions,
  ) {}

  setContainer(c: any) {
    useContainer(c);
  }

  buildSchema(): GraphQLSchema {
    return buildSchemaSync(this.options);
  }
}
