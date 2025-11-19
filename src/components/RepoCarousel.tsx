import type { GitHubRepo } from "../types/GitHubRepo";

type Props = {
    repos : GitHubRepo[];
};

const RepoCarousel = ({repos}:Props) => {
    return (
        <div>
            <h3>{repos.length} Public Repositories</h3>
            <div>{
                repos.map((r) => (
                <div className="card grid grid-cols-2 m-4">
                    <h2 className="header col-span-2 text-center">{r.name}</h2>
                    <p className="font-bold mr-4">Description</p>
                    <p>{r.description}</p>
                </div>))
            }
            </div>
        </div>
    )
}

export { RepoCarousel };