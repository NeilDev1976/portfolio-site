import siteConfig from "../data/siteConfig.json";
import { useEffect, useState, useRef } from "react";
import type { GitHubRepo } from "../types/GitHubRepo";
import { RepoCarousel } from "../components/RepoCarousel";

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const url: string = `${siteConfig.apis.githubBaseUrl}${siteConfig.apis.githubUsername}/repos`;

    //fetch Repositiorys from my public GitHub, timeout if no response.
    const fetchRepos = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data: GitHubRepo[] = await response.json();
        if (isMounted.current) setRepos(data);
      } catch (err) {
        if (isMounted.current) setError((err as Error).message);
      } finally {
        if (isMounted.current) setLoading(false);
        clearTimeout(timeoutId);
      }
    };

    fetchRepos();

    return () => {
      //cleanup on unmount
      isMounted.current = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mx-8">
      <h1 className="mb-4">My current Projects on GitHub</h1>
      {loading && <h2>Loading projects...</h2>}
      {error && <h2 className="text-red-500">Error: {error}</h2>}
      <RepoCarousel repos={repos} />
    </div>
  );
};

export { Projects };
