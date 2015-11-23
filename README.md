# Project-Torrent
##          目录

*	[快速上手](#快速上手)

## 快速上手
*	安装git
*	切换到工作空间，如E:\workspace\torrent\, 克隆项目，git clone git@github.com:yaogao000/torrent.git
*	访问百度云盘(http://pan.baidu.com/s/1mgyCKAk)，并下载VirtualBox, vagrant, torrent_base.box,到本地，安装VirtualBox, vagrant,
*	切换torrent项目下的portal\demo 目录下，调用如下命令：
	*	vagrant box add 目录\torrent_base.box
	*	vagrant up 即可启动虚拟机
	*	如果想进入虚拟机，可在当前目录下调用 vagrant ssh --- 注意， 虚拟机默认用户名和密码为vagrant,vagrant, root用户的密码也为vagrant
*	修改 src\assets\js\main.js, 将10.128.3.169换成本地ip地址

[演示](http://本地ip:4567)