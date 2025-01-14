export interface Boundle {
    resourceType: string;
    id:           string;
    meta?:         Meta;
    type:         string;
    entry:        Entry[];
}

export interface Entry {
    fullUrl:  string;
    resource: Resource;
    request?:  Request;
}

export interface Request {
    method: string;
    url:    string;
}

export interface Resource {
    resourceType:        string;
    id:                  string;
    text?:               Text;
    identifier?:         Identifier[];
    name?:               Name[];
    gender?:             string;
    birthDate?:          Date;
    status?:             string;
    code?:               ClinicalStatus;
    subject?:            Subject;
    effectiveDateTime?:  Date;
    valueQuantity?:      ValueQuantity;
    clinicalStatus?:     ClinicalStatus;
    verificationStatus?: ClinicalStatus;
}

export interface ClinicalStatus {
    coding: Coding[];
}

export interface Coding {
    system:  string;
    code:    string;
    display: string;
}

export interface Identifier {
    use:    string;
    system: string;
    value:  string;
}

export interface Name {
    use:    string;
    family: string;
    given:  string[];
}

export interface Subject {
    reference: string;
}

export interface Text {
    status: string;
    div:    string;
}

export interface ValueQuantity {
    value:  number;
    unit:   string;
    system: string;
    code:   string;
}

export interface Meta {
    versionId:   string;
    lastUpdated: Date;
    source:      string;
}
