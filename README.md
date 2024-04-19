# datawow-test

# HOW TO RUN
## 1.  front-end
### 1.1 cd .\front-end\
### 1.2 npm i
### 1.3 npm run dev

## 2.  back-end
### 2.1 cd .\back-end\
### 2.2 npm i
### 2.3 npm run db:install
### 2.4 npm run start

# ARCHITECTURE
## 1.  front-end
### 1.1 src -> app
    keep files about page
### 1.2 src -> components
    keep files about components
### 1.3 src -> static
    keep files about the data that is static
### 1.4 src -> utils
    keep files that is custom hook, store, useful function and some config libraries
## 2.  back-end
### 2.1 prisma
    keep every files that relate with prisma
### 2.2 src -> concert
    keep every files that relate with concert API
### 2.3 src -> history
    keep every files that relate with history API
### 2.4 src -> interceptor
    keep every files that relate with interceptor

# LIBRARIES
## 1.  front-end
### 1.1 fortawesome
    for useful icon
### 1.2 hookform/resolvers and yup
    for form validation
### 1.3 axios
    for fetch api
### 1.4 sweetalert2
    for beautiful modal feedback each action
### 1.5 swr
    for realtime feedback each action
### 1.6 zustand
    for create store for global state management
### 1.7 tailwind css
    for responsive and style
### 1.8 typescript
    for prevent human error
## 2.  back-end
### 2.1 prisma
    for design schema and ORM
### 2.2 SQLite
    for create local database using with prisma

# HOW TO RUN UNIT TESTS
