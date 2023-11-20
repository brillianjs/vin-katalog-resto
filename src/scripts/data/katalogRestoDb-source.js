import API_ENDPOINT from "../globals/api-endpoint";

class katalogRestoDbSource {
  static async homeRestoKatalog() {
    try {
      const response = await fetch(API_ENDPOINT.HOME_RESTO);
      const responseJson = await response.json();

      if (responseJson.error) {
        console.error(
          "Error fetching home restaurant list:",
          responseJson.message
        );
        return null; // Return null or handle the error appropriately
      }

      return responseJson.restaurants || []; // Make sure to return an array
    } catch (error) {
      console.error("Error fetching home restaurant list:", error);
      return null; // Return null or handle the error appropriately
    }
  }

  static async restoDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
  static async postReview(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
    return response.json();
  }
}

export default katalogRestoDbSource;
