### 这个文件夹用来放置后端定义好的 api

仅仅是对接口的简单调用，不涉及任何数据转换。也就是说，后端返回啥，每个返回就返回啥。

### 文件目录可以如下：

|- api
|--- dtos // 对应后端 dtos 文件夹
|--- |--- xxx.d.ts  
|--- |--- xxx.d.ts
|--- commands // 对应后端 commands 文件夹
|--- |--- xxx.d.ts
|--- |--- xxx.d.ts
|--- querys // 对应后端 querys 文件夹
|--- |--- xxx.d.ts
|--- |--- xxx.d.ts
|--- enums // 对应后端 enums 文件夹
|--- |--- xxx.d.ts
|--- |--- xxx.d.ts
|--- aApi.ts 对应后端 AController.java
|--- bApi.ts 对应后端 BController.java
