export interface Patient {
  resourceType: string;
  id: string;
  meta: PatientMeta;
  type: string;
  link: Link[] | undefined;
  entry: Entry[];
}

export interface Entry {
  fullUrl: string;
  resource: Resource;
  search: Search;
}

export interface Resource {
  resourceType: ResourceType;
  id: string;
  meta: ResourceMeta;
  text?: Text;
  identifier: Identifier[];
  active?: boolean;
  name: Name[];
  telecom?: Telecom[];
  gender?: Gender;
  birthDate: Date;
  address?: Address[];
  extension?: ResourceExtension[];
  deceasedBoolean?: boolean;
  communication?: Communication[];
}

export interface Address {
  use?: AddressUse;
  text?: string;
  line: string[];
  city?: string;
  _city?: City;
  state?: string;
  _state?: City;
  country?: Country;
  _country?: City;
  district?: string;
  _district?: City;
}

export interface City {
  extension: CityExtension[];
}

export interface CityExtension {
  url: string;
  valueCodeableConcept: Language;
}

export interface Language {
  coding: Coding[];
}

export interface Coding {
  system: string;
  code: string;
  display: string;
}

export enum Country {
  Chile = 'Chile',
}

export enum AddressUse {
  Home = 'home',
}

export interface Communication {
  language: Language;
}

export interface ResourceExtension {
  url: string;
  valueInteger?: number;
  valueCodeableConcept?: Language;
  valueBoolean?: boolean;
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  Other = 'other',
}

export interface Identifier {
  use?: IdentifierUse;
  type?: Type;
  system?: string;
  value: string;
  assigner?: Assigner;
}

export interface Assigner {
  display: string;
}

export interface Type {
  extension?: CityExtension[];
  coding: Coding[];
  text?: string;
}

export enum IdentifierUse {
  Official = 'official',
  Usual = 'usual',
}

export interface ResourceMeta {
  versionId: string;
  lastUpdated: Date;
  source: string;
  profile?: string[];
}

export interface Name {
  use: IdentifierUse;
  family?: string;
  given: string[];
  _family?: Family;
  text?: string;
}

export interface Family {
  extension: FamilyExtension[];
}

export interface FamilyExtension {
  url: string;
  valueString: string;
}

export enum ResourceType {
  Patient = 'Patient',
}

export interface Telecom {
  system: System;
  value: string;
  use: TelecomUse;
  rank?: number;
}

export enum System {
  Email = 'email',
  Phone = 'phone',
}

export enum TelecomUse {
  Mobile = 'mobile',
  Work = 'work',
}

export interface Text {
  status: Status;
  div?: string;
}

export enum Status {
  Extensions = 'extensions',
  Generated = 'generated',
}

export interface Search {
  mode: Mode;
}

export enum Mode {
  Match = 'match',
}

export interface Link {
  relation: string;
  url: string;
}

export interface PatientMeta {
  lastUpdated: Date;
}
