# Welcome to your Expo app 👋exp

## Get started
1. Clone the repository:
   git clone https://github.com/OfirRoditi/TaskManagerApp.git
2. Navigate into the project:
	 cd TaskManagerApp
3. Install dependencies:
	npm install
   
4. Run the project:
	npx expo start 


**📌 Step 1: Install Expo CLI and Set Up Git**

### **1️⃣ Install Expo CLI**
Since the legacy Expo CLI does not support Node 17+, we will install the new Expo CLI locally.

#### **Uninstall the Old Expo CLI (if installed)**
```sh
npm uninstall -g expo-cli
```

#### **Install the New Expo CLI Locally**
```sh
npx create-expo-app TaskManagerApp
```
✅ This creates a folder named `TaskManagerApp` on your **Desktop**.

---

### **2️⃣ Git: Push Updates to GitHub**
After making changes to your project, follow these steps to push them to GitHub.

#### **1. Check for Changes**
```sh
git status
```
✅ This shows modified or untracked files.

#### **2. Stage the Changes**
```sh
git add .
```
✅ Stages all changes for commit.

📌 To stage specific files only, use:
```sh
git add <filename>
```

#### **3. Commit the Changes**
```sh
git commit -m "Updated 04/02/2025"
```
✅ Adds a meaningful commit message.

#### **4. Push to GitHub**
```sh
git push origin main
```
✅ Uploads your changes to the GitHub repository.

---

### **Next Steps**
Now that Expo is installed and Git is set up, we can move on to **Step 2: Building the Main Screen UI**.
