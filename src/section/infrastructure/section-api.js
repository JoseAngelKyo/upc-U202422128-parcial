import { BaseApi } from '../../shared/infrastructure/base-api.js';
import { BaseEndpoint } from "../../shared/infrastructure/base-endpoint.js";

const inspectionRecordsEndpointPath = import.meta.env.VITE_INSPECTION_ENDPOINT_PATH;
const telemetryReadingsEndpointPath = import.meta.env.VITE_TELEMETRY_ENDPOINT_PATH;

export class AssetsApi extends BaseApi {
    #inspectionRecordsEndpoint;
    #telemetryReadingsEndpoint;

    constructor() {
        super();

        this.#inspectionRecordsEndpoint = new BaseEndpoint(this, inspectionRecordsEndpointPath);
        this.#telemetryReadingsEndpoint = new BaseEndpoint(this, telemetryReadingsEndpointPath);
    }


    getInspectionRecords() {
        return this.#inspectionRecordsEndpoint.getAll();
    }

    getTelemetryReadings() {
        return this.#telemetryReadingsEndpoint.getAll();
    }

    updateTelemetryReading(resource) {
        return this.#telemetryReadingsEndpoint.update(
            resource.id,
            resource
        );
    }
}