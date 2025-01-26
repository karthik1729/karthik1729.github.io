export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 font-sans">
      <div className="mx-auto container max-w-6xl px-6 bg-white rounded-xl shadow-lg p-12">
        {/* Left-Aligned Header Section */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Karthik Thirumalasetti
          </h1>
          <h2 className="text-2xl font-semibold text-gray-600">
            Solution Architect
          </h2>
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              karthik1729.alphadev@gmail.com
            </div>
            <div className="flex items-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
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
              http://karthik1729.github.io
            </div>
          </div>
        </div>

        {/* Professional Overview */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
            Professional Overview
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Experienced Solution Architect with a demonstrated history of
            building scalable and reliable products and services for Fortune 10
            companies. Skilled in Java, GoLang, Spring Boot, Microservices,
            React, Node.js, and AWS. Strong engineering professional with
            expertise in building applications, developer tools, and setting up
            DevOps pipelines.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-2">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-2"
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
                <h4 className="font-bold text-blue-800 text-lg">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "GoLang", "JavaScript", "TypeScript"].map((
                  skill,
                ) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm shadow-sm border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-purple-50 rounded-xl border border-purple-100 hover:border-purple-200 transition-colors">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600 mr-2"
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
                <h4 className="font-bold text-purple-800 text-lg">
                  Frameworks
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "React", "Node.js", "Express", "Flask"].map((
                  skill,
                ) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-purple-700 rounded-full text-sm shadow-sm border border-purple-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-xl border border-green-100 hover:border-green-200 transition-colors">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600 mr-2"
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
                <h4 className="font-bold text-green-800 text-lg">
                  Architectures
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Event Driven", "Microservices", "AIOps", "Serverless"].map((
                  skill,
                ) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-green-700 rounded-full text-sm shadow-sm border border-green-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 hover:border-orange-200 transition-colors">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600 mr-2"
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
                <h4 className="font-bold text-orange-800 text-lg">Cloud</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Azure", "GCP", "On Premise"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-orange-700 rounded-full text-sm shadow-sm border border-orange-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience Timeline */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-blue-200 pb-2">
            Professional Experience
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-100">
            </div>

            <div className="space-y-12 pl-8">
              {/* Kloudlite */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-500 font-medium">
                    2022 - Present
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      Kloudlite
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Architect, CEO & Co-Founder
                    </span>
                  </div>
                    <p className="text-gray-700 mb-4">
                    Led development of an <b>open-source</b> environment-as-a-service
                    platform using Kubernets and Operators. Designed dynamic
                    dashboards for Kubernetes application monitoring with
                    real-time metrics visualization. Kloudlite is a platform for
                    development environments, built as orchestration on Kubernetes
                    with networking features to avoid lengthy development loops.
                    </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
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
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      GraphQL
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Golang
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      React 19
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      TailwindCSS
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Kubernetes
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Operators
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      NATS Messaging
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Company:</strong> Kloudlite Labs Pvt Ltd |{" "}
                    <strong>Role:</strong> CTO & Architect
                  </div>
                </div>
              </div>

              {/* Bluebyte */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white">
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-500 font-medium">
                    2021 - 2022
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      Bluebyte
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      React & GenAI Engineer
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Developed AI-powered design platform UI using React and
                    shadcn. Findtuned AI models for react ui generation.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>
                      Implemented AI workflow builder with React Flow and DND
                      Kit
                    </li>
                    <li>Built design system using Storybook and Emotion CSS</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      React 18
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      WebSockets
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Storybook
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Company:</strong> Bluebyte Solutions Pvt Ltd |{" "}
                    <strong>Role:</strong> Generative AI Engineer
                  </div>
                </div>
              </div>

              {/* SmartComms */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-500 font-medium">
                    2020 - 2021
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      SmartComms
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Staff Engineer
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Architected Walmart&apos;s customer communication platform UI
                    using React and Next.js. Developed dynamic JSX component
                    system allowing non-technical users to create email/SMS
                    templates.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Created drag-and-drop email builder with React DnD</li>
                    <li>
                      Implemented real-time preview system using React Context
                      API
                    </li>
                    <li>Led migration from class components to React Hooks</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Next.js
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      React DnD
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Redux Toolkit
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Storybook
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      TailwindCSS
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      NextJS
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      WebSockets
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Company:</strong> Walmart Labs Pvt Ltd |{" "}
                    <strong>Role:</strong> Solution Architect
                  </div>
                </div>
              </div>

              {/* Appsfly.IO */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-500 font-medium">
                    2018 - 2020
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      Appsfly.IO
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      CEO & Founder
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Built microapps platform UI using React and Electron for
                    cross-platform deployment. Created component library used
                    across web, Android, and iOS applications.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>
                      Developed customizable dashboard system with React and
                      D3.js
                    </li>
                    <li>
                      Implemented JWT authentication flow with React Router
                    </li>
                    <li>
                      Optimized rendering performance using React Virtualized
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      React 16
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Electron
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      D3.js
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Webpack
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Company:</strong> Appsfly.IO Pvt Ltd |{" "}
                    <strong>Role:</strong> CEO & Founder
                  </div>
                </div>
              </div>

              {/* MEVU */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-500 font-medium">
                    2016 - 2018
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">MEVU</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      CTO & Co-Founder
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Developed iOS & Android applications for motion detection from the 
                    signals captured from the wearable devices. Integrated with
                    Bluetooth LE devices for real-time data syncing.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>
                      Built Bluetooth LE integration with React Native BlePLX
                    </li>
                    <li>
                      Trained model for motion detection using c & c++ libraries
                    </li>
                    <li>
                      Implemented realtime inferencing to detect motion and recognise patterns and
                      gestures.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      React Native
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Bluetooth LE
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Redux
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      TypeScript
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Company:</strong> Glavio Inc |{" "}
                    <strong>Role:</strong> CTO & Architect
                  </div>
                </div>
              </div>

              {/* Yatra Mobile App Stack */}
              <div className="relative">
                <div className="absolute left-[-23px] top-12 h-4 w-4 rounded-full bg-blue-600 border-4 border-white">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-500 font-medium">
                    2014 - 2016
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      Yatra Mobile App Stack
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Mobile Architect
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Led development of cross-platform travel app using React
                    Native. Integrated with native modules for payment
                    processing and location services.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>
                      Implemented shared component library using React Native
                      Web
                    </li>
                    <li>Optimized app performance using React Native Hermes</li>
                    <li>Created CI/CD pipeline with Fastlane and Bitrise</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      React Native
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Redux Saga
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Fastlane
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      TypeScript
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Company:</strong> Cognitive Clouds Pvt Ltd |{" "}
                    <strong>Role:</strong> Mobile Solution Architect
                  </div>
                </div>
              </div>

              {/* Other Companies */}
              <div className="relative">
                <div className="absolute left-[-23px] top-8 h-4 w-4 rounded-full bg-blue-600 border-4 border-white">
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Previous Engagements
                  </h4>
                  <p className="text-gray-700">
                    Contributed as frontend and fullstack developer to projects at ThoughtWorks
                    (Enterprise Dashboard Systems), Capillary Technologies
                    (Loyalty Program UI), and Paxcel Technologies (CMS
                    Platforms).
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      React Consulting
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Legacy Migration
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-md">
                      Performance Audits
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="relative">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-blue-200 pb-2">
            Education
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-100">
            </div>

            <div className="space-y-8 pl-8">
              <div className="relative">
              <div className="absolute left-[-23px] top-8 h-4 w-4 rounded-full bg-blue-600 border-4 border-white">
              </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 font-medium">
                  2006 - 2010
                </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-600 mr-2"
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
                      <div className="flex items-center text-gray-600 ml-8 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-gray-500"
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
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      GPA: 3.8/4.0
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
