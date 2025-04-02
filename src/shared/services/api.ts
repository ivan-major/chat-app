import { headersWithCredentials } from "@/shared/utils/apiHeaders.js";
import { ofetch } from "ofetch";

export const apiInstance = {
	fetch: ofetch.create({
		baseURL: "http://localhost:3000",
		headers: headersWithCredentials,
	}),
}
