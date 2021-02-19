If you are on linux :

Install node
    sudo apt install nodejs
    
Install npm
    sudo apt install npm

Install babel
    sudo npm install -g babel-cli

Initialize npm
    npm init

Install babel-preset-react and babel-preset-env
    npm add babel-preset-react
    npm add babel-preset-env

Reinstall node folder
npm install

{
    babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

    start a live server
    live-server public
} 
OR
{
    npm run serve
    npm run build 
}
OR
{
    npm run dev-server
}


# Git Commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits