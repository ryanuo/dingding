## 发送形式
```
#!/bin/bash
curl 'https://oapi.dingtalk.com/robot/send?access_token=填入自己的钉钉机器人链接' \
   -H 'Content-Type: application/json' \
   -d '{
    ##这里填写下方格式
 }'
```



## 链接 link
```
    "msgtype": "link", 
    "link": {
        "text": "这个即将发布的新版本，创始人xx称它为红树林。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是红树林", 
        "title": "时代的火车向前开", 
        "picUrl": "", 
        "messageUrl": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI"
    }
```
## 文本形式
```
"msgtype": "text",
"text": {
        "content": "你好小菜鸡"
},
"at": {
"atMobiles": [
"电话号码"
],
"isAtAll": true
}
```

## markdown形式

```
     "msgtype": "markdown",
     "markdown": {
         "title":"xxx的签到机器人",
         "text": "### 签到 (xxx的签到机器人) \n> ## xxx在xx省xx市xx市签到\n> #### 签到时间：08：30 \n> #### 备注：健康 \n> #### 体温：36.2 \n> #### 家庭住址与现住址是否一样：是 \n> #### 是否接触过病例患者：否 \n> ![screenshot](https://cdn.mr90.top/demo/wxpagecover/0/%E4%B8%8B%E8%BD%BD.jpg)\n> ###### 8点半发布 [Harry](https://u.mr90.top) \n"
     },
      "at": {
          "atMobiles": [
              ""
          ],
          "isAtAll": false
      }
```


## 执行指令

```
#!/bin/bash
curl 'https://oapi.dingtalk.com/robot/send?access_token=xxx' \
   -H 'Content-Type: application/json' \
   -d '{
     "msgtype": "markdown",
     "markdown": {
         "title":"xxx的签到机器人",
         "text": "##### 签到 (xxx的签到机器人) \n #### xxx在xx省xx市xx市签到\n> ##### 签到时间：**08：30** \n> ##### 备注：**健康** \n> ##### 体温：**36.2** \n> ##### 家庭住址与现住址是否一样：**是** \n> ##### 是否接触过病例患者：**否** \n> ![screenshot](https://cdn.mr90.top/demo/wxpagecover/0/%E4%B8%8B%E8%BD%BD.jpg)\n> ###### 8点半发布 [Harry](https://u.mr90.top) \n"
     },
      "at": {
          "atMobiles": [
              ""
          ],
          "isAtAll": false
      }
 }'
```

## 执行指令

```
#!/bin/bash
curl 'https://oapi.dingtalk.com/robot/send?access_token=xxx' \
   -H 'Content-Type: application/json' \
   -d '{
     "msgtype": "markdown",
     "markdown": {
         "title":"xxx的签到机器人",
         "text": "##### 签到 (xxx的签到机器人) \n #### xxx在xx省xx市xx市签到 \n> ##### 签到时间：**19:00** \n> ##### 备注：**健康** \n> ##### 体温：**36.5** \n> ##### 家庭住址与现住址是否一样：**是** \n> ##### 是否接触过病例患者：**否** \n> ![screenshot](https://cdn.mr90.top/demo/wxpagecover/0/%E4%B8%8B%E8%BD%BD.jpg)\n> ###### 19点发布 [Harry](https://u.mr90.top) \n"
     },
      "at": {
          "atMobiles": [
              ""
          ],
          "isAtAll": true
      }
 }'
```

## 其他形式看官方文档即可

- [官方文档](https://ding-doc.dingtalk.com/doc#/serverapi3/iydd5h)