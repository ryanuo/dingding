import time
import hmac
import hashlib
import base64
import urllib.parse

timestamp = str(round(time.time() * 1000))
secret = 'SECa8a2f029a96554a302dedfff0abbd7eb0e114e15181717d627591dc5d225026d'
secret_enc = secret.encode('utf-8')
string_to_sign = '{}\n{}'.format(timestamp, secret)
string_to_sign_enc = string_to_sign.encode('utf-8')
hmac_code = hmac.new(secret_enc, string_to_sign_enc, digestmod=hashlib.sha256).digest()
sign = urllib.parse.quote_plus(base64.b64encode(hmac_code))
#print(timestamp)
#print(sign)

import requests,json

#导入依赖库
headers={'Content-Type': 'application/json'}   #定义数据类型
#截至到&timestamp之前
webhook = 'https://oapi.dingtalk.com/robot/send?access_token=93626b52101459cbaaee6f5ec995ecabb91b05cb93f2db3327aa4781d6d4a2c8&timestamp='+timestamp+"&sign="+sign
#定义要发送的数据
#"at": {"atMobiles": "['"+ mobile + "']"
data = {
    #定义内容
"msgtype": "markdown",
     "markdown": {
         "title":"xxx的签到机器人",
         "text": "##### 签到 (xxx的签到机器人) \n #### xxx在xx省xx市xx市签到 \n> ##### 签到时间：**19:00** \n> ##### 备注：**健康** \n> ##### 体温：**36.5** \n> ##### 家庭住址与现住址是否一样：**是** \n> ##### 是否接触过病例患者：**否** \n> ![screenshot](https://cdn.mr90.top/demo/wxpagecover/0/%E4%B8%8B%E8%BD%BD.jpg)\n> ###### 19点发布 [Harry](https://u.mr90.top) \n"
     },
      "at": {
          "atMobiles": [
              ""
          ],
          "isAtAll": True
      }   
    }
res = requests.post(webhook, data=json.dumps(data), headers=headers)   #发送post请求

print(res.text)