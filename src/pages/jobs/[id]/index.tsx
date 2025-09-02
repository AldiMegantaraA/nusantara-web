import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchNews } from "../../../service/api"

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

export default function JobDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(true);
    const [currentJobs, setCurrentJobs] = useState<JobDetail | null>(null);
    function slugify(title: string) {
        return title
            .toLowerCase()                 
            .replace(/\s+/g, "-")        
            .replace(/[^a-z0-9-]/g, "") 
    }
    useEffect(() => {
        async function loadNews() {
        try {
            const data = await fetchNews('jobs');

            // cari news sesuai id
            const found = data.find((post: JobDetail) => slugify(post.title) === slugify(id as string));
            setCurrentJobs(found || null);
        } catch (err) {
            console.error("Failed to load news:", err);
        } finally {
            setLoading(false);
        }
        }
        loadNews();
    }, [id]);
    const job = currentJobs;

    if (!job && !loading) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <p className="text-gray-400">Job not found</p>
        </div>
        )
    }

    if (loading) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <p className="text-gray-400">Loading...</p>
        </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24">
            {/* Header */}
            <div className="bg-[#711917] text-center py-16 px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {job.title} at {job.brand}
                </h1>
            </div>

            {/* Info */}
            <div className="max-w-4xl mx-auto px-6 md:px-0 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Brand</h2>
                        <p className="text-gray-300">{job.brand}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Placement</h2>
                        <p className="text-gray-300">{job.placement}</p>
                    </div>
                </div>

                {/* Requirements */}
                <div className="mb-10">
                    <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 whitespace-pre-line">
                        {job.requirements}
                    </ul>
                </div>

                {/* Benefits */}
                <div className="mb-10">
                    <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 whitespace-pre-line">
                        {job.benefits}
                    </ul>
                </div>

                {/* Apply Section */}
                <div className="bg-[#711917] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div>
                        <p className="text-sm text-gray-200">Send your CV to</p>
                        <p className="font-semibold">{job.email}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-200">Subject</p>
                        <p className="font-semibold">{job.subject}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
