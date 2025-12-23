import { NextResponse } from "next/server";
import { fetchInstagramFeed, placeholderPosts } from "@/lib/instagram";

// Cache the response for 1 hour (3600 seconds)
export const revalidate = 3600;

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  // If no token is configured, return placeholder data
  if (!accessToken) {
    return NextResponse.json({
      posts: placeholderPosts,
      source: "placeholder",
      message: "Using placeholder data. Set INSTAGRAM_ACCESS_TOKEN to fetch real posts.",
    });
  }

  try {
    const posts = await fetchInstagramFeed(accessToken, 12);

    if (posts.length === 0) {
      // Fallback to placeholder if API returns empty
      return NextResponse.json({
        posts: placeholderPosts,
        source: "placeholder",
        message: "Instagram API returned no posts. Using placeholder data.",
      });
    }

    return NextResponse.json({
      posts,
      source: "instagram",
      message: "Successfully fetched from Instagram API.",
    });
  } catch (error) {
    console.error("Instagram API error:", error);

    // Fallback to placeholder on error
    return NextResponse.json({
      posts: placeholderPosts,
      source: "placeholder",
      message: "Error fetching from Instagram. Using placeholder data.",
    });
  }
}
