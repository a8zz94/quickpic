import Link from "next/link";
import { ImageDown, Square, Circle, ArrowRight, Github } from "lucide-react";

export default function Home() {
  const tools = [
    {
      href: "/svg-to-png",
      title: "SVG to PNG Converter",
      description:
        "Convert SVG files to PNG in any size you need. Free, fast, and secure.",
      icon: <ImageDown className="h-6 w-6" />,
    },
    {
      href: "/square-image",
      title: "Square Image Generator",
      description:
        "Transform any image into a perfect square without losing quality.",
      icon: <Square className="h-6 w-6" />,
    },
    {
      href: "/rounded-border",
      title: "Corner Rounder",
      description: "Add smooth, rounded corners to your images instantly.",
      icon: <Circle className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 font-[family-name:var(--font-geist-sans)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo and Hero Section */}
        <div className="py-16 text-center sm:py-24">
          {/* Animated Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl"></div>
              <svg
                viewBox="0 0 100 100"
                className="relative h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 15 L85 85 L15 85 Z"
                  className="fill-blue-400"
                  opacity="0.8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  className="fill-purple-400"
                  opacity="0.8"
                />
              </svg>
            </div>
          </div>

          <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            PixelFlow
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Transform your images effortlessly with our professional conversion
            tools.
            <br />
            Free forever, no sign-up required.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-8 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-6 shadow-lg transition-all hover:bg-gray-800 hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20">
                  {tool.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {tool.title}
                </h3>
                <p className="mt-2 text-gray-400">{tool.description}</p>
                <div className="mt-4 flex items-center text-blue-400 group-hover:text-blue-300">
                  Try now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="border-t border-gray-800 py-16">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">Free Forever</h3>
              <p className="mt-2 text-gray-400">
                No hidden costs or premium features.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">No Sign-up</h3>
              <p className="mt-2 text-gray-400">
                Start converting immediately.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">
                Privacy First
              </h3>
              <p className="mt-2 text-gray-400">Files are processed locally.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <a
              href="https://github.com/t3dotgg/quickpic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-colors hover:text-white"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
