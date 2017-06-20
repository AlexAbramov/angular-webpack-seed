## Create gh-pages branch 

in a new folder:

`git clone --no-checkout https://github.com/AlexAbramov/angular-webpack-seed.git`

`cd angular-webpack-seed`

`git checkout --orphan gh-pages`

`git rm -rf .`

copy the files from 'dist' folder to 'angular-webpack-seed' one and add the files to git:

`git add *`

`git commit -m "demo"`

`git push origin gh-pages`

