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
                <div className="card grid grid-col-2 m-4 p-4">
                    <h2 className="col-span-2">{r.name}</h2>
                    <p className="font-bold mr-4">Description</p>
                    <p>{r.description}</p>
                </div>))
            }
            </div>
        </div>
    )
}

export { RepoCarousel };