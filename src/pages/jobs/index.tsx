import { useState, useMemo, useEffect } from "react"
import { Search } from "lucide-react"
import { Link } from "react-router-dom"
import { fetchNews } from "../../service/api";

interface JobDetail {
    id: number
    title: string
    brand: string
    placement: string
    postedAt: string
    requirements: string[]
    benefits: string[]
    email: string
    subject: string
  }

export default function JobsPage() {
    const [jobsData, setJobsData] = useState<JobDetail[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    async function loadNews() {
        setLoading(true)
        try {
        const data = await fetchNews('jobs'); // <- API call
        setJobsData(data);
        } catch (err) {
        console.error("Failed to load news:", err);
        } finally {
        setLoading(false);
        }
    }
    loadNews();
    }, []);
    const [query, setQuery] = useState("")

    // filter jobs berdasarkan query
    const filteredJobs = useMemo(() => {
        return jobsData.filter((job) => {
        const q = query.toLowerCase()
        return (
            job.title.toLowerCase().includes(q) ||
            job.brand.toLowerCase().includes(q) ||
            job.placement.toLowerCase().includes(q)
        )
        })
    }, [query, jobsData]);

    function slugify(title: string) {
        return title
            .toLowerCase()                 
            .replace(/\s+/g, "-")        
            .replace(/[^a-z0-9-]/g, "") 
    }

    if(loading) {
        return (
            <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-24">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Be part of our story</h1>
                        <p className="text-gray-400 mb-8">
                        Join a team that values integrity, innovation, and impact.
                        </p>

                        <h4 className="pt-32">Loading...</h4>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-24">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Be part of our story</h1>
                    <p className="text-gray-400 mb-8">
                    Join a team that values integrity, innovation, and impact.
                    </p>
        
                    {/* Search Input */}
                    <div className="relative mb-10">
                    <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search job openings..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-md bg-transparent border border-gray-500 focus:border-white focus:ring-2 focus:ring-white outline-none"
                    />
                    </div>
                </div>
        
                {/* Job List */}
                <div className="max-w-7xl mx-auto divide-y divide-white">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <Link
                                key={job.id}
                                className="flex flex-col md:flex-row md:items-center justify-between py-6 cursor-pointer hover:bg-white/10"
                                to={`/jobs/${slugify(job.title)}`}
                            >
                            <div>
                                <h3 className="text-xl font-semibold">{job.title}</h3>
                                <p className="text-gray-400 text-sm">Posted on: {job.postedAt}</p>
                            </div>
                            <div className="mt-2 md:mt-0 flex flex-col md:flex-row md:items-center md:space-x-8">
                                <span className="text-gray-300">{job.brand}</span>
                            </div>
                            <div className="mt-2 md:mt-0 flex flex-col md:flex-row md:items-center md:space-x-8">
                                <span className="text-gray-300">{job.placement}</span>
                            </div>
                            </Link>
                        ))
                        ) : (
                        <p className="text-center text-gray-500 py-10">No jobs found</p>
                    )}
                </div>
            </div>
        )
    }
}
