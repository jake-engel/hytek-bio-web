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
