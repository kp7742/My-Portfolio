function GithubData({ repo }) {
    return (
        <div className="flex flex-wrap items-center justify-center mt-2 gap-3">
            <a target="_blank" rel="noreferrer" href={repo + "/stargazers"}>
                <img className="w-24 h-auto" alt="GitHub stars" src={"https://img.shields.io/github/stars/" + repo.replace("https://github.com/", "") + "?style=social"} />
            </a>
            <a target="_blank" rel="noreferrer" href={repo + "/network/members"}>
                <img className="w-24 h-auto" alt="GitHub forks" src={"https://img.shields.io/github/forks/" + repo.replace("https://github.com/", "") + "?style=social"} />
            </a>
        </div>
    );
}
    
export default GithubData;