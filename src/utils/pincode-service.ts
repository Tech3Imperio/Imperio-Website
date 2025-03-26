interface PincodeResponse {
  Message: string;
  Status: string;
  PostOffice?: {
    Name: string;
    Description: string;
    BranchType: string;
    DeliveryStatus: string;
    Circle: string;
    District: string;
    Division: string;
    Region: string;
    Block: string;
    State: string;
    Country: string;
    Pincode: string;
  }[];
}

interface LocationData {
  city: string;
  state: string;
}

/**
 * Fetches city and state information based on a pincode
 * @param pincode - The 6-digit Indian postal code
 * @returns Promise with city and state data or null if not found
 */
export async function getLocationFromPincode(
  pincode: string
): Promise<LocationData | null> {
  try {
    // Validate pincode format
    if (!/^\d{6}$/.test(pincode)) {
      console.log("Invalid pincode format:", pincode);
      return null;
    }

    console.log("Fetching location data for pincode:", pincode);
    const response = await fetch(
      `https://api.postalpincode.in/pincode/${pincode}`
    );
    const data = (await response.json()) as PincodeResponse[];

    console.log("Pincode API response:", data);

    if (
      data &&
      Array.isArray(data) &&
      data.length > 0 &&
      data[0].Status === "Success" &&
      data[0].PostOffice &&
      data[0].PostOffice.length > 0
    ) {
      const postOffice = data[0].PostOffice[0];
      const locationData: LocationData = {
        city: postOffice.District,
        state: postOffice.State,
      };

      console.log("Location data found:", locationData);
      return locationData;
    }

    console.log("No location data found for pincode:", pincode);
    return null;
  } catch (error) {
    console.error("Error fetching location from pincode:", error);
    return null;
  }
}
