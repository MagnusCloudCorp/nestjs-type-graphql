# Nestjs with type-graphql

Basic integration of type-graphql in Nestjs.

## HOW-TO

```typescript
//main.ts

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
  });

  const gqlW = app.get(GraphQlBridge);
  gqlW.setContainer(app);

  await app.listen(3000);
}

// app.module.ts

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeGQLModule.forSchema({
      resolvers: [RecipeResolver, RateResolver],
    }),
    ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  constructor(private readonly graphQL: GraphQlBridge) {}

  configure(consumer: MiddlewareConsumer) {
    const schema = this.graphQL.buildSchema();
    consumer
      .apply(graphqlExpress(req => ({ schema, rootValue: req })))
      .forRoutes('/graphql');

    consumer
      .apply(graphiqlExpress({ endpointURL: '/graphql' }))
      .forRoutes('/playground');
  }
}

// example.module.ts

@Module({
  imports: [TypeOrmModule.forFeature([User, Rate, Recipe])],
  providers: [RecipeResolver, RateResolver, RecipeService],
  exports: [RecipeResolver, RateResolver],
  controllers: [],
})
export class ExampleModule {}
```
