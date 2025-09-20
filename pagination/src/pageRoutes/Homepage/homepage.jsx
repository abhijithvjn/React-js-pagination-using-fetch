import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CardSkeleton from "../../components/CardSkeleton";
import { usePosts } from "../../customHooks/usePosts";

const Homepage = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const { data, loading, error } = usePosts(page, itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>

        {error && <p className="text-red-500 text-center mb-4">{error.message}</p>}

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading
            ? Array.from({ length: itemsPerPage }).map((_, i) => <CardSkeleton key={i} />)
            : data.map((post) => (
                <Card
                  key={post.id}
                  className="w-full h-full shadow-md hover:shadow-xl transition-shadow rounded-2xl"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800">
                      #{post.id} — {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      ID: {post.id}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{post.body}</p>
                  </CardContent>
                </Card>
              ))}
        </section>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium shadow hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          <span className="text-sm font-medium text-gray-600">
            Page <span className="font-semibold text-gray-800">{page}</span>
          </span>

          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
