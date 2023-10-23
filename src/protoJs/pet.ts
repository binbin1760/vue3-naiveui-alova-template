/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: pet.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
// @ts-nocheck
import * as dependency_1 from "./payload";
import * as dependency_2 from "./page";
import * as dependency_3 from "./enums";
import * as pb_1 from "google-protobuf";
export class PetBreedViewModel extends pb_1.Message {
  #one_of_decls: number[][] = [];
  constructor(
    data?:
      | any[]
      | {
          id?: string;
          title?: string;
          theme?: dependency_1.MediaMetaModel;
          sort?: number;
          isRecommend?: boolean;
          isRoot?: boolean;
          pid?: string;
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
      if ("id" in data && data.id != undefined) {
        this.id = data.id;
      }
      if ("title" in data && data.title != undefined) {
        this.title = data.title;
      }
      if ("theme" in data && data.theme != undefined) {
        this.theme = data.theme;
      }
      if ("sort" in data && data.sort != undefined) {
        this.sort = data.sort;
      }
      if ("isRecommend" in data && data.isRecommend != undefined) {
        this.isRecommend = data.isRecommend;
      }
      if ("isRoot" in data && data.isRoot != undefined) {
        this.isRoot = data.isRoot;
      }
      if ("pid" in data && data.pid != undefined) {
        this.pid = data.pid;
      }
    }
  }
  get id() {
    return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
  }
  set id(value: string) {
    pb_1.Message.setField(this, 1, value);
  }
  get title() {
    return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
  }
  set title(value: string) {
    pb_1.Message.setField(this, 2, value);
  }
  get theme() {
    return pb_1.Message.getWrapperField(
      this,
      dependency_1.MediaMetaModel,
      3
    ) as dependency_1.MediaMetaModel;
  }
  set theme(value: dependency_1.MediaMetaModel) {
    pb_1.Message.setWrapperField(this, 3, value);
  }
  get hasTheme() {
    return pb_1.Message.getField(this, 3) != null;
  }
  get sort() {
    return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
  }
  set sort(value: number) {
    pb_1.Message.setField(this, 4, value);
  }
  get isRecommend() {
    return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
  }
  set isRecommend(value: boolean) {
    pb_1.Message.setField(this, 5, value);
  }
  get isRoot() {
    return pb_1.Message.getFieldWithDefault(this, 6, false) as boolean;
  }
  set isRoot(value: boolean) {
    pb_1.Message.setField(this, 6, value);
  }
  get pid() {
    return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
  }
  set pid(value: string) {
    pb_1.Message.setField(this, 7, value);
  }
  static fromObject(data: {
    id?: string;
    title?: string;
    theme?: ReturnType<typeof dependency_1.MediaMetaModel.prototype.toObject>;
    sort?: number;
    isRecommend?: boolean;
    isRoot?: boolean;
    pid?: string;
  }): PetBreedViewModel {
    const message = new PetBreedViewModel({});
    if (data.id != null) {
      message.id = data.id;
    }
    if (data.title != null) {
      message.title = data.title;
    }
    if (data.theme != null) {
      message.theme = dependency_1.MediaMetaModel.fromObject(data.theme);
    }
    if (data.sort != null) {
      message.sort = data.sort;
    }
    if (data.isRecommend != null) {
      message.isRecommend = data.isRecommend;
    }
    if (data.isRoot != null) {
      message.isRoot = data.isRoot;
    }
    if (data.pid != null) {
      message.pid = data.pid;
    }
    return message;
  }
  toObject() {
    const data: {
      id?: string;
      title?: string;
      theme?: ReturnType<typeof dependency_1.MediaMetaModel.prototype.toObject>;
      sort?: number;
      isRecommend?: boolean;
      isRoot?: boolean;
      pid?: string;
    } = {};
    if (this.id != null) {
      data.id = this.id;
    }
    if (this.title != null) {
      data.title = this.title;
    }
    if (this.theme != null) {
      data.theme = this.theme.toObject();
    }
    if (this.sort != null) {
      data.sort = this.sort;
    }
    if (this.isRecommend != null) {
      data.isRecommend = this.isRecommend;
    }
    if (this.isRoot != null) {
      data.isRoot = this.isRoot;
    }
    if (this.pid != null) {
      data.pid = this.pid;
    }
    return data;
  }
  serialize(): Uint8Array;
  serialize(w: pb_1.BinaryWriter): void;
  serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
    const writer = w || new pb_1.BinaryWriter();
    if (this.id.length) writer.writeString(1, this.id);
    if (this.title.length) writer.writeString(2, this.title);
    if (this.hasTheme)
      writer.writeMessage(3, this.theme, () => this.theme.serialize(writer));
    if (this.sort != 0) writer.writeUint32(4, this.sort);
    if (this.isRecommend != false) writer.writeBool(5, this.isRecommend);
    if (this.isRoot != false) writer.writeBool(6, this.isRoot);
    if (this.pid.length) writer.writeString(7, this.pid);
    if (!w) return writer.getResultBuffer();
  }
  static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PetBreedViewModel {
    const reader =
        bytes instanceof pb_1.BinaryReader
          ? bytes
          : new pb_1.BinaryReader(bytes),
      message = new PetBreedViewModel();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      switch (reader.getFieldNumber()) {
        case 1:
          message.id = reader.readString();
          break;
        case 2:
          message.title = reader.readString();
          break;
        case 3:
          reader.readMessage(
            message.theme,
            () =>
              (message.theme = dependency_1.MediaMetaModel.deserialize(reader))
          );
          break;
        case 4:
          message.sort = reader.readUint32();
          break;
        case 5:
          message.isRecommend = reader.readBool();
          break;
        case 6:
          message.isRoot = reader.readBool();
          break;
        case 7:
          message.pid = reader.readString();
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
  static deserializeBinary(bytes: Uint8Array): PetBreedViewModel {
    return PetBreedViewModel.deserialize(bytes);
  }
}
export class PetCategoryAllResponse extends pb_1.Message {
  #one_of_decls: number[][] = [];
  constructor(
    data?:
      | any[]
      | {
          raws?: PetBreedViewModel[];
        }
  ) {
    super();
    pb_1.Message.initialize(
      this,
      Array.isArray(data) ? data : [],
      0,
      -1,
      [1],
      this.#one_of_decls
    );
    if (!Array.isArray(data) && typeof data == "object") {
      if ("raws" in data && data.raws != undefined) {
        this.raws = data.raws;
      }
    }
  }
  get raws() {
    return pb_1.Message.getRepeatedWrapperField(
      this,
      PetBreedViewModel,
      1
    ) as PetBreedViewModel[];
  }
  set raws(value: PetBreedViewModel[]) {
    pb_1.Message.setRepeatedWrapperField(this, 1, value);
  }
  static fromObject(data: {
    raws?: ReturnType<typeof PetBreedViewModel.prototype.toObject>[];
  }): PetCategoryAllResponse {
    const message = new PetCategoryAllResponse({});
    if (data.raws != null) {
      message.raws = data.raws.map((item) =>
        PetBreedViewModel.fromObject(item)
      );
    }
    return message;
  }
  toObject() {
    const data: {
      raws?: ReturnType<typeof PetBreedViewModel.prototype.toObject>[];
    } = {};
    if (this.raws != null) {
      data.raws = this.raws.map((item: PetBreedViewModel) => item.toObject());
    }
    return data;
  }
  serialize(): Uint8Array;
  serialize(w: pb_1.BinaryWriter): void;
  serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
    const writer = w || new pb_1.BinaryWriter();
    if (this.raws.length)
      writer.writeRepeatedMessage(1, this.raws, (item: PetBreedViewModel) =>
        item.serialize(writer)
      );
    if (!w) return writer.getResultBuffer();
  }
  static deserialize(
    bytes: Uint8Array | pb_1.BinaryReader
  ): PetCategoryAllResponse {
    const reader =
        bytes instanceof pb_1.BinaryReader
          ? bytes
          : new pb_1.BinaryReader(bytes),
      message = new PetCategoryAllResponse();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      switch (reader.getFieldNumber()) {
        case 1:
          reader.readMessage(message.raws, () =>
            pb_1.Message.addToRepeatedWrapperField(
              message,
              1,
              PetBreedViewModel.deserialize(reader),
              PetBreedViewModel
            )
          );
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
  static deserializeBinary(bytes: Uint8Array): PetCategoryAllResponse {
    return PetCategoryAllResponse.deserialize(bytes);
  }
}
export class PetCategoryDetailsResponse extends pb_1.Message {
  #one_of_decls: number[][] = [];
  constructor(
    data?:
      | any[]
      | {
          suggest?: PetBreedViewModel[];
          raws?: PetBreedViewModel[];
        }
  ) {
    super();
    pb_1.Message.initialize(
      this,
      Array.isArray(data) ? data : [],
      0,
      -1,
      [1, 2],
      this.#one_of_decls
    );
    if (!Array.isArray(data) && typeof data == "object") {
      if ("suggest" in data && data.suggest != undefined) {
        this.suggest = data.suggest;
      }
      if ("raws" in data && data.raws != undefined) {
        this.raws = data.raws;
      }
    }
  }
  get suggest() {
    return pb_1.Message.getRepeatedWrapperField(
      this,
      PetBreedViewModel,
      1
    ) as PetBreedViewModel[];
  }
  set suggest(value: PetBreedViewModel[]) {
    pb_1.Message.setRepeatedWrapperField(this, 1, value);
  }
  get raws() {
    return pb_1.Message.getRepeatedWrapperField(
      this,
      PetBreedViewModel,
      2
    ) as PetBreedViewModel[];
  }
  set raws(value: PetBreedViewModel[]) {
    pb_1.Message.setRepeatedWrapperField(this, 2, value);
  }
  static fromObject(data: {
    suggest?: ReturnType<typeof PetBreedViewModel.prototype.toObject>[];
    raws?: ReturnType<typeof PetBreedViewModel.prototype.toObject>[];
  }): PetCategoryDetailsResponse {
    const message = new PetCategoryDetailsResponse({});
    if (data.suggest != null) {
      message.suggest = data.suggest.map((item) =>
        PetBreedViewModel.fromObject(item)
      );
    }
    if (data.raws != null) {
      message.raws = data.raws.map((item) =>
        PetBreedViewModel.fromObject(item)
      );
    }
    return message;
  }
  toObject() {
    const data: {
      suggest?: ReturnType<typeof PetBreedViewModel.prototype.toObject>[];
      raws?: ReturnType<typeof PetBreedViewModel.prototype.toObject>[];
    } = {};
    if (this.suggest != null) {
      data.suggest = this.suggest.map((item: PetBreedViewModel) =>
        item.toObject()
      );
    }
    if (this.raws != null) {
      data.raws = this.raws.map((item: PetBreedViewModel) => item.toObject());
    }
    return data;
  }
  serialize(): Uint8Array;
  serialize(w: pb_1.BinaryWriter): void;
  serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
    const writer = w || new pb_1.BinaryWriter();
    if (this.suggest.length)
      writer.writeRepeatedMessage(1, this.suggest, (item: PetBreedViewModel) =>
        item.serialize(writer)
      );
    if (this.raws.length)
      writer.writeRepeatedMessage(2, this.raws, (item: PetBreedViewModel) =>
        item.serialize(writer)
      );
    if (!w) return writer.getResultBuffer();
  }
  static deserialize(
    bytes: Uint8Array | pb_1.BinaryReader
  ): PetCategoryDetailsResponse {
    const reader =
        bytes instanceof pb_1.BinaryReader
          ? bytes
          : new pb_1.BinaryReader(bytes),
      message = new PetCategoryDetailsResponse();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      switch (reader.getFieldNumber()) {
        case 1:
          reader.readMessage(message.suggest, () =>
            pb_1.Message.addToRepeatedWrapperField(
              message,
              1,
              PetBreedViewModel.deserialize(reader),
              PetBreedViewModel
            )
          );
          break;
        case 2:
          reader.readMessage(message.raws, () =>
            pb_1.Message.addToRepeatedWrapperField(
              message,
              2,
              PetBreedViewModel.deserialize(reader),
              PetBreedViewModel
            )
          );
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
  static deserializeBinary(bytes: Uint8Array): PetCategoryDetailsResponse {
    return PetCategoryDetailsResponse.deserialize(bytes);
  }
}
export class PetViewModel extends pb_1.Message {
  #one_of_decls: number[][] = [];
  constructor(
    data?:
      | any[]
      | {
          id?: string;
          gender?: dependency_3.Gender;
          name?: string;
          birthday?: number;
          isSterilization?: boolean;
          breedId?: string;
          breadTitle?: string;
          weight?: number;
          avatar?: dependency_1.MediaMetaModel;
          album?: dependency_1.MediaMetaModel[];
        }
  ) {
    super();
    pb_1.Message.initialize(
      this,
      Array.isArray(data) ? data : [],
      0,
      -1,
      [10],
      this.#one_of_decls
    );
    if (!Array.isArray(data) && typeof data == "object") {
      if ("id" in data && data.id != undefined) {
        this.id = data.id;
      }
      if ("gender" in data && data.gender != undefined) {
        this.gender = data.gender;
      }
      if ("name" in data && data.name != undefined) {
        this.name = data.name;
      }
      if ("birthday" in data && data.birthday != undefined) {
        this.birthday = data.birthday;
      }
      if ("isSterilization" in data && data.isSterilization != undefined) {
        this.isSterilization = data.isSterilization;
      }
      if ("breedId" in data && data.breedId != undefined) {
        this.breedId = data.breedId;
      }
      if ("breadTitle" in data && data.breadTitle != undefined) {
        this.breadTitle = data.breadTitle;
      }
      if ("weight" in data && data.weight != undefined) {
        this.weight = data.weight;
      }
      if ("avatar" in data && data.avatar != undefined) {
        this.avatar = data.avatar;
      }
      if ("album" in data && data.album != undefined) {
        this.album = data.album;
      }
    }
  }
  get id() {
    return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
  }
  set id(value: string) {
    pb_1.Message.setField(this, 1, value);
  }
  get gender() {
    return pb_1.Message.getFieldWithDefault(
      this,
      2,
      dependency_3.Gender._Gender_UNSPECIFIED
    ) as dependency_3.Gender;
  }
  set gender(value: dependency_3.Gender) {
    pb_1.Message.setField(this, 2, value);
  }
  get name() {
    return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
  }
  set name(value: string) {
    pb_1.Message.setField(this, 3, value);
  }
  get birthday() {
    return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
  }
  set birthday(value: number) {
    pb_1.Message.setField(this, 4, value);
  }
  get isSterilization() {
    return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
  }
  set isSterilization(value: boolean) {
    pb_1.Message.setField(this, 5, value);
  }
  get breedId() {
    return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
  }
  set breedId(value: string) {
    pb_1.Message.setField(this, 6, value);
  }
  get breadTitle() {
    return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
  }
  set breadTitle(value: string) {
    pb_1.Message.setField(this, 7, value);
  }
  get weight() {
    return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
  }
  set weight(value: number) {
    pb_1.Message.setField(this, 8, value);
  }
  get avatar() {
    return pb_1.Message.getWrapperField(
      this,
      dependency_1.MediaMetaModel,
      9
    ) as dependency_1.MediaMetaModel;
  }
  set avatar(value: dependency_1.MediaMetaModel) {
    pb_1.Message.setWrapperField(this, 9, value);
  }
  get hasAvatar() {
    return pb_1.Message.getField(this, 9) != null;
  }
  get album() {
    return pb_1.Message.getRepeatedWrapperField(
      this,
      dependency_1.MediaMetaModel,
      10
    ) as dependency_1.MediaMetaModel[];
  }
  set album(value: dependency_1.MediaMetaModel[]) {
    pb_1.Message.setRepeatedWrapperField(this, 10, value);
  }
  static fromObject(data: {
    id?: string;
    gender?: dependency_3.Gender;
    name?: string;
    birthday?: number;
    isSterilization?: boolean;
    breedId?: string;
    breadTitle?: string;
    weight?: number;
    avatar?: ReturnType<typeof dependency_1.MediaMetaModel.prototype.toObject>;
    album?: ReturnType<typeof dependency_1.MediaMetaModel.prototype.toObject>[];
  }): PetViewModel {
    const message = new PetViewModel({});
    if (data.id != null) {
      message.id = data.id;
    }
    if (data.gender != null) {
      message.gender = data.gender;
    }
    if (data.name != null) {
      message.name = data.name;
    }
    if (data.birthday != null) {
      message.birthday = data.birthday;
    }
    if (data.isSterilization != null) {
      message.isSterilization = data.isSterilization;
    }
    if (data.breedId != null) {
      message.breedId = data.breedId;
    }
    if (data.breadTitle != null) {
      message.breadTitle = data.breadTitle;
    }
    if (data.weight != null) {
      message.weight = data.weight;
    }
    if (data.avatar != null) {
      message.avatar = dependency_1.MediaMetaModel.fromObject(data.avatar);
    }
    if (data.album != null) {
      message.album = data.album.map((item) =>
        dependency_1.MediaMetaModel.fromObject(item)
      );
    }
    return message;
  }
  toObject() {
    const data: {
      id?: string;
      gender?: dependency_3.Gender;
      name?: string;
      birthday?: number;
      isSterilization?: boolean;
      breedId?: string;
      breadTitle?: string;
      weight?: number;
      avatar?: ReturnType<
        typeof dependency_1.MediaMetaModel.prototype.toObject
      >;
      album?: ReturnType<
        typeof dependency_1.MediaMetaModel.prototype.toObject
      >[];
    } = {};
    if (this.id != null) {
      data.id = this.id;
    }
    if (this.gender != null) {
      data.gender = this.gender;
    }
    if (this.name != null) {
      data.name = this.name;
    }
    if (this.birthday != null) {
      data.birthday = this.birthday;
    }
    if (this.isSterilization != null) {
      data.isSterilization = this.isSterilization;
    }
    if (this.breedId != null) {
      data.breedId = this.breedId;
    }
    if (this.breadTitle != null) {
      data.breadTitle = this.breadTitle;
    }
    if (this.weight != null) {
      data.weight = this.weight;
    }
    if (this.avatar != null) {
      data.avatar = this.avatar.toObject();
    }
    if (this.album != null) {
      data.album = this.album.map((item: dependency_1.MediaMetaModel) =>
        item.toObject()
      );
    }
    return data;
  }
  serialize(): Uint8Array;
  serialize(w: pb_1.BinaryWriter): void;
  serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
    const writer = w || new pb_1.BinaryWriter();
    if (this.id.length) writer.writeString(1, this.id);
    if (this.gender != dependency_3.Gender._Gender_UNSPECIFIED)
      writer.writeEnum(2, this.gender);
    if (this.name.length) writer.writeString(3, this.name);
    if (this.birthday != 0) writer.writeUint64(4, this.birthday);
    if (this.isSterilization != false)
      writer.writeBool(5, this.isSterilization);
    if (this.breedId.length) writer.writeString(6, this.breedId);
    if (this.breadTitle.length) writer.writeString(7, this.breadTitle);
    if (this.weight != 0) writer.writeFloat(8, this.weight);
    if (this.hasAvatar)
      writer.writeMessage(9, this.avatar, () => this.avatar.serialize(writer));
    if (this.album.length)
      writer.writeRepeatedMessage(
        10,
        this.album,
        (item: dependency_1.MediaMetaModel) => item.serialize(writer)
      );
    if (!w) return writer.getResultBuffer();
  }
  static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PetViewModel {
    const reader =
        bytes instanceof pb_1.BinaryReader
          ? bytes
          : new pb_1.BinaryReader(bytes),
      message = new PetViewModel();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      switch (reader.getFieldNumber()) {
        case 1:
          message.id = reader.readString();
          break;
        case 2:
          message.gender = reader.readEnum();
          break;
        case 3:
          message.name = reader.readString();
          break;
        case 4:
          message.birthday = reader.readUint64();
          break;
        case 5:
          message.isSterilization = reader.readBool();
          break;
        case 6:
          message.breedId = reader.readString();
          break;
        case 7:
          message.breadTitle = reader.readString();
          break;
        case 8:
          message.weight = reader.readFloat();
          break;
        case 9:
          reader.readMessage(
            message.avatar,
            () =>
              (message.avatar = dependency_1.MediaMetaModel.deserialize(reader))
          );
          break;
        case 10:
          reader.readMessage(message.album, () =>
            pb_1.Message.addToRepeatedWrapperField(
              message,
              10,
              dependency_1.MediaMetaModel.deserialize(reader),
              dependency_1.MediaMetaModel
            )
          );
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
  static deserializeBinary(bytes: Uint8Array): PetViewModel {
    return PetViewModel.deserialize(bytes);
  }
}
export class UploadAlbumRequest extends pb_1.Message {
  #one_of_decls: number[][] = [];
  constructor(
    data?:
      | any[]
      | {
          raws?: dependency_1.MediaMetaModel[];
        }
  ) {
    super();
    pb_1.Message.initialize(
      this,
      Array.isArray(data) ? data : [],
      0,
      -1,
      [1],
      this.#one_of_decls
    );
    if (!Array.isArray(data) && typeof data == "object") {
      if ("raws" in data && data.raws != undefined) {
        this.raws = data.raws;
      }
    }
  }
  get raws() {
    return pb_1.Message.getRepeatedWrapperField(
      this,
      dependency_1.MediaMetaModel,
      1
    ) as dependency_1.MediaMetaModel[];
  }
  set raws(value: dependency_1.MediaMetaModel[]) {
    pb_1.Message.setRepeatedWrapperField(this, 1, value);
  }
  static fromObject(data: {
    raws?: ReturnType<typeof dependency_1.MediaMetaModel.prototype.toObject>[];
  }): UploadAlbumRequest {
    const message = new UploadAlbumRequest({});
    if (data.raws != null) {
      message.raws = data.raws.map((item) =>
        dependency_1.MediaMetaModel.fromObject(item)
      );
    }
    return message;
  }
  toObject() {
    const data: {
      raws?: ReturnType<
        typeof dependency_1.MediaMetaModel.prototype.toObject
      >[];
    } = {};
    if (this.raws != null) {
      data.raws = this.raws.map((item: dependency_1.MediaMetaModel) =>
        item.toObject()
      );
    }
    return data;
  }
  serialize(): Uint8Array;
  serialize(w: pb_1.BinaryWriter): void;
  serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
    const writer = w || new pb_1.BinaryWriter();
    if (this.raws.length)
      writer.writeRepeatedMessage(
        1,
        this.raws,
        (item: dependency_1.MediaMetaModel) => item.serialize(writer)
      );
    if (!w) return writer.getResultBuffer();
  }
  static deserialize(
    bytes: Uint8Array | pb_1.BinaryReader
  ): UploadAlbumRequest {
    const reader =
        bytes instanceof pb_1.BinaryReader
          ? bytes
          : new pb_1.BinaryReader(bytes),
      message = new UploadAlbumRequest();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      switch (reader.getFieldNumber()) {
        case 1:
          reader.readMessage(message.raws, () =>
            pb_1.Message.addToRepeatedWrapperField(
              message,
              1,
              dependency_1.MediaMetaModel.deserialize(reader),
              dependency_1.MediaMetaModel
            )
          );
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
  static deserializeBinary(bytes: Uint8Array): UploadAlbumRequest {
    return UploadAlbumRequest.deserialize(bytes);
  }
}
