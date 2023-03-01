import makeRequest from "..";

describe("makeRequest", () => {
    it("should return data when request in valid", async () => {
        const response = new Response();
        const mockData = {}
        jest.spyOn(global, "fetch").mockResolvedValue({
            ...response,
            json: jest.fn().mockResolvedValue(mockData),
        })
        const data = await makeRequest(`${"http://example.com"}`, { method: "example method" });
        expect(data).toEqual(mockData);
    });
    it("should return error when request is invalid", async () => {
        const response = new Error();
        const mockData = {}
        jest.spyOn(global, "fetch").mockRejectedValue(response)
        expect(async () => await makeRequest(`${"http://example.com"}`, { method: "example method" })).rejects.toThrow(new Error());
        
    });
});