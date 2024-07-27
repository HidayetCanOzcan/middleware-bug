Middleware can't detect image requests #68217

To Reproduce
Start the application in dev mode (npm run dev)
Check for the console to see if middleware pathname \_next/image exist
Current vs. Expected behavior
After running the application I expected to see a log message that shows image requests but only pathnames listed is;

⚠️ /vercel.svg
⚠️ /\_next/static/css/app/layout.css
⚠️ /\_next/static/chunks/webpack.js
⚠️ /next.svg
⚠️ /\_next/static/chunks/main-app.js
⚠️ /\_next/static/chunks/app-pages-internals.js
⚠️ /\_next/static/chunks/app/page.js
⚠️ /favicon.ico

/\_next/image is missing

Provide environment information
Operating System:
Platform: win32
Arch: x64
Version: Windows 11 Pro
Binaries:
Node: 20.11.1
npm: 10.2.4
Yarn: N/A
pnpm: N/A
Relevant packages:
next: 14.2.5
react: ^18
react-dom: ^18
Which area(s) are affected? (Select all that apply)
Image (next/image), Middleware

Which stage(s) are affected? (Select all that apply)
next dev (local), next build (local), next start (local)

Additional context
I also tried to add matcher for the image path and also try to add it to config file as image path but none of them resolve the issue.
