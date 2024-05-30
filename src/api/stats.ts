const url = "https://api.hydradx.io/hydration-web/v1/stats";

export async function fetchStats() {
  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as {
      tvl: number;
      vol_30d: number;
      xcm_vol_30d: number;
      assets_count: number;
      accounts_count: number;
    };
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}
