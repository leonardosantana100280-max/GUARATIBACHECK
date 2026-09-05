export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Guaratiba Check</h1>
        <p className="text-lg mb-8">
          Welcome to Guaratiba Check - powered by Next.js with Vercel Analytics
        </p>
        <div className="rounded-lg border border-gray-300 p-6 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-2">✓ Vercel Analytics Configured</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This application is now tracking page views and web vitals automatically.
          </p>
        </div>
      </div>
    </main>
  )
}
