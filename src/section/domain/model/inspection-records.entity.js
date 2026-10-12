export class InspectionRecord {

    constructor({id = null, machineryCode = "", inspectorName = "", inspectionDate = "", inspectionResult = "",{} = {}}) {
        this.id = id;
        this.machineryCode = machineryCode;
        this.inspectorName = inspectorName;
        this.inspectionDate = inspectionDate;
        this.inspectionResult = inspectionResult;
    }

    }
}

