# smartcampus — Digital Twin Workspace

This is the repaired and redesigned Smart Campus website originally created by **Krithick Sreejan**. It uses plain HTML, CSS and JavaScript, so the same project is responsive on phones, tablets and PCs and does not require a build step or API keys.

## Open on a PC

Open the `smart-campus-dashboard` folder in VS Code. You can right-click `index.html` and choose **Open with Live Server**, or run `start-server.bat` on Windows or `start-server.sh` on macOS/Linux. The site opens at `http://localhost:5500`.

## Open on a phone using the same Wi‑Fi

Connect the phone and the PC to the same Wi‑Fi network. Start the project using `start-server.bat` or `start-server.sh`. On the PC, find its IPv4 address. On Windows, open Command Prompt and run `ipconfig`; on macOS/Linux, run `ifconfig` or `ip addr`. Look for a local address such as `192.168.1.5`.

On the phone browser, open the address using that PC IP and port `5500`, for example:

```text
http://192.168.1.5:5500
```

Do not use `localhost` or `127.0.0.1` on the phone because those addresses point to the phone itself. If Windows Firewall asks for permission, allow Python on **Private networks**. The interface automatically adapts to the phone screen; no separate mobile version is required.

## Demo login

Use the ready-made demo account:

| Field | Demo value |
|---|---|
| Email | `admin@gmail.com` |
| Password | `123456` |

The login screen also supports creating a local account. Accounts and the signed-in session are stored only in the browser's `localStorage`, so the project works immediately without Firebase configuration. For a public LinkedIn demo link, upload the folder to GitHub Pages, Netlify, or Vercel. A PWA must be opened through HTTPS or localhost for installation; a plain `file://` link cannot install it.

## Install it like a phone app

On **Android**, open the hosted website in Chrome, tap the browser menu, and choose **Install app** or **Add to Home screen**. On **iPhone**, open the hosted website in Safari, tap **Share**, choose **Add to Home Screen**, and confirm. After that, Smart Campus opens from the phone home screen like an app. The included service worker caches the app shell for faster reopening and basic offline access.

For the install option to appear, host the folder on GitHub Pages, Netlify, Vercel, or another HTTPS host. The local Wi-Fi method is useful for testing the responsive design, but iPhone and Android installation is most reliable from an HTTPS link.

## Main fixes included

The project fixes the broken `css/` and `js/` file paths, includes a complete dashboard matching its JavaScript, removes dependencies on missing image assets and Chart.js, adds protected dashboard access, sign-out, local account creation, live sensor refresh, interactive device controls, and responsive desktop/mobile styling. Your original uploaded source files are preserved in the `original` folder for reference.

## Project structure

```text
smart-campus-dashboard/
├── index.html
├── login.html
├── dashboard.html
├── start-server.bat
├── start-server.sh
├── manifest.webmanifest
├── sw.js
├── assets/
│   └── icon.svg
├── css/
│   ├── style.css
│   ├── login.css
│   └── dashboard.css
├── js/
│   ├── app.js
│   ├── login.js
│   └── dashboard.js
└── original/
    └── your uploaded source files
```
