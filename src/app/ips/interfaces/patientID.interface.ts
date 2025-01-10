export interface PacienteID {
  resourceType?: string;
  id?: string;
  meta?: Meta;
  text?: Text;
  identifier?: null | undefined | Identifier[];
  active?: boolean;
  name: Name[];
  telecom?: null | undefined | Identifier[];
  gender?: string;
  birthDate?: string;
  address?: null | undefined | Address[];
}

export interface Address {
  use: string;
  text: string;
  line: string[];
  city: string;
  _city: City;
  state: string;
  _state: City;
  country: string;
  _country: City;
}

export interface City {
  extension: Extension[];
}

export interface Extension {
  url: string;
  valueCodeableConcept: ValueCodeableConcept;
}

export interface ValueCodeableConcept {
  coding: Coding[];
}

export interface Coding {
  system: string;
  code: string;
  display: string;
}

export interface Identifier {
  use: string;
  type?: Type;
  system: string;
  value: string;
}

export interface Type {
  extension: Extension[];
  coding: Coding[];
}

export interface Meta {
  versionId: string;
  lastUpdated: Date;
  source: string;
  profile: string[];
}

export interface Name {
  use: string;
  family: string;
  given: string[];
}

export interface Text {
  status: string;
  div: string;
}
