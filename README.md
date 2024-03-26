# n6ra13-atm 
# Node-Projects


> To check this ATM in your *laptop*.Run this commond in terminal in powershell
```
npx n6ra13-atm 
```
> first of all to create ATM we install NPM in our project
```
npm init
```
>In our project we give information about our project.we must gave a unique name  our project

{ "name" : " n6ra13-atm" ,
  "version" : "1.0.0",
  "description" : "A simple ATM with TypeScript, Node.js and Inquirer" ,
  "main" : " index.js" ,
  "type":"module",
  "bin":"index.js",
  "scripts" : {
     "test" : "echo \"Error: no test specified\"&& exit 1"
},
"keywords":[],
  "author" : "Muhammad Javed ",
  "lincense" : "MIT" // FOR PUBLIC
}

> Is this ok ? (yes)
## To instsll Typescript in our project
```
tsc --init
```
## We need some changes in tsconfig.json file
```
  "target" : " ES2022",
  "module" : "NodeNext",
  "moduleResolution" : "NodeNext"
```
## To install npm module inquirer in our project by this code
```
 npm i Inquirer
```
## We import inquirer by using this code
```
npm i --save-dev @types/inquire
```
> Thus by these code we can make our simple calculator.
# To publish it on npm
- 1- we write this commond on the top of ts.index file
```
#! /usr/bin/env node
```
- 2-To login in npm in the terminal
```
npm login
```
- 3- To publish it on npm
```
npm publish
```
## In future when we change our project must change version in package.json
must compile index.ts file
```
tsc
```
> And publish again
```
npm publish
```
# To initialize git
```
git init
```
> To add file
```
git add .
```
> To commit out file
```
git commit -m "message"
```
> To create main branch
```
git branch -M main
```
> To link github
```
git remote add origin github link
```


## Reload to repository
```
git add .
```
```
git commit -m " commit"
```
```
git push origin main
```
```
# To run our ATM in any LAPTOP to run this commond in terminal in powershell.
```
npx n6ra13-atm 
```

