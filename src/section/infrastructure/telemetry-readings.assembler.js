import {TelemetryReadings} from "../domain/model/telemetry-readings.entity.js";

export class TelemetryReadingsAssembler {

    static toEntityFromResource(resource) {
        return new TelemetryReadings({...resource})
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['telemetryReadings'];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}