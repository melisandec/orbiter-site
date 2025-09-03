import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    const username = url.searchParams.get("username") || "melisandec";

    // Prepare headers with GitHub token for authentication
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-Website",
    };

    // Add GitHub token if available for higher rate limits
    if (import.meta.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${import.meta.env.GITHUB_TOKEN}`;
    }

    // Fetch repositories from GitHub API
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { headers }
    );

    if (!response.ok) {
      const errorMessage =
        response.status === 403
          ? "GitHub API rate limit exceeded. Please add a GitHub token for higher limits."
          : response.status === 401
          ? "GitHub API authentication failed. Please check your token."
          : `GitHub API error: ${response.status}`;
      throw new Error(errorMessage);
    }

    const repos = await response.json();

    // Filter and format repository data
    const formattedRepos = repos
      .filter((repo: any) => !repo.fork) // Exclude forked repositories
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        created_at: repo.created_at,
      }));

    return new Response(
      JSON.stringify({
        success: true,
        repos: formattedRepos,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600", // Cache for 1 hour
        },
      }
    );
  } catch (error) {
    console.error("GitHub API error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to fetch GitHub repositories",
        repos: [],
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
