//设定号系统闹钟，并将指令打开，用闹钟来代替唤醒屏幕，因为有时候auto.js会失效

sleep(2000)
click("关闭")//闹钟唤醒后2秒关闭
sleep(1500)//1.5秒后执行下个项目
main_1()
function main_1() {
    device.wakeUp();
    sleep(1000)
    gesture(1000, [500, 1200], [500, 100], [500, 0])
    sleep(1000)
    var unlock = "xxxxxx"//解锁密码的功能
    var secrets = unlock.length
    toast(secrets)
    for (var i = 0; i <= secrets; i = i + 1) {
        click(unlock[i]);
        log(unlock[i])//反馈数据到console控制台
        sleep(1000)
    }
}
function main(){
    home()
    launchApp("企业微信")//这里老是失效
    // app.launchPackage("com.tencent.wework");//正在执行中找应用
    back()
    back()
    while(!click("工作台"));
    sleep(500)
    while(!click("健康天天报"));
    sleep(800)
    while(!click("健康上报"));
    sleep(2000)
    click("确认")
    sleep(3000)
    while(!click("签到",2));
    sleep(300)
    while(!input(0,"36.3"));
    while(!click("正常"));
    click("无",1)
    click("无",3)
    click("无",5)
    click("无",7)
    click("无",9)
    click("为疫情防控，")
    click("上述信息是我本人填写")
    sleep(2000)
    while(!click("否"))
    sleep(3000)
    while(!input(3,"放假在家"));//填写备注信息可省略
    sleep(3000)
    var 提交=text("提交").findOne();
    log("提交-->"+提交);
    提交.click();
    sleep(2000);
}
sleep(2000)
main()
for(var i=0;i<=1;i++){
    var a = click("确认");
    a.click();
    if(a){
        toast("签到完成")
        break;       
    }else {
        back()
        back()
        main()
    }
    toast("执行的次数为"+i) 
}