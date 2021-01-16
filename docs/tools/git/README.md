 Committer: 刘强 <lionel@liuqiangdeMacBook-Pro.local>
您的姓名和邮件地址基于登录名和主机名进行了自动设置。请检查它们正确
与否。您可以对其进行设置以免再出现本提示信息。运行如下命令在编辑器
中编辑您的配置文件：

    git config --global --edit

设置完毕后，您可以用下面的命令来修正本次提交所使用的用户身份：

    git commit --amend --reset-author


git config --global user.email “you@example.com”
git config --global user.name “Your Name”


本地新建项目推送到远端git仓库

git config --global user.name "刘强"
git config --global user.email "liuqiang@txp-life.com"

创建新版本库
git clone git@code.aliyun.com:lionel/txp-framework.git
cd txp-framework
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

已存在的文件夹或 Git 仓库
cd existing_folder
git init
git remote add origin git@code.aliyun.com:lionel/txp-framework.git
git add .
git commit
git push -u origin master


git config --local user.name "刘强"
git config --local user.email "liuqiang@txp-life.com"