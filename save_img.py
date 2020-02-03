from flask import Flask,request,make_response
from selenium import webdriver
from PIL import Image
from io import BytesIO
import os

app = Flask(__name__)

@app.route('/save/<title>',methods=['POST'])
def save(title):
    try:
        imgData = request.stream.read() # 存放当前返回的下载图片的内容,用于检验是否是加载中图片
        if request.args.get('k') != 'width=100': # 避免下载低分辨率图片
            if Image.open(BytesIO(imgData)).histogram() != emptyImgHis: # 不是加载中图片
                page = request.args.get('page') # 当前获取的图片所对应的页码
                if not os.path.exists('Download'+os.sep+title): # 下载目录中不存在书的title(文泉学堂中书的ID)
                    os.makedirs('Download'+os.sep+title)
                    pagesTotal[title] = int(request.args.get('ap')) # 初始化该书总页数
                    pagesLeft[title] = list(range(1,pagesTotal[title]+1)) # 初始化本书未下载的页码
                with open('Download'+os.sep+title+os.sep+page+'.png','wb') as img:
                    img.write(imgData)
                    if int(page) in pagesLeft[title]:
                        pagesLeft[title].pop(pagesLeft[title].index(int(page))) # 在本书的未下载列表中除去当先页面
                    reloadAble[title] = True # 开始写入文件即表明网页已经初始化完毕,当出现加载页面时可以刷新而不会进入刷新的循环,因为这里已经获取到图片开始写入,故直接初始化为True
                if pagesLeft[title]: # 本书还有页面未下载
                    response = make_response('window.scrollTo(document.getElementsByClassName(\'page-img-box\')[{page}].offsetLeft,document.getElementsByClassName(\'page-img-box\')[{page}].offsetTop)'.format(page=pagesLeft[title][0])) # 发送指令使网页滚动到本书的未下载中第一页的位置来引发文泉学堂阅读器获取列表第一页图片
                elif title not in titlesDone: # 本书已下载完成
                    print('-'*15+page+' Done'+'-'*15)
                    titlesDone.append(title)
                    response = make_response('alert(\'Done\')')
            elif reloadAble[title]: # 检测到加载中图片且网页已经加载完成,可以发送刷新指令
                reloadAble[title] = False
                response = make_response('setTimeout(()=>{location.reload()},10000)') # 一分钟后再执行,立即执行还是会回复加载中,没用
            else:
                response = make_response('')
        else:
            response = make_response('')
    
    except BaseException as error: # 捕获所有异常
        print('[#] Error:',end='')
        print(error)
        response = make_response('')
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

if __name__ == '__main__':
    pagesTotal = {}                                   # 记录每一本书的页数,用于检验是否下载完成
    pagesLeft = {}                                    # 记录每一本书还未下载的页数
    titlesDone = []                                   # 记录已经下载完成的书的title(就是文泉学堂中书的ID)
    emptyImgHis = Image.open('empty.png').histogram() # 加载中图片的数据,避免下载非书本内容图片
    reloadAble = {}                                   # 记录每一本书出现加载图片时是否发送刷新指令,防止一直刷新
    app.run(host='127.0.0.1')