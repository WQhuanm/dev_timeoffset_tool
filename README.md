#### 项目功能：修改其他项目的系统时间（libfaketime）
1. 提供前端修改页面：http://localhost:52000/changetime
    - 显示目标项目当前时间
    - 修改目标项目时间
    - 还原目标项目时间

1. timeoffset项目放于/opt目录下并npm install，配置好systemd服务文件后即可启动项目
    + 测试项目运行：curl http://localhost:52000/changetime/ping

1. dev_java是用于测试的“目标项目”

#### 项目信息
1. systemd配置文件
    + 指定该项目存放于/opt目录
    + 在环境变量指定目标项目的systemd服务名称（目前是：Environment="TARGET_PROJECT=dev_java"）
    + libfaketime 的路径需要指定（这里是LD_PRELOAD=/usr/lib/x86_64-linux-gnu/faketime/libfaketimeMT.so.1）

1. 目标项目
    + 需要导入libfaketime相关的环境变量，dev_java的配置如下：
        + Environment="LD_PRELOAD=/usr/lib64/faketime/libfaketimeMT.so.1"
        + EnvironmentFile=/opt/timeoffset/config/faketime.env
