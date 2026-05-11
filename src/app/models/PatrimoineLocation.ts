class PatrimoineLocation {
    resourceType: string;
    id: string;
    meta: {
        versionId: string;
        lastUpdated: string;
        source: string;
        profile: string[];
    }
    extension: any[];
    identifier: any[];
    status: string;
    name: string;
    type: {
        coding: {
            system: string;
            code: string;
            display: string;
        }[];
    }
    telecom: {
        system: string;
        value: string;
        use: string;
    }[];
    address: any[];
    managingOrganization: {
        reference: string;
        display: string;
    };
    hoursOfOperation: any[];

    constructor() {
        this.resourceType = '';
        this.id = '';
        this.meta = {
            versionId: '',
            lastUpdated: '',
            source: '',
            profile: []
        };
        this.extension = [];
        this.identifier = [];
        this.status = '';
        this.name = '';
        this.type = {
            coding: []
        };
        this.telecom = [];
        this.address = [];
        this.managingOrganization = {
            reference: '',
            display: ''
        };
        this.hoursOfOperation = [];
    }

}