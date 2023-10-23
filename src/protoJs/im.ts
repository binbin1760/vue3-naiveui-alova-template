/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: im.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
// @ts-nocheck
import * as dependency_1 from "./enums";
import * as dependency_2 from "./payload";
import * as dependency_3 from "./page";
import * as pb_1 from "google-protobuf";
// @ts-nocheck
export class UserSignResponse extends pb_1.Message {
  #one_of_decls: number[][] = [];
  constructor(
    data?:
      | any[]
      | {
          sign?: string;
          uid?: string;
        }
  ) {
    super();
    pb_1.Message.initialize(
      this,
      Array.isArray(data) ? data : [],
      0,
      -1,
      [],
      this.#one_of_decls
    );
    if (!Array.isArray(data) && typeof data == "object") {
      if ("sign" in data && data.sign != undefined) {
        this.sign = data.sign;
      }
      if ("uid" in data && data.uid != undefined) {
        this.uid = data.uid;
      }
    }
  }
  get sign() {
    return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
  }
  set sign(value: string) {
    pb_1.Message.setField(this, 1, value);
  }
  get uid() {
    return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
  }
  set uid(value: string) {
    pb_1.Message.setField(this, 2, value);
  }
  static fromObject(data: { sign?: string; uid?: string }): UserSignResponse {
    const message = new UserSignResponse({});
    if (data.sign != null) {
      message.sign = data.sign;
    }
    if (data.uid != null) {
      message.uid = data.uid;
    }
    return message;
  }
  toObject() {
    const data: {
      sign?: string;
      uid?: string;
    } = {};
    if (this.sign != null) {
      data.sign = this.sign;
    }
    if (this.uid != null) {
      data.uid = this.uid;
    }
    return data;
  }
  serialize(): Uint8Array;
  serialize(w: pb_1.BinaryWriter): void;
  serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
    const writer = w || new pb_1.BinaryWriter();
    if (this.sign.length) writer.writeString(1, this.sign);
    if (this.uid.length) writer.writeString(2, this.uid);
    if (!w) return writer.getResultBuffer();
  }
  static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UserSignResponse {
    const reader =
        bytes instanceof pb_1.BinaryReader
          ? bytes
          : new pb_1.BinaryReader(bytes),
      message = new UserSignResponse();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      switch (reader.getFieldNumber()) {
        case 1:
          message.sign = reader.readString();
          break;
        case 2:
          message.uid = reader.readString();
          break;
        default:
          reader.skipField();
      }
    }
    return message;
  }
  serializeBinary(): Uint8Array {
    return this.serialize();
  }
  static deserializeBinary(bytes: Uint8Array): UserSignResponse {
    return UserSignResponse.deserialize(bytes);
  }
}
