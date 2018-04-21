## START HERE

(-) To download all external packages, run: 'yarn install'
(-) When adding an npm package, run: 'yarn add **packageName**'
(-) To run package on localhost, run: 'yarn start'

## ABOUT PROJECT

(-) Project is run on react. Created using create-react-app package.
(-) No redux involved in project. Only component-level state was needed.
(-) App uses SASS preprocessor for enhanced CSS stylesheets
(-) App also uses butterCMS as a content management system

## GIT

(-) NEVER work on master
(-) Always work on your own personal branch. For this, run: 'git checkout -b **branchName**'
(-) Make sure branch names are intuitive to what changes you made in that branch
(-) Make sure to add appropriate files to .gitignore if don't want public on github

## IMAGES

(-) Images that are static and do not change throughout app put in public folder (such as logo)
(-) Images that are used within certain components place them in the folder for that component

## SCSS STYLESHEETS

(-) If add a new .scss file: must close yarn and restart. Also must add file
import to index.scss, otherwise will not show up.
(-) If CSS variable used throughout application. Define as global variable.
(-) Global SCSS variables can be used and defined from the utils. Add pages to utils as needed.
(-) Use BEM naming conventions for classes. (http://getbem.com/naming/)

## API TOKENS/KEYS

(-) Put api tokens in dev/prod.js files as necessary. DO NOT put in files that are using them
(-) Reference keys file and it will automatically pull from dev/prod environment variables correctly.
(-) EX. TO REFERENCE testKeyName 'require('relativeFilePath/keys').testKeyName'
