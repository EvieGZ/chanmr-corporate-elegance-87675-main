"use client";

const mockFacebookPosts = [
  {
    id: "1",
    message:
      "🎉 We just launched our new product! Check it out on our website.",
    created_time: "2025-10-07T09:00:00+0000",
    full_picture: "https://via.placeholder.com/600x400?text=Post+1",
    permalink_url: "https://facebook.com",
  },
  {
    id: "2",
    message: "💡 Tip of the day: Stay hydrated and take breaks while coding!",
    created_time: "2025-10-06T14:30:00+0000",
    full_picture: "https://via.placeholder.com/600x400?text=Post+2",
    permalink_url: "https://facebook.com",
  },
  {
    id: "3",
    message:
      "📢 Upcoming event: Join our live webinar on AI tools this Friday!",
    created_time: "2025-10-05T18:45:00+0000",
    full_picture: "https://via.placeholder.com/600x400?text=Post+3",
    permalink_url: "https://facebook.com",
  },
];
interface FacebookPost {
  id: string;
  message?: string;
  full_picture?: string;
  permalink_url: string;
  created_time: string;
}

export default function InsightsSection() {
  return (
    <section className="bg-[#faf9f7] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm text-gray-600 uppercase space-y-4 tracking-wide mb-2">
          <p className="">Lorem ipsum</p>
          <div className="border-[#F4C025] border-b-2 w-8"></div>
        </div>
        <h2 className="text-4xl md:text-5xl text-red-600 font-light mb-12">
          Lorem ideas that drive transformation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mockFacebookPosts.map((post) => (
            <div key={post.id} className="flex flex-col gap-10">
              <div className="overflow-hidden transition">
                {post.full_picture && (
                  <div className="w-full h-48 bg-slate-400" />
                )}
                <div className="p-4">
                  <p className="text-sm text-gray-600">
                    {new Date(post.created_time).toLocaleDateString()}
                  </p>
                  <p className="mt-2 text-gray-800">{post.message}</p>
                </div>
              </div>
              <a
                href={post.permalink_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border w-32 border-gray-500 text-gray-800 text-center py-2 text-sm rounded hover:bg-[#F4C025] hover:text-white transition"
              >
                Read the post
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
