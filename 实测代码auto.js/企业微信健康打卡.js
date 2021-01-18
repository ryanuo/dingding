device.wakeUp() //唤醒屏幕
sleep(1000);
"auto";
/**
 * 同时模拟一个个手势：
 * 从(300, 1400)到(300, 400)
 * 每一个的时长都为350毫秒
 */
gestures([1200, [300, 1400], [300, 400]]);
/*var passworld = "xxxxxx"
var len = passworld.length
toast(len)
for(var i = 0; i<=len;i = i+1){
    click(passworld[i])
}*/
function main(){
    home()
    launchPackage("com.tencent.wework");//正在执行中找应用
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
    while(!input(1,"放假在家"));
    sleep(3000)
    var 提交=text("提交").findOne();
    log("提交-->"+提交);
    提交.click();
    sleep(2000);
}
main()
for(var i=0;i<=1;i++){
    var a = click("确认");
    if(a){
        toast("签到完成")
        break;       
    }else {
        back()
        back()
        main()
    }
    if(i==1){
        device.vibrate(2000);//振动两秒
        break;
    }
    toast(i)
    
}