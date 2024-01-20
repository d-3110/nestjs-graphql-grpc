/* eslint-disable */
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "history";

export interface History {
  createdAt: Timestamp | undefined;
}

export const HISTORY_PACKAGE_NAME = "history";
