function main_1() {
    device.wakeUp();
    sleep(1000)
    gesture(1000, [500, 1200], [500, 100], [500, 0])
    sleep(1000)
    var unlock = "这里是unlock postword"//为解锁密码的功能
    var secrets = unlock.length
    toast(secrets)
    for (var i = 0; i <= secrets; i = i + 1) {
        click(unlock[i]);
        log(unlock[i])
        sleep(1000)
    }
}
main_1()