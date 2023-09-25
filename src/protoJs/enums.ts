/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: enums.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */

export enum Status {
  _Status_UNSPECIFIED = 0,
  NORMAL = 1,
  BLOCKED = -10,
  FREEZE = -20,
  DELETED = -21,
  PENDING = 30,
  IN_PROGRESS = 31,
  COMPLETED = 32,
}
export enum ErrorNo {
  _ErrorNo_UNSPECIFIED = 0,
  SUCCESS = 1,
  MESSAGE = 300,
  Param_Error = 400,
  UNAUTHENTICATED = 401,
  AUTH_FAIL = 402,
  HTTP_BAD_METHOD = 403,
  REQUEST_NOT_FOUND = 404,
  BAD_REQUEST = 405,
  Access_Denied = 406,
  UserName_Or_Pwd_Error = 407,
  Account_Disable = 408,
  Account_Limit = 409,
  Account_Blocked = 410,
  ILLEGAL_REQUEST = 411,
  ERROR = 500,
  INTERNAL_SERVER_ERROR = 501,
  SERVER_BUSY = 502,
  REQUIRE_OPEN_SERVICE = 6000,
  NETWORK_ERROR = 10000,
  SSL_ERROR = 10001,
  TIMEOUT_ERROR = 10002,
  BE_PHONE_ALREADY_BANDED = 20000,
}
export enum LogErrorType {
  _LogErrorType_UNSPECIFIED = 0,
  ERROR_TYPE_DEBUG = 1,
  ERROR_TYPE_INFO = 2,
  ERROR_TYPE_WARN = 3,
  ERROR_TYPE_ERROR = 4,
  ERROR_TYPE_DANGER = 5,
}
export enum ClientType {
  _ClientType_UNSPECIFIED = 0,
  ANDROID = 1,
  iOS = 2,
  H5 = 3,
}
export enum Gender {
  _Gender_UNSPECIFIED = 0,
  Woman = 1,
  Man = 2,
  Secret = 3,
}
export enum Direction {
  _Direction_UNSPECIFIED = 0,
  ASC = 1,
  DESC = 2,
}
export enum RoleLevel {
  _RoleLevel_UNSPECIFIED = 0,
  ROOT = 1,
}
export enum MenuType {
  _MenuType_UNSPECIFIED = 0,
  DIR = 1,
  MENU = 2,
  BUTTON = 3,
}
export enum LimitType {
  _LimitType_UNSPECIFIED = 0,
  CUSTOMER = 1,
  IP = 2,
}
export enum MediaMetaType {
  _MediaMetaType_UNSPECIFIED = 0,
  MediaMetaType_PIC = 1,
  MediaMetaType_VOICE = 2,
  MediaMetaType_VIDEO = 3,
}
export enum CosType {
  _CosType_UNSPECIFIED = 0,
  COS_DOWNLOAD = 1,
  COS_UPLOAD = 2,
}
export enum FeedbackType {
  _FeedbackType_UNSPECIFIED = 0,
  FeedbackType_BUG_REPORT = 1,
  FeedbackType_FEATURE_REQUEST = 2,
  FeedbackType_USER_EXPERIENCE_ISSUE = 3,
}
export enum ReportScene {
  _ReportScene_UNSPECIFIED = 0,
  _ReportScene_IM = 1,
  _ReportScene_PROFILE = 2,
}
export enum OrderStat {
  _OrderStat_UNSPECIFIED = 0,
}
export enum ApprovalStat {
  _ApprovalStat_UNSPECIFIED = 0,
  _ApprovalStat_PENDING_APPROVAL = 1,
  _ApprovalStat_APPROVED = 2,
  _ApprovalStat_DISABLED = 3,
}
export enum PurchasePackageCategory {
  _PurchasePackageCategory_UNSPECIFIED = 0,
  _PurchasePackageCategory_Bathing = 1,
  _PurchasePackageCategory_Beauty = 2,
  _PurchasePackageCategory_Boarding = 3,
}
