export interface Summary {
    resourceType: string;
    meta:         SummaryMeta;
    identifier:   SummaryIdentifier;
    type:         string;
    timestamp:    Date;
    entry:        Entry[];
}

export interface Entry {
    fullUrl:  string;
    resource: Resource;
}

export interface Resource {
    resourceType:               string;
    text?:                      Text;
    status?:                    string;
    type?:                      Code;
    subject?:                   Patient;
    date?:                      Date;
    author?:                    Patient[];
    title?:                     string;
    confidentiality?:           string;
    section?:                   Section[];
    id?:                        string;
    meta?:                      ResourceMeta;
    identifier?:                IdentifierElement[];
    active?:                    boolean;
    name?:                      NameElement[];
    telecom?:                   IdentifierElement[];
    gender?:                    string;
    birthDate?:                 Date;
    address?:                   Address[];
    extension?:                 ResourceExtension[];
    clinicalStatus?:            ClinicalStatus;
    code?:                      Code;
    patient?:                   Patient;
    medicationCodeableConcept?: Code;
    onsetAge?:  OnsetAge;
    vaccineCode?: VaccineCode;
    dosage?: Dosage[];
    medicationReference?: MedicationReference;
    category?: Category;
    performedDateTime?: string;
    valueQuantity?: ValueQuantity;
    dosageInstruction?: DosageInstruction[];
}

export interface DosageInstruction {
    text:        string;
    timing:      Timing;
    route:       Route;
    doseAndRate: DoseAndRate[];
}

export interface DoseAndRate {
    doseQuantity: DoseQuantity;
}


export interface ValueQuantity {
    value:  number;
    unit:   string;
    system: string;
    code:   string;
}

export interface Category {
    coding: CategoryCoding[];
    text:   string;
}

export interface CategoryCoding {
    system:  string;
    code:    string;
    display: string;
}

export interface Dosage {
    text:        string;
    timing:      Timing;
    route:       Route;
    doseAndRate: DoseAndRate[];
}


export interface DoseAndRate {
    doseQuantity: DoseQuantity;
}

export interface DoseQuantity {
    value:  number;
    unit:   string;
    system: string;
    code:   string;
}

export interface Route {
    coding: Coding[];
    text:   string;
}

export interface Coding {
    system:  string;
    code:    string;
    display: string;
}

export interface Timing {
    repeat: Repeat;
}

export interface Repeat {
    frequency:  number;
    period:     number;
    periodUnit: string;
}

export interface EffectivePeriod {
    start: Date;
}

export interface Extension {
    url:      string;
    valueUrl: string;
}

export interface MedicationReference {
    reference: string;
    display:   string;
}

export interface Meta {
    versionId:   string;
    lastUpdated: Date;
    source:      string;
    profile:     string[];
}

export interface Subject {
    reference: string;
}

export interface VaccineCode {
    coding: Coding[];
    text:   string;
}

export interface Coding {
    system:   string;
    code:     string;
    display:  string;
}


export interface OnsetAge {
    value:  number;
    unit:   string;
    system: string;
    code:   string;
}


export interface Address {
    use:      string;
    text:     string;
    line:     string[];
    city:     string;
    _city:    City;
    state:    string;
    _state:   City;
    country:  string;
    _country: City;
}

export interface City {
    extension: CityExtension[];
}

export interface CityExtension {
    url:                  string;
    valueCodeableConcept: Code;
}

export interface Code {
    coding: CodeCoding[];
    text? : string;
}

export interface CodeCoding {
    system:  string;
    code:    string;
    display: string;
    
}

export interface Patient {
    reference: string;
}

export interface ClinicalStatus {
    coding: ClinicalStatusCoding[];
    text?: string;
}

export interface ClinicalStatusCoding {
    system: string;
    code:   string;
}

export interface ResourceExtension {
    url:      string;
    valueUrl: string;
}

export interface IdentifierElement {
    use:    string;
    type?:  Type;
    system: string;
    value:  string;
}

export interface Type {
    extension: CityExtension[];
    coding:    CodeCoding[];
}

export interface ResourceMeta {
    versionId:   string;
    lastUpdated: Date;
    source:      string;
    profile:     string[];
}

export interface NameElement {
    use:    string;
    family: string;
    given:  string[];
}

export interface Section {
    title: string;
    code:  Code;
    text:  Text;
    entry: Patient[];
}

export interface Text {
    status: string;
    div:    string;
}

export interface SummaryIdentifier {
    system: string;
    value:  string;
}

export interface SummaryMeta {
    profile: string[];
}
