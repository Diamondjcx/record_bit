# 异步

概念：程序是顺序执行，同一时刻只会发生一件事情。如果一个函数依赖于另外一个函数的结果，只能等待那个函数结束才能继续执行

同步JavaScript：代码一行一行执行

异步JavaScript：同时做两件事情，等待的时候可以做事

异步callback：即是函数，可以作为参数传递给那些在后台执行的其它函数，当那些函数执行完成之后，就调用callbacks函数，通知工作已经完成。
    作为参数传递进去，不会立即执行，会等到合适时机进行执行。

    ```
    function loadAsset(url, type, callback) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = type;

      xhr.onload = function() {
        callback(xhr.response);
      };

      xhr.send();
    }

    function displayImage(blob) {
      let objectURL = URL.createObjectURL(blob);

      let image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
    }

    loadAsset('coffee.jpg', 'blob', displayImage);
    ```

  Promises：表示异步操作完成或者操作失败的对象，一种中间状态

    ```
    fetch('products.json').then(function(response) {
      return response.json();
    }).then(function(json) {
      products = json;
      initialize();
    }).catch(function(err) {
      console.log('Fetch problem: ' + err.message);
    });
    ```

  事件队列：像promise这样的异步队列操作被放入到事件队列中，事件队列会在主线程完成处理后运行，这样就不会阻止后面JavaScript的运行。

  promise对比callback：
    **（1）** 可以使用多个then操作将异步操作链接在一起，并将一个操作结果作为输入传递给下一个操作。
    **（2）** Promise总是严格按照它们放置在事件队列中的顺序调用。
    **（3）** 错误处理要好得多——所有的错误都由块末尾的一个.catch()块处理，而不是在“金字塔”的每一层单独处理。

  setTimeout()：指定一段时间后，执行代码
  setInterval()：以固定的时间间隔，重复运行一段代码.
  requestAnimationFrame()：setInterval()的现代版本;在浏览器下一次重新绘制显示之前执行指定的代码块，从而允许动画在适当的帧率下运行