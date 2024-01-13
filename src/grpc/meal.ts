/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { MealType } from "./enums/meal_type";
import { History } from "./history";
import { MealTag } from "./meal_tag";

export const protobufPackage = "meal";

export interface FindAllRequest {
}

export interface FindAllResponse {
  meals: Meal[];
}

export interface Meal {
  id: number;
  type: MealType;
  name: string;
  note: string;
  createdAt: string | undefined;
  updatedAt: string | undefined;
  mealTags: MealTag | undefined;
  histories: History[];
  count: Count | undefined;
}

export interface Count {
  mealTags: number;
  histories: number;
}

export const MEAL_PACKAGE_NAME = "meal";

export interface MealServiceClient {
  findAll(request: FindAllRequest, metadata?: Metadata): Observable<FindAllResponse>;
}

export interface MealServiceController {
  findAll(
    request: FindAllRequest,
    metadata?: Metadata,
  ): Promise<FindAllResponse> | Observable<FindAllResponse> | FindAllResponse;
}

export function MealServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findAll"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("MealService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("MealService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const MEAL_SERVICE_NAME = "MealService";
