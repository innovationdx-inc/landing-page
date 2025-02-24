export default function Testimonials() {
  const testimonials = [
    {
      content: "InnovationDX transformed our radiology department's workflow. The intuitive interface and powerful tools have significantly reduced our report turnaround time.",
      author: "Dr. Sarah Johnson",
      role: "Chief of Radiology",
      organization: "Metropolitan Medical Center"
    },
    {
      content: "The AI-powered report dictation feature has been a game-changer for our practice. Our radiologists save hours each day, and the structured reports have improved our communication with referring physicians.",
      author: "Dr. Robert Chen",
      role: "Director of Imaging",
      organization: "Valley Medical Group"
    },
    {
      content: "The cloud-based architecture allows our radiologists to work remotely with the same efficiency as being on-site. The system's reliability has been outstanding.",
      author: "Dr. Michael Chen",
      role: "Medical Director",
      organization: "Advanced Imaging Partners"
    },
    {
      content: "Implementation was smooth and the support team has been exceptional. Our technologists and physicians adapted quickly to the platform.",
      author: "Jennifer Williams",
      role: "IT Director",
      organization: "Regional Healthcare System"
    }
  ];

  return (
    <div id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Healthcare Leaders
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear what our customers have to say about their experience with InnovationDX PACS solutions.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4">
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}, {testimonial.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 