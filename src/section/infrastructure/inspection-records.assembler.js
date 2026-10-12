import {InspectionRecord } from "../domain/model/inspection-records.entity.js";

export class InspectionRecordAssembler {

    static toEntityFromResource(resource) {
        return new InspectionRecord({...resource})
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }

        let resources = response.data instanceof Array ? response.data : response.data['inspectionRecords'];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}