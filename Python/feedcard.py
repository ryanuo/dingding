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
"feedCard": {
        "links": [
            {
                "title": "时代的火车向前开", 
                "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI", 
                "picURL": "https://www.dingtalk.com/"
            },
            {
                "title": "时代的火车向前开2", 
                "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI", 
                "picURL": "https://www.dingtalk.com/"
            }
        ]
    }, 
    "msgtype": "feedCard" 
    }
res = requests.post(webhook, data=json.dumps(data), headers=headers)   #发送post请求

print(res.text)