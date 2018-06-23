"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeGQLModule_1;
const common_1 = require("@nestjs/common");
const graphql_bridge_service_1 = require("./graphql-bridge.service");
let TypeGQLModule = TypeGQLModule_1 = class TypeGQLModule {
    static forSchema(options) {
        const optionsProvider = {
            provide: graphql_bridge_service_1.SCHEMA_OPTIONS,
            useValue: options,
        };
        const wrapperProviders = {
            provide: graphql_bridge_service_1.GraphQlBridge,
            useClass: graphql_bridge_service_1.GraphQlBridge,
        };
        return {
            module: TypeGQLModule_1,
            providers: [optionsProvider, wrapperProviders],
            exports: [optionsProvider, wrapperProviders],
        };
    }
};
TypeGQLModule = TypeGQLModule_1 = __decorate([
    common_1.Module({})
], TypeGQLModule);
exports.TypeGQLModule = TypeGQLModule;
