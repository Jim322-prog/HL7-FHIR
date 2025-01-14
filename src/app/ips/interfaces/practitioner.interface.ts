export interface Practitioner {
    resourceType?:  string;
    id?:            string;
    meta?:          Meta;
    text?:          Text;
    identifier?:   PractitionerIdentifier[];
    name?:          Name[];
    qualification?: Qualification[];
}

export interface PractitionerIdentifier {
    use:   string;
    type:  Type;
    value: string;
}

export interface Type {
    coding: Coding[];
}

export interface Coding {
    system:  string;
    code:    string;
    display: string;
}

export interface Meta {
    versionId:   string;
    lastUpdated: Date;
    source:      string;
    profile:     string[];
}

export interface Name {
    use:    string;
    family: string;
    given:  string[];
}

export interface Qualification {
    identifier: QualificationIdentifier[];
    code:       Code;
}

export interface Code {
    text: string;
}

export interface QualificationIdentifier {
    value: string;
}

export interface Text {
    status: string;
    div:    string;
}
