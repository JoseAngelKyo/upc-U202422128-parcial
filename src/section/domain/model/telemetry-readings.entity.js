export class TELEMETRYReadings {

    constructor({id=null, machineryCode="", engineTemperatureC="", oilPressurePsi="", vibrationMmS="", alertTriggered="",
                    registeredAt=""}) {
        this.id = id;
        this.machineryCode = machineryCode;
        this.engineTemperatureC = engineTemperatureC;
        this.oilPressurePsi = oilPressurePsi;
        this.vibrationMmS = vibrationMmS;
        this.alertTriggered = alertTriggered;
        this.registeredAt = registeredAt;
    }
}

