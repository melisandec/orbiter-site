import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { event, url, timestamp, ...additionalData } = data;

    // Log analytics data (in production, you'd send this to your analytics service)
    console.log("Analytics Event:", {
      event,
      url,
      timestamp,
      ...additionalData,
    });

    // Here you could:
    // 1. Send to Google Analytics
    // 2. Store in a database
    // 3. Send to a third-party analytics service
    // 4. Process with a data pipeline

    // For now, we'll just return success
    return new Response(
      JSON.stringify({
        success: true,
        message: "Analytics event recorded",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Analytics error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to record analytics event",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
