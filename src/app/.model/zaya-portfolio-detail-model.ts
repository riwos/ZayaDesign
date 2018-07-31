import {JsonObject, JsonProperty, JsonCustomConvert, JsonConverter} from "json2typescript";

@JsonConverter
class DateConverter implements JsonCustomConvert<Date> {
    serialize(date: Date): any {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" +  date.getDate();
    }
    deserialize(date: any): Date {
        return new Date(date);
    }
}

@JsonObject
export class PortfolioDetailModel{

    @JsonProperty("title", String)
    Title : string = undefined;
    @JsonProperty("introduce", String)
    Introduce : string = undefined;
    @JsonProperty("process", String)
    Process: string = undefined;
    @JsonProperty("location", String)
    Location : string = undefined;
    @JsonProperty("area", Number)
    Area: string = undefined;
    @JsonProperty("jobrequirement", String)
    JobRequirement : string = undefined;
    @JsonProperty("customer", String)
    Customer : string = undefined;
    @JsonProperty("jobtime", DateConverter)
    JobTime: Date = undefined;
    @JsonProperty("shortdescription", String)
    ShortDescription: string = undefined
}