import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PortfolioRequestContact{

    @JsonProperty("firstName", String)
    Name : string = undefined;
    @JsonProperty("email", String)
    Mail : string = undefined;
    @JsonProperty("subject", String)
    Title: string = undefined;
    @JsonProperty("body", String)
    Body : string = undefined;
}