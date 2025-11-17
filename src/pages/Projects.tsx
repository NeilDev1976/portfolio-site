import siteConfig from "../data/siteConfig.json";
import { useEffect, useState } from "react";
import type { GitHubRepo } from "../types/GitHubRepo";
import { RepoCarousel } from "../components/RepoCarousel";

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `${siteConfig.apis.githubBaseUrl}${siteConfig.apis.githubUsername}/repos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data: GitHubRepo[] = await response.json();
        setRepos(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos(); 
  }, []);

  return (
    <div className="flex flex-col items-center mx-8">
        <h1 className="mb-4">My current Projects on GitHub</h1>
        {loading && <h2>Loading projects...</h2>}
        {error && <h2 className="text-red-500">Error: {error}</h2>}
        <RepoCarousel repos={repos}/>
    </div>
  );
};

export { Projects };