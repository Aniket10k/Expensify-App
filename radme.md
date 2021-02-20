# If you are on linux

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

Create a new git repo

    git init 

View the changes to your project code

    git status

Add files to staging area

    git add

Creates a new commit with files from staging area

    git commit

View recent commits
    
    git log

}
