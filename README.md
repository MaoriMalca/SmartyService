# SMARTI Service Challenge

## 1. Backgroung
The SMARTI system is a system for retrieving information
that receives a lot of information from different interfaces and extract entities from it.

## 2. Requirements
- Write a service with a single endpoint that receives entities from different interfaces and merges them into a single entity by priorities settings file.
- Upon startup the service should load the priorities settings from a provided input file to the services cache.

## 3. Assumptions
- The receives entities are identical.
- The receives interfaces are different.
- The interfaces need to adjust to certain format(see ./example/identicalEnities Example.json).
- The priorities settings file is a ".json.txt"
- The reading file is async due to remote data.

## 4. Installation

Clone the repository:
```
git clone https://github.com/MaoriMalca/SmartyService.git
```
Navigate to the project directory:
```
cd SmartyService
```
Install dependencies:
```
npm install
```
Configure environment:

1.  See `.env.example` file from 'example' folder.
2.  Create a new environment file by copying and pasting the example file. 
    ```
    cp .env.example .env
    ```
3.  Change the values of the file according the example file instructions.

## 5. Runnig the server:

start the sever:
```
npm start
```
If the server is running successfully, you will get the following output:

```
Server is running on port 3000
``````



