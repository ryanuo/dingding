device.wakeUp() //唤醒屏幕
sleep(1000);
"auto";
gestures([1200, [300, 1400], [300, 400]]);
function main(){
    home()
    app.launchPackage("com.tencent.wework");//正在执行中找应用
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
    sleep(3000)
    click("为疫情防控，")
    sleep(2000)
    click("上述信息是我本人填写")
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
    toast("执行的次数为"+i)
}