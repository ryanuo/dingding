device.wakeUp() //唤醒屏幕
sleep(1000);
"auto";
/**
 * 同时模拟一个个手势：
 * 从(300, 1400)到(300, 400)
 * 每一个的时长都为350毫秒
 */
gestures([290, [300, 1400], [300, 400]]);
if (currentPackage() != "com.alibaba.android.rimet") {
    toast("即将打开钉钉！");
    //直接打开钉钉
    app.launchApp("钉钉");
    sleep(3000)
    toast("Hello，welcome to dd!!");
    setScreenMetrics(1080, 1920);//点击群内按钮
    click(186,565,400,619);//设置点击位置
    sleep(3000)//设置点击缓冲
    toast("我要点击群签到了")
    click(79,2075,181,2119);
    sleep(3000)
    toast("输入体温");
    click(39,1213,1080,1262);
      //输入体温
    sleep(3500)
    setText("36.3")//输入体温暂未优化
    sleep(3000)
    toast("选择家庭住址")
    click(39,1323,982,1372);
    sleep(1000)
    click(148,1061,932,1179);
    click(148,1061,932,1179);//选择按钮
    sleep(2000)
    toast("选择是否接触过")
    click(39,1470,982,1519);
    sleep(1000)
    click(148,1179,932,1297);//选择按钮
    click(148,1179,932,1297);
    sleep(2000)
    click(392,1901,688,1967);//点击签到按钮

    
} else {
    toast("已经在钉钉中，即将开始进行下一步操作！");
    sleep(3000)
    toast("Hello，welcome to dd!!");
    setScreenMetrics(1080, 1920);//点击群内按钮
    click(186,565,400,619);//设置点击位置
    sleep(3000)//设置点击缓冲
    toast("我要点击群签到了")
    click(79,2075,181,2119);
    sleep(3000)
    toast("输入体温");
    click(39,1213,1080,1262);
      //输入体温
    sleep(3500)
    setText("36.3")//输入体温暂未优化
    sleep(3000)
    toast("选择家庭住址")
    click(39,1323,982,1372);
    sleep(1000)
    click(148,1061,932,1179);
    click(148,1061,932,1179);//选择按钮
    sleep(2000)
    toast("选择是否接触过")
    click(39,1470,982,1519);
    sleep(1000)
    click(148,1179,932,1297);//选择按钮
    click(148,1179,932,1297);
    sleep(2000)
    click(392,1901,688,1967);//点击签到按钮
};
      







