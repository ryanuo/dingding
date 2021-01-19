function main_1() {
    device.wakeUp();
    sleep(1000)
    gesture(1000, [500, 1200], [500, 100], [500, 0])
    sleep(1000)
    var unlock = "3xxxxx"//解锁密码的功能
    var secrets = unlock.length
    toast(secrets)
    for (var i = 0; i <= secrets; i = i + 1) {
        click(unlock[i]);
        log(unlock[i])
        sleep(1000)
    }
}
main_1()
function tim(){
    home()
    sleep(300)
    app.launchPackage("com.alibaba.android.rimet");//正在执行中找应用
    sleep(3000)
    while(!click("程序测试"));
    sleep(2000)
    while(!click("群签到"));
    sleep(2000)
    while(!input(0,"健康"));
    sleep(1000)
    while(!input(1,"36.3"));
    sleep(2000)
    click("家庭住址")
    sleep(1000)
    click("是")
    sleep(1500)
    click("是否接触过病例")
    sleep(1000)
    click("否")
    sleep(1500)
    var qi=className("android.view.View").clickable(true).depth(9).findOne()
    qi.click();
    //click(392,1901,688,1967);//页面内签到太多，因此采用定位按钮
    sleep(1000)
}
tim()
