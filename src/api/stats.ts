type ApiResponse = {
  tvl: number;
  vol_30d: number;
  xcm_vol_30d: number;
  assets_count: number;
  accounts_count: number;
};

const url = "https://api.hydradx.io/hydration-web/v1/stats";

export async function fetchStats(): Promise<ApiResponse> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}
