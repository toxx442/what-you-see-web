// Instagram API types and configuration
// To use with real Instagram data, you'll need to:
// 1. Create a Facebook Developer App
// 2. Add Instagram Basic Display API
// 3. Get a long-lived access token
// 4. Set INSTAGRAM_ACCESS_TOKEN in your environment

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string; // For videos
  permalink: string;
  timestamp: string;
}

export interface InstagramFeed {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

// Fetch Instagram posts from the Basic Display API
export async function fetchInstagramFeed(
  accessToken: string,
  limit: number = 12
): Promise<InstagramPost[]> {
  try {
    const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data: InstagramFeed = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch Instagram feed:", error);
    return [];
  }
}

// Placeholder data matching the @whatyouseeau feed structure
// Replace this with real API data once you have an access token
export const placeholderPosts: InstagramPost[] = [
  {
    id: "1",
    caption: "Neon dreams in the warehouse. Another night, another room transformed. ✨ #WhatYouSee #LiveVisuals",
    media_type: "IMAGE",
    media_url: "/instagram/placeholder-1.jpg",
    permalink: "https://www.instagram.com/whatyouseeau/",
    timestamp: "2025-01-15T20:00:00+0000",
  },
  {
    id: "2",
    caption: "Projection mapping meets architecture. The walls come alive. 🌀",
    media_type: "IMAGE",
    media_url: "/instagram/placeholder-2.jpg",
    permalink: "https://www.instagram.com/whatyouseeau/",
    timestamp: "2025-01-12T22:30:00+0000",
  },
  {
    id: "3",
    caption: "Behind the scenes — setting up for tonight's show. The calm before the chaos. 🎛️",
    media_type: "IMAGE",
    media_url: "/instagram/placeholder-3.jpg",
    permalink: "https://www.instagram.com/whatyouseeau/",
    timestamp: "2025-01-10T18:00:00+0000",
  },
  {
    id: "4",
    caption: "When the crowd becomes part of the art. Melbourne, you were electric. ⚡",
    media_type: "IMAGE",
    media_url: "/instagram/placeholder-4.jpg",
    permalink: "https://www.instagram.com/whatyouseeau/",
    timestamp: "2025-01-08T23:45:00+0000",
  },
  {
    id: "5",
    caption: "Light study #47. Experimenting with new colour palettes for the next installation.",
    media_type: "IMAGE",
    media_url: "/instagram/placeholder-5.jpg",
    permalink: "https://www.instagram.com/whatyouseeau/",
    timestamp: "2025-01-05T16:00:00+0000",
  },
  {
    id: "6",
    caption: "The moment right before the drop. Sydney warehouse sessions. 🔊",
    media_type: "VIDEO",
    media_url: "/instagram/placeholder-6.mp4",
    thumbnail_url: "/instagram/placeholder-6-thumb.jpg",
    permalink: "https://www.instagram.com/whatyouseeau/",
    timestamp: "2025-01-03T21:00:00+0000",
  },
  {
    id: "7",
    caption: "Colour theory in practice. Every shade tells a story.",
    media_type: "IMAGE",
    media_url: "/instagram/placeholder-7.jpg",
    permalink: "https://www.instagram.com/whatyouseeau/",
    timestamp: "2024-12-28T19:30:00+0000",
  },
  {
    id: "8",
    caption: "Gallery takeover complete. Thank you to everyone who came through. 🙏",
    media_type: "CAROUSEL_ALBUM",
    media_url: "/instagram/placeholder-8.jpg",
    permalink: "https://www.instagram.com/whatyouseeau/",
    timestamp: "2024-12-25T14:00:00+0000",
  },
  {
    id: "9",
    caption: "New year, new visions. What do you want to see in 2025? 👀",
    media_type: "IMAGE",
    media_url: "/instagram/placeholder-9.jpg",
    permalink: "https://www.instagram.com/whatyouseeau/",
    timestamp: "2024-12-31T23:59:00+0000",
  },
];

// Helper to get display URL (handles videos with thumbnails)
export function getDisplayUrl(post: InstagramPost): string {
  if (post.media_type === "VIDEO" && post.thumbnail_url) {
    return post.thumbnail_url;
  }
  return post.media_url;
}

// Helper to format timestamp
export function formatPostDate(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
  });
}

// Helper to truncate caption
export function truncateCaption(caption: string | undefined, maxLength: number = 100): string {
  if (!caption) return "";
  if (caption.length <= maxLength) return caption;
  return caption.substring(0, maxLength).trim() + "...";
}
