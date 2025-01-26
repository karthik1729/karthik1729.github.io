export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 font-sans print:py-0">
      <div className="mx-auto container max-w-6xl px-6 bg-white rounded-xl shadow-lg p-12 print:shadow-none print:rounded-none print:p-6">
        {/* Left-Aligned Header Section */}
        <div className="mb-12 space-y-4 print:mb-6">
          <h1 className="text-4xl font-bold text-gray-900 print:text-2xl">
            Karthik Thirumalasetti
          </h1>
          <h2 className="text-2xl font-semibold text-gray-600 print:text-xl">
            Solution Architect
          </h2>
          <div className="flex flex-col space-y-2 mt-4 print:block">
            <div className="flex items-center text-blue-600 print:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 print:hidden"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              karthik1729.alphadev@gmail.com
            </div>
            <div className="flex items-center text-blue-600 print:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 print:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              https://github.com/karthik1729
            </div>
          </div>
        </div>

        {/* Professional Overview */}
        <section className="mb-12 print:mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2 print:text-xl print:mb-2">
            Professional Overview
          </h3>
          <p className="text-gray-700 leading-relaxed print:text-sm">
            Experienced Solution Architect with a demonstrated history of
            building scalable and reliable products and services for Fortune 10
            companies. Skilled in Java, GoLang, Spring Boot, Microservices,
            React, Node.js, DevOps & AI Ops. Strong engineering professional with
            expertise in building SAAS applications, Developer Tools, and Platforms.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-12 print:mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-2 print:text-xl print:mb-2">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-2">
            {/* Languages */}
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors print:bg-white print:border-none print:p-4">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-2 print:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h4 className="font-bold text-blue-800 text-lg print:text-base">
                  Languages
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 print:gap-1">
                {["TypeScript", "Python", "GoLang", "JavaScript", "Java"].map((
                  skill,
                ) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm shadow-sm border border-blue-100 print:shadow-none print:border-none print:px-2 print:py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="p-6 bg-purple-50 rounded-xl border border-purple-100 hover:border-purple-200 transition-colors print:bg-white print:border-none print:p-4">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600 mr-2 print:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <h4 className="font-bold text-purple-800 text-lg print:text-base">
                  Frameworks
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 print:gap-1">
                {["React", "Express", "Flask", "Spring Boot", "GraphQL Federation"].map((
                  skill,
                ) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-purple-700 rounded-full text-sm shadow-sm border border-purple-100 print:shadow-none print:border-none print:px-2 print:py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Architectures */}
            <div className="p-6 bg-green-50 rounded-xl border border-green-100 hover:border-green-200 transition-colors print:bg-white print:border-none print:p-4">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600 mr-2 print:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h4 className="font-bold text-green-800 text-lg print:text-base">
                  Architectures
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 print:gap-1">
                {["Event Driven", "Microservices", "AIOps", "DevOps", "Serverless", "Operators"].map((
                  skill,
                ) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-green-700 rounded-full text-sm shadow-sm border border-green-100 print:shadow-none print:border-none print:px-2 print:py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 hover:border-orange-200 transition-colors print:bg-white print:border-none print:p-4">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600 mr-2 print:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <h4 className="font-bold text-orange-800 text-lg print:text-base">
                  Cloud
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 print:gap-1">
                {["AWS", "AWS - CloudFront", "AWS - Lamda", "Vercel", "CloudFlare - Functions", "Azure", "GCP", "On Premise"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-orange-700 rounded-full text-sm shadow-sm border border-orange-100 print:shadow-none print:border-none print:px-2 print:py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience Timeline */}
        <section className="mb-12 print:mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-blue-200 pb-2 print:text-xl print:mb-2">
            Professional Experience
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-100 print:hidden">
            </div>

            <div className="space-y-12 pl-8 print:pl-0">
              {/* Kloudlite */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white print:hidden">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow print:shadow-none print:border-none print:p-4">
                  <div className="text-sm text-gray-500 font-medium print:text-xs">
                    2022 - Present
                  </div>
                  <div className="flex items-center justify-between mb-4 print:mb-2">
                    <h4 className="text-xl font-bold text-gray-900 print:text-lg">
                      Kloudlite
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm print:text-xs">
                      Architect, CEO & Co-Founder
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 print:text-sm">
                    Led development of an <b>open-source</b> environment-as-a-service
                    platform using Kubernets and Operators. Designed dynamic
                    dashboards for Kubernetes application monitoring with
                    real-time metrics visualization. Kloudlite is a platform for
                    development environments, built as orchestration on Kubernetes
                    with networking features to avoid lengthy development loops.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 print:text-sm">
                    <li>
                      Built responsive UI components using TailwindCSS and React
                    </li>
                    <li>
                      Designed Cli tools for developers to manage environments
                    </li>
                    <li>
                      Architected microservices using Golang and GraphQL
                    </li>
                    <li>
                      Designed network orchestration for Kubernetes clusters to create service mesh
                      that can be used for development environments
                    </li>
                    <li>
                      Architected and built development containers to run on Kubernetes
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      GraphQL
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Golang
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      React 19
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      TailwindCSS
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Kubernetes
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Operators
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      NATS Messaging
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 print:text-xs">
                    <strong>Company:</strong> Kloudlite Labs Pvt Ltd (RSNG Info) |{" "}
                    <strong>Role:</strong> CTO & Architect
                  </div>
                </div>
              </div>

              {/* Bluebyte */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white print:hidden">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow print:shadow-none print:border-none print:p-4">
                  <div className="text-sm text-gray-500 font-medium print:text-xs">
                    2021 - 2024
                  </div>
                  <div className="flex items-center justify-between mb-4 print:mb-2">
                    <h4 className="text-xl font-bold text-gray-900 print:text-lg">
                      Bluebyte
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm print:text-xs">
                      React & GenAI Engineer
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 print:text-sm">
                    Developed AI-powered design platform UI using React and
                    shadcn. Findtuned AI models for react ui generation.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 print:text-sm">
                    <li>
                      Implemented AI workflow builder with React Flow and DND
                      Kit
                    </li>
                    <li>Built design system using Storybook and Emotion CSS</li>
                    <li>Built chat interface with websockets to generate and modify the React UI</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      React 18
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      WebSockets
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Storybook
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      OpenAI
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 print:text-xs">
                    <strong>Company:</strong> Bluebyte Solutions Pvt Ltd |{" "}
                    <strong>Role:</strong> Generative AI Engineer
                  </div>
                </div>
              </div>

              {/* SmartComms */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white print:hidden">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow print:shadow-none print:border-none print:p-4">
                  <div className="text-sm text-gray-500 font-medium print:text-xs">
                    2018 - 2021
                  </div>
                  <div className="flex items-center justify-between mb-4 print:mb-2">
                    <h4 className="text-xl font-bold text-gray-900 print:text-lg">
                      SmartComms
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm print:text-xs">
                      Staff Engineer
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 print:text-sm">
                    Architected Walmart&apos;s customer communication platform UI
                    using React and Next.js. Developed dynamic JSX component
                    system allowing non-technical users to create email/SMS
                    templates.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 print:text-sm">
                    <li>Created drag-and-drop email builder with React DnD</li>
                    <li>
                      Implemented real-time preview system using React Context
                      API
                    </li>
                    <li>Led migration from class components to React Hooks</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Next.js
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      React DnD
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Redux Toolkit
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Storybook
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      TailwindCSS
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      WebSockets
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 print:text-xs">
                    <strong>Company:</strong> Walmart Labs Pvt Ltd |{" "}
                    <strong>Role:</strong> Solution Architect
                  </div>
                </div>
              </div>

              {/* Appsfly.IO */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white print:hidden">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow print:shadow-none print:border-none print:p-4">
                  <div className="text-sm text-gray-500 font-medium print:text-xs">
                    2016 - 2018
                  </div>
                  <div className="flex items-center justify-between mb-4 print:mb-2">
                    <h4 className="text-xl font-bold text-gray-900 print:text-lg">
                      Appsfly.IO
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm print:text-xs">
                      CEO & Founder
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 print:text-sm">
                    Built microapps platform UI using React and Electron for
                    cross-platform deployment. Created component library used
                    across web, Android, and iOS applications.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 print:text-sm">
                    <li>
                      Developed customizable dashboard system with React
                    </li>
                    <li>
                      Implemented Mobile Native interfaces to bind with real react components
                    </li>
                    <li>
                      Implemented JWT authentication flow with React Router
                    </li>
                    <li>
                      Optimized rendering performance using React Virtualized
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      React 16
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Webpack
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Android Native
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      iOS Native
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 print:text-xs">
                    <strong>Company:</strong> Appsfly.IO Pvt Ltd |{" "}
                    <strong>Role:</strong> CEO & Founder
                  </div>
                </div>
              </div>

              {/* MEVU */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white print:hidden">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow print:shadow-none print:border-none print:p-4">
                  <div className="text-sm text-gray-500 font-medium print:text-xs">
                    2014 - 2016
                  </div>
                  <div className="flex items-center justify-between mb-4 print:mb-2">
                    <h4 className="text-xl font-bold text-gray-900 print:text-lg">
                      MEVU
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm print:text-xs">
                      CTO & Co-Founder
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 print:text-sm">
                    Developed iOS & Android applications for motion detection from the 
                    signals captured from the wearable devices. Integrated with
                    Bluetooth LE devices for real-time data syncing.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 print:text-sm">
                    <li>
                      Built Bluetooth LE integration with React Native BlePLX
                    </li>
                    <li>
                      Trained model for motion detection using C & C++ libraries
                    </li>
                    <li>
                      Implemented real-time inferencing to detect motion and recognize patterns and
                      gestures.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Bluetooth LE
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      C & C++
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      iOS Native
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Android Native
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 print:text-xs">
                    <strong>Company:</strong> Glavio Inc |{" "}
                    <strong>Role:</strong> CTO & Architect
                  </div>
                </div>
              </div>

              {/* Yatra Mobile App Stack */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white print:hidden">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow print:shadow-none print:border-none print:p-4">
                  <div className="text-sm text-gray-500 font-medium print:text-xs">
                    2012 - 2014
                  </div>
                  <div className="flex items-center justify-between mb-4 print:mb-2">
                    <h4 className="text-xl font-bold text-gray-900 print:text-lg">
                      Yatra Mobile App Stack
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm print:text-xs">
                      Mobile Architect
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 print:text-sm">
                    Led development of cross-platform travel app using React
                    Native. Integrated with native modules for payment
                    processing and location services.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 print:text-sm">
                    <li>
                      Implemented shared component library using React Native
                      Web
                    </li>
                    <li>Optimized app performance using React Native Hermes</li>
                    <li>Created CI/CD pipeline with Fastlane and Bitrise</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      iOS Native
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Android Native
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Java
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Spring Boot
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 print:text-xs">
                    <strong>Company:</strong> Cognitive Clouds Pvt Ltd |{" "}
                    <strong>Role:</strong> Mobile Solution Architect
                  </div>
                </div>
              </div>

              {/* Other Companies */}
              <div className="relative">
                <div className="absolute left-[-23px] top-8 h-4 w-4 rounded-full bg-blue-600 border-4 border-white print:hidden">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow print:shadow-none print:border-none print:p-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 print:text-lg">
                    Previous Engagements
                  </h4>
                  <p className="text-gray-700 print:text-sm">
                    Contributed as frontend and fullstack developer to projects at ThoughtWorks
                    (Enterprise Dashboard Systems), Capillary Technologies
                    (Loyalty Program UI), and Paxcel Technologies (CMS
                    Platforms).
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 print:gap-1">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      React Consulting
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Legacy Migration
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Fullstack Development
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md print:text-xs">
                      Mobile App Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="relative">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-blue-200 pb-2 print:text-xl print:mb-2">
            Education
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-100 print:hidden">
            </div>

            <div className="space-y-8 pl-8 print:pl-0">
              <div className="relative">
                <div className="absolute left-[-23px] top-8 h-4 w-4 rounded-full bg-blue-600 border-4 border-white print:hidden">
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow print:shadow-none print:border-none print:p-4">
                  <div className="text-sm text-gray-500 font-medium print:text-xs">
                    2006 - 2010
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center print:text-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-600 mr-2 print:hidden"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                        BE Hons: Mechanical Engineering
                      </h4>
                      <div className="flex items-center text-gray-600 ml-8 mb-4 print:ml-0 print:text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-gray-500 print:hidden"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <span className="font-medium">BITS Pilani</span>
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm print:text-xs">
                      GPA: 3.2/5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}