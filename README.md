# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/eca74f66-5947-49a0-b462-49d8f85cd2c9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/eca74f66-5947-49a0-b462-49d8f85cd2c9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/eca74f66-5947-49a0-b462-49d8f85cd2c9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)


## تشغيل الموقع مباشرة من GitHub

> ملاحظة مهمة: فتح ملف HTML داخل واجهة **github.com** نفسها لن يشغل التطبيق (قد تظهر صفحة بيضاء أو العنوان فقط).
> يجب النشر عبر **GitHub Pages** ثم فتح رابط Pages.

### خطوات التفعيل

1. ادفع التغييرات إلى فرع `main`.
2. في GitHub: `Settings` -> `Pages`.
3. في `Build and deployment` اختر `Source: GitHub Actions`.
4. سيعمل Workflow تلقائياً (`Deploy to GitHub Pages`) وينشر الموقع.
5. افتح رابط Pages الناتج (عادة: `https://<username>.github.io/<repo>/`).

### لماذا كان يظهر عنوان المعهد فقط؟

هذا يحصل غالباً عند فتح الملف كـ Blob من github.com أو بدون بيئة نشر صحيحة؛ JavaScript لا يعمل كتطبيق SPA في هذا السياق.

### تشغيل محلي سريع

```sh
npm i
npm run dev
```

### إنشاء نسخة المتصفح المباشرة

```sh
npm run build:browser
```

الملف الناتج: `standalone/alriyadah.html` ونسخة ثانية مباشرة في الجذر `alriyadah.html`.
