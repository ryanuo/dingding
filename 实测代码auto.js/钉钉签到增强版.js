device.wakeUp() //唤醒屏幕
sleep(1000);
"auto";
/**
 * 同时模拟一个个手势：
 * 从(300, 1400)到(300, 400)
 * 每一个的时长都为350毫秒
 */
gestures([290, [300, 1400], [300, 400]]);
function tim(){
    home()
    app.launchPackage("com.alibaba.android.rimet");//正在执行中找应用
    back()
    back()
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
    sleep(1500)
    click("是")
    sleep(2000)
    click("是否接触过病例")
    sleep(1500)
    click("否")
    sleep(2000)
    click(392,1901,688,1967);//页面内签到太多，因此采用定位按钮
    sleep(1000)
}
tim()